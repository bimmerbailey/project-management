<template>
  <div id="app">
    <md-app>
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button md-dense" @click="toggleMenu" v-show="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
      </md-app-toolbar>
      <md-app-drawer :md-active.sync="menuVisible" md-persistant="mini">
        <md-button class="md-icon-button md-dense" @click="toggleMenu" v-show="menuVisible">
          <md-icon>keyboard_arrow_left</md-icon>
        </md-button>
        <md-toolbar class="md-transparent" md-elevation="0">
          Navigation
          <div class="md-toolbar-section-end">
          </div>
        </md-toolbar>
        <md-list>
          <md-list-item>
            <md-icon>home</md-icon>
            <span class="md-list-item-text"><router-link to="/">Home</router-link></span>
          </md-list-item>
          <md-list-item>
            <md-icon>add</md-icon>
            <span class="md-list-item-text"><router-link to="/addProject">Add</router-link></span>
          </md-list-item>
<!--          <md-list-item>-->
<!--            <md-icon>add</md-icon>-->
<!--            <span class="md-list-item-text"><router-link to="/viewer">Viewer</router-link></span>-->
<!--          </md-list-item>-->
        </md-list>
      </md-app-drawer>
      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>

  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  @Component({
    components: {
    },
  })
  export default class App extends Vue {

    private menuVisible: boolean = false;

    private toggleMenu(): void {
      this.menuVisible = !this.menuVisible;
    }
  }
</script>

<style lang="scss">

  .md-drawer {
    width: 25%;
    max-width: calc(50vw - 125px);
    min-height: 60vh;
  }

  .md-app {
    min-height: 100vh;
    height: 100vh;
  }
</style>

