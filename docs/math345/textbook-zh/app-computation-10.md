# B.10 NumPy linear algebra 命令

!!! note "译文与来源"

    本页依据 2026 年 11 月 3 日读取的官方 v0.2 源文件制作。数学术语保留英文；原书公式、代码、例题、活动、证明与解答保留。译稿使用机器辅助翻译并进行数学与排版检查，未经原作者审定。原作者：Jacob Denson、Kaitlyn Phillipson、Sebastien Roch。除原书另有注明外，遵循 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)。 [阅读英文原文](https://math345-textbook.github.io/appcomp-numpy-linalg.html)。


<a id="appcomp-numpy-linalg"></a>

当代码调用常见 NumPy  linear  代数命令时使用此部分： rank 、 determinant 、solve、 least squares 、 eigenvalues 、QR 或  SVD 。

Basic computations. 这些命令返回常见  linear  代数任务的单个量或解。

##  Norm 

`np.linalg.norm(x)`

Read as. norm $\|x\|$。

Shape/return.A scalar 。

Used for. 长度、距离和  residuals 。

## 数字 rank 

`np.linalg.matrix_rank(A)`

Read as. $A$ 的数值 rank 。

**Shape/return**: 整数。

Used for. 独立方向。

##  Determinant 

`np.linalg.det(A)`

正方形$A$的Read as. determinant 。

Shape/return.A scalar 。

Used for.  Invertibility  检查。

##  Linear 解决

`np.linalg.solve(A, b)`

Read as. 数值求解$Ax=b$。

**Shape/return**: A  vector  或  matrix 。

Used for. 方形全 rank  系统。

##  Least-squares   coefficients 


```python
np.linalg.lstsq(A, b, rcond=None)[0]
```

Read as. least-squares  coefficient vector 。

Shape/return.A vector 。

Used for. 回归、 projection  和采样多项式近似。

Eigenvalue commands. 这些命令读取平方或 symmetric   matrices  到 eigenvalues  和 eigenvectors 。

## 一般 eigenvalues 

`np.linalg.eig(H)`

Read as.  Eigenvalues  和  eigenvectors   square matrix 。

**Shape/return**: 一对： eigenvalue 数组和 eigenvector  matrix 。

Used for. 一般 eigenvalue  计算。

**Watch for**: 对于 symmetric 实数 matrices 、`eigvalsh`或`eigh`通常更干净。

##  Symmetric   eigenvalues 

`np.linalg.eigvalsh(H)`

Read as.  Eigenvalues   symmetric matrix 。

**Shape/return**:实数 eigenvalues 的一维数组。

Used for. Hessian 分类和 symmetric  quadratic forms 。

##  Symmetric   eigenvectors 

`np.linalg.eigh(B)`

 symmetric matrix 的Read as. Eigenvalues 和 orthonormal  eigenvectors 。

**Shape/return**: 一对： eigenvalue 数组和 eigenvector  matrix 。

Used for. Symmetric  quadratic forms 、 covariance  matrices 和$A^TA$。

**Watch for**:  Eigenvalues  按升序返回。

##  Outer product 

`np.outer(g, h)`

Read as. outer product $\mathbf{g}\mathbf{h}^T$。

当`g`的长度为`m`且`h`的长度为`d`时，**Shape/return**: Shape `(m, d)`。

Used for. PCA 重建和 rank -一 matrices 。

**Watch for**: 要与 `g @ h` 区分：当两个输入都是长度相同的一维数组时，后者计算的是  dot product 。

Factorizations. 这些命令将  matrix  分割成可重复用于解释的片段或  reconstruction 。

##  QR factorization 

`np.linalg.qr(A)`

Read as.  QR factorization .

**Shape/return**:`Q`和`R`。

Used for.  Least-squares  检查。

## 紧凑型 SVD 

`np.linalg.svd(A, full_matrices=False)`

Read as. 紧凑 singular value decomposition 。

**Shape/return**:`U`、`s`和`Vt`。

Used for.  Matrix  拉伸、 PCA 、 rank  和  singular - vector  恒等式。

## 满 SVD 

`np.linalg.svd(A, full_matrices=True)`

Read as.满 singular value decomposition 。

**Shape/return**:`U`、`s`和`Vt`； `U`的 columns 和`Vt`的 rows 给出完整的 orthonormal  bases 。

Used for. four fundamental subspaces，尤其是左边的 null space 。

**Watch for**: `s` 的长度为$\min(m,n)$。


```python
result = np.linalg.lstsq(A, b, rcond=None)
xhat = result[0]
```

命令`np.linalg.lstsq`返回几条信息。  coefficient vector 是第一项，所以课本上经常写`[0]`。


```python
U, s, Vt = np.linalg.svd(Z, full_matrices=False)
V = Vt.T
T = Z @ V
covariance_eigenvalues = s**2 / len(Z)
```


- `V` 将  principal directions  存储为  columns 。

- `T` 存储主要分数，

    $$
    T=ZV=U\Sigma.
    $$

- `s**2 / len(Z)` 给出  covariance   eigenvalues 。

- `full_matrices=False` 返回紧凑数组，方便  PCA  和  reconstruction 。


<a id="appcomp-check-lstsq"></a>

**练习 B.10.1：检查一下自己： Least Squares  输出**

在使用`np.linalg.lstsq`定义`xhat`的行中，`xhat`代表什么？为什么使用`[0]`？如果  residual  是  orthogonal  到 `A` 的  columns ，什么应该接近于零？


<a id="appcomp-check-svd-slices"></a>

**练习 B.10.2：检查一下自己： PCA  和  SVD **

如果`V = Vt.T`和`T = Z @ V`，`V`的 columns 代表什么， matrix `T`存储什么？为什么 covariance  eigenvalues 等于`s**2 / len(Z)`？

