import { defineStore } from 'pinia';
import { homeworkData } from '../data/homeworkData';
import { type Homework } from '../interfaces';

export const useHomeworkStore = defineStore('homework', {
  state: () => ({
    allHomework: homeworkData as Homework[],
    loading: false
  }),

  getters: {
    getHomeworkById: (state) => {
      return (id: string): Homework | undefined => {
        return state.allHomework.find(hw => hw.id === id);
      };
    },

    getAllHomework: (state) => {
      return state.allHomework;
    },

    getHomeworkByCourse: (state) => {
      return (course: string): Homework[] => {
        return state.allHomework.filter(hw => hw.course === course);
      };
    },

    getHomeworkByYear: (state) => {
      return (year: number): Homework[] => {
        return state.allHomework.filter(hw => hw.year === year);
      };
    }
  },

  actions: {
    async fetchHomework() {
      this.loading = true;
      try {
        // 这里可以模拟异步数据加载
        // 实际项目中可以从 API 获取数据
        await new Promise(resolve => setTimeout(resolve, 500));
      } finally {
        this.loading = false;
      }
    }
  }
});
