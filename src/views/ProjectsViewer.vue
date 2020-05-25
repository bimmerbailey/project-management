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
    // TODO: Add a watcher for data from AddTask

  }

</script>

<style scoped lang="scss">

</style>
