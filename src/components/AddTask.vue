<template>
    <div>

        <md-button class="md-raised" @click="addTask">Add Task</md-button>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    @Component
    export default class AddTask extends Vue {

      // TODO: Pass task data up to ProjectsView (This is a child element)
      private addTask(): void {

      }
    }
</script>

<style lang="scss" scoped>

</style>
