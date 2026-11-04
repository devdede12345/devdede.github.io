# C.7 第7章：应用、几何与计算题解答

!!! note "译文与来源"

    本页依据 2026 年 11 月 3 日读取的官方 v0.2 源文件制作。数学术语保留英文；原书公式、代码、例题、活动、证明与解答保留。译稿使用机器辅助翻译并进行数学与排版检查，未经原作者审定。原作者：Jacob Denson、Kaitlyn Phillipson、Sebastien Roch。除原书另有注明外，遵循 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)。 [阅读英文原文](https://math345-textbook.github.io/appendix-u7-applied-exercise-solutions.html)。


<a id="appendix-u7-applied-exercise-solutions"></a>

这些是第 7 单元中其他应用和计算问题的解决方案草图。


<a id="sol-u7-matrix-space-coordinates"></a>

##  Matrix -空间 coordinates 

我们有

$$
A=
          \begin{bmatrix}
          2&-1\\
          0&3
          \end{bmatrix}
          =
          2E_{11}-E_{12}+0E_{21}+3E_{22}.
$$

因此 ordered basis $(E_{11},E_{12},E_{21},E_{22})$中的 coordinate vector 是

$$
\begin{bmatrix}
          2\\
          -1\\
          0\\
          3
          \end{bmatrix}.
$$

空间$M_{22}$有 dimension $4$。它的 zero vector 是 zero matrix 

$$
\begin{bmatrix}
          0&0\\
          0&0
          \end{bmatrix}.
$$


<a id="sol-u7-polynomial-coordinates-subspaces"></a>

## 多项式  coordinates  和子空间

在 ordered basis $(1,x,x^2,x^3)$中，$p(x)=2-3x+x^3$的 coordinate vector 为

$$
\begin{bmatrix}
          2\\
          -3\\
          0\\
          1
          \end{bmatrix}.
$$

对于$U=\{p\in\mathcal P_{\le3}:p(0)=0\}$，常数 coefficient 必须为零，所以

$$
U=\operatorname{span}\{x,x^2,x^3\}.
$$

对于$W=\{p\in\mathcal P_{\le3}:p(0)=p'(0)=0\}$，常数和 linear  coefficients 必须为零，所以

$$
W=\operatorname{span}\{x^2,x^3\}.
$$

 两者都是子空间，因为它们是  coefficients  上齐次  linear  条件的解集。


<a id="sol-u7-derivative-evaluation-linear-maps"></a>

##  Derivative  评估为 linear maps 

 derivative  映射为  linear ，因为 

$$
D(p+q)=(p+q)'=p'+q'
$$

 和 

$$
D(cp)=(cp)'=cp'.
$$

 如果 $p(x)=a_0+a_1x+a_2x^2+a_3x^3$，则 

$$
D(p)=a_1+2a_2x+3a_3x^2.
$$

 因此，使用有序的  bases  $(1,x,x^2,x^3)$ 和 $(1,x,x^2)$，$D$ 的  matrix  为

$$
\begin{bmatrix}
          0&1&0&0\\
          0&0&2&0\\
          0&0&0&3
          \end{bmatrix}.
$$

 求值映射$E_0(p)=p(0)$ 是 linear ，因为求值分布在加法和 scalar multiplication  上。它的 kernel 是

$$
\{p\in\mathcal P_{\le3}:p(0)=0\}
          =
          \operatorname{span}\{x,x^2,x^3\}.
$$


<a id="sol-u7-matrix-inner-product"></a>

##  Matrix   inner product 

 trace   inner product  是条目乘积的总和：

$$
\langle A,B\rangle
          =
          1\cdot3+2\cdot0+0\cdot4+(-1)\cdot1
          =
          2.
$$

 还有

$$
\|A\|^2
          =
          1^2+2^2+0^2+(-1)^2
          =
          6,
$$

所以$\|A\|=\sqrt6$。接下来

$$
A-B=
          \begin{bmatrix}
          -2&2\\
          -4&-2
          \end{bmatrix},
$$

所以$d(A,B)^2=4+4+16+4=28$。因此$d(A,B)=\sqrt{28}=2\sqrt7$。由于$\langle A,B\rangle=2\ne0$， matrices 不再是 orthogonal 。


<a id="sol-u7-same-polynomial-different-inner-products"></a>

## 相同 polynomial space ，不同 inner products 

在  coefficient   inner product 、

$$
p(x)=1+x
          \quad\leftrightarrow\quad
          \begin{bmatrix}
          1\\
          1
          \end{bmatrix},
          \qquad
          q(x)=1-x
          \quad\leftrightarrow\quad
          \begin{bmatrix}
          1\\
          -1
          \end{bmatrix}.
$$

 因此 

$$
\langle p,q\rangle_{\mathrm{coef}}
          =
          1\cdot1+1\cdot(-1)=0.
$$

 对于 $L^2[-1,1]$  inner product 、

$$
\langle p,q\rangle_{L^2}
          =
          \int_{-1}^{1}(1+x)(1-x)\,dx
          =
          \int_{-1}^{1}(1-x^2)\,dx.
$$

 这是 $2-\frac23=\frac43$。因此，对于  coefficient   inner product ，$p$ 和 $q$ 是  orthogonal ，但对于 $L^2[-1,1]$  inner product  则不是。  Orthogonality  取决于所选的 inner product 。


<a id="sol-u7-continuous-ls-projection-equations"></a>

## 连续  least-squares  线的  Projection  方程

对于 basis $(1,x)$，

$$
G=
          \begin{bmatrix}
          \langle1,1\rangle&\langle x,1\rangle\\
          \langle1,x\rangle&\langle x,x\rangle
          \end{bmatrix}
          =
          \begin{bmatrix}
          2&0\\
          0&\frac23
          \end{bmatrix}.
$$

对于$p(x)=1+2x+x^2+x^3$，我们得到

$$
b_0=\int_{-1}^{1}p(x)\,dx=2+\frac23=\frac83,
$$

和

$$
b_1=\int_{-1}^{1}xp(x)\,dx
          =
          \int_{-1}^{1}(x+2x^2+x^3+x^4)\,dx
          =
          \frac43+\frac25
          =
          \frac{26}{15}.
$$

因此

$$
\begin{bmatrix}
          2&0\\
          0&\frac23
          \end{bmatrix}
          \begin{bmatrix}
          c_0\\
          c_1
          \end{bmatrix}
          =
          \begin{bmatrix}
          \frac83\\
          \frac{26}{15}
          \end{bmatrix}.
$$

所以$c_0=\frac43$和$c_1=\frac{13}{5}$。连续的 least-squares 线是$q_{L^2}(x)=\frac43+\frac{13}{5}x$。


<a id="sol-u7-taylor-line-fixed-interval-ls"></a>

## 泰勒线与固定间隔  least squares 

$f(x)=x^2$ 在$0$ 的泰勒线是$T(x)=0$。对于$L^2[-1,1]$- projection 到$\operatorname{span}\{1,x\}$，对称性不给出$x$项。最佳常数是 

$$
\frac{\int_{-1}^{1}x^2\,dx}{\int_{-1}^{1}1\,dx}
          =
          \frac{2/3}{2}
          =
          \frac13.
$$

因此固定间隔  least-squares  近似值为 $q(x)=\frac13$。答案有所不同，因为  Taylor approximation  是局部的，而固定间隔  least squares  可以最小化整个间隔内的误差。


<a id="sol-u7-taylor-projection-local-inner-product"></a>

## 来自当地人的泰勒 projection  inner product 

如果$p(x)=a_0+a_1x+a_2x^2+a_3x^3$和$q(x)=c_0+c_1x$，则

$$
p-q=(a_0-c_0)+(a_1-c_1)x+a_2x^2+a_3x^3.
$$

本地 inner product 的平方 norm 是

$$
(a_0-c_0)^2+(a_1-c_1)^2+a_2^2+a_3^2.
$$

最后两项不依赖于$c_0,c_1$。最小值出现在 $c_0=a_0$ 和 $c_1=a_1$ 时。因此 projection 是$a_0+a_1x$。由于$a_0=p(0)$和$a_1=p'(0)$，答案是$p(0)+p'(0)x$。


<a id="sol-u7-shrinking-least-squares"></a>

## 缩小 least squares 

对于$x^2$，对称性给出 slope $0$，常数为

$$
\frac{1}{2t}\int_{-t}^{t}x^2\,dx
          =
          \frac{1}{2t}\cdot\frac{2t^3}{3}
          =
          \frac{t^2}{3}.
$$

因此$P_t(x^2)=\frac{t^2}{3}$。对于 $x^3$，对称性给出常数 $0$。  slope  是

$$
\frac{\int_{-t}^{t}x^4\,dx}{\int_{-t}^{t}x^2\,dx}
          =
          \frac{2t^5/5}{2t^3/3}
          =
          \frac{3t^2}{5}.
$$

 因此$P_t(x^3)=\frac{3t^2}{5}x$。  projections  都倾向于 $0$ 为 $t\to0$，这是$x^2$ 和 $x^3$ 的原点处的泰勒 linear approximation 。


<a id="sol-u7-gram-schmidt-polynomial-space"></a>

## $\mathcal P_{\le3}$ 中的 Gram-Schmidt 

我们有$\langle1,x\rangle=\int_{-1}^{1}x\,dx=0$，所以$1$和$x$是 orthogonal 。对于 $x^2$、

$$
\operatorname{proj}_{\operatorname{span}\{1\}}(x^2)
          =
          \frac{\langle x^2,1\rangle}{\langle1,1\rangle}1
          =
          \frac{2/3}{2}
          =
          \frac13.
$$

 以及 $\langle x^2,x\rangle=\int_{-1}^{1}x^3\,dx=0$。所以下一个 orthogonal 多项式是$x^2-\frac13$。对于$x^3$，$1$和$x^2-\frac13$上的 projections 对称消失。 $x$ 上的  projection  为 

$$
\frac{\langle x^3,x\rangle}{\langle x,x\rangle}x
          =
          \frac{2/5}{2/3}x
          =
          \frac35x.
$$

因此下一个  orthogonal  多项式为 $x^3-\frac35x$。  orthogonal basis  使  projection  更容易，因为  Gram matrix  是对角线，因此每个  coefficient  可以单独计算。


<a id="sol-u7-code-polynomial-regression"></a>

## 代码解读：多项式回归

的  columns 


```python
A = np.column_stack([np.ones_like(xs), xs, xs**2])
```

表示$1,\ x,\ x^2$的采样值。因此， subspace  的近似值为 $\mathcal P_{\le2}=\operatorname{span}\{1,x,x^2\}$。  vector  `c` 存储拟合二次方 $c_0+c_1x+c_2x^2$ 的  coefficients 。产品`A @ c`存储拟合的采样值。  vector  `r = y - A @ c` 存储采样的 residuals 。计算`A.T @ r` 检查每个采样的 feature   column  的 residual  是否为 orthogonal ：

$$
\sum_i r_i=0,\qquad
          \sum_i x_ir_i=0,\qquad
          \sum_i x_i^2r_i=0.
$$

 这并不意味着$\mathbf r\approx\mathbf0$。这意味着 $\mathbf r$ 是  orthogonal  的近似值  subspace 。


<a id="sol-u7-two-variable-tangent-plane-design-matrix"></a>

## 二变量  tangent plane  和采样  design matrix 

我们计算 $f(0,0)=1$、$f_x(0,0)=2$ 和 $f_y(0,0)=-1$。因此 tangent plane 是$T(x,y)=1+2x-y$。  residual  是 $r_T(x,y)=f(x,y)-T(x,y)=x^2+xy+2y^2+x^3$。满足

$$
r_T(0,0)=0,
          \qquad
          \nabla r_T(0,0)=
          \begin{bmatrix}
          0\\
          0
          \end{bmatrix}.
$$

 对于采样点$(x_i,y_i)$，拟合$q(x,y)=\alpha+\beta x+\gamma y$的 design matrix 为

$$
A=
          \begin{bmatrix}
          1& x_1& y_1\\
          1& x_2& y_2\\
          \vdots&\vdots&\vdots\\
          1& x_N& y_N
          \end{bmatrix}.
$$

 采样 residual 方程为

$$
\sum_i r_i=0,
          \qquad
          \sum_i x_ir_i=0,
          \qquad
          \sum_i y_ir_i=0.
$$


