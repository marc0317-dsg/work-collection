<template>
  <header class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg">
    <div class="container mx-auto px-4 py-5">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <div class="bg-white text-blue-600 rounded-lg p-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h1 class="text-2xl font-bold tracking-tight">
            <router-link to="/" class="hover:text-blue-200 transition-colors">
              个人作业集
            </router-link>
          </h1>
        </div>

        <nav class="hidden md:flex items-center space-x-6">
          <router-link
            to="/"
            class="font-medium hover:text-blue-200 transition-colors"
          >
            首页
          </router-link>
          <a
            href="#about"
            class="font-medium hover:text-blue-200 transition-colors"
          >
            关于
          </a>
          <a
            href="#contact"
            class="font-medium hover:text-blue-200 transition-colors"
          >
            联系
          </a>
        </nav>

        <button
          v-if="!isHomePage"
          @click="goBack"
          class="flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
          </svg>
          <span>返回</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const isHomePage = computed(() => route.path === '/');

const goBack = () => {
  router.back();
};
</script>
