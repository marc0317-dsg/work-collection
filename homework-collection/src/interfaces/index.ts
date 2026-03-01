export interface Homework {
  id: string;
  title: string;
  description: string;
  course: string;
  semester: string;
  year: number;
  tags: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  date: string;
  content?: string;
  githubUrl?: string;
}

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export interface FilterCriteria {
  search?: string;
  semester?: string;
  year?: number;
  difficulty?: DifficultyLevel;
  tags?: string[];
}
