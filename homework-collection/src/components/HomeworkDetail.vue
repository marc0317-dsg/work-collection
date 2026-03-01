<template>
  <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
    <!-- 顶部装饰条 -->
    <div class="h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

    <div class="p-8">
      <!-- 标题和课程信息 -->
      <div class="mb-6">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">{{ homework.title }}</h1>

        <div class="flex items-center text-lg text-blue-600 mb-2">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
          <span class="font-semibold">{{ homework.course }}</span>
        </div>

        <!-- 时间信息 -->
        <div class="flex items-center text-gray-600">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <span>{{ homework.semester }} | {{ formatDate(homework.date) }}</span>
        </div>
      </div>

      <!-- 难度和标签 -->
      <div class="mb-6 flex flex-wrap items-center gap-3">
        <div>
          <span
            class="px-4 py-2 rounded-full text-sm font-semibold"
            :class="{
              'bg-green-100 text-green-800': homework.difficulty === 'beginner',
              'bg-yellow-100 text-yellow-800': homework.difficulty === 'intermediate',
              'bg-red-100 text-red-800': homework.difficulty === 'advanced'
            }"
          >
            <span
              class="inline-block w-2 h-2 mr-2 rounded-full"
              :class="{
                'bg-green-500': homework.difficulty === 'beginner',
                'bg-yellow-500': homework.difficulty === 'intermediate',
                'bg-red-500': homework.difficulty === 'advanced'
              }"
            ></span>
            {{
              {
                beginner: '💡 入门级',
                intermediate: '🚀 进阶级',
                advanced: '🎯 专家级'
              }[homework.difficulty]
            }}
          </span>
        </div>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in homework.tags"
            :key="tag"
            class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <!-- 描述 -->
      <div class="mb-8">
        <h2 class="text-xl font-bold text-gray-900 mb-3">📝 项目描述</h2>
        <p class="text-gray-700 leading-relaxed whitespace-pre-line">{{ homework.description }}</p>
      </div>

      <!-- 内容 -->
      <div v-if="homework.content" class="prose prose-lg max-w-none">
        <div v-html="compiledContent"></div>
      </div>

      <!-- GitHub 链接 -->
      <div v-if="homework.githubUrl" class="mt-8">
        <a
          :href="homework.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          <span>View on GitHub</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { type Homework } from '../interfaces';

const props = defineProps<{
  homework: Homework;
}>();

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const compiledContent = computed(() => {
  const rawHtml = marked(props.homework.content || '');
  return DOMPurify.sanitize(rawHtml);
});
</script>

<style>
.prose {
  color: #374151;
}

.prose h1 {
  font-size: 1.875rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
  line-height: 1.25;
  color: #1f2937;
}

.prose h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  line-height: 1.25;
  color: #1f2937;
}

.prose h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-top: 1.75rem;
  margin-bottom: 0.75rem;
  line-height: 1.25;
  color: #1f2937;
}

.prose p {
  margin-top: 1rem;
  margin-bottom: 1rem;
  line-height: 1.75;
}

.prose ul,
.prose ol {
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-left: 1.625rem;
}

.prose li {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.prose a {
  color: #3b82f6;
  text-decoration: underline;
}

.prose code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.875rem;
  padding: 0.2rem 0.4rem;
  background-color: #f3f4f6;
  border-radius: 0.25rem;
}

.prose pre {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  overflow-x: auto;
  padding: 1rem;
  background-color: #f9fafb;
  border-radius: 0.5rem;
}

.prose pre code {
  display: block;
  padding: 0;
  background-color: transparent;
  border-radius: 0;
}

.prose blockquote {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  padding-left: 1.25rem;
  border-left: 3px solid #3b82f6;
  color: #4b5563;
}
</style>
