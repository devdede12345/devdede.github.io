# C.4 第4章：应用、几何与计算题解答

!!! note "译文与来源"

    本页依据 2026 年 11 月 3 日读取的官方 v0.2 源文件制作。数学术语保留英文；原书公式、代码、例题、活动、证明与解答保留。译稿使用机器辅助翻译并进行数学与排版检查，未经原作者审定。原作者：Jacob Denson、Kaitlyn Phillipson、Sebastien Roch。除原书另有注明外，遵循 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)。 [阅读英文原文](https://math345-textbook.github.io/app-sol-u4-applied-computational.html)。


<a id="app-sol-u4-applied-computational"></a>

这些解决方案草图对应于第 4 单元末尾的附加应用和计算解释练习。


<a id="sol-u4-review-orthogonal-coordinates"></a>

##  Orthogonal   coordinates  和  projection 

[Orthogonal coordinates and projection](4-6.md#act-u4-review-orthogonal-coordinates)的解。

 columns  的长度为 $1$，并且


$$
\mathbf{q}_1^T\mathbf{q}_2
        =
        \frac12(1-1)
        =
        0.
$$


因此


$$
Q^TQ=I_2.
$$


 coordinate vector  是


$$
\mathbf{c}
        =
        Q^T\mathbf{x}
        =
        \begin{bmatrix}
        \mathbf{q}_1^T\mathbf{x}\\
        \mathbf{q}_2^T\mathbf{x}
        \end{bmatrix}
        =
        \begin{bmatrix}
        2\sqrt{2}\\
        \sqrt{2}
        \end{bmatrix}.
$$


组合 $Q$ 的  columns  给出


$$
\widehat{\mathbf{x}}
        =
        Q\mathbf{c}
        =
        2\sqrt{2}\mathbf{q}_1
        +
        \sqrt{2}\mathbf{q}_2
        =
        \begin{bmatrix}
        3\\
        1\\
        0
        \end{bmatrix}.
$$


 residual  是


$$
\mathbf{r}
        =
        \mathbf{x}-\widehat{\mathbf{x}}
        =
        \begin{bmatrix}
        0\\
        0\\
        2
        \end{bmatrix}.
$$


由于$Q$的两个 columns 都有第三个 coordinate $0$，


$$
Q^T\mathbf{r}
        =
        \begin{bmatrix}
        0\\
        0
        \end{bmatrix}.
$$


乘法 $Q^T\mathbf{x}$ 对  orthonormal  方向进行评分。乘法 $Q\mathbf{c}$ 使用结果  coordinates  组合这些方向。  vector $\mathbf{c}$包含 coordinates 。预计  vector  为


$$
\widehat{\mathbf{x}}
        =
        Q\mathbf{c}.
$$


<a id="sol-u4-review-gram-schmidt-step"></a>

## 一步 Gram–Schmidt  column 步

[One Gram–Schmidt column step](4-6.md#act-u4-review-gram-schmidt-step)的解。

 projection coefficient  是


$$
r_{12}
        =
        \mathbf{q}_1^T\mathbf{a}_2
        =
        \frac{2}{\sqrt{2}}
        =
        \sqrt{2}.
$$


因此


$$
\mathbf{p}_2
        =
        r_{12}\mathbf{q}_1
        =
        \sqrt{2}
        \frac{1}{\sqrt{2}}
        \begin{bmatrix}
        1\\
        1\\
        0
        \end{bmatrix}
        =
        \begin{bmatrix}
        1\\
        1\\
        0
        \end{bmatrix}.
$$


 residual  是


$$
\mathbf{v}_2
        =
        \mathbf{a}_2-\mathbf{p}_2
        =
        \begin{bmatrix}
        1\\
        -1\\
        1
        \end{bmatrix}.
$$


它的长度是


$$
r_{22}
        =
        \|\mathbf{v}_2\|
        =
        \sqrt{3}.
$$


因此


$$
\mathbf{q}_2
        =
        \frac{1}{\sqrt{3}}
        \begin{bmatrix}
        1\\
        -1\\
        1
        \end{bmatrix}.
$$


 orthogonality  检查给出


$$
\mathbf{q}_1^T\mathbf{q}_2
        =
        \frac{1}{\sqrt{6}}
        (1-1+0)
        =
        0.
$$


如果$r_{22}=0$，则$\mathbf{v}_2=\mathbf{0}$。  column  $\mathbf{a}_2$ 已经位于早期方向的  span  中，并且不会产生新的单位方向。


<a id="sol-u4-orthogonal-basis-coefficients"></a>

##  Orthogonal - basis   coefficients 

 vectors  是成对的  orthogonal 。  coefficients  是 

$$
\begin{aligned}
\frac{\mathbf{x} \cdot \mathbf{f}_1}{\mathbf{f}_1 \cdot \mathbf{f}_1} &= 2, \\
\frac{\mathbf{x} \cdot \mathbf{f}_2}{\mathbf{f}_2 \cdot \mathbf{f}_2} &= 1, \\
\frac{\mathbf{x} \cdot \mathbf{f}_3}{\mathbf{f}_3 \cdot \mathbf{f}_3} &= 2.
\end{aligned}
$$


所以$\mathbf{x} = 2\mathbf{f}_1 + \mathbf{f}_2 + 2\mathbf{f}_3$。  Orthogonality  使交叉项消失。


<a id="sol-u4-projection-line-residual"></a>

##  Projection  到一条线上

$\mathbf{x} \cdot \mathbf{u} = 5$ 和$\mathbf{u} \cdot \mathbf{u} = 5$，所以$\operatorname{proj}_L(\mathbf{x}) = \mathbf{u} = \begin{bmatrix}1\\2\end{bmatrix}$。  residual  是 $\begin{bmatrix}2\\-1\end{bmatrix}$。它的 dot product 与$\mathbf{u}$是$2 - 2 = 0$。  residual 是$\mathbf{x}$垂直于直线的部分。


<a id="sol-u4-colspace-orthogonal-complement"></a>

##  Column -空间 orthogonal complement 

$A^T\mathbf{r} = \begin{bmatrix}0\\0\end{bmatrix}$。因此，对于 $A$ 的每一个  column ，$\mathbf{r}$ 都是  orthogonal 。  orthogonal complement  是 $\operatorname{span}\{\begin{bmatrix}-1\\-1\\1\end{bmatrix}\}$。这正是$A^T$的 null space 。


<a id="sol-u4-projection-plane-normal"></a>

##  Projection  登上飞机

 normal vector  是 $\mathbf{n} = \begin{bmatrix}1\\1\\1\end{bmatrix}$。由于$\mathbf{p} \cdot \mathbf{n} = 7$和$\mathbf{n} \cdot \mathbf{n} = 3$、

$$
\operatorname{proj}_U(\mathbf{p}) = \mathbf{p} - (7/3)\mathbf{n}
          =
          \begin{bmatrix}-4/3\\-1/3\\5/3\end{bmatrix}.
$$

的条目加起来为0，所以投影点位于$U$。


<a id="sol-u4-unreachable-target-closest-output"></a>

## 无法到达的目标，最接近的输出

$A$ 的输出具有$(x_1, x_2, x_1+x_2)$ 的形式。前两个目标条目强制为 $x_1 = 2$ 和 $x_2 = 1$，这将使第三个条目为 $3$，而不是 $5$。

$A^T A = \begin{bmatrix}2& 1\\1& 2\end{bmatrix}$, $A^T\mathbf{b} = \begin{bmatrix}7\\6\end{bmatrix}$.

求解得到$\hat{\mathbf{x}} = \begin{bmatrix}8/3\\5/3\end{bmatrix}$。然后是

$$
A\hat{\mathbf{x}} =
          \begin{bmatrix}8/3\\5/3\\13/3\end{bmatrix},
$$


$$
\mathbf{r} =
          \begin{bmatrix}-2/3\\-2/3\\2/3\end{bmatrix},
$$

和$A^T\mathbf{r} = \begin{bmatrix}0\\0\end{bmatrix}$。


<a id="sol-u4-regression-design-residual"></a>

## 回归  design matrix  和  residual 

$X = \begin{bmatrix}1& 0\\1& 1\\1& 2\end{bmatrix}$, $\mathbf{y} = \begin{bmatrix}1\\2\\2\end{bmatrix}$.

$X^T X = \begin{bmatrix}3& 3\\3& 5\end{bmatrix}$, $X^T\mathbf{y} = \begin{bmatrix}5\\6\end{bmatrix}$.

求解得到$\boldsymbol{\beta} = \begin{bmatrix}7/6\\1/2\end{bmatrix}$。拟合值为$\begin{bmatrix}7/6\\5/3\\13/6\end{bmatrix}$。  residual 是$\begin{bmatrix}-1/6\\1/3\\-1/6\end{bmatrix}$和$X^T\mathbf{r} = \begin{bmatrix}0\\0\end{bmatrix}$。


<a id="sol-u4-code-residual-orthogonality"></a>

## 代码解读： residual  orthogonality 

索引`[0]`选择`np.linalg.lstsq`返回的 least-squares  coefficient vector 。

 coefficient vector  是 

$$
\widehat{\mathbf{x}}
          =
          \begin{bmatrix}
          8/3\\
          5/3
          \end{bmatrix}.
$$


 fitted vector  是 

$$
\widehat{\mathbf{b}}
          =
          A\widehat{\mathbf{x}}
          =
          \begin{bmatrix}
          8/3\\
          5/3\\
          13/3
          \end{bmatrix},
$$


 residual  是 

$$
\mathbf{r}
          =
          \mathbf{b}-\widehat{\mathbf{b}}
          =
          \begin{bmatrix}
          -2/3\\
          -2/3\\
          2/3
          \end{bmatrix}.
$$


表达式 `A.T @ r` 检查 

$$
A^T\mathbf{r}=\mathbf{0},
$$

因此它检查  residual  与 $A$ 的每个  column  是否为  orthogonal 。小条目来自浮点舍入。

 residual  不为零：

$$
\|\mathbf{r}\|
          =
          \frac{2}{\sqrt{3}}
          \approx
          1.15470.
$$


这并不意味着 least squares 失败了。目标不可到达，因此最接近的可到达输出具有非零  residual 。


<a id="sol-u4-debug-wrong-residual-check"></a>

## 调试： residual 检查错误

 matrix $A$有 shape $m\times n$， transpose $A^T$有 shape $n\times m$，$\mathbf{r}$有$m$长度。因此

$$
A^T\mathbf{r}
$$

被定义并且长度为$n$。通常未定义乘积 $A\mathbf{r}$，因为 $A$ 期望输入长度为 $n$，而不是 $m$。

即使 dimensions 碰巧匹配，$A\mathbf{r}$也会形成$A$的 columns 的 linear combination 。它不会将 $\mathbf{r}$ 的  dot products  与  columns  一起收集。

正确的条件是

$$
A^T\mathbf{r}=\mathbf{0}.
$$


数字布尔检查是


```python
np.allclose(A.T @ r, np.zeros(A.shape[1]))
```


<a id="sol-u4-rank-nonunique-coefficients"></a>

##  Rank  和非唯一  coefficients 

$A\mathbf{z} = \mathbf{0}$，所以$\mathbf{z}$是零空间方向。因此

$$
A(\hat{\mathbf{x}} + 5\mathbf{z}) = A\hat{\mathbf{x}} + 5A\mathbf{z} = A\hat{\mathbf{x}}.
$$


 coefficient vector  可以改变，而  fitted vector  保持固定。发生这种情况是因为第三个  column  是前两个  columns  之和。


<a id="sol-u4-qr-code-reading"></a>

## $QR$  least-squares  读码

由于$A$有 shape $3\times2$，减少$QR$得到

$$
Q:3\times2,
          \qquad
          R:2\times2.
$$


第一个布尔检查验证

$$
Q^TQ=I_2,
$$

第二个布尔检查验证

$$
QR=A.
$$


求解计算简化系统 

$$
R\widehat{\mathbf{x}}
          =
          Q^T\mathbf{b}.
$$


两种方法都返回 

$$
\widehat{\mathbf{x}}
          =
          \begin{bmatrix}
          8/3\\
          5/3
          \end{bmatrix}
$$

 直至四舍五入，因此最终比较结果为 `True`。

该协议并不意味着$A\mathbf{x}=\mathbf{b}$有精确解。  residual  非零。

$QR$ 分解允许同时对$Q$ 的一个 column  和$R$ 的相应 row  进行符号更改。因此，数值软件可能会返回与手工计算不同的符号，同时仍满足 

$$
Q^TQ=I
          \qquad\text{and}\qquad
          QR=A.
$$


