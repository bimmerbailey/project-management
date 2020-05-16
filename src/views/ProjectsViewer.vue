<template>
    <div>
        <AddProject></AddProject>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import AddProject from "@/components/AddProject.vue";

    @Component({
        components: {
            AddProject,
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
