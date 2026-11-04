# B.14 可选：绘图

!!! note "译文与来源"

    本页依据 2026 年 11 月 3 日读取的官方 v0.2 源文件制作。数学术语保留英文；原书公式、代码、例题、活动、证明与解答保留。译稿使用机器辅助翻译并进行数学与排版检查，未经原作者审定。原作者：Jacob Denson、Kaitlyn Phillipson、Sebastien Roch。除原书另有注明外，遵循 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)。 [阅读英文原文](https://math345-textbook.github.io/appcomp-plotting.html)。


<a id="appcomp-plotting"></a>

**This optional section helps you read optional visualization code**: 它不是主要数学计算的一部分。


```python
import matplotlib.pyplot as plt

plt.figure(figsize=(5, 4))
plt.imshow(A)
plt.colorbar(label="attention weight")
plt.title("Attention weights")
plt.xlabel("Key index")
plt.ylabel("Query index")
plt.xticks(range(len(tokens)), tokens)
plt.yticks(range(len(tokens)), tokens)
plt.show()
```

一些可选的几何变换图片使用线图而不是图像图。


```python
plt.figure(figsize=(4, 4))
plt.plot(X_square[0], X_square[1], "o-", label="original")
plt.plot(Y_square[0], Y_square[1], "o-", label="transformed")
plt.axis("equal")
plt.grid(True)
plt.legend()
plt.show()
```


```python
fig, ax = plt.subplots(figsize=(5, 4))
ax.plot(xs, ys)
plt.show()
```

## 图形设置

`plt.figure(...)`

Read as. 开始绘制图形。

**Output**: 一个数字。

Used for. 绘图设置。

## 图形和轴设置

`plt.subplots(...)`

Read as. 与坐标区对象一起启动图形。

**Output**: 图形和轴对。

Used for. 可选的情节定制。

##  Matrix  图片

`plt.imshow(A)`

Read as. 将  matrix  显示为图像。

**Output**: 图像图。

Used for.  Attention  权重和  matrices 。

## 色标

`plt.colorbar(...)`

Read as. 添加比例尺。

**Output**: 颜色条。

Used for. Matrix 图像解读。

## 标签

`plt.title(...)`, `plt.xlabel(...)`, `plt.ylabel(...)`

Read as. 添加标签。

**Output**: 文本标签。

Used for. 可读的图。

## 勾选标签

`plt.xticks(...)`, `plt.yticks(...)`

Read as. 添加刻度标签。

**Output**: 轴标签。

Used for. Token 标签。

## 线图

`plt.plot(...)`

Read as. 绘制连接点或曲线。

**Output**: 线图。

Used for. 几何图片。

## 等尺度

`plt.axis("equal")`

Read as. 使用相同的比例。

**Output**: 剧情设定。

Used for. 几何精度。

## 网格

`plt.grid(True)`

Read as. 显示网格。

**Output**: 剧情设定。

Used for. 可选的几何图。

## 传奇

`plt.legend()`

Read as. 显示标签。

**Output**: 传奇。

Used for. 比较曲线。

## 显示图

`plt.show()`

Read as. 显示图形。

**Output**: 渲染图。

Used for. 笔记本。

