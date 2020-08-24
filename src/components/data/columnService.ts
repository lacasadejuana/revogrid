import {h, VNode} from '@stencil/core';

import dataStore, {updateData} from '../../store/dataSource/data.store';
import {
    CellTemplateFunc,
    ColumnDataSchemaModel,
    ColumnDataSchemaRegular, ColumnProp, DataSource, DataType, DimensionRows,
    HyperFunc,
    ReadOnlyFormat
} from '../../interfaces';

export interface ColumnServiceI {
    columns: ColumnDataSchemaRegular[];
    setCellData(r: number, c: number, val: string): void;
    cellRenderer(r: number, c: number): string|VNode;
    isReadOnly(r: number, c: number): boolean;
    getCellData(r: number, c: number): string;
}
export default class ColumnService implements ColumnServiceI {
    private source: ColumnDataSchemaRegular[] = [];
    get columns(): ColumnDataSchemaRegular[] {
        return this.source;
    }
    set columns(source: ColumnDataSchemaRegular[]) {
        this.source = source;
    }
    constructor(columns: ColumnDataSchemaRegular[], private rowType: DimensionRows) {
        this.source = columns;
    }

    isReadOnly(r: number, c: number): boolean {
        const readOnly: ReadOnlyFormat = this.columns[c]?.readonly;
        if (typeof readOnly === 'function') {
            return readOnly(r, c);
        }
        return readOnly;
    }

    cellRenderer(r: number, c: number): string|VNode {
        const tpl: CellTemplateFunc<VNode> = this.columns[c]?.cellTemplate as CellTemplateFunc<VNode>;
        if (tpl) {
            return tpl(h as unknown as HyperFunc<VNode>, this.rowDataModel(r, c));
        }
        return this.getCellData(r, c);
    }

    setCellData(r: number, c: number, val: string): void {
        const {data, model, prop} = this.rowDataModel(r, c);
        model[prop as number] = val;
        updateData({...data}, this.rowType);
    }

    getCellData(r: number, c: number): string {
        const {prop, model} = this.rowDataModel(r, c);
        return model[prop as number] || '';
    }

    rowDataModel(r: number, c: number): ColumnDataSchemaModel {
        const prop: ColumnProp|undefined = this.columns[c]?.prop;
        const data: DataSource = dataStore.get(this.rowType);
        const model: DataType = data[r] || {};
        return { prop, model, data };
    }
}

