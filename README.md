# blog of devdede

参考 CTF Wiki 阅读布局的个人博客，基于 MkDocs Material，适用于 GitHub Pages。

## 本地运行

需要 Python 3.12（或兼容版本）。

```bash
python -m venv .venv
```

Windows PowerShell：

```powershell
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python -m mkdocs serve
```

macOS / Linux：

```bash
source .venv/bin/activate
python -m pip install -r requirements.txt
python -m mkdocs serve
```

访问 http://127.0.0.1:8000/ 。构建检查：`python -m mkdocs build --strict`。

## 部署到 GitHub Pages

1. 在 GitHub 新建仓库。个人主页可用 `你的用户名.github.io`，普通项目仓库也受支持。
2. 将本目录的源码上传到仓库的 `main` 或 `master` 分支，包含 `.github/workflows/pages.yml`；不要上传 `.deps`、`.venv` 或 `site`。
3. 打开仓库 **Settings → Pages → Build and deployment → Source**，选择 **GitHub Actions**。
4. 在 **Actions** 中运行 **Deploy blog to GitHub Pages → Run workflow**，或再推送一次修改。
5. 工作流成功后，在 Pages 设置或工作流部署记录中打开站点地址。

工作流自动读取 Pages 的实际地址用于构建，兼容项目仓库子路径。没有绑定仓库前，本地配置默认使用预览地址。

## 个性化

- `mkdocs.yml`：站名、简介、配色、栏目、页脚。
- `docs/index.md`：首页及手动维护的「最近更新」。完整文章列表自动生成。
- `docs/about.md`：自我介绍与联系方式。
- `docs/stylesheets/extra.css`：字体、间距等细节。
- `docs/blog/posts/`：博客文章，自动生成分类与年份归档。
- `docs/notes/`：知识库；新增页面后在 `mkdocs.yml` 的 `nav` 中加入导航。

## 新文章模板

在 `docs/blog/posts/` 创建 `my-note.md`：

```markdown
---
date: 2026-10-09
categories:
  - 学习笔记
slug: my-note
---

# 文章标题

这里是文章摘要。

<!-- more -->

## 正文

从这里开始写。
```

日期请替换成实际发布日期。删除示例文章时，同时更新首页指向它的链接。

## 参考

- https://github.com/ctf-wiki/ctf-wiki
- https://squidfunk.github.io/mkdocs-material/
- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

仅参考界面组织方式
