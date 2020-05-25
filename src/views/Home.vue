<template>
    <!--TODO: Make this the page to view all deadlines-->
    <md-empty-state
            md-rounded
            md-icon="access_time"
            md-label="Recent"
            md-description="No recently accessed project data.">
    </md-empty-state>
<!--    <GanttChart></GanttChart>-->
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    // import GanttChart from '@/components/GanttChart.vue';

    @Component({
      components: {
        // GanttChart,
      }
    })
     export default class Home extends Vue {

    }

</script>

<style scoped lang="scss">

</style>
