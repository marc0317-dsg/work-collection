# 个人作业集网站

一个使用 Vue 3 + TypeScript + Tailwind CSS 构建的个人作业展示网站。

## 功能特性

- ✅ 作业列表展示
- ✅ 作业详情页面
- ✅ 实时搜索功能（标题、描述、课程、标签）
- ✅ 多维度筛选（学期、年份、难度）
- ✅ 标签过滤
- ✅ 响应式设计（支持桌面、平板、移动端）
- ✅ 美观的 UI 界面（Tailwind CSS）

## 技术栈

- **框架**: Vue 3 (Composition API)
- **语言**: TypeScript
- **构建工具**: Vite
- **路由**: Vue Router 4
- **状态管理**: Pinia
- **样式**: Tailwind CSS
- **Markdown 渲染**: marked + DOMPurify

## 项目结构

```
homework-collection/
├── src/
│   ├── assets/              # 静态资源
│   ├── components/          # Vue 组件
│   │   ├── Header.vue
│   │   ├── SearchBar.vue
│   │   ├── HomeworkCard.vue
│   │   ├── HomeworkList.vue
│   │   └── HomeworkDetail.vue
│   ├── composables/         # Vue 组合式函数
│   │   └── useHomeworkFilter.ts
│   ├── data/                # 作业数据
│   │   └── homeworkData.ts
│   ├── interfaces/          # TypeScript 接口
│   │   └── index.ts
│   ├── router/              # 路由配置
│   │   └── index.ts
│   ├── stores/              # Pinia 状态管理
│   │   └── homeworkStore.ts
│   ├── views/               # 页面视图
│   │   ├── HomeView.vue
│   │   └── HomeworkDetailView.vue
│   ├── App.vue
│   └── main.ts
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
└── postcss.config.js
```

## 快速开始

### 安装依赖

```bash
cd homework-collection
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
npm run build
```

构建输出在 `dist/` 目录。

### 预览生产版本

```bash
npm run preview
```

### 类型检查

```bash
npm run type-check
```

## 添加新作业

编辑 `src/data/homeworkData.ts` 文件，添加新的作业对象：

```typescript
{
  id: 'hw-xxx',                    // 唯一标识
  title: '作业标题',                // 作业名称
  description: '作业描述',          // 简短描述
  course: '课程名称',               // 所属课程
  semester: '2024春季',             // 学期
  year: 2024,                       // 年份
  tags: ['标签1', '标签2'],         // 标签数组
  difficulty: 'beginner',           // 难度：beginner/intermediate/advanced
  date: '2024-05-20',               // 完成日期
  content: '# Markdown 内容...',    // 详细内容（可选）
  githubUrl: 'https://github.com/...' // GitHub 链接（可选）
}
```

## 部署

构建完成后，`dist/` 目录包含所有静态文件，可以部署到：

- Netlify
- Vercel
- GitHub Pages
- 任何静态网站托管服务

### GitHub Pages 部署示例

```bash
npm run build
git add dist
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix dist origin gh-pages
```

## 项目特点

1. **易于维护**: 数据与展示分离，只需编辑 `homeworkData.ts` 即可更新内容
2. **类型安全**: 完整的 TypeScript 类型定义
3. **响应式设计**: 适配各种设备尺寸
4. **性能优化**: 使用 Vite 构建，代码分割，懒加载
5. **代码简洁**: 组合式 API + Tailwind CSS

## 截图

### 首页
- 作业列表卡片展示
- 搜索和筛选栏
- 美观的渐变色导航栏

### 详情页
- 完整的作业信息展示
- Markdown 格式内容渲染
- GitHub 链接按钮

## 许可证

MIT License
