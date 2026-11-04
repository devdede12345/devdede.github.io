# B.3 Indexing 与 slicing

!!! note "译文与来源"

    本页依据 2026 年 11 月 3 日读取的官方 v0.2 源文件制作。数学术语保留英文；原书公式、代码、例题、活动、证明与解答保留。译稿使用机器辅助翻译并进行数学与排版检查，未经原作者审定。原作者：Jacob Denson、Kaitlyn Phillipson、Sebastien Roch。除原书另有注明外，遵循 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)。 [阅读英文原文](https://math345-textbook.github.io/appcomp-indexing-slicing.html)。


<a id="appcomp-indexing-slicing"></a>

本节帮助您将Python索引和切片理解为对条目、 rows 、 columns 或 vector 或 matrix 的块的请求。


```python
x = np.array([10, 20, 30, 40])

x[0]      # first entry
x[1]      # second entry
x[-1]     # last entry
x[:2]     # first two entries
x[2:]     # entries from index 2 onward
x[::-1]   # reversed order
```


```python
A = np.array([[1, 2, 3],
              [4, 5, 6]])

A[0, 1]    # row 0, column 1
A[0, :]    # first row
A[:, 0]    # first column
A[:, 1]    # second column
A[:, :2]   # all rows, first two columns
```

第一个$k$ principal directions 使用相同的切片语言：


```python
V_k = V[:, :k]
T_k = Z @ V_k
Zhat_k = T_k @ V_k.T
```

## 第一个条目

`x[0]`

Read as. `x` 的第一个条目。

Shape/return.A scalar 。

Used for. 索引。

## 最后条目

`x[-1]`

Read as. `x` 的最后一项。

Shape/return.A scalar 。

Used for. 索引。

##  Column 提取

`A[:, 0]`

Read as. `A` 的第一个  column 。

**Shape/return**: 一维数组。

Used for. Column 提取。

## 第一个 columns 

`A[:, :k]`

Read as. 所有  rows  和第一个 `k`  columns 。

**Shape/return**: 数组块。

Used for.主方向， basis - column ，以及前导 singular - vector 块。

## 第一个 singular values 

`s[:k]`

Read as. 第一个`k` singular values 。

**Shape/return**: 一维数组。

Used for.领先 singular values 。

## 第一个 rows 

`Vt[:k, :]`

Read as. 第一个`k`  rows  和所有 columns 。

**Shape/return**: 数组块。

Used for. 右前 singular  方向存储为 rows 。

## 颠倒顺序

`[::-1]`

Read as. 颠倒顺序。

**Shape/return**: 重新排序的数组。

Used for. 排名。

布尔  mask  索引选择布尔数组为 true 的条目。在可选的  attention  笔记本中，`S_masked[mask] = -1e9` 仅更改 `mask` 为 true 的条目。


<a id="act-appcomp-slicing-check"></a>

**活动 B.3.1：检查一下自己：切片**

```python
A = np.array([[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]])
```


1. `A[:, 0]`是什么？

2. `A[:2, :]`是什么？

3. `A[:, :2]`是什么？

4. 每个结果的 shape 是多少？

