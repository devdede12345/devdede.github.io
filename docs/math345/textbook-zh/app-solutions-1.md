# C.1 第1章：应用、几何与计算题解答

!!! note "译文与来源"

    本页依据 2026 年 11 月 3 日读取的官方 v0.2 源文件制作。数学术语保留英文；原书公式、代码、例题、活动、证明与解答保留。译稿使用机器辅助翻译并进行数学与排版检查，未经原作者审定。原作者：Jacob Denson、Kaitlyn Phillipson、Sebastien Roch。除原书另有注明外，遵循 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)。 [阅读英文原文](https://math345-textbook.github.io/app-u1-applied-solutions.html)。


<a id="app-u1-applied-solutions"></a>

这些解决方案草图对应于[练习](1-6.md#u1-exercises)末尾的应用、几何和计算解释练习。


<a id="sol-u1-applied-doc-vectors-cosine-distance"></a>

## 字数  vectors  和  cosine similarity 

我们有$\|\mathbf{q}\|=\sqrt2$。对于$\mathbf{D}_1=(2,0,2)$，

$$
\mathbf{q}\cdot \mathbf{D}_1=4,\qquad \|\mathbf{D}_1\|=\sqrt8,
$$

所以

$$
\operatorname{cosim}(\mathbf{q},\mathbf{D}_1)=\frac{4}{\sqrt2\sqrt8}=1.
$$


对于$\mathbf{D}_2=(1,1,0)$，

$$
\mathbf{q}\cdot \mathbf{D}_2=1,\qquad \|\mathbf{D}_2\|=\sqrt2,
$$

所以

$$
\operatorname{cosim}(\mathbf{q},\mathbf{D}_2)=\frac{1}{\sqrt2\sqrt2}=\frac12.
$$

 对于$\mathbf{D}_3=(0,2,0)$，$\mathbf{q}\cdot\mathbf{D}_3=0$，所以$\operatorname{cosim}(\mathbf{q},\mathbf{D}_3)=0$。余弦排名为$\mathbf{D}_1,\mathbf{D}_2,\mathbf{D}_3$。

 vector  $\mathbf{D}_1$ 有  cosine similarity  $1$ 因为$\mathbf{D}_1=2\mathbf{q}$。文档$\mathbf{D}_3$是 orthogonal 到$\mathbf{q}$。从字典单词来看，$\mathbf{D}_3$仅包含“ matrix ”，而 query 则使用“ linear ”和“数据”。

欧几里德距离为 

$$
\begin{aligned}
\operatorname{dist}(\mathbf{q},\mathbf{D}_1) &= \|\mathbf{q}-\mathbf{D}_1\| = \sqrt2, \\
\operatorname{dist}(\mathbf{q},\mathbf{D}_2) &= \|\mathbf{q}-\mathbf{D}_2\| = \sqrt2, \\
\operatorname{dist}(\mathbf{q},\mathbf{D}_3) &= \|\mathbf{q}-\mathbf{D}_3\| = \sqrt6.
\end{aligned}
$$

 距离排名中，$\mathbf{D}_1$ 和 $\mathbf{D}_2$ 并列，其次是 $\mathbf{D}_3$。它与余弦排名$\mathbf{D}_1,\mathbf{D}_2,\mathbf{D}_3$不完全匹配。


<a id="sol-u1-applied-weighted-average-values"></a>

##  Weighted average  /  value vectors 

 weighted average  是 

$$
\frac14(10,0)+\frac14(0,10)+\frac12(10,10)=(2.5,0)+(0,2.5)+(5,5)=(7.5,7.5).
$$


它是  weighted average ，因为所有  coefficients  都是非负且 $\frac14+\frac14+\frac12=1$。最大权重是 $\frac12$，因此 $\mathbf{v}_3$ 接收最大权重。


<a id="sol-u1-applied-attention-kq-scores"></a>

##  Attention 桥：手牌得分与$K\mathbf{q}$

 dot products  是 

$$
\mathbf{q}\cdot \mathbf{k}_{\mathrm{small}}=(1,1)\cdot (1,0)=1,
$$

 

$$
\mathbf{q}\cdot \mathbf{k}_{\mathrm{red}}=(1,1)\cdot (0,1)=1,
$$

 

$$
\mathbf{q}\cdot \mathbf{k}_{\mathrm{bird}}=(1,1)\cdot (1,1)=2.
$$


由于 key  vectors 是$K$的 rows ，

$$
K\mathbf{q}=
          \begin{pmatrix}1& 0\\ 0& 1\\ 1& 1\end{pmatrix}
          \begin{pmatrix}1\\ 1\end{pmatrix}
          =
          \begin{pmatrix}1\\ 1\\ 2\end{pmatrix}.
$$

$K\mathbf{q}$的条目是 row  dot products 和$\mathbf{q}$。分数之和为$4$，因此$\boldsymbol{\alpha}=(\frac14,\frac14,\frac12)$。


<a id="sol-u1-applied-rows-measure-columns-contribute"></a>

##  Rows 测量；  columns  贡献

 row 点积视图给出

$$
A\mathbf{x}=
          \begin{pmatrix}
            (-1,4,-5)\cdot (2,-3,4)\\
            (3,1,-2)\cdot (2,-3,4)
          \end{pmatrix}
          =
          \begin{pmatrix}-34\\ -5\end{pmatrix}.
$$


 column 组合视图给出

$$
A\mathbf{x}
          =
          2\begin{pmatrix}-1\\ 3\end{pmatrix}
          -3\begin{pmatrix}4\\ 1\end{pmatrix}
          +
          4\begin{pmatrix}-5\\ -2\end{pmatrix}
          =
          \begin{pmatrix}-34\\ -5\end{pmatrix}.
$$

第一个 row 测量 dot product $(-1,4,-5)\cdot \mathbf{x}$的输入。  coordinates  $2,-3,4$ 是  column  组合的  coefficients 。


<a id="sol-u1-applied-unit-square-test"></a>

## 单位平方可视化

我们有 

$$
A\mathbf{e}_1=\begin{pmatrix}2\\ 1\end{pmatrix},\qquad A\mathbf{e}_2=\begin{pmatrix}-1\\ 1\end{pmatrix}.
$$

 还有 

$$
A\begin{pmatrix}1\\1\end{pmatrix}=A\mathbf{e}_1+A\mathbf{e}_2=\begin{pmatrix}1\\2\end{pmatrix}.
$$


四个角变换为 

$$
A(0,0)=(0,0),\qquad A(1,0)=(2,1),\qquad A(1,1)=(1,2),\qquad A(0,1)=(-1,1).
$$

 单位正方形的图像是顶点为 $(0,0)$、$(2,1)$、$(1,2)$、$(-1,1)$ 的平行四边形。离开原点的两条变换边是$A\mathbf{e}_1=(2,1)$和$A\mathbf{e}_2=(-1,1)$，即$A$的 columns 。


<a id="sol-u1-applied-transformation-matching"></a>

## 变换匹配

 matrix  $A_1=\begin{pmatrix}1& 1\\ 0& 1\end{pmatrix}$ 是水平  shear ，因为 $A_1(x,y)=(x+y,y)$。  matrix  $A_2=\begin{pmatrix}0& -1\\ 1& 0\end{pmatrix}$ 是$90^\circ$ 逆时针 rotation ，因为$\mathbf{e}_1\mapsto \mathbf{e}_2$ 和$\mathbf{e}_2\mapsto -\mathbf{e}_1$。

因为 $(x,y)\mapsto (x,0)$， matrix  $A_3=\begin{pmatrix}1& 0\\ 0& 0\end{pmatrix}$  projection  位于 $x$ 轴上。因为 $(x,y)\mapsto (-x,y)$，所以  matrix  $A_4=\begin{pmatrix}-1& 0\\ 0& 1\end{pmatrix}$ 是 $y$ 轴上的  reflection 。  matrix  $A_5=\begin{pmatrix}2& 0\\ 0& 1\end{pmatrix}$ 是水平拉伸，因为 $(x,y)\mapsto (2x,y)$。

对于

$$
A_6=\begin{bmatrix}0&1\\1&0\end{bmatrix},
          \qquad
          A_6\mathbf{e}_1=\mathbf{e}_2,
          \qquad
          A_6\mathbf{e}_2=\mathbf{e}_1.
$$

因此$A_6$是 reflection 穿过线$y=x$。

因此，匹配项为 $A_1\to 4$、$A_2\to 5$、$A_3\to 2$、$A_4\to 1$、$A_5\to 3$ 和 $A_6\to 6$。


<a id="sol-u1-applied-composition-order"></a>

##  Composition  顺序：$RS$ 与 $SR$

我们计算

$$
RS=
          \begin{pmatrix}0& -1\\ 1& 0\end{pmatrix}
          \begin{pmatrix}2& 0\\ 0& 1\end{pmatrix}
          =
          \begin{pmatrix}0& -1\\ 2& 0\end{pmatrix},
$$

同时计算

$$
SR=
          \begin{pmatrix}2& 0\\ 0& 1\end{pmatrix}
          \begin{pmatrix}0& -1\\ 1& 0\end{pmatrix}
          =
          \begin{pmatrix}0& -2\\ 1& 0\end{pmatrix}.
$$


**The products are not equal**: 产品$RS$表示先涂抹$S$，然后涂抹$R$。这两个顺序不同，因为 rotation 之前的水平拉伸与水平拉伸之前的 rotation 不同。因此 $R$ 和 $S$ 不可交换。


<a id="sol-u1-applied-affine-not-linear"></a>

##  Affine  但不是  linear 

我们有$T(0,0)=(1,0)$。如果$T(\mathbf{x})=A\mathbf{x}$，则$T(\mathbf{0})=A\mathbf{0}=\mathbf{0}$。但这个变换将$\mathbf{0}$发送到$(1,0)$，所以不能写成$A\mathbf{x}$。

它可以写成

$$
T(\mathbf{x})=I\mathbf{x}+\begin{pmatrix}1\\0\end{pmatrix}.
$$

所以$T$是 affine ，但不是 linear 。


<a id="sol-u1-applied-code-sorting-similarity"></a>

## 代码解读：相似度分数排序

命令 `np.argsort(scores)` 返回将分数从小到大排序的索引：


```python
np.argsort(scores)
```

给出


```text
array([2, 1, 0])
```

因为$0.0 \lt 0.5 \lt 1.0$。切片 `[::-1]` 反转顺序，给出


```text
array([0, 1, 2])
```

因此 `ranking` 是


```text
array(['D1', 'D2', 'D3'])
```

**The code ranks documents by the given similarity scores**: 如果分数是余弦相似度，则排名基于  normalization  之后的方向，而不是欧几里德距离或字母顺序。


<a id="sol-u1-applied-transformer-shape-check"></a>

## 变压器 shape 检查

由于$X\in \mathbb{R}^{6\times 5}$和$W_Q,W_K,W_V\in \mathbb{R}^{5\times 2}$，我们有

$$
Q=XW_Q\in \mathbb{R}^{6\times 2},\qquad K=XW_K\in \mathbb{R}^{6\times 2},\qquad V=XW_V\in \mathbb{R}^{6\times 2}.
$$


由于$K^T\in \mathbb{R}^{2\times 6}$，我们得到$QK^T\in \mathbb{R}^{6\times 6}$。 $QK^T$的$(i,j)$-条目是 query  row $i$和 key  row $j$的 dot product 。这是一个相关性分数。

在练习的记法中，$S=QK^T$有 shape $6\times 6$，所以后来的 attention 权重 matrix $A_{\mathrm{att}}$也有 shape $6\times 6$。那么$H=A_{\mathrm{att}}V$有 shape $6\times 2$。乘积 $A_{\mathrm{att}}V$ 形成  value vectors  的  weighted averages 。在此约定中， token   vectors  存储为 $X$ 的  rows 。

