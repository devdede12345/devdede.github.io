# B.2 NumPy arrays、vectors、matrices 与 shapes

!!! note "译文与来源"

    本页依据 2026 年 11 月 3 日读取的官方 v0.2 源文件制作。数学术语保留英文；原书公式、代码、例题、活动、证明与解答保留。译稿使用机器辅助翻译并进行数学与排版检查，未经原作者审定。原作者：Jacob Denson、Kaitlyn Phillipson、Sebastien Roch。除原书另有注明外，遵循 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)。 [阅读英文原文](https://math345-textbook.github.io/appcomp-arrays-shapes.html)。


<a id="appcomp-arrays-shapes"></a>

本节帮助您将 NumPy 数组读取为  vectors 、 matrices  或数据表，并帮助您预测它们的  shapes 。


```python
import numpy as np

u = np.array([3.0, 4.0])
A = np.array([[1.0, 2.0],
              [3.0, 4.0]])

u.shape
A.shape
```

这里`u.shape`是`(2,)`，一个长度为2的一维数组。 shape `A.shape`是`(2, 2)`，一个有2个 rows 和2个 columns 的二维数组。


```python
A = np.array([[1, 2],
              [3, 4]], dtype=float)
```

将整数或符号数据转换为数值  linear  代数时，请使用 `dtype=float`。


```python
u = np.asarray([3, 4], dtype=float)
```

命令 `np.asarray` 将现有的类似数组的数据视为 NumPy 数组。在这些注释中，它仅用于使短助手  functions  接受列表或数组。


```python
v = np.asarray([1, 2, 3, 4], dtype=float).reshape(2, 2)
```

当条目总数匹配时，方法`.reshape(2, 2)`更改条目排列为 rows 和 columns 的方式。

## 一维数组

`np.array([3.0, 4.0])`

Read as. 类似 vector 的一维数组。

**Shape/return**:  Shape  `(2,)`.

计算中的Used for. Vectors 。

##  Matrix 数组


```python
np.array([[1.0, 2.0],
          [3.0, 4.0]])
```

Read as.A matrix 。

**Shape/return**:  Shape  `(2, 2)`.

Used for. Linear maps 和数据 matrices 。

##  Shape 元组

`A.shape`

Read as. `A` 的 dimensions 。

**Shape/return**: 一个元组。

Used for.  Shape  检查。

## 浮点条目

`dtype=float`

Read as. 将条目存储为浮点数值。

**Shape/return**: 数字条目。

Used for. 数值 linear  代数。

## 数组转换

`np.asarray(...)`

Read as. 将类似数组的输入转换为 NumPy 数组。

**Shape/return**: 一个 NumPy 数组。

Used for. 帮手 functions 。

## 重塑

`.reshape(m, n)`

Read as. 将相同的条目排列在新的 shape  中。

如果条目数匹配，则**Shape/return**: Shape `(m, n)`。

Used for. 将平面数值输出转换为  matrix   shape 。

**注意：一维数组不是  column   matrices **

数组 `np.array([3.0, 4.0])` 不是 $2\times 1$  matrix 。它是一个长度为 2 的一维数组。当  dimensions  匹配时，NumPy 仍然允许在 `A @ u` 等表达式中使用它。

