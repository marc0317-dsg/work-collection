<template>
  <div class="bg-gray-50 py-6 px-4">
    <div class="container mx-auto">
      <!-- 搜索框 -->
      <div class="mb-6">
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="搜索作业标题、描述、课程或标签..."
            class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>
      </div>

      <!-- 筛选条件 -->
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <!-- 学期筛选 -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">学期</label>
          <select
            v-model="selectedSemester"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          >
            <option value="">全部学期</option>
            <option
              v-for="semester in uniqueSemesters"
              :key="semester"
              :value="semester"
            >
              {{ semester }}
            </option>
          </select>
        </div>

        <!-- 年份筛选 -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">年份</label>
          <select
            v-model="selectedYear"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          >
            <option :value="null">全部年份</option>
            <option
              v-for="year in uniqueYears"
              :key="year"
              :value="year"
            >
              {{ year }}
            </option>
          </select>
        </div>

        <!-- 难度筛选 -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">难度</label>
          <select
            v-model="selectedDifficulty"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          >
            <option value="">全部难度</option>
            <option value="beginner">入门</option>
            <option value="intermediate">中等</option>
            <option value="advanced">高级</option>
          </select>
        </div>

        <!-- 标签筛选 -->
        <div class="md:col-span-2 lg:col-span-2">
          <label class="block text-sm font-medium text-gray-700 mb-2">标签</label>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="tag in allTags"
              :key="tag"
              @click="toggleTag(tag)"
              :class="[
                'px-3 py-1 rounded-full text-sm font-medium transition-colors',
                selectedTags.includes(tag)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'
              ]"
            >
              {{ tag }}
            </button>
          </div>
        </div>
      </div>

      <!-- 清除筛选按钮 -->
      <div class="mt-4 flex justify-end">
        <button
          v-if="hasActiveFilters"
          @click="clearFilters"
          class="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-800"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
          <span>清除所有筛选</span>
        </button>
      </div>

      <!-- 统计信息 -->
      <div class="mt-4 text-sm text-gray-600">
        <p>找到 <span class="font-semibold text-blue-600">{{ filteredCount }}</span> 个作业</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useHomeworkFilter } from '../composables/useHomeworkFilter';

const {
  searchQuery,
  selectedSemester,
  selectedYear,
  selectedDifficulty,
  selectedTags,
  filteredHomework,
  uniqueSemesters,
  uniqueYears,
  allTags,
  clearFilters,
  toggleTag
} = useHomeworkFilter();

const hasActiveFilters = computed(() => {
  return (
    searchQuery.value.trim() !== '' ||
    selectedSemester.value !== '' ||
    selectedYear.value !== null ||
    selectedDifficulty.value !== '' ||
    selectedTags.value.length > 0
  );
});

const filteredCount = computed(() => filteredHomework.value.length);
</script>
