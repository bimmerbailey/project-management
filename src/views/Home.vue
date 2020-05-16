<template>
    <!--TODO: Make this the page to view all deadlines-->
    <md-empty-state
            md-rounded
            md-icon="access_time"
            md-label="Recent"
            md-description="No recently accessed project data.">
    </md-empty-state>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component
     export default class Home extends Vue {

    }

</script>

<style scoped>

</style>
