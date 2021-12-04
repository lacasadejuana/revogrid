<template>
  <div :class="containerClass">
    <component
      v-if="vGrid"
      :is="vGrid"
      class="grid-container"
      :autoSizeColumn="{
        mode: 'autoSizeOnTextOverlap'
      }"
      :source="source"
      :columns="columns"
      :columnTypes="columnTypes"
      :pinnedTopRows="pinnedTopRows"
      :pinnedBottomRows="pinnedBottomRows"
      :filter="true"
      :theme="theme"
      resize="true"
      range="true"
      rowClass="highlighted"
    />
  </div>
</template>

<script>
import { generateFakeDataDemo } from './grid/dataGenerate.js';


export default {
  name: 'demo-page',
  data() {
    return {
      vGrid: null,
      columnTypes: {},
      theme: 'compact',
      source: [],
      pinnedBottomRows: [],
      columns: [],
      pinnedTopRows: []
    };
  },
  computed: {
    containerClass() {
      return this.theme + ' tile';
    }
  },
  mounted() {
    import('./grid/peopleSample.js').then((e) => {
      const people = e.default;
      const newData = generateFakeDataDemo(people, 100);
      for (let key in newData) {
        this[key] = newData[key];
      }
    });
    import('@revolist/vue-datagrid').then((m) => {
      const types = {};
      Promise.all([
        import('@revolist/revogrid-column-select').then((p) => (types['select'] = new p.default())),
        import('@revolist/revogrid-column-date').then((p) => (types['date'] = new p.default())),
        import('@revolist/revogrid-column-numeral').then((p) => (types['number'] = new p.default('0,0'))),
      ]).then(() => {
        this.columnTypes = types;
        this.vGrid = m.VGrid;
      });
    });
  }
};
</script>
<style lang="scss" >
.theme-default-content.content__default {
  padding: 0 1em 0 1em !important;
}
.theme-container {
  &.no-sidebar {
    .page {
      padding-bottom: 0;
    }
  }
}
.default {
revo-dropdown {
        input.filter-box {
            padding-top:2px
          }
        }
        }
 .revo-dropdown-list {
    .dropdown-inner {
      min-width: 200px;
    }

    .hydrated {
      width: calc(100% - 12px);
        & ul > li {
        min-height: 1.5em;
      }
    }
    revo-list.hydrated {
      box-shadow: 3px 5px 5px 4px rgba(0, 0, 0, 0.48);
      margin-bottom: 0.5em;
       
    }
  }

.tile {
  margin-top: 0 !important;
  width: 100%;
  height: 90vh;


  
}
</style>