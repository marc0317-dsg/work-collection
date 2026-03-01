# 项目文件结构

```
homework-collection/
│
├── 📄 index.html                          # 应用入口 HTML
├── 📦 package.json                        # 项目配置和依赖
├── ⚙️  vite.config.ts                     # Vite 构建配置
├── ⚙️  tsconfig.json                      # TypeScript 配置
├── ⚙️  tailwind.config.js                 # Tailwind CSS 配置
├── ⚙️  postcss.config.js                  # PostCSS 配置
├── 🚫 .gitignore                          # Git 忽略文件
│
├── 📖 README.md                           # 项目说明文档
├── 📖 INSTALL.md                          # 安装和运行指南
├── 📖 PROJECT_SUMMARY.md                  # 项目完成报告
├── 📖 start.bat                           # Windows 快速启动脚本
│
├── 📁 public/                             # 静态资源目录
│   └── 🖼️  favicon.ico                    # 网站图标
│
└── 📁 src/                                # 源代码目录
    │
    ├── 📁 assets/                         # 静态资源
    │   ├── 📁 images/                     # （可选）图片资源
    │   └── 🎨 main.css                    # 样式入口（Tailwind CSS）
    │
    ├── 📁 components/                     # Vue 组件
    │   ├── 🔝 Header.vue                  # 顶部导航栏
    │   ├── 🔍 SearchBar.vue               # 搜索和筛选栏
    │   ├── 📇 HomeworkCard.vue            # 作业卡片
    │   ├── 📋 HomeworkList.vue            # 作业列表容器
    │   └── 📄 HomeworkDetail.vue          # 作业详情展示
    │
    ├── 📁 composables/                    # 组合式函数
    │   └── 🔧 useHomeworkFilter.ts        # 搜索过滤逻辑
    │
    ├── 📁 data/                           # 数据文件
    │   └── 📊 homeworkData.ts             # 作业数据
    │
    ├── 📁 interfaces/                     # TypeScript 接口
    │   └── 📐 index.ts                    # 接口定义（Homework 等）
    │
    ├── 📁 router/                         # 路由配置
    │   └── 🛣️  index.ts                    # Vue Router 配置
    │
    ├── 📁 stores/                         # 状态管理
    │   └── 💾 homeworkStore.ts            # Pinia Store
    │
    ├── 📁 views/                          # 页面视图
    │   ├── 🏠 HomeView.vue                # 首页视图
    │   └── 📖 HomeworkDetailView.vue      # 作业详情页视图
    │
    ├── 🎭 App.vue                         # 根组件
    └── 🚀 main.ts                         # 应用入口
```

## 文件说明

### 核心配置文件

| 文件 | 作用 | 重要性 |
|------|------|--------|
| `package.json` | 项目元数据和依赖管理 | ⭐⭐⭐⭐⭐ |
| `vite.config.ts` | Vite 构建工具配置 | ⭐⭐⭐⭐ |
| `tsconfig.json` | TypeScript 编译配置 | ⭐⭐⭐⭐ |
| `tailwind.config.js` | Tailwind CSS 配置 | ⭐⭐⭐ |
| `postcss.config.js` | PostCSS 预处理器配置 | ⭐⭐⭐ |

### 应用入口

| 文件 | 作用 | 重要性 |
|------|------|--------|
| `index.html` | HTML 模板 | ⭐⭐⭐⭐⭐ |
| `src/main.ts` | Vue 应用初始化 | ⭐⭐⭐⭐⭐ |
| `src/App.vue` | 根组件 | ⭐⭐⭐⭐ |

### 路由和状态

| 文件 | 作用 | 重要性 |
|------|------|--------|
| `src/router/index.ts` | 页面路由配置 | ⭐⭐⭐⭐ |
| `src/stores/homeworkStore.ts` | 作业数据状态管理 | ⭐⭐⭐⭐ |

### 业务逻辑

| 文件 | 作用 | 重要性 |
|------|------|--------|
| `src/interfaces/index.ts` | TypeScript 接口定义 | ⭐⭐⭐⭐⭐ |
| `src/data/homeworkData.ts` | 作业数据源 | ⭐⭐⭐⭐⭐ |
| `src/composables/useHomeworkFilter.ts` | 搜索筛选逻辑 | ⭐⭐⭐⭐ |

### 组件和视图

| 文件 | 作用 | 重要性 |
|------|------|--------|
| `src/components/Header.vue` | 导航栏组件 | ⭐⭐⭐⭐ |
| `src/components/SearchBar.vue` | 搜索栏组件 | ⭐⭐⭐⭐⭐ |
| `src/components/HomeworkCard.vue` | 作业卡片组件 | ⭐⭐⭐⭐⭐ |
| `src/components/HomeworkList.vue` | 作业列表组件 | ⭐⭐⭐⭐ |
| `src/components/HomeworkDetail.vue` | 详情展示组件 | ⭐⭐⭐⭐⭐ |
| `src/views/HomeView.vue` | 首页 | ⭐⭐⭐⭐ |
| `src/views/HomeworkDetailView.vue` | 详情页 | ⭐⭐⭐⭐⭐ |

### 样式

| 文件 | 作用 | 重要性 |
|------|------|--------|
| `src/assets/main.css` | 全局样式和 Tailwind 引入 | ⭐⭐⭐⭐ |

## 修改频率

### 高频修改（日常使用）
- `src/data/homeworkData.ts` - ✏️ 经常需要添加/修改作业数据
- `src/components/Header.vue` - 可能需要修改网站标题或导航

### 中频修改（定制化）
- `src/assets/main.css` - 自定义样式
- `vite.config.ts` - 构建配置调整
- `tailwind.config.js` - 主题颜色定制

### 低频修改（一般不需要改动）
- 路由配置、Store、接口定义、大部分组件

## 文件依赖关系

```
main.ts
  └── App.vue
      ├── Header.vue
      └── router
          ├── HomeView.vue
          │   ├── SearchBar.vue
          │   │   └── useHomeworkFilter.ts
          │   │       ├── homeworkData.ts
          │   │       └── interfaces/index.ts
          │   └── HomeworkList.vue
          │       └── HomeworkCard.vue
          │
          └── HomeworkDetailView.vue
              ├── homeworkStore.ts
              │   └── homeworkData.ts
              └── HomeworkDetail.vue
```

## 构建输出

运行 `npm run build` 后生成：

```
dist/
├── index.html
├── assets/
│   ├── index-xxxxx.js
│   ├── index-xxxxx.css
│   └── ...
└── ...
```

## 关键数据流

1. **作业数据流**: `homeworkData.ts` → `homeworkStore.ts` → 组件
2. **筛选数据流**: 用户输入 → `useHomeworkFilter.ts` → `filteredHomework` → `HomeworkList.vue`
3. **路由数据流**: URL 变化 → `router/index.ts` → 对应视图组件

## TypeScript 类型定义

- `Homework`: 作业数据结构
- `DifficultyLevel`: 难度枚举类型
- `FilterCriteria`: 筛选条件接口

## 技术栈文件分布

- **Vue 3**: `.vue` 文件（组件和视图）
- **TypeScript**: `.ts` 文件（逻辑和配置）
- **Tailwind CSS**: `main.css` + 内联样式类
- **Pinia**: `homeworkStore.ts`
- **Vue Router**: `router/index.ts`
