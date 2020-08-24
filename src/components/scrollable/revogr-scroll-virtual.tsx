import {Component, Element, Event, EventEmitter, h, Host, Method, Prop} from '@stencil/core';
import {DimensionType, ViewPortScrollEvent} from '../../interfaces';
import {getScrollbarWidth} from '../../utils/utils';
import LocalScrollService from '../../services/localScrollService';

@Component({
    tag: 'revogr-scroll-virtual'
})
export class RevogrScrollVirtual {
    private scrollSize: number = 0;
    private scrollService: LocalScrollService;

    @Element() element: HTMLElement;
    @Prop() dimension: DimensionType = 'row';
    @Prop() contentSize: number = 0;
    @Prop() virtualSize: number = 0;

    @Event() scrollVirtual: EventEmitter<ViewPortScrollEvent>;

    @Method()
    async setScroll(e: ViewPortScrollEvent): Promise<void> {
        if (this.dimension !== e.dimension) {
            return;
        }
        this.scrollService?.setScroll(this.element, e);
    }

    get extContentSize(): number {
        return LocalScrollService.getVirtualContentSize(this.contentSize, this.size, this.virtualSize);
    }

    set size(s: number) {
        if (this.dimension === 'row') {
            this.element.style.minWidth = `${s}px`;
            return;
        }
        this.element.style.minHeight = `${s}px`;
    }

    get size(): number {
        if (this.dimension === 'row') {
            return this.element.clientHeight;
        }
        return this.element.clientWidth;
    }

    connectedCallback(): void {
        this.scrollService = new LocalScrollService({
            scroll: e => this.scrollVirtual.emit(e)
        });
    }

    componentWillLoad(): void {
        this.scrollSize = getScrollbarWidth(document);
    }

    componentDidRender(): void {
        const type = this.dimension === 'row' ? 'scrollHeight' : 'scrollWidth';
        if (this.element[type] > this.size) {
            this.size = this.scrollSize;
        } else {
            this.size = 0;
        }
        this.scrollService.setParams({
            contentSize: this.contentSize,
            clientSize: this.size,
            virtualSize: this.virtualSize
        }, this.dimension);
    }

    render() {
        const sizeType = this.dimension === 'row' ? 'height' : 'width';
        return <Host onScroll={(e: Event) => {
                const type = this.dimension === 'row' ? 'scrollTop' : 'scrollLeft';
                const target: HTMLElement = (e.target as HTMLElement);
                this.scrollService?.scroll(target[type] || 0, this.dimension);
            }}>
            <div style={{[sizeType]: `${this.extContentSize}px`}}/>
        </Host>;
    }
}