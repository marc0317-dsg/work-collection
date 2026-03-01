<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="container mx-auto px-4 max-w-4xl">
      <div v-if="loading" class="text-center py-12">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <p class="mt-4 text-gray-600">加载中...</p>
      </div>

      <div v-else-if="error" class="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <svg class="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-red-800">{{ error }}</p>
          </div>
        </div>
      </div>

      <div v-else-if="homework">
        <HomeworkDetail :homework="homework" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useHomeworkStore } from '../stores/homeworkStore';
import HomeworkDetail from '../components/HomeworkDetail.vue';

const route = useRoute();
const homeworkStore = useHomeworkStore();
const { getHomeworkById } = storeToRefs(homeworkStore);

const loading = ref(false);
const error = ref<string | null>(null);
const homework = ref<any>(null);

const fetchHomework = async () => {
  loading.value = true;
  error.value = null;

  try {
    const id = route.params.id as string;
    const hw = getHomeworkById.value(id);

    if (hw) {
      homework.value = hw;
    } else {
      error.value = '未找到该作业';
    }
  } catch (err) {
    error.value = '加载作业失败，请稍后重试';
    console.error('Error fetching homework:', err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchHomework();
});

watch(() => route.params.id, () => {
  fetchHomework();
});
</script>
