<template>
  <div>
    <ag-grid-vue
      style="width: 500px; height: 510px"
      class="ag-theme-alpine"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :modules="modules"
      :enableRangeSelection="true"
    >
    </ag-grid-vue>
  </div>
</template>

<script>
import { AgGridVue } from "@ag-grid-community/vue";
import { LicenseManager } from "@ag-grid-enterprise/core";
import { AllModules } from "@ag-grid-enterprise/all-modules";

LicenseManager.setLicenseKey("**** SET LICENSE KEY ****");

export default {
  name: "Home",
  methods: {
    onClickHandler: function () {},
  },
  data() {
    return {
      columnDefs: null,
      rowData: null,
    };
  },
  components: {
    AgGridVue,
  },
  beforeMount() {
    this.columnDefs = [
      { headerName: "Make", field: "make" },
      { headerName: "Model", field: "model" },
      { headerName: "Price", field: "price" },
    ];

    this.rowData = [
      { make: "Toyota", model: "Celica", price: 35000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxter", price: 72000 },
    ];

    this.modules = AllModules;
  },
};
</script>

<style lang="scss">
@import "../../node_modules/@ag-grid-community/core/dist/styles/ag-grid.css";
@import "../../node_modules/@ag-grid-community/core/dist/styles/ag-theme-alpine.css";
</style>