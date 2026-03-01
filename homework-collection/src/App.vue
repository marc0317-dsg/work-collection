<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <Header />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
