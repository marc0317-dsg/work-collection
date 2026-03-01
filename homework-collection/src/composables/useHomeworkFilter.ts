import { ref, computed, type Ref } from 'vue';
import { Homework, FilterCriteria } from '../interfaces';
import { homeworkData } from '../data/homeworkData';

export function useHomeworkFilter() {
  const searchQuery = ref('');
  const selectedSemester = ref<string>('');
  const selectedYear = ref<number | null>(null);
  const selectedDifficulty: Ref<'beginner' | 'intermediate' | 'advanced' | ''> = ref('');
  const selectedTags = ref<string[]>([]);

  const filteredHomework = computed(() => {
    return homeworkData.filter((homework) => {
      // 搜索过滤：标题、描述、课程、标签
      const searchMatch = searchQuery.value.trim() === '' ||
        homework.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        homework.description.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        homework.course.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        homework.tags.some(tag => tag.toLowerCase().includes(searchQuery.value.toLowerCase()));

      // 学期过滤
      const semesterMatch = !selectedSemester.value || homework.semester === selectedSemester.value;

      // 年份过滤
      const yearMatch = !selectedYear.value || homework.year === selectedYear.value;

      // 难度过滤
      const difficultyMatch = !selectedDifficulty.value || homework.difficulty === selectedDifficulty.value;

      // 标签过滤
      const tagsMatch = selectedTags.value.length === 0 ||
        selectedTags.value.every(tag => homework.tags.includes(tag));

      return searchMatch && semesterMatch && yearMatch && difficultyMatch && tagsMatch;
    });
  });

  const uniqueSemesters = computed(() => {
    return [...new Set(homeworkData.map(hw => hw.semester))].sort();
  });

  const uniqueYears = computed(() => {
    return [...new Set(homeworkData.map(hw => hw.year))].sort((a, b) => b - a);
  });

  const uniqueDifficulties = computed(() => {
    return ['beginner', 'intermediate', 'advanced'] as const;
  });

  const allTags = computed(() => {
    const tagsSet = new Set<string>();
    homeworkData.forEach(hw => hw.tags.forEach(tag => tagsSet.add(tag)));
    return Array.from(tagsSet).sort();
  });

  const clearFilters = () => {
    searchQuery.value = '';
    selectedSemester.value = '';
    selectedYear.value = null;
    selectedDifficulty.value = '';
    selectedTags.value = [];
  };

  const toggleTag = (tag: string) => {
    if (selectedTags.value.includes(tag)) {
      selectedTags.value = selectedTags.value.filter(t => t !== tag);
    } else {
      selectedTags.value = [...selectedTags.value, tag];
    }
  };

  return {
    searchQuery,
    selectedSemester,
    selectedYear,
    selectedDifficulty,
    selectedTags,
    filteredHomework,
    uniqueSemesters,
    uniqueYears,
    uniqueDifficulties,
    allTags,
    clearFilters,
    toggleTag
  };
}
