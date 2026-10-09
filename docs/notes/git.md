# Git 常用操作

这是一份示例速查笔记，整理日常版本管理中最常用的操作。

## 查看当前状态

```bash
git status
git diff
```

`status` 查看文件状态，`diff` 查看尚未暂存的具体改动。

## 创建工作分支

```bash
git switch -c notes/first-post
```

用一个简短的分支名说明本次工作的内容，方便后续回顾。

## 保存修改

```bash
git add docs/blog/posts/hello-world.md
git diff --cached
git commit -m "docs: update first post"
```

提交前检查暂存区，确保这次提交只包含相关修改。

## 查看历史

```bash
git log --oneline -10
```

清晰的提交说明可以把改动历史变成另一份有用的笔记。
