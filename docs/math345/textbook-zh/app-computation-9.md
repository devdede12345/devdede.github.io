# B.9 数值检查与 roundoff

!!! note "译文与来源"

    本页依据 2026 年 11 月 3 日读取的官方 v0.2 源文件制作。数学术语保留英文；原书公式、代码、例题、活动、证明与解答保留。译稿使用机器辅助翻译并进行数学与排版检查，未经原作者审定。原作者：Jacob Denson、Kaitlyn Phillipson、Sebastien Roch。除原书另有注明外，遵循 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)。 [阅读英文原文](https://math345-textbook.github.io/appcomp-numerical-checks.html)。


<a id="appcomp-numerical-checks"></a>

本节帮助您阅读数值检查，以决定计算出的数量是否足够接近以进行解释。


```python
np.isclose(0.1 + 0.2, 0.3)
np.allclose(A @ x, b)
np.round(x, 3)
```


```python
xhat = np.linalg.lstsq(A, b, rcond=None)[0]
r = b - A @ xhat
np.allclose(A.T @ r, 0)
```

##  Scalar  亲密程度

`np.isclose(a, b)`

Read as. 近似 scalar  相等。

**Output**: 布尔值。

Used for.  Scalar  检查。

## 数组紧密度

`np.allclose(x, y)`

Read as. 近似数组相等。

**Output**: 布尔值。

Used for.  Vector  和  matrix  检查。

## 圆形显示

`np.round(x, 3)`

Read as. 圆形显示。

**Output**: 数字或数组。

Used for. 可读输出。

## 拟合值

`A @ c`

Read as. 评估采样输入处的拟合模型。

**Shape/return**: A  vector  拟合值。

Used for. 采样多项式 least-squares  拟合。

## 梯形近似

`np.trapezoid(values, grid)`

Read as. 根据采样值近似积分。

Output.A scalar 。

Used for.多项式 inner products 和 residual 大小比较。

##  Residual vector 

`y - A @ c`

Read as. 观测值或采样值减去拟合值。

**Shape/return**: A  vector   residuals 。

Used for.  Residual  检查，例如`A.T @ r`。

## 解决方案检查

`np.allclose(A @ x, b)`

Read as. 检查近似解。

**Output**: 布尔值。

Used for. 数值系统。

##  Residual   orthogonality 

`np.allclose(A.T @ r, 0)`

Read as. 检查 residual   orthogonality 。

**Output**: 布尔值。

Used for.  Least squares .


- 数值  linear  代数可能会产生微小的数字，例如 `1e-15`。

- 接近于零通常是正确的数值解释。

- `A.T @ r` 检查 residual   orthogonality ，而不检查`r` 本身是否为零。

**注意：数字检查不是符号证明**

四舍五入或`allclose`检查支持数值解释；它们不是象征性的证据。

