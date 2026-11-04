# C.6 第6章：应用、几何与计算题解答

!!! note "译文与来源"

    本页依据 2026 年 11 月 3 日读取的官方 v0.2 源文件制作。数学术语保留英文；原书公式、代码、例题、活动、证明与解答保留。译稿使用机器辅助翻译并进行数学与排版检查，未经原作者审定。原作者：Jacob Denson、Kaitlyn Phillipson、Sebastien Roch。除原书另有注明外，遵循 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)。 [阅读英文原文](https://math345-textbook.github.io/app-u6-applied-solutions.html)。


<a id="app-u6-applied-solutions"></a>

这些解决方案草图对应于[练习](6-7.md#u6-exercises)末尾的附加应用和计算解释练习。


<a id="sol-u6-recap-choosing-candidates-equations"></a>

## 选择候选者和方程

[Choosing candidates and equations](6-7.md#act-u6-recap-choosing-candidates-equations)的解。

对于矩形，首先求解 

$$
\nabla f(x,y)=\mathbf{0}
$$

 以获得内部的critical point。将 $f$ 限制为四个边中的每一个，并找到这些边上的单变量critical point。包括所有端点和角点。评估每个候选者的 $f$ 并比较这些值。

利用一个等式  constraint ，将 

$$
\nabla f(\mathbf{x})
          =
          \lambda\nabla g(\mathbf{x})
$$

 与 

$$
g(\mathbf{x})=k.
$$

 一起求解。 在每个结果候选处评估 $f$，并在请求  absolute extrema  时比较这些值。

有了两个等式  constraints ，与 

$$
g_1(\mathbf{x})=k_1,
          \qquad
          g_2(\mathbf{x})=k_2.
$$

 一起求解 

$$
\nabla f(\mathbf{x})
          =
          \lambda_1\nabla g_1(\mathbf{x})
          +
          \lambda_2\nabla g_2(\mathbf{x})
$$

 再次，评估所有候选者的 $f$ 并比较这些值。

对于区域$g(\mathbf{x})\leq k$，在满足$g(\mathbf{x})<k$的可行内点处求解

$$
\nabla f(\mathbf{x})=\mathbf{0}
$$

在 boundary 上，解决

$$
\nabla f(\mathbf{x})
          =
          \lambda\nabla g(\mathbf{x}),
          \qquad
          g(\mathbf{x})=k.
$$

比较所有内部和 boundary 候选者。由于该区域是封闭且有界的，因此当 $f$ 连续于 [the extreme value theorem](6-1.md#thm-u6-extreme-value) 时， absolute extrema  存在。


<a id="sol-u6-recap-quadratic-form-three-readings"></a>

## 一次 quadratic form ，三读

[One quadratic form, three readings](6-7.md#act-u6-recap-quadratic-form-three-readings)的解。

$B$的characteristic polynomial为

$$
\det(B-\lambda I)
          =
          (5-\lambda)^2-16
          =
          (\lambda-9)(\lambda-1).
$$

因此 eigenvalues 为

$$
\lambda_1=9,
          \qquad
          \lambda_2=1.
$$

对应单位 eigenvectors 为

$$
\mathbf{v}_1
          =
          \frac1{\sqrt2}
          \begin{bmatrix}
          1\\
          1
          \end{bmatrix},
          \qquad
          \mathbf{v}_2
          =
          \frac1{\sqrt2}
          \begin{bmatrix}
          1\\
          -1
          \end{bmatrix}.
$$


由[the fact “Extrema of a symmetric quadratic form on the unit sphere”](6-3.md#fact-u6-maximum-stretch-eigenvectors)、

$$
\max_{\|\mathbf{x}\|=1}q_B(\mathbf{x})=9
$$

沿$\mathbf{v}_1$方向行驶，同时沿

$$
\min_{\|\mathbf{x}\|=1}q_B(\mathbf{x})=1
$$

沿$\mathbf{v}_2$方向行驶。

我们计算

$$
A^TA
          =
          \begin{bmatrix}
          1 & 2\\
          2 & 1
          \end{bmatrix}
          \begin{bmatrix}
          1 & 2\\
          2 & 1
          \end{bmatrix}
          =
          \begin{bmatrix}
          5 & 4\\
          4 & 5
          \end{bmatrix}
          =
          B.
$$

因此$A$的 singular values 是

$$
\sigma_1=\sqrt9=3,
          \qquad
          \sigma_2=\sqrt1=1,
$$

右 singular 方向是$\mathbf{v}_1$和$\mathbf{v}_2$。特别是

$$
\max_{\|\mathbf{x}\|=1}\|A\mathbf{x}\|=3.
$$


由于 

$$
C=\frac12B,
$$

  covariance matrix  具有相同的  eigenvectors ，以及  eigenvalues  

$$
\frac92
          \qquad\text{and}\qquad
          \frac12.
$$

因此 $\mathbf{v}_1$ 是第一个  principal direction ，$\mathbf{v}_2$ 是第二个  principal direction 。他们捕获的变体是$9/2$和$1/2$。

第一个  principal direction  捕获总中心变化的分数 

$$
\frac{9/2}{9/2+1/2}
          =
          \frac9{10}
$$


出现相同的方向是因为正在分析的三个 symmetric  matrices 是

$$
B,\qquad A^TA=B,\qquad C=\frac12B.
$$

将 matrix 乘以正 scalar 会更改其 eigenvalues ，但不会更改其 eigenvectors 。


<a id="sol-u6-checkpoint-candidate-table-rectangle"></a>

## 矩形上的候选表

 gradient 是

$$
\nabla f(x,y)=
          \begin{bmatrix}
          2x-2\\
          2y+4
          \end{bmatrix}.
$$

内部 critical point 是

$$
(1,-2),
$$

和

$$
f(1,-2)=-5.
$$


在 $x=0$、

$$
f(0,y)=y^2+4y,
$$

 上， boundary   critical point  为 $y=-2$，给出 $(0,-2)$ 和值 $-4$。

在 $x=3$、

$$
f(3,y)=y^2+4y+3,
$$

 上， boundary   critical point  为 $y=-2$，给出 $(3,-2)$ 和值 $-1$。

在 $y=-3$、

$$
f(x,-3)=x^2-2x-3,
$$

 上， boundary   critical point  为 $x=1$，给出 $(1,-3)$ 和值 $-4$。

在 $y=1$、

$$
f(x,1)=x^2-2x+5,
$$

 上， boundary   critical point  为 $x=1$，给出 $(1,1)$ 和值 $4$。

角点值为 

$$
f(0,-3)=-3,\qquad
          f(3,-3)=0,\qquad
          f(0,1)=5,\qquad
          f(3,1)=8.
$$

 因此  absolute minimum  值在 

$$
(1,-2),
$$

 处为 

$$
-5
$$

absolute maximum  值在 

$$
(3,1).
$$

 处为 

$$
8
$$


<a id="sol-u6-checkpoint-parallel-gradients-circle"></a>

## 圆上的平行渐变

使用 

$$
g(x,y)=x^2+y^2.
$$

 然后 

$$
\nabla f=
          \begin{bmatrix}
          3\\
          4
          \end{bmatrix},
          \qquad
          \nabla g=
          \begin{bmatrix}
          2x\\
          2y
          \end{bmatrix}.
$$

 Lagrange方程为 

$$
3=2\lambda x,
          \qquad
          4=2\lambda y,
          \qquad
          x^2+y^2=25.
$$


前两个方程表示 

$$
\begin{bmatrix}
          x\\
          y
          \end{bmatrix}
$$

 与 

$$
\begin{bmatrix}
          3\\
          4
          \end{bmatrix}.
$$

 平行，因为 

$$
\left\|
          \begin{bmatrix}
          3\\
          4
          \end{bmatrix}
          \right\|=5,
$$

 受约束的critical point是 

$$
(3,4)
          \quad\text{and}\quad
          (-3,-4).
$$


 function  值为 

$$
f(3,4)=25,
          \qquad
          f(-3,-4)=-25.
$$

因此  absolute maximum  在 $(3,4)$ 处为 $25$， absolute minimum  在 $(-3,-4)$ 处为 $-25$。

几何上，$\nabla f$指向$f$增长最快的方向，而$\nabla g$垂直于圆。在最大值和最小值处，这些方向是平行或反平行的。


<a id="sol-u6-checkpoint-quadratic-form-unit-circle"></a>

## 单位圆上的 Quadratic form 

对于

$$
\mathbf{x}=
          \begin{bmatrix}
          x\\
          y
          \end{bmatrix},
$$

我们有

$$
q(\mathbf{x})
          =
          \mathbf{x}^T
          \begin{bmatrix}
          5&0\\
          0&2
          \end{bmatrix}
          \mathbf{x}
          =
          5x^2+2y^2.
$$

 在单位圆上，

$$
x^2+y^2=1.
$$


最大值为 $5$，在 

$$
\mathbf{x}=
          \begin{bmatrix}
          1\\
          0
          \end{bmatrix}
          \quad\text{and}\quad
          \mathbf{x}=
          \begin{bmatrix}
          -1\\
          0
          \end{bmatrix}.
$$

 处获得 最小值为 $2$，在 

$$
\mathbf{x}=
          \begin{bmatrix}
          0\\
          1
          \end{bmatrix}
          \quad\text{and}\quad
          \mathbf{x}=
          \begin{bmatrix}
          0\\
          -1
          \end{bmatrix}.
$$

 处获得 这些是 $B$ 的  eigenvalues  和  eigenvectors ：  eigenvalues  是 $5$ 和 $2$，其中 eigenvector 方向$\mathbf{e}_1$和$\mathbf{e}_2$。


<a id="sol-u6-checkpoint-maximum-stretch-matrix"></a>

##  Maximum stretch   matrix 

由于$A$是 symmetric ，

$$
A^TA=A^2.
$$

计算

$$
A^TA
          =
          \begin{bmatrix}
          1&2\\
          2&1
          \end{bmatrix}
          \begin{bmatrix}
          1&2\\
          2&1
          \end{bmatrix}
          =
          \begin{bmatrix}
          5&4\\
          4&5
          \end{bmatrix}.
$$


 eigenvectors  

$$
\frac{1}{\sqrt2}
          \begin{bmatrix}
          1\\
          1
          \end{bmatrix}
          \quad\text{and}\quad
          \frac{1}{\sqrt2}
          \begin{bmatrix}
          1\\
          -1
          \end{bmatrix}
$$

 分别有  eigenvalues  $9$ 和 $1$。因此 singular values 是

$$
3
          \quad\text{and}\quad
          1.
$$

最大的 singular value 是$3$，所以

$$
\max_{\|\mathbf{x}\|=1}\|A\mathbf{x}\|=3.
$$

拉伸最大的输入方向是

$$
\frac{1}{\sqrt2}
          \begin{bmatrix}
          1\\
          1
          \end{bmatrix}.
$$


<a id="sol-u6-checkpoint-reading-svd"></a>

## 读 SVD 

非零  singular values  为 

$$
5
          \quad\text{and}\quad
          2.
$$

  matrix  有  rank  

$$
2.
$$

 使用 

$$
A\mathbf{v}_i=\sigma_i\mathbf{u}_i
$$

 表示正  singular values ，使用 $A\mathbf{v}_i=\mathbf{0}$ 表示零方向，

$$
A\mathbf{v}_1=
          5
          \begin{bmatrix}
          1\\
          0
          \end{bmatrix}
          =
          \begin{bmatrix}
          5\\
          0
          \end{bmatrix},
$$

 

$$
A\mathbf{v}_2=
          2
          \begin{bmatrix}
          0\\
          1
          \end{bmatrix}
          =
          \begin{bmatrix}
          0\\
          2
          \end{bmatrix},
$$

 和 

$$
A\mathbf{v}_3=\mathbf{0}.
$$


忘记的输入方向是

$$
\mathbf{v}_3=
          \frac{1}{\sqrt2}
          \begin{bmatrix}
          1\\
          -1\\
          0
          \end{bmatrix}.
$$

传输的输入方向是

$$
\mathbf{v}_1=
          \frac{1}{\sqrt2}
          \begin{bmatrix}
          1\\
          1\\
          0
          \end{bmatrix}
$$

和

$$
\mathbf{v}_2=
          \begin{bmatrix}
          0\\
          0\\
          1
          \end{bmatrix}.
$$


<a id="sol-u6-checkpoint-fundamental-subspaces-svd"></a>

##  SVD  的基本子空间

由于 rank 是$2$，前两个右 singular vectors 为 row space 形成 orthonormal basis ：

$$
\operatorname{row}(A)
          =
          \operatorname{span}
          \left\{
          \frac{1}{\sqrt2}
          \begin{bmatrix}
          1\\
          1\\
          0
          \end{bmatrix},
          \begin{bmatrix}
          0\\
          0\\
          1
          \end{bmatrix}
          \right\}.
$$

 剩下的 right singular vector 给出 null space ：

$$
\operatorname{null}(A)
          =
          \operatorname{span}
          \left\{
          \frac{1}{\sqrt2}
          \begin{bmatrix}
          1\\
          -1\\
          0
          \end{bmatrix}
          \right\}.
$$


剩下的前两个 singular vectors 形成 column space 的 orthonormal basis ：

$$
\operatorname{col}(A)
          =
          \operatorname{span}
          \left\{
          \begin{bmatrix}
          1\\
          0
          \end{bmatrix},
          \begin{bmatrix}
          0\\
          1
          \end{bmatrix}
          \right\}
          =
          \mathbb R^2.
$$

因为$A$有两个 rows 和 rank $2$、

$$
\operatorname{null}(A^T)=\{\mathbf{0}\},
$$

其中 basis 是空集。

 dimensions  是 

$$
\dim(\operatorname{row}(A))=2,
          \qquad
          \dim(\operatorname{null}(A))=1,
$$

 和 

$$
2+1=3,
$$

与  rank - nullity  一致，$2\times 3$  matrix 。另外，

$$
\dim(\operatorname{col}(A))=2,
          \qquad
          \dim(\operatorname{null}(A^T))=0,
$$

和

$$
2+0=2.
$$


<a id="sol-u6-checkpoint-two-constraints-sphere"></a>

## 球体上的两个  constraints 

 feasible set 是unit sphere与平面

$$
x+y+z=0.
$$

的交线，它是一个圆，所以它是闭有界的。由于$f$是连续的，因此 absolute extrema 存在于[the extreme value theorem](6-1.md#thm-u6-extreme-value)。

让

$$
g_1(x,y,z)=x^2+y^2+z^2,
          \qquad
          g_2(x,y,z)=x+y+z.
$$

然后

$$
\nabla g_1
          =
          2
          \begin{bmatrix}
            x\\
            y\\
            z
          \end{bmatrix},
          \qquad
          \nabla g_2
          =
          \begin{bmatrix}
            1\\
            1\\
            1
          \end{bmatrix}.
$$

在可行点，

$$
\nabla g_1\cdot\nabla g_2
          =
          2(x+y+z)
          =
          0.
$$

两个梯度都非零。因此它们是 linearly independent 。

定义

$$
L(x,y,z,\lambda,\mu)
          =
          x-y
          -
          \lambda(x^2+y^2+z^2-1)
          -
          \mu(x+y+z).
$$

 方程为

$$
1=2\lambda x+\mu,
$$

 

$$
-1=2\lambda y+\mu,
$$

 

$$
0=2\lambda z+\mu,
$$

 以及两个 constraints 。

将前三个方程相加并使用 $x+y+z=0$ 得到 

$$
\mu=0.
$$

 另外，$\lambda\ne0$，因为否则第一个方程是不可能的。因此 

$$
x=\frac1{2\lambda},
          \qquad
          y=-\frac1{2\lambda},
          \qquad
          z=0.
$$

 球体  constraint  给出 

$$
\frac1{2\lambda^2}=1,
$$

 所以 

$$
\lambda=\pm\frac1{\sqrt2}.
$$


候选者是

$$
\frac1{\sqrt2}
          \begin{bmatrix}
            1\\
            -1\\
            0
          \end{bmatrix}
          \qquad\text{and}\qquad
          \frac1{\sqrt2}
          \begin{bmatrix}
            -1\\
            1\\
            0
          \end{bmatrix}.
$$

他们的$f$值是

$$
\sqrt2\qquad\text{and}\qquad-\sqrt2.
$$

因此 absolute maximum 是$\sqrt2$， absolute minimum 是$-\sqrt2$。


<a id="sol-u6-checkpoint-principal-directions-centered-data"></a>

##  centered data  组中的  Principal directions 

平均值为 

$$
\bar{\mathbf{x}}
          =
          \begin{bmatrix}
            1\\
            1
          \end{bmatrix}.
$$

 因此 

$$
Z=
          \begin{bmatrix}
            3&1\\
            1&3\\
            -3&-1\\
            -1&-3
          \end{bmatrix}.
$$


 covariance matrix 为

$$
C
          =
          \frac14Z^TZ
          =
          \begin{bmatrix}
            5&3\\
            3&5
          \end{bmatrix}.
$$

  eigenvalues 为

$$
\lambda_1=8,
          \qquad
          \lambda_2=2.
$$

 对应单位 eigenvectors 为

$$
\mathbf{v}_1
          =
          \frac1{\sqrt2}
          \begin{bmatrix}
            1\\
            1
          \end{bmatrix},
          \qquad
          \mathbf{v}_2
          =
          \frac1{\sqrt2}
          \begin{bmatrix}
            1\\
            -1
          \end{bmatrix}.
$$


因此

$$
V=
          \frac1{\sqrt2}
          \begin{bmatrix}
            1&1\\
            1&-1
          \end{bmatrix}.
$$

principal- coordinate  matrix 是

$$
T=ZV
          =
          \begin{bmatrix}
            2\sqrt2&\sqrt2\\
            2\sqrt2&-\sqrt2\\
            -2\sqrt2&-\sqrt2\\
            -2\sqrt2&\sqrt2
          \end{bmatrix}.
$$

另外，

$$
V^TCV
          =
          \begin{bmatrix}
            8&0\\
            0&2
          \end{bmatrix}.
$$


第一个  principal direction  捕获总中心变化的 

$$
\frac{\lambda_1}{\lambda_1+\lambda_2}
          =
          \frac8{8+2}
          =
          \frac45
$$


<a id="sol-u6-checkpoint-pca-reconstruction-regression"></a>

##  PCA   reconstruction  和回归

分数为 

$$
t_1
          =
          \mathbf{v}_1^T\mathbf{z}_1
          =
          \frac4{\sqrt2}
          =
          2\sqrt2.
$$

 因此 

$$
\widehat{\mathbf{z}}_1
          =
          t_1\mathbf{v}_1
          =
          \begin{bmatrix}
            2\\
            2
          \end{bmatrix},
$$

 和 

$$
\mathbf{r}_1
          =
          \begin{bmatrix}
            3\\
            1
          \end{bmatrix}
          -
          \begin{bmatrix}
            2\\
            2
          \end{bmatrix}
          =
          \begin{bmatrix}
            1\\
            -1
          \end{bmatrix}.
$$


我们检查

$$
\mathbf{r}_1\cdot\mathbf{v}_1
          =
          \frac1{\sqrt2}(1-1)
          =
          0.
$$

自从

$$
\bar{\mathbf{x}}
          =
          \begin{bmatrix}
            1\\
            1
          \end{bmatrix},
$$

重建的原始数据点是

$$
\widehat{\mathbf{x}}_1
          =
          \begin{bmatrix}
            3\\
            3
          \end{bmatrix}.
$$


 PCA  线沿$(1,1)$ 方向穿过$(1,1)$，因此其方程为 

$$
y=x.
$$

 对于回归，

$$
m=\frac35,
          \qquad
          b=1-\frac35=\frac25.
$$

 因此回归线为 

$$
\widehat y
          =
          \frac25+\frac35x.
$$


 PCA  对称对待两个  feature   coordinates  并最小化垂直 reconstruction   residuals 。回归将$x$视为预测变量，将$y$视为响应，并最小化垂直预测 residuals 。两个目标不必产生相同的线。


<a id="sol-u6-checkpoint-redundant-features-singular-values"></a>

##  singular values  重新审视冗余  features 

计算 

$$
X
          \begin{bmatrix}
          1\\
          1\\
          -1
          \end{bmatrix}
          =
          \begin{bmatrix}
          1+2-3\\
          2+4-6\\
          0+1-1\\
          1-1-0
          \end{bmatrix}
          =
          \begin{bmatrix}
          0\\
          0\\
          0\\
          0
          \end{bmatrix}.
$$

 因此 

$$
\begin{bmatrix}
          1\\
          1\\
          -1
          \end{bmatrix}
          \in \operatorname{null}(X).
$$


第三个 column 是前两个 columns 之和，因此 columns 是相关的。前两个  columns  不是彼此的倍数，因此 

$$
\operatorname{rank}(X)=2.
$$

 因为 $X$ 有 3 个  columns  但  rank  $2$，所以 1 个  singular value  为零。

如果$X\mathbf{c}=\mathbf{y}$，则

$$
X\left(\mathbf{c}+t
          \begin{bmatrix}
          1\\
          1\\
          -1
          \end{bmatrix}\right)
          =
          X\mathbf{c}
          +
          tX
          \begin{bmatrix}
          1\\
          1\\
          -1
          \end{bmatrix}
          =
          \mathbf{y}.
$$

所以不同的 coefficient  vectors 可以给出相同的输出。这与单元 2 中的非唯一性相同，现在由零  singular value  检测到。


<a id="sol-u6-checkpoint-pca-from-svd"></a>

##  PCA  来自  SVD 

 covariance   eigenvalues  是

$$
\lambda_1
          =
          \frac{(4\sqrt2)^2}{4}
          =
          8,
          \qquad
          \lambda_2
          =
          \frac{(2\sqrt2)^2}{4}
          =
          2.
$$

因此

$$
\mathbf{v}_1
          =
          \frac1{\sqrt2}
          \begin{bmatrix}
            1\\
            1
          \end{bmatrix}
$$

 是第一个 principal direction ，

$$
\mathbf{v}_2
          =
          \frac1{\sqrt2}
          \begin{bmatrix}
            1\\
            -1
          \end{bmatrix}
$$

 是第二个 principal direction 。

principal- coordinate   matrix  是 

$$
T=U_2\Sigma_2
          =
          \begin{bmatrix}
            2\sqrt2&\sqrt2\\
            2\sqrt2&-\sqrt2\\
            -2\sqrt2&-\sqrt2\\
            -2\sqrt2&\sqrt2
          \end{bmatrix}.
$$


仅保留第一个 principal direction 给出

$$
\widehat Z_1
          =
          \sigma_1\mathbf{u}_1\mathbf{v}_1^T
          =
          \begin{bmatrix}
            2&2\\
            2&2\\
            -2&-2\\
            -2&-2
          \end{bmatrix}.
$$

捕获的分数是

$$
\frac{\sigma_1^2}
          {\sigma_1^2+\sigma_2^2}
          =
          \frac{32}{32+8}
          =
          \frac45.
$$

$T$的两个 columns 是第一个和第二个 principal directions 的分数 vectors 。

