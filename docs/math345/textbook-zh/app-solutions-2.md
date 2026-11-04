# C.2 第2章：应用、几何与计算题解答

!!! note "译文与来源"

    本页依据 2026 年 11 月 3 日读取的官方 v0.2 源文件制作。数学术语保留英文；原书公式、代码、例题、活动、证明与解答保留。译稿使用机器辅助翻译并进行数学与排版检查，未经原作者审定。原作者：Jacob Denson、Kaitlyn Phillipson、Sebastien Roch。除原书另有注明外，遵循 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)。 [阅读英文原文](https://math345-textbook.github.io/app-u2-applied-solutions.html)。


<a id="app-u2-applied-solutions"></a>

这些解决方案草图对应于第 2 单元末尾的附加应用和计算解释练习。


<a id="sol-u2-applied-projection-forgotten-directions"></a>

##  Projection  并忘记了代码中的高度

 matrix $P$保留前两个 coordinates 并删除第三个：

$$
P
          \begin{bmatrix}
          x\\y\\z
          \end{bmatrix}
          =
          \begin{bmatrix}
          x\\y
          \end{bmatrix}.
$$

两个输入$\mathbf{x}$和$\mathbf{x}+6\mathbf{z}$具有相同的前两个 coordinates ，因此它们的输出一致。由于$P\mathbf{z}=\mathbf{0}$，高度方向就被遗忘了。  rank 是$2$， nullity 是$1$，因此传输了两个输入方向，而忘记了一个输入方向。


<a id="sol-u2-applied-reachable-outputs"></a>

## 增强 rref 的可达输出

对于$\mathbf{b}_1$，rref 是

$$
\left[
          \begin{array}{cc|c}
          1&0&1\\
          0&1&2\\
          0&0&0
          \end{array}
          \right],
$$

因此系统是一致的，$\mathbf{x}=\begin{bmatrix}1\\2\end{bmatrix}$ 是一个解。

对于$\mathbf{b}_2$，rref 是

$$
\left[
          \begin{array}{cc|c}
          1&0&0\\
          0&1&0\\
          0&0&1
          \end{array}
          \right].
$$

 最后一个 row  是$[0\ 0\mid 1]$，这意味着$0=1$。因此$\mathbf{b}_2$是不可到达的。垂直线右侧的 pivot 表示不一致。


<a id="sol-u2-applied-line-intersection-two-planes"></a>

## rref 输出的交线

rref 给出 

$$
x+\frac{5}{3}z=1,
          \qquad
          y-\frac{2}{3}z=0.
$$

 Let $z=t$。然后

$$
x=1-\frac{5}{3}t,
          \qquad
          y=\frac{2}{3}t.
$$


所以解集是 

$$
\begin{bmatrix}
          x\\y\\z
          \end{bmatrix}
          =
          \begin{bmatrix}
          1\\0\\0
          \end{bmatrix}
          +
          t
          \begin{bmatrix}
          -5/3\\
          2/3\\
          1
          \end{bmatrix}.
$$

 有一个空闲的  parameter ，所以解集是一条线。从几何上讲，它是两个平面的交线。


<a id="sol-u2-applied-plane-through-three-points"></a>

## 零空间计算中通过三个点的平面

$M$的 rows 是平面内的位移 vectors 。 $\operatorname{null}(M)$ 中的 vector  垂直于两个 rows ，因此它垂直于平面。输出给出

$$
\mathbf{n}
          =
          \begin{bmatrix}
          2\\-1\\1
          \end{bmatrix}.
$$


使用$P=(1,1,-2)$，平面方程为

$$
2(x-1)-(y-1)+(z+2)=0,
$$

或

$$
2x-y+z=-1.
$$


<a id="sol-u2-applied-null-space-basis-code"></a>

## 在代码中读取零空间 basis 

 vector 

$$
\mathbf{z}
          =
          \begin{bmatrix}
          -1\\-1\\1
          \end{bmatrix}
$$

是输入方向。直接相乘得到$A\mathbf{z}=\mathbf{0}$。如果$A\mathbf{x}=\mathbf{y}$，则

$$
A(\mathbf{x}+t\mathbf{z})
          =
          A\mathbf{x}+tA\mathbf{z}
          =
          \mathbf{y}.
$$

 因此不同的输入可以给出相同的输出。


<a id="sol-u2-applied-redundant-square-footage-features-code"></a>

## 代码中的冗余平方英尺 features 

对于每个  row ，方程 

$$
X
          \begin{bmatrix}
          1\\1\\-1
          \end{bmatrix}
          =
          \mathbf{0}
$$

 意味着 

$$
\text{first-level area}+\text{second-level area}=\text{total area}
$$

rank 是$2$，所以三个 feature  columns 只包含两个独立的方向。

两个 coefficient  vectors 在零空间方向上有所不同：

$$
\mathbf{c}-\mathbf{c}_{\mathrm{alt}}
          =
          \begin{bmatrix}
          1\\1\\-1
          \end{bmatrix}.
$$

由于$X\mathbf{z}=\mathbf{0}$，两个 coefficient  vectors 做出相同的预测。对于冗余的 features ，个体 coefficient 的重要性并不是由预测 vector 唯一确定的。


<a id="sol-u2-applied-difference-matrix-levels-changes"></a>

## 差异 matrix ：水平与变化

乘积 $D\mathbf{x}$ 给出连续的差异： 

$$
5-2=3,
          \qquad
          9-5=4,
          \qquad
          10-9=1.
$$

 将 $10$ 添加到每个条目会改变级别，但不会改变差异，因此前两个输出一致。由于

$$
D\mathbf{1}=\mathbf{0},
$$

恒定方向被遗忘。  rank  是 $3$。由于$D$有四个 columns ，所以 nullity 是$1$。


<a id="sol-u2-applied-column-space-basis-debug"></a>

## 从代码中调试  column -空间  basis 

 pivot 索引`(0, 1)`表示数学 columns 1和2。 Row reduction 标识 pivot 位置，但 row 操作不保留原始 columns 。 $\operatorname{col}(A)$ 的  basis  必须使用原始  matrix  $A$ 的  columns ，而不是 $R$ 的  columns 。

因此 basis 是

$$
\left\{
          \begin{bmatrix}
          1\\2\\0
          \end{bmatrix},
          \begin{bmatrix}
          2\\4\\1
          \end{bmatrix}
          \right\}.
$$


<a id="sol-u2-applied-invertibility-gallery-code"></a>

## 代码中的 Invertibility 画廊

当  determinant  非零时，$2\times 2$  matrix  恰好是  invertible ，相当于当它的  rank  是 $2$ 时。  invertible  matrices 是第二个、第三个和第四个 matrices 。第一个和第五个 matrices 是 singular ，因为它们的行列式是$0$并且它们的等级是$1$。

第一个 matrix 

$$
\begin{bmatrix}
          0&0\\
          0&1
          \end{bmatrix}
$$

忘记了$x$方向：

$$
\begin{bmatrix}
          0&0\\
          0&1
          \end{bmatrix}
          \begin{bmatrix}
          1\\0
          \end{bmatrix}
          =
          \begin{bmatrix}
          0\\0
          \end{bmatrix}.
$$


第五个 matrix 

$$
\begin{bmatrix}
          1&0\\
          0&0
          \end{bmatrix}
$$

忘记了$y$方向：

$$
\begin{bmatrix}
          1&0\\
          0&0
          \end{bmatrix}
          \begin{bmatrix}
          0\\1
          \end{bmatrix}
          =
          \begin{bmatrix}
          0\\0
          \end{bmatrix}.
$$


