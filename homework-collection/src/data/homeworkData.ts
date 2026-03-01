import { Homework } from '../interfaces';

export const homeworkData: Homework[] = [
  {
    id: 'hw-001',
    title: '个人作业集web网站',
    description: '展示个人作品集',
    course: 'web开发',
    semester: '202602',
    year: 2026,
    tags: ['Vue','前端'],
    difficulty: 'beginner',
    date: '2024-05-20',
    content: `# 个人作业集web网站

## 项目概述
本项目基于Claude使用 vue 实现了一个个人作业集web网页。

## 主要功能
- 添加作品：支持插入新作品
- 查找作品：github链接展示作品详情


## 技术实现
- Vue 3 + TypeScript


## 项目链接
[查看源码](https://github.com/marc0317-dsg/work-collection/tree/master/homework-collection)`,
    githubUrl: 'https://github.com/marc0317-dsg/work-collection/tree/master/homework-collection'
  },
  {
    id: 'hw-002',
    title: 'Web前端开发实战',
    description: '使用 Vue 3 + TypeScript 构建一个响应式电商产品列表页面',
    course: 'Web前端开发',
    semester: '2024春季',
    year: 2024,
    tags: ['Vue 3', 'TypeScript', '前端', '电商'],
    difficulty: 'intermediate',
    date: '2024-04-15',
    content: `# 响应式电商产品列表

## 项目概述
使用 Vue 3 Composition API 和 TypeScript 构建的电商产品列表页面，支持搜索、筛选和排序功能。

## 核心特性
- **响应式设计**：适配桌面、平板和移动端
- **搜索功能**：实时搜索产品标题和描述
- **价格筛选**：按价格区间筛选产品
- **排序功能**：按价格、评分、销量排序

## 技术栈
- Vue 3 + Composition API
- TypeScript
- Tailwind CSS
- Vue Router

## 学习收获
- Vue 3 响应式系统深入理解
- TypeScript 类型系统实践
- 组件化开发模式
- 性能优化技巧`,
    githubUrl: 'https://github.com/example/ecommerce-vue'
  },
  {
    id: 'hw-003',
    title: '数据库原理课程设计',
    description: '设计并实现一个学生选课系统的数据库，包含完整的 ER 模型和 SQL 实现',
    course: '数据库原理',
    semester: '2024春季',
    year: 2024,
    tags: ['数据库', 'MySQL', 'ER模型', 'SQL'],
    difficulty: 'intermediate',
    date: '2024-06-10',
    content: `# 学生选课系统数据库设计

## 设计目标
设计一个完整的学生选课管理系统数据库，支持学生信息管理、课程管理、选课管理和成绩管理。

## 数据库结构
- 学生表 (students): 存储学生基本信息
- 课程表 (courses): 存储课程信息
- 教师表 (teachers): 存储教师信息
- 选课表 (enrollments): 存储学生选课记录
- 成绩表 (grades): 存储学生成绩

## 关键技术
- 使用 ER 模型进行概念设计
- 实现第三范式规范化
- 创建外键约束保证数据完整性
- 编写高效的查询语句

## 成果展示
- 完整的数据库 DDL 语句
- 30+ 个测试数据查询
- 复杂查询优化方案`,
    githubUrl: 'https://github.com/example/student-course-db'
  },
  {
    id: 'hw-004',
    title: 'Python 爬虫实战',
    description: '使用 Python 编写爬虫程序，抓取新闻网站数据并进行可视化分析',
    course: 'Python 程序设计',
    semester: '2024春季',
    year: 2024,
    tags: ['Python', '爬虫', '数据分析', '可视化'],
    difficulty: 'beginner',
    date: '2024-03-25',
    content: `# 新闻数据爬取与分析

## 项目简介
编写 Python 爬虫程序，抓取某新闻网站的头条新闻数据，并使用 matplotlib 进行可视化分析。

## 实现内容
1. 使用 requests + BeautifulSoup 抓取网页数据
2. 数据清洗和格式化处理
3. 存储到本地 JSON 文件
4. 使用 matplotlib 绘制数据可视化图表
   - 新闻数量随时间变化趋势
   - 热门关键词词云图
   - 不同类别的新闻分布

## 代码示例
\`\`\`python
import requests
from bs4 import BeautifulSoup

response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')
\`\`\`

## 收获与反思
- 网页解析技巧
- 反爬虫策略应对
- 数据可视化最佳实践`,
    githubUrl: 'https://github.com/example/news-crawler'
  },
  {
    id: 'hw-005',
    title: '操作系统课程设计 - 文件系统模拟',
    description: '使用 C++ 模拟实现一个简单的文件系统，支持文件的创建、删除、读写操作',
    course: '操作系统',
    semester: '2023秋季',
    year: 2023,
    tags: ['C++', '操作系统', '文件系统', '系统编程'],
    difficulty: 'advanced',
    date: '2023-12-15',
    content: `# 简易文件系统模拟

## 项目概述
使用 C++ 实现一个模拟的文件系统，模拟 Unix-like 系统的文件操作。

## 核心功能
- 文件创建 (create)
- 文件删除 (delete)
- 文件打开/关闭 (open/close)
- 文件读写 (read/write)
- 目录管理

## 数据结构
- 超级块 (SuperBlock): 管理文件系统元数据
- 索引节点 (INode): 存储文件属性
- 数据块 (DataBlock): 存储文件内容

## 关键技术点
- 内存管理与磁盘模拟
- 文件权限控制
- 路径解析算法
- 错误处理机制

## 项目挑战
- 数据一致性的保证
- 内存与磁盘的高效交互
- 并发访问控制`,
    githubUrl: 'https://github.com/example/simple-filesystem'
  },
  {
    id: 'hw-006',
    title: '机器学习入门项目',
    description: '使用 scikit-learn 实现手写数字识别，比较不同算法的性能',
    course: '机器学习基础',
    semester: '2023秋季',
    year: 2023,
    tags: ['Python', '机器学习', 'scikit-learn', '图像识别'],
    difficulty: 'beginner',
    date: '2023-11-05',
    content: `# 手写数字识别项目

## 项目目标
使用经典的 MNIST 数据集，实现手写数字识别，并比较不同机器学习算法的性能。

## 实现算法
1. 逻辑回归 (Logistic Regression)
2. 支持向量机 (SVM)
3. 决策树 (Decision Tree)
4. K近邻 (K-Nearest Neighbors)

## 评估指标
- 准确率 (Accuracy)
- 精确率 (Precision)
- 召回率 (Recall)
- F1 分数

## 结果分析
- SVM 表现最优，准确率达到 98%
- 逻辑回归训练速度最快
- 决策树可解释性最好

## 收获
- 机器学习工作流程
- 特征工程技巧
- 模型评估方法`,
    githubUrl: 'https://github.com/example/digit-recognizer'
  },
  {
    id: 'hw-007',
    title: '移动应用开发',
    description: '使用 Flutter 开发一个待办事项应用，支持离线数据存储和云同步',
    course: '移动应用开发',
    semester: '2024春季',
    year: 2024,
    tags: ['Flutter', 'Dart', '移动端', 'SQLite'],
    difficulty: 'intermediate',
    date: '2024-05-05',
    content: `# Flutter 待办事项应用

## 应用功能
- 添加/编辑/删除待办事项
- 分类标签管理
- 优先级设置
- 本地 SQLite 存储
- 云同步功能
- 数据备份与恢复

## 技术栈
- Flutter 3.x
- Dart 3.x
- SQLite (sqflite)
- Provider 状态管理
- Shared Preferences

## UI/UX 设计
- 简洁现代的设计风格
- 流畅的动画过渡
- 暗色模式支持
- 响应式布局

## 测试
- 单元测试覆盖率 80%+
- 集成测试主要功能
- 真机测试多款设备`,
    githubUrl: 'https://github.com/example/flutter-todo-app'
  },
  {
    id: 'hw-008',
    title: '编译原理课程设计',
    description: '实现一个简单的 Pascal 子集编译器，支持词法分析、语法分析和中间代码生成',
    course: '编译原理',
    semester: '2023秋季',
    year: 2023,
    tags: ['编译原理', 'C', '词法分析', '语法分析'],
    difficulty: 'advanced',
    date: '2023-12-20',
    content: `# Pascal 子集编译器实现

## 项目目标
实现一个支持 Pascal 子集的编译器，完成前端部分的词法分析、语法分析和中间代码生成。

## 支持特性
- 变量声明
- 基本运算表达式
- if-else 条件语句
- while 循环
- 简单的输入输出

## 实现方法
### 词法分析
- 使用 DFA 识别标识符、关键字、常量
- 生成 token 流

### 语法分析
- 使用递归下降分析法
- 构建抽象语法树 (AST)

### 中间代码生成
- 生成三地址码
- 支持符号表管理

## 代码量
- 总代码行数: 2000+ 行
- 测试用例: 50+ 个

## 学习收获
- 编译器工作原理
- 自动机理论应用
- 递归下降分析技术`,
    githubUrl: 'https://github.com/example/pascal-compiler'
  }
];
