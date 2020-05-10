<template>
    <div>
        <HelloWorld>

        </HelloWorld>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'

    @Component({
        components: {
            HelloWorld,
        }
    })
    export default class ProjectsViewer extends Vue {

        constructor() {
            super();
        }


    }
</script>

<style scoped>

</style>
