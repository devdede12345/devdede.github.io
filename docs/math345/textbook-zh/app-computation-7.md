# B.7 Reductions、axes 与逐 row 计算

!!! note "译文与来源"

    本页依据 2026 年 11 月 3 日读取的官方 v0.2 源文件制作。数学术语保留英文；原书公式、代码、例题、活动、证明与解答保留。译稿使用机器辅助翻译并进行数学与排版检查，未经原作者审定。原作者：Jacob Denson、Kaitlyn Phillipson、Sebastien Roch。除原书另有注明外，遵循 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)。 [阅读英文原文](https://math345-textbook.github.io/appcomp-reductions-axes.html)。


<a id="appcomp-reductions-axes"></a>

本节帮助您阅读数组计算中的约简、轴和逐项  scalar   functions 。


```python
A = np.array([[1, 2, 3],
              [4, 5, 6]])

A.sum()
A.sum(axis=0)   # one sum per column
A.sum(axis=1)   # one sum per row
np.sum(A)
```


```python
S = np.array([[1.0, 2.0, 3.0],
              [2.0, 4.0, 1.0]])

S_shifted = S - np.max(S, axis=1, keepdims=True)
e = np.exp(S_shifted)
A = e / e.sum(axis=1, keepdims=True)
```

Axes and reductions. 这些命令会折叠所有条目，一次一个  column ，或一次一个  row 。

## 所有参赛作品

`A.sum()`

Read as. 对所有条目求和。

Shape/return.A scalar 。

Used for. 总计。

##  Column  总和

`A.sum(axis=0)`

Read as. 每 column  一笔金额。

**Shape/return**: 一维数组。

Used for. Column 摘要。

##  Row  总和

`A.sum(axis=1)`

Read as. 每 row  一笔金额。

**Shape/return**: 一维数组。

Used for. Row 摘要。

##  Row 最大

`np.max(S, axis=1, keepdims=True)`

Read as.  Row  最大值，并保留减少的  dimension 。

**Shape/return**:  column  形阵列。

Used for. 稳定的  softmax  风格代码。

##  Row  与  shape  相加

`e.sum(axis=1, keepdims=True)`

Read as. 一个  row  总和，保留减少的  dimension 。

**Shape/return**:  column  形阵列。

Used for.  Row   normalization .

保持减少的  dimension  可使结果与原始数组对齐，以进行  row × row  减法或除法。这就是  softmax  样式示例使用 `keepdims=True` 的原因。

NumPy 还将许多熟悉的  scalar   functions  逐项应用于数组。


```python
x = np.array([-1.0, 0.0, 1.0])

np.exp(x)       # entry-by-entry exponential
np.log(x + 2)   # entry-by-entry logarithm
np.sqrt(x + 1)  # entry-by-entry square root
np.tanh(x)      # entry-by-entry hyperbolic tangent
np.abs(x)       # entry-by-entry absolute value
np.sin(x)       # entry-by-entry sine
np.cos(x)       # entry-by-entry cosine
```

Entrywise functions. 这些命令将相同的  scalar   function  应用于数组的每个条目。

## 指数

`np.exp(x)`

Read as. 逐项指数。

**Shape/return**: 一个数组。

Used for.  Softmax .

## 对数

`np.log(x)`

Read as. 逐项对数。

**Shape/return**: 一个数组。

Used for. 损失和日志 probabilities 。

## 平方根

`np.sqrt(x)`

Read as. 逐项平方根。

**Shape/return**: 一个数组。

Used for.  Norms  和音阶。

## 双曲正切

`np.tanh(x)`

Read as. 逐项双曲正切。

**Shape/return**: 一个数组。

Used for. Nonlinear 隐藏层。

## 绝对值

`np.abs(x)`

Read as. 逐项绝对值。

**Shape/return**:  shape  与`x` 相同的数组。

Used for. 幅度和与符号无关的对齐检查。

## 正弦和余弦

`np.sin(x)` 和 `np.cos(x)`

Read as. 逐项正弦和余弦，输入以弧度测量。

**Shape/return**: 与 `x` 具有相同 shape  的数组。

Used for. 圆上的采样点。

## 坐标最大值

`np.maximum(z, 0)`

Read as. 将负数替换为 0。

**Shape/return**: 返回结果的  shape  与 `z` 相同。

Used for. 坐标 ReLU。

## 累计能量


```python
np.cumsum(s**2) / np.sum(s**2)
```

Read as.  singular  值能量平方的累积分数。

**Output**: 一维数组。

Used for. 选择保留多少个 SVD  项。

这些命令不执行 matrix multiplication 。他们将相同的  scalar   function  应用于数组的每个条目。

同样的想法也出现在累积 SVD 能量计算中。


<a id="appcomp-check-axis"></a>

**练习 B.7.1：检查一下自己：轴**

对于两个 row 、三个 column 数组`A`，`A.sum(axis=0)`中有多少个条目？ `A.sum(axis=1)` 有多少个？

