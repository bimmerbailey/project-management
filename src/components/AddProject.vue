<template>
    <div>
        <!-- TODO: Update input fields        -->
        <div>
<!--            <label>Select Project Start Date</label>-->
            <md-datepicker :model="selectedData" md-immediately/>
        </div>
        <md-field>
            <md-icon>note_add</md-icon>
            <label>Project Name</label>
            <md-input v-model="projectName"></md-input>
        </md-field>
        <md-field>
            <md-icon>attach_money</md-icon>
            <label>Project Amount</label>
            <md-input v-model="projectAmount"></md-input>
        </md-field>
    </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';

  @Component
  export default class AddProject extends Vue {
    @Prop({}) private selectedData!: Date;

    private projectAmount!: number;
    private projectName!: string;

    constructor() {
      super();
      this.selectedData = new Date();

      this.projectAmount = 0;
      this.projectName = '';

    }
  }
</script>

<style scoped lang="scss">

</style>
