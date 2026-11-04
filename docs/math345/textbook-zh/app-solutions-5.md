# C.5 第5章：应用、几何与计算题解答

!!! note "译文与来源"

    本页依据 2026 年 11 月 3 日读取的官方 v0.2 源文件制作。数学术语保留英文；原书公式、代码、例题、活动、证明与解答保留。译稿使用机器辅助翻译并进行数学与排版检查，未经原作者审定。原作者：Jacob Denson、Kaitlyn Phillipson、Sebastien Roch。除原书另有注明外，遵循 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)。 [阅读英文原文](https://math345-textbook.github.io/app-u5-applied-solutions.html)。


<a id="app-u5-applied-solutions"></a>

这些解决方案草图对应于第 5 单元末尾的附加应用和计算解释练习。


<a id="sol-u5-eigenvectors-special-directions"></a>

##  Eigenvectors 为特殊方向

**Learning outcomes**: 

我们计算

$$
A\mathbf{v}_1=
          \begin{bmatrix}
          3&1\\
          0&2
          \end{bmatrix}
          \begin{bmatrix}
          1\\
          0
          \end{bmatrix}
          =
          \begin{bmatrix}
          3\\
          0
          \end{bmatrix}
          =
          3\mathbf{v}_1.
$$

所以$\mathbf{v}_1$是 eigenvector 和 eigenvalue $3$。

接下来，

$$
A\mathbf{v}_2=
          \begin{bmatrix}
          3&1\\
          0&2
          \end{bmatrix}
          \begin{bmatrix}
          -1\\
          1
          \end{bmatrix}
          =
          \begin{bmatrix}
          -2\\
          2
          \end{bmatrix}
          =
          2
          \begin{bmatrix}
          -1\\
          1
          \end{bmatrix}
          =
          2\mathbf{v}_2.
$$

 所以$\mathbf{v}_2$ 是 eigenvector  与 eigenvalue  $2$。  matrix  地图将 $\mathbf{v}_1$ 方向拉伸 $3$ 倍，将 $\mathbf{v}_2$ 方向拉伸 $2$ 倍。


<a id="sol-u5-diagonalization-matrix-powers"></a>

##  Diagonalization  和  matrix  的幂

**Learning outcomes**: 

$P$的 columns 为

$$
\mathbf v_1=
          \begin{bmatrix}
          1\\0
          \end{bmatrix},
          \qquad
          \mathbf v_2=
          \begin{bmatrix}
          1\\1
          \end{bmatrix}.
$$

 直接计算得到

$$
A\mathbf v_1=2\mathbf v_1,\qquad A\mathbf v_2=3\mathbf v_2.
$$

 因此$P$的 columns 分别为 eigenvectors 、 eigenvalues 、$2$、$3$。

我们有 

$$
P^{-1}=
          \begin{bmatrix}
          1&-1\\
          0&1
          \end{bmatrix}.
$$

 因此 

$$
\begin{aligned}
PDP^{-1}&=
          \begin{bmatrix}1&1\\0&1\end{bmatrix}
          \begin{bmatrix}2&0\\0&3\end{bmatrix}
          \begin{bmatrix}1&-1\\0&1\end{bmatrix} \\
&=\begin{bmatrix}2&1\\0&3\end{bmatrix}=A.
\end{aligned}
$$


由于$D^k=\operatorname{diag}(2^k,3^k)$、

$$
\begin{aligned}
A^k&=PD^kP^{-1} \\
&=
          \begin{bmatrix}1&1\\0&1\end{bmatrix}
          \begin{bmatrix}2^k&0\\0&3^k\end{bmatrix}
          \begin{bmatrix}1&-1\\0&1\end{bmatrix} \\
&=
          \begin{bmatrix}
          2^k&3^k-2^k\\
          0&3^k
          \end{bmatrix}.
\end{aligned}
$$

特别是

$$
A^4=
          \begin{bmatrix}
          16&65\\
          0&81
          \end{bmatrix}.
$$

 Diagonalization ，将重复的 matrix 动作减少为获取$D$对角线项的幂，然后用$P$和$P^{-1}$更改 coordinates 。


<a id="sol-u5-quadratic-form-definiteness"></a>

##  Quadratic form  和  definiteness 

**Learning outcomes**: 

对于列出的三个 vectors 、

$$
\begin{bmatrix}
          1\\
          0
          \end{bmatrix}^T
          H
          \begin{bmatrix}
          1\\
          0
          \end{bmatrix}
          =4,
$$

、

$$
\begin{bmatrix}
          0\\
          1
          \end{bmatrix}^T
          H
          \begin{bmatrix}
          0\\
          1
          \end{bmatrix}
          =1,
$$

 和 

$$
\begin{bmatrix}
          1\\
          1
          \end{bmatrix}^T
          H
          \begin{bmatrix}
          1\\
          1
          \end{bmatrix}
          =5.
$$


对于一般的  vector  

$$
\mathbf{h}=
          \begin{bmatrix}
          h_1\\
          h_2
          \end{bmatrix},
$$

 

$$
\mathbf{h}^TH\mathbf{h}=4h_1^2+h_2^2.
$$

 对于每个非零 $\mathbf{h}$ 都是正数，因此 $H$ 是  positive definite 。如果$H$是 critical point 处的 Hessian ，则 second derivative test 给出 local minimum 。


<a id="sol-u5-hessian-eigenvalue-classification"></a>

##  Hessian   eigenvalue 分类

**Learning outcomes**: 

如果 Hessian  eigenvalues 是$3,5$，则 Hessian 是 positive definite ，所以 critical point 是 local minimum 。

如果 Hessian  eigenvalues 是$-2,-7$，则 Hessian 是 negative definite ，所以 critical point 是 local maximum 。

如果 Hessian  eigenvalues 是$4,-1$，则 Hessian 是 indefinite ，所以 critical point 是 saddle point 。

如果  Hessian   eigenvalues  为 $0,2$，则测试不确定。零  eigenvalue  意味着quadratic approximation具有平坦方向，因此仅二阶项并不能决定局部行为。


<a id="sol-u5-least-squares-from-gradients"></a>

##  Least squares  来自梯度

**Learning outcomes**: 

我们计算 

$$
A^TA=
          \begin{bmatrix}
          3&3\\
          3&5
          \end{bmatrix},
          \qquad
          A^T\mathbf{b}=
          \begin{bmatrix}
          5\\
          6
          \end{bmatrix}.
$$

  normal equations  是 

$$
A^TA\hat{\mathbf{x}}=A^T\mathbf{b},
$$

 或 

$$
\begin{bmatrix}
          3&3\\
          3&5
          \end{bmatrix}
          \hat{\mathbf{x}}
          =
          \begin{bmatrix}
          5\\
          6
          \end{bmatrix}.
$$


求解得到 

$$
\hat{\mathbf{x}}=
          \begin{bmatrix}
          7/6\\
          1/2
          \end{bmatrix}.
$$

 然后 

$$
A\hat{\mathbf{x}}=
          \begin{bmatrix}
          7/6\\
          5/3\\
          13/6
          \end{bmatrix},
$$

因此  residual  是 

$$
\mathbf{r}
          =
          \mathbf{b}-A\hat{\mathbf{x}}
          =
          \begin{bmatrix}
          -1/6\\
          1/3\\
          -1/6
          \end{bmatrix}.
$$

 最后，

$$
A^T\mathbf{r}
          =
          \begin{bmatrix}
          0\\
          0
          \end{bmatrix}.
$$

 这是单元 4 中的  residual - orthogonality  条件和单元 5 中的  gradient -0 条件。


<a id="sol-u5-residual-orthogonality-code"></a>

## 代码中的 Residual  orthogonality 

**Learning outcomes**: 

 vector  `xhat` 是 least-squares   coefficient vector 。  vector  `r` 是 residual  

$$
\mathbf{r}=\mathbf{b}-A\hat{\mathbf{x}}.
$$

 表达式`A.T @ r` 检查 residual  是否是 orthogonal  到$A$ 的 columns 。即使`r`不接近于零，它也可以接近于零。第 4 单元使用此  residual - orthogonality  条件导出  normal equations 。单元 5 通过将 $\|A\mathbf{x}-\mathbf{b}\|^2$ 的  gradient  设置为零来获得相同的方程。


<a id="sol-u5-fixed-hidden-layer-design-matrix"></a>

## 固定- feature  design matrix 

**Learning outcomes**: 

对于$t=-1,0,1$， design matrix 是

$$
A=
          \begin{bmatrix}
          1&\tanh(-1)&\tanh(-2)&\tanh(0)\\
          1&\tanh(0)&\tanh(-1)&\tanh(1)\\
          1&\tanh(1)&\tanh(0)&\tanh(2)
          \end{bmatrix}.
$$

训练好的 vector 是

$$
\mathbf{c}=
          \begin{bmatrix}
          c_0\\
          c_1\\
          c_2\\
          c_3
          \end{bmatrix}.
$$


这是一个 least-squares 问题，因为预测 vector 是$A\mathbf{c}$，并且训练选择$\mathbf{c}$，以便$A\mathbf{c}$接近$\mathbf{y}$。该模型不是  linear  作为 $t$ 的  function ，因为它包含 $\tanh(t)$、$\tanh(t-1)$ 和 $\tanh(t+1)$。  linear 相当于$\mathbf{c}$的 function ，这就是 least squares 适用的原因。

