<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="filteredHomework.length === 0" class="text-center py-12">
      <div class="text-gray-400 mb-4">
        <svg class="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9.172 9.172a4 4 0 015.656 0m-7.071 7.071L2.5 2.5m7.071 7.071L16.647 2.5"></path>
        </svg>
      </div>
      <h3 class="text-lg font-medium text-gray-900 mb-2">没有找到相关作业</h3>
      <p class="text-gray-600 mb-4">请尝试调整筛选条件或搜索关键词</p>
      <button
        @click="resetFilters"
        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        重置筛选
      </button>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <HomeworkCard
        v-for="homework in filteredHomework"
        :key="homework.id"
        :homework="homework"
      />
    </div>

    <!-- 统计信息 -->
    <div v-if="filteredHomework.length > 0" class="mt-8 text-center text-gray-600">
      <p>共显示 {{ filteredHomework.length }} 个作业</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useHomeworkFilter } from '../composables/useHomeworkFilter';
import HomeworkCard from './HomeworkCard.vue';

const {
  filteredHomework,
  clearFilters
} = useHomeworkFilter();

const resetFilters = () => {
  clearFilters();
};
</script>
