# 安装和运行指南

## 环境要求

- Node.js 18+（推荐 18.x 或 20.x）
- npm 或 yarn（推荐 npm）

## 安装步骤

### 1. 进入项目目录

```bash
cd D:\Proj\claude-demo\homework-collection
```

### 2. 安装依赖

运行以下命令安装所有依赖：

```bash
npm install
```

这将安装以下主要依赖：
- vue: 3.4.x
- vue-router: 4.2.x
- pinia: 2.1.x
- tailwindcss: 3.4.x
- marked: 12.0.x
- dompurify: 3.0.x

### 3. 运行开发服务器

```bash
npm run dev
```

开发服务器将在 `http://localhost:3000` 启动，并自动在浏览器中打开。

### 4. 构建生产版本

```bash
npm run build
```

构建完成后，`dist/` 目录将包含所有可部署的静态文件。

### 5. 预览生产版本

```bash
npm run preview
```

## 常见问题

### 问题 1: 安装依赖失败

**解决方案**:
```bash
# 清除 npm 缓存
npm cache clean --force

# 删除 node_modules 和 package-lock.json
rm -rf node_modules package-lock.json

# 重新安装
npm install
```

### 问题 2: 端口 3000 已被占用

**解决方案**:
编辑 `vite.config.ts`，修改 `server.port` 为其他端口：
```typescript
server: {
  port: 3001,  // 改为其他端口号
  open: true
}
```

### 问题 3: TypeScript 类型错误

**解决方案**:
运行类型检查命令：
```bash
npm run type-check
```

根据错误信息修复代码。

## 文件修改说明

### 添加新作业

编辑 `src/data/homeworkData.ts`，在 `homeworkData` 数组中添加新的作业对象：

```typescript
{
  id: 'hw-009',                    // 唯一 ID
  title: '新作业标题',
  description: '作业简短描述',
  course: '课程名称',
  semester: '2024春季',
  year: 2024,
  tags: ['标签1', '标签2', '标签3'],
  difficulty: 'intermediate',      // beginner, intermediate, advanced
  date: '2024-06-01',
  content: '# 详细内容...\n可以使用 Markdown 格式',  // 可选
  githubUrl: 'https://github.com/yourusername/project'  // 可选
}
```

### 修改网站标题

编辑 `src/components/Header.vue`，修改 `<h1>` 中的文字。

### 修改配色方案

编辑 `src/assets/main.css` 或在 Tailwind 配置中自定义主题颜色。

## 开发工具推荐

- **VS Code** 配合以下扩展：
  - Volar (Vue 3 官方扩展)
  - Tailwind CSS IntelliSense
  - Prettier (代码格式化)
  - ESLint (代码检查)

## 浏览器支持

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 下一步

1. ✅ 运行 `npm install` 安装依赖
2. ✅ 运行 `npm run dev` 启动开发服务器
3. ✅ 访问 http://localhost:3000 预览网站
4. ✅ 编辑 `src/data/homeworkData.ts` 添加自己的作业数据
5. ✅ 运行 `npm run build` 构建生产版本
6. ✅ 部署到 GitHub Pages、Netlify 或 Vercel

## 部署到 GitHub Pages

### 方法 1: 手动部署

1. 构建项目：`npm run build`
2. 将 `dist/` 目录的内容上传到 GitHub 仓库的 `gh-pages` 分支
3. 在 GitHub 仓库设置中启用 GitHub Pages，选择 `gh-pages` 分支

### 方法 2: 使用 GitHub Actions

创建 `.github/workflows/deploy.yml` 文件：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## 部署到 Netlify/Vercel

1. 推送代码到 GitHub/GitLab/Bitbucket
2. 在 Netlify/Vercel 中导入仓库
3. 配置构建命令：`npm run build`
4. 配置输出目录：`dist`
5. 部署！

## 技术支持

如遇到问题，请检查：
- 控制台错误信息
- 网络请求状态
- 依赖版本兼容性

## 更新日志

- v1.0.0 (2024) - 初始版本
  - 实现作业列表和详情页
  - 添加搜索和筛选功能
  - 支持 Markdown 渲染
