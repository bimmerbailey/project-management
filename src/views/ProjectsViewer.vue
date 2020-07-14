<template>
    <div>
        <GanttChart></GanttChart>
<!--        <GanttSchedule></GanttSchedule>-->
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import GanttChart from '@/components/GanttChart.vue';
  // import GanttSchedule from '@/components/GanttSchedule.vue'

  @Component({
    components: {
      GanttChart,
      // GanttSchedule,
    }
  })
  export default class ProjectsViewer extends Vue {
    // TODO: Add a watcher for data from AddTask

  }

</script>

<style scoped lang="scss">

</style>
