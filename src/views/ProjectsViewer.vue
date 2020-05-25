<template>
    <div>
        <GanttChart></GanttChart>
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import GanttChart from '@/components/GanttChart.vue';

  @Component({
    components: {
      GanttChart,
    }
  })
  export default class ProjectsViewer extends Vue {

  }

</script>

<style scoped lang="scss">

</style>
