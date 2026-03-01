# 🚀 立即开始使用

## ✅ 项目已准备就绪！

所有文件已创建，依赖已安装。现在可以立即运行项目！

## 📝 三种启动方式

### 方式 1: 使用快速启动脚本（推荐）

双击运行：
```
D:\Proj\claude-demo\homework-collection\start.bat
```

### 方式 2: 命令行启动

```bash
cd D:\Proj\claude-demo\homework-collection
npm run dev
```

### 方式 3: 使用 VS Code

1. 在项目目录打开 VS Code
2. 按 `Ctrl+`` 打开终端
3. 运行 `npm run dev`

## 🌐 访问网站

启动成功后，浏览器将自动打开：
👉 **http://localhost:3000**

## 📊 可以看到什么？

### 首页（/）
- 📚 8 个示例作业卡片
- 🔍 顶部搜索框（可搜索标题、描述、课程、标签）
- 🎯 筛选栏（学期、年份、难度、标签）
- 📊 统计信息（显示找到的作业数量）

### 作业详情页（/homework/:id）
- 📝 完整的作业信息
- 🎨 美观的排版展示
- 📄 Markdown 格式的详细内容
- 🔗 GitHub 链接（如有）

## 🎮 可以做什么？

### 1. 搜索作业
- 在搜索框输入关键词
- 实时显示匹配结果
- 支持搜索：标题、描述、课程、标签

### 2. 筛选作业
- **学期筛选**：选择特定学期
- **年份筛选**：选择特定年份
- **难度筛选**：入门 / 中等 / 高级
- **标签筛选**：点击标签多选

### 3. 查看详情
- 点击任意作业卡片
- 查看完整信息和详细内容
- 点击"返回"按钮回到列表

### 4. 清除筛选
- 点击"清除所有筛选"按钮
- 重置到初始状态

## 📝 添加自己的作业

### 步骤 1: 编辑数据文件

打开 `src/data/homeworkData.ts`

### 步骤 2: 添加新作业

在 `homeworkData` 数组中添加：

```typescript
{
  id: 'hw-009',              // 唯一标识
  title: '我的新作业',
  description: '这是一个新的作业项目',
  course: '我的课程',
  semester: '2024春季',
  year: 2024,
  tags: ['标签1', '标签2'],
  difficulty: 'intermediate',
  date: '2024-01-01',
  content: `# 作业详细内容

## 项目介绍
这里是详细描述...

## 技术栈
- 技术1
- 技术2`,
  githubUrl: 'https://github.com/yourname/project'
}
```

### 步骤 3: 保存并刷新

保存文件后，开发服务器会自动热更新，刷新浏览器即可看到新作业！

## 🎨 自定义网站

### 修改网站标题

编辑 `src/components/Header.vue`，修改第 14 行的"个人作业集"。

### 修改配色方案

编辑 `src/components/Header.vue`，修改第 2 行的渐变色：
```vue
bg-gradient-to-r from-blue-600 to-indigo-700
```

### 修改端口号

编辑 `vite.config.ts`，修改 `server.port`：
```typescript
server: {
  port: 3001,  // 改为其他端口
  open: true
}
```

## 📦 构建生产版本

```bash
npm run build
```

构建完成后，`dist/` 目录包含所有静态文件。

## 🌍 部署到线上

### 部署到 GitHub Pages

1. 构建：`npm run build`
2. 上传 `dist/` 目录到 GitHub
3. 启用 GitHub Pages

### 部署到 Netlify

1. 访问 [netlify.com](https://netlify.com)
2. 拖拽 `dist` 目录到部署区域
3. 完成！

### 部署到 Vercel

1. 访问 [vercel.com](https://vercel.com)
2. 导入项目仓库
3. 构建命令：`npm run build`
4. 输出目录：`dist`

## 🔧 常用命令

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview

# 类型检查
npm run type-check

# 安装依赖（如需要）
npm install
```

## 📱 响应式支持

- ✅ 桌面端：3 列布局，宽屏显示
- ✅ 平板端：2 列布局，适配中等屏幕
- ✅ 移动端：1 列布局，触控友好

## 🎯 功能验证清单

- [ ] 访问首页，看到作业列表
- [ ] 测试搜索功能（输入关键词）
- [ ] 测试学期筛选
- [ ] 测试年份筛选
- [ ] 测试难度筛选
- [ ] 测试标签筛选
- [ ] 点击作业卡片，跳转到详情页
- [ ] 在详情页点击返回
- [ ] 测试清除筛选按钮
- [ ] 在手机浏览器查看响应式效果

## 📚 更多文档

- **README.md** - 项目完整说明
- **INSTALL.md** - 详细安装指南
- **PROJECT_SUMMARY.md** - 项目完成报告
- **FILE_STRUCTURE.md** - 文件结构详解

## 💡 使用建议

1. **先浏览示例数据** - 了解网站功能和展示效果
2. **修改为自己的数据** - 替换 `homeworkData.ts` 中的内容
3. **添加详细内容** - 为每个作业添加 `content` 字段
4. **自定义样式** - 根据喜好调整配色和布局
5. **部署上线** - 分享给他人查看

## 🆘 遇到问题？

### 问题 1: 端口被占用
**解决**: 修改 `vite.config.ts` 中的 `port` 为其他数字

### 问题 2: 依赖安装失败
**解决**:
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### 问题 3: 页面空白
**解决**:
1. 打开浏览器控制台（F12）
2. 查看错误信息
3. 检查是否遗漏文件

## 🎉 开始使用！

现在就运行 `npm run dev`，开始体验你的个人作业集网站吧！

---

**提示**: 保存这个文件，随时查阅使用方法。
