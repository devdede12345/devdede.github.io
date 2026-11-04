# B.4 逐元素运算与 linear algebra 运算

!!! note "译文与来源"

    本页依据 2026 年 11 月 3 日读取的官方 v0.2 源文件制作。数学术语保留英文；原书公式、代码、例题、活动、证明与解答保留。译稿使用机器辅助翻译并进行数学与排版检查，未经原作者审定。原作者：Jacob Denson、Kaitlyn Phillipson、Sebastien Roch。除原书另有注明外，遵循 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)。 [阅读英文原文](https://math345-textbook.github.io/appcomp-elementwise-vs-linear-algebra.html)。


<a id="appcomp-elementwise-vs-linear-algebra"></a>

本节帮助您了解逐项算术和  linear  代数运算之间的区别。


```python
u = np.array([1.0, 2.0])
v = np.array([3.0, 4.0])

u + v
2 * u
u * v      # entry-by-entry product
u**2       # entry-by-entry square
u @ v      # dot product
```


```python
A = np.array([[1.0, 2.0],
              [3.0, 4.0]])

A @ u      # matrix-vector product
A.T        # transpose
A.T @ u
```


| 代码模式 | 读作 |
|---|---|
| `u * v` | 逐项产品 |
| `u @ v` |  dot product  |
| `A @ u` |  matrix-vector product  |
| `A @ B` |  matrix product  |

##  Vector 算术

`u + v`, `2 * u`, `u**2`

Read as. Vector 总和、 scalar 倍数以及逐项平方。

**Shape/return**:  Vectors  与匹配的  shape 。

Used for.  Vector  算术和坐标运算。

##  Transpose 

`A.T`

Read as. `A` 的 transpose 。

**Shape/return**: A  matrix ，其中  rows  和  columns  交换。

Used for.  Residual  检查并 shape  更改。

##  Quadratic form 

`h @ H @ h`

Read as. scalar $\mathbf h^T H\mathbf h$。

Shape/return.A scalar 。

Used for.  Hessian   quadratic forms  以及  Taylor polynomial  的二次部分。

**Watch for**: NumPy 从左到右计算此值，但对于一维 `h`，这读作 $\mathbf h^T H\mathbf h$。

## 采样多项式  features 

`xs**2`, `xs**3`, `xx*yy`

Read as. 采样 coordinate  数组的逐项幂或乘积。

**Shape/return**: 与采样输入数组具有相同 shape  的数组。

设计 matrices 中的Used for.多项式 feature  columns 。

**注意：逐项乘法不是  matrix multiplication **

符号`*`是逐项乘法。符号`@`是 dot product 、 matrix-vector product 或 matrix - matrix product 。

单元 1 使用 `u @ v`、`K @ q`、`alpha @ V` 和 `Y = A @ X`。这些是  linear  代数运算，而不是逐项乘法。


<a id="appcomp-check-star-at"></a>

**练习 B.4.1：检查一下自己：`*` 与 `@`**

设`u = np.array([1, 2])`和`v = np.array([3, 4])`。哪个表达式计算  dot product 、`u * v` 或 `u @ v`？另一个表达式计算什么？

