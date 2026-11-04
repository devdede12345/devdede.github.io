# B.8 构造常用 arrays 与 design matrices

!!! note "译文与来源"

    本页依据 2026 年 11 月 3 日读取的官方 v0.2 源文件制作。数学术语保留英文；原书公式、代码、例题、活动、证明与解答保留。译稿使用机器辅助翻译并进行数学与排版检查，未经原作者审定。原作者：Jacob Denson、Kaitlyn Phillipson、Sebastien Roch。除原书另有注明外，遵循 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)。 [阅读英文原文](https://math345-textbook.github.io/appcomp-array-constructors.html)。


<a id="appcomp-array-constructors"></a>

本节帮助您阅读创建标准数组、标识 matrices 、示例网格和设计 matrices 的代码。


```python
np.ones(4)
np.ones_like(t)
np.full_like(t, 2.0)
np.zeros((2, 3))
np.eye(3)
```


```python
t = np.array([0.0, 1.0, 2.0])
X = np.column_stack([np.ones_like(t), t])
```


```python
s = np.array([5.0, 2.0, 1.0])
Sigma = np.diag(s)
```


```python
xs = np.linspace(-1, 1, 41)
xx, yy = np.meshgrid(xs, xs)
points = np.vstack([xx.ravel(), yy.ravel()]).T
```


```python
mask = np.triu(np.ones_like(S), k=1).astype(bool)
```

## 个 vector 

`np.ones(4)`

Read as.  vector  个。

**Shape/return**:  Shape  `(4,)`.

Used for. 简单的测试数据。

## 配套的

`np.ones_like(t)`

Read as. 与`t` 相同的 shape 。

**Shape/return**: 返回结果的  shape  与 `t` 相同。

Used for.常数 feature  column 。

## 匹配常量数组

`np.full_like(t, value)`

Read as. 使用一个值用与 `t` 相同的  shape  填充数组。

**Shape/return**: 返回结果的  shape  与 `t` 相同。

Used for. 基线数组和绘图助手。

## 零阵列

`np.zeros((m, n))`

Read as. $m\times n$ 零数组。

**Shape/return**:  Shape  `(m, n)`.

Used for. 占位符和测试数据。

##  Identity matrix 

`np.eye(n)`

Read as. identity matrix 。

**Shape/return**:  Shape  `(n, n)`.

Used for. 逆运算和  rank  检查。

##  Column 堆栈

`np.column_stack([...])`

Read as. 将多个一维数组并排放置为 columns 。

**Shape/return**: 二维数组。

Used for. 设计 matrices   least-squares  模型。

##  Affine  多项式  design matrix 


```python
A = np.column_stack([np.ones_like(xs), xs])
```

Read as. 将采样常数 feature 和采样$x$- feature 放入 columns 。

**Shape/return**: 两个- column   design matrix 。

Used for. 采样 least-squares  线拟合。

## 二次多项式  design matrix 


```python
A2 = np.column_stack([np.ones_like(xs), xs, xs**2])
```

Read as. 将采样的$1$、$x$、$x^2$  features  放入 columns 。

**Shape/return**: 一个三- column  design matrix 。

Used for. 采样 least-squares  二次拟合。

## 采样平面 design matrix 


```python
A = np.column_stack([np.ones_like(xx), xx, yy])
```

Read as. 将采样的$1$、$x$、$y$  features  放入 columns 。

**Shape/return**: 一个三- column  design matrix 。

Used for. 采样最佳拟合平面。

##  Diagonal matrix 

`np.diag(s)`

Read as. 构建一个  diagonal matrix ，对角线上的条目为 `s`。

当 `s` 是一维时，**Shape/return**: A  square matrix 。

Used for.  SVD  因子  matrices  和  PCA  分数检查。

## 样本网格

`np.linspace(a, b, N)`

Read as. 均匀分布的样本点。

**Shape/return**: 一维数组。

Used for. 绘制和采样网格。

## 二变量样本网格

`np.meshgrid(grid, grid)`

Read as. 为所有网格值对构建  coordinate  数组。

**Shape/return**: 两个数组，分别代表矩形网格上的 $x$- 和 $y$- coordinates 。

Used for. 在网格上对二变量  function  进行采样。

## 垂直堆叠

`np.vstack([a, b])`

Read as. 将数组堆叠为  rows 。

**Shape/return**: 二维数组。

Used for. 将采样的 coordinates 转为点表。

## 展平网格

`X.ravel()`

Read as. 列出一维数组中`X` 的所有条目。

**Shape/return**: 一维数组。

Used for. 将网格 coordinates 转变为样本点 columns 。

##  Attention   mask 

`np.triu(np.ones_like(S), k=1).astype(bool)`

Read as. 可选的  attention   mask  模式。

**Shape/return**: 布尔数组。

Used for. 可选 attention  代码。

 least squares 中的设计 matrices 经常使用`np.column_stack`为每个 feature 构建一个 column 。  attention - mask  模式是可选的，并在附录 [布尔掩码、复制和  Attention  助手](app-computation-13.md#appcomp-attention-helpers) 中进行了解释。

