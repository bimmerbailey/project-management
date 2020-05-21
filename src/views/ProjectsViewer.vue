<template>
    <div>
        <AddProject></AddProject>
        <GanttChart></GanttChart>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import AddProject from "@/components/AddProject.vue";
    import GanttChart from '@/components/GanttChart.vue';

    @Component({
        components: {
            AddProject,
            GanttChart,
        },
    })
    export default class ProjectsViewer extends Vue {

        constructor() {
            super();
        }

    }
</script>

<style scoped>

</style>
