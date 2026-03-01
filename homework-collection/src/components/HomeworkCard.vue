<template>
  <router-link
    :to="`/homework/${homework.id}`"
    class="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
  >
    <div class="p-6">
      <!-- 标题 -->
      <h2 class="text-xl font-bold text-gray-900 mb-2 line-clamp-1 hover:text-blue-600 transition-colors">
        {{ homework.title }}
      </h2>

      <!-- 描述 -->
      <p class="text-gray-600 text-sm mb-4 line-clamp-2">
        {{ homework.description }}
      </p>

      <!-- 课程信息 -->
      <div class="flex items-center text-sm text-blue-600 mb-3">
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
        </svg>
        <span>{{ homework.course }}</span>
      </div>

      <!-- 标签 -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="tag in homework.tags.slice(0, 3)"
          :key="tag"
          class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium"
        >
          {{ tag }}
        </span>
        <span
          v-if="homework.tags.length > 3"
          class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium"
        >
          +{{ homework.tags.length - 3 }}
        </span>
      </div>

      <!-- 底部信息 -->
      <div class="flex items-center justify-between text-xs text-gray-500">
        <div class="flex items-center space-x-4">
          <!-- 学期 -->
          <div class="flex items-center">
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>{{ homework.semester }}</span>
          </div>

          <!-- 难度 -->
          <div class="flex items-center">
            <span
              class="px-2 py-0.5 rounded-full text-xs font-semibold"
              :class="{
                'bg-green-100 text-green-800': homework.difficulty === 'beginner',
                'bg-yellow-100 text-yellow-800': homework.difficulty === 'intermediate',
                'bg-red-100 text-red-800': homework.difficulty === 'advanced'
              }"
            >
              <span
                class="inline-block w-1.5 h-1.5 mr-1 rounded-full"
                :class="{
                  'bg-green-500': homework.difficulty === 'beginner',
                  'bg-yellow-500': homework.difficulty === 'intermediate',
                  'bg-red-500': homework.difficulty === 'advanced'
                }"
              ></span>
              {{
                {
                  beginner: '入门',
                  intermediate: '中等',
                  advanced: '高级'
                }[homework.difficulty]
              }}
            </span>
          </div>
        </div>

        <div class="flex items-center">
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <span>{{ formatDate(homework.date) }}</span>
        </div>
      </div>
    </div>

    <!-- 底部装饰条 -->
    <div class="h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
  </router-link>
</template>

<script setup lang="ts">
import { type Homework } from '../interfaces';

defineProps<{
  homework: Homework;
}>();

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
};
</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
