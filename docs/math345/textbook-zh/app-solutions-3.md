# C.3 第3章：应用、几何与计算题解答

!!! note "译文与来源"

    本页依据 2026 年 11 月 3 日读取的官方 v0.2 源文件制作。数学术语保留英文；原书公式、代码、例题、活动、证明与解答保留。译稿使用机器辅助翻译并进行数学与排版检查，未经原作者审定。原作者：Jacob Denson、Kaitlyn Phillipson、Sebastien Roch。除原书另有注明外，遵循 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)。 [阅读英文原文](https://math345-textbook.github.io/app-u3-applied-solutions.html)。


<a id="app-u3-applied-solutions"></a>

这些解决方案草图对应于第 3 单元末尾的附加概念、几何和计算检查点。


<a id="sol-u5-directional-derivative-dot-product"></a>

##  Directional derivative  作为  dot product 

使用 

$$
D_{\mathbf{v}}f(\mathbf{a})=\nabla f(\mathbf{a})\cdot \mathbf{v}.
$$

 然后 

$$
D_{\mathbf{v}_1}f(\mathbf{a})=6,
          \qquad
          D_{\mathbf{v}_2}f(\mathbf{a})=8.
$$

 另外，

$$
D_{\mathbf{v}_3}f(\mathbf{a})
          =
          \begin{bmatrix}
          6\\
          8
          \end{bmatrix}
          \cdot
          \frac15
          \begin{bmatrix}
          3\\
          4
          \end{bmatrix}
          =
          \frac{18+32}{5}=10,
$$

 和 

$$
D_{\mathbf{v}_4}f(\mathbf{a})=-10.
$$


在列出的方向中，沿 $\mathbf{v}_3$ 的  directional derivative  最大，沿 $\mathbf{v}_4$ 的最小。这里用到了第一章的  dot product ：它反映方向之间的一致程度。方向与  gradient  一致时， derivative  最大；与  gradient  相反时最小。


<a id="sol-u5-rank-one-update"></a>

## 最后一层 rank -一次更新

 outer product 是

$$
\mathbf{g}\mathbf{h}^T
          =
          \begin{bmatrix}
          1\\
          -2\\
          3
          \end{bmatrix}
          \begin{bmatrix}
          4&0
          \end{bmatrix}
          =
          \begin{bmatrix}
          4&0\\
          -8&0\\
          12&0
          \end{bmatrix}.
$$

它的 shape 是$3\times 2$。由于每个  column  都是 $\mathbf{g}$  scalar  的倍数，因此  column space  最多有  dimension  1，因此  rank  最多 1。

更新

$$
W_{\mathrm{new}}=W-\alpha \mathbf{g}\mathbf{h}^T
$$

通过减去缩放后的 rank -1 matrix 来更改$W$。在 NumPy 中，当 `g` 和 `h` 存储为一维数组时，`np.outer(g, h)` 是合适的，因为它显式形成  matrix  $\mathbf{g}\mathbf{h}^T$。

更新 matrix 最多有 rank 一个。这并不意味着更新后的  matrix  $W_{\mathrm{new}}$ 最多有  rank  一个。


<a id="sol-u5-critical-points-candidates"></a>

## critical point是候选点

我们有

$$
\nabla f(x,y)=
          \begin{bmatrix}
          2x\\
          -2y
          \end{bmatrix}.
$$

因此唯一的 critical point 是$(0,0)$。

沿 $x$ 轴，

$$
f(t,0)=t^2,
$$

 为 $t\ne 0$ 的正值。沿 $y$ 轴，

$$
f(0,t)=-t^2,
$$

 为 $t\ne 0$ 的负值。因此，附近点出现在 $f(0,0)=0$ 的上方和下方。  critical point  是 saddle point ，而不是 local minimum  或 local maximum 。


<a id="sol-u5-gradient-descent-loop"></a>

## 读取 gradient descent 循环

该循环代表

$$
\mathbf{x}_{k+1}=\mathbf{x}_k-\alpha\nabla f(\mathbf{x}_k).
$$

learning rate 是`alpha`。  vector  `grad_f(x)` 必须具有与 `x` 相同的  shape 。用加号替换减号将朝着最急剧增加的方向而不是最急剧减少的方向移动。该代码并不证明已找到最小值。仅仅描述了更新规则；收敛取决于 function 、起点、 learning rate 和停止规则。


<a id="sol-u5-learning-rate-diagnosis"></a>

## 学习率诊断

 learning rate  $\alpha=0.05$ 正在缓慢但稳定地取得进展。  learning rate  $\alpha=0.20$ 正在取得更快的有用进展。由于  loss  增加， learning rate  $\alpha=1.05$ 显得不稳定。

递减的 loss 表并不能证明 global minimum 已经找到。它仅报告显示的迭代发生的情况。


<a id="sol-u3-checkpoint-function-type-components"></a>

##  Function  类型和  component   functions 

 function  的值为  vector ： 

$$
F:\mathbb R^2\to\mathbb R^3.
$$

 其  component   functions  为 

$$
F_1(x,y)=x^2+y,\qquad F_2(x,y)=e^{x-y},\qquad F_3(x,y)=x-y.
$$


我们有 

$$
F(1,0)=\begin{bmatrix}1\\e\\1\end{bmatrix}.
$$

 由于输出有三个分量，输入有两个变量，所以 $J_F(1,0)$ 有  shape  $3\times2$。


<a id="sol-u3-checkpoint-domain-boundary-closed-bounded"></a>

##  Domain 、 boundary 、封闭且有界

对数需要$y-x^2>0$，平方根需要$x\ge 0$。因此 domain 是

$$
D=\{(x,y)\in\mathbb R^2:x\ge0,\ y>x^2\}.
$$


1 个 interior point  就是$(1,2)$。  Boundary 点包括$y=x^2$上与$x\ge0$的点，例如$(1,1)$，以及$x=0$上与$y\ge0$的点，例如$(0,1)$。该集合不是闭集，因为它不包含抛物线 $y=x^2$。它没有边界，因为 $D$ 中的点可以具有任意大的  coordinates 。


<a id="sol-u3-checkpoint-one-parameter-tangent-vector"></a>

##  One-parameter map  和  tangent vector 

我们有

$$
\mathbf r(2)=
          \begin{bmatrix}1\\0\\-1\end{bmatrix}
          +2\begin{bmatrix}2\\-1\\3\end{bmatrix}
          =
          \begin{bmatrix}5\\-2\\5\end{bmatrix}.
$$


 derivative  是常数：

$$
\mathbf r'(t)=\begin{bmatrix}2\\-1\\3\end{bmatrix}.
$$

 这是线的方向  vector ，与单元 2 参数线形式点加上  parameter  乘以方向相匹配。


<a id="sol-u3-checkpoint-gradient-hessian"></a>

##  Gradient  和  Hessian 

第一部分  derivatives  是 

$$
f_x=2x+y,\qquad f_y=x+4y.
$$

 因此 

$$
\nabla f(x,y)=\begin{bmatrix}2x+y\\x+4y\end{bmatrix},
          \qquad
          \nabla f(1,-1)=\begin{bmatrix}1\\-3\end{bmatrix}.
$$


 Hessian  是

$$
H_f=\begin{bmatrix}2&1\\1&4\end{bmatrix},
$$

即 symmetric 。 $\nabla f(1,-1)$ 的条目测量$f$ 对此时$x$ 和$y$ 方向变化的敏感度。


<a id="sol-u3-checkpoint-jacobian-rows-columns"></a>

##  Jacobian matrix   rows  和  columns 

 Jacobian matrix  是 

$$
J_F(x,y)=
          \begin{bmatrix}
            2xy&x^2\\
            e^y&xe^y
          \end{bmatrix}.
$$

 在 $\mathbf a=(1,0)$、

$$
J_F(\mathbf a)=
          \begin{bmatrix}
            0&1\\
            1&1
          \end{bmatrix}.
$$


输入和输出 dimensions 都是$2$。第二个 row 对应于第二个 component $F_2(x,y)=xe^y$。  columns  测量更改第一个和第二个输入  coordinates  时预测的输出变化。


<a id="sol-u3-checkpoint-tangent-plane-unit2-plane"></a>

##  Tangent plane  作为第 2 单元平面

我们有 $f(1,2)=3$、$f_x(1,2)=4$ 和 $f_y(1,2)=1$。  tangent plane  是 

$$
z-3=4(x-1)+(y-2).
$$


等价地，

$$
\begin{bmatrix}-4\\-1\\1\end{bmatrix}\cdot
          \begin{bmatrix}
            x-1\\
            y-2\\
            z-3
          \end{bmatrix}
          =0.
$$

 A  normal vector  是 $\mathbf n=(-4,-1,1)^T$。被重用的单元 2 的想法是一个由点和  normal vector  描述的平面。


<a id="sol-u3-checkpoint-scalar-local-linear-prediction"></a>

##  Scalar 本地 linear 预测

从之前的 function 、$f(\mathbf a)=f(1,2)=3$和

$$
\nabla f(\mathbf a)=\begin{bmatrix}4\\1\end{bmatrix}.
$$

本地 linear 预测为

$$
3+\begin{bmatrix}4&1\end{bmatrix}
          \begin{bmatrix}0.1\\-0.2\end{bmatrix}
          =3+0.2=3.2.
$$


实际值是

$$
f(1.1,1.8)=1.1^2+1.1(1.8)=3.19.
$$

误差实际减去预测是$3.19-3.2=-0.01$。


<a id="sol-u3-checkpoint-vector-local-linear-prediction"></a>

##  Vector 值局部 linear 预测

我们有 

$$
F(\mathbf a)=F(1,0)=\begin{bmatrix}0\\1\end{bmatrix}
$$

并且根据之前的  Jacobian matrix  练习，

$$
J_F(\mathbf a)\mathbf h=
          \begin{bmatrix}
            0&1\\
            1&1
          \end{bmatrix}
          \begin{bmatrix}0.1\\-0.2\end{bmatrix}
          =
          \begin{bmatrix}-0.2\\-0.1\end{bmatrix}.
$$


因此，局部预测为 

$$
F(\mathbf a)+J_F(\mathbf a)\mathbf h=\begin{bmatrix}-0.2\\0.9\end{bmatrix}.
$$

 实际值约为 

$$
F(1.1,-0.2)=\begin{bmatrix}-0.242\\0.9006\end{bmatrix}.
$$

 误差  vector  测量实际输出减去预测输出。


<a id="sol-u3-checkpoint-locally-forgotten-direction"></a>

## 局部忘记方向

一个选择是

$$
\mathbf h=\begin{bmatrix}-2\\1\end{bmatrix},
$$

因为

$$
\begin{bmatrix}1&2\\2&4\end{bmatrix}
          \begin{bmatrix}-2\\1\end{bmatrix}
          =
          \begin{bmatrix}0\\0\end{bmatrix}.
$$


这个方向在 Jacobian matrix 的 null space 中，所以本地 linear map 忘记了它是第一顺序。这直接连接到单元 2 零空间。它并不能准确证明$F(\mathbf a+\mathbf h)=F(\mathbf a)$，因为 Jacobian matrix 只给出局部 linear approximation 。


<a id="sol-u3-checkpoint-chain-rule-shape-check"></a>

## 链式法则  shape  检查

由于$G:\mathbb R^2\to\mathbb R^3$， Jacobian matrix $J_G(\mathbf a)$有 shape $3\times2$。由于$F:\mathbb R^3\to\mathbb R^2$， Jacobian matrix $J_F(G(\mathbf a))$有 shape $2\times3$。

因此

$$
J_{F\circ G}(\mathbf a)=J_F(G(\mathbf a))J_G(\mathbf a)
$$

有 shape $2\times2$。相反的顺序是不正确的，因为 shapes 与 composition 的顺序不匹配，并且一般情况下 Jacobian matrix 产品不能交换。


<a id="sol-u3-checkpoint-tiny-nonlinear-block"></a>

## 读取一个微小的 sigmoid 块

行

$$
\mathbf{s}=W_1\mathbf{x}+\mathbf{b}_1,\qquad \mathbf{y}=W_2\mathbf{u}+\mathbf{b}_2
$$

 是 affine maps 。行 `u = sigmoid(s)` 包含坐标方向  nonlinear  步骤。

变量 `x`、`s`、`u`、`b1`、`b2` 和 `y` 都表示  vectors 。 matrix  $D$ 的对角线上存放的是 sigmoid 在 $\mathbf{s}$ 各个  coordinate  处的  derivative 。代码 `J_at_x = W2 @ D @ W1` 计算的是 $\mathbf{x}$ 处的  Jacobian matrix 。由于含有 bias 项以及逐个坐标计算 sigmoid 的步骤，整个模块通常并不是单个  linear map 。


<a id="sol-u3-square-grid-corners-not-enough"></a>

## 角不够

两个地图都将四个角发送到相同的四个输出：

$$
\begin{bmatrix}0\\0\end{bmatrix}\mapsto\begin{bmatrix}0\\0\end{bmatrix},
          \quad
          \begin{bmatrix}1\\0\end{bmatrix}\mapsto\begin{bmatrix}1\\0\end{bmatrix},
          \quad
          \begin{bmatrix}1\\1\end{bmatrix}\mapsto\begin{bmatrix}2\\1\end{bmatrix},
          \quad
          \begin{bmatrix}0\\1\end{bmatrix}\mapsto\begin{bmatrix}1\\1\end{bmatrix}.
$$


但是 

$$
T\left(\begin{bmatrix}0\\1/2\end{bmatrix}\right)
          =
          \begin{bmatrix}1/2\\1/2\end{bmatrix},
          \qquad
          F\left(\begin{bmatrix}0\\1/2\end{bmatrix}\right)
          =
          \begin{bmatrix}1/4\\1/2\end{bmatrix}.
$$

 所以角点测试忽略了差异。网格采样更多点，包括边缘和内部点，并且可以显示弯曲。


<a id="sol-u3-local-square-grid-error"></a>

## 局部方格误差

 Jacobian matrix  是 

$$
J_F(x,y)
          =
          \begin{bmatrix}
            1&2y\\
            0&1
          \end{bmatrix}.
$$

 在 

$$
\mathbf{a}
          =
          \begin{bmatrix}
            0\\
            1/2
          \end{bmatrix},
$$

 我们得到 

$$
J_F(\mathbf{a})
          =
          \begin{bmatrix}
            1&1\\
            0&1
          \end{bmatrix}.
$$


对于

$$
\mathbf{h}
          =
          \begin{bmatrix}
            h_1\\
            h_2
          \end{bmatrix},
$$

我们有

$$
F(\mathbf{a}+\mathbf{h})-F(\mathbf{a})
          =
          \begin{bmatrix}
            h_1+h_2+h_2^2\\
            h_2
          \end{bmatrix}
$$

和

$$
J_F(\mathbf{a})\mathbf{h}
          =
          \begin{bmatrix}
            h_1+h_2\\
            h_2
          \end{bmatrix}.
$$


因此，如果$|h_2|\le r$，则

$$
F(\mathbf{a}+\mathbf{h})-F(\mathbf{a})-J_F(\mathbf{a})\mathbf{h}
          =
          \begin{bmatrix}
            h_2^2\\
            0
          \end{bmatrix}.
$$

则$h_2^2\le r^2$，因此随着正方形缩小，误差将为零。


<a id="sol-u3-code-square-grid-arrays"></a>

## 代码解读：方格数组

数组$P$有 shape $2\times 5$。它的 columns 是输入点。最后一个 column 是

$$
\begin{bmatrix}
            0\\
            1/2
          \end{bmatrix}.
$$


对应的输出 column 是

$$
\begin{bmatrix}
            1/4\\
            1/2
          \end{bmatrix}.
$$

表达式`np.vstack([x + y**2, y])`将$F$的两个输出分量构建为新$2\times 5$数组的 rows 。这不是  matrix multiplication ，因为第一个输出  component  包含 $y^2$，即  nonlinear  操作。


<a id="sol-u3-relu-activation-pattern-local-matrix"></a>

## Sigmoid  derivative  和局部  matrix 

在

$$
\mathbf{a}
          =
          \begin{bmatrix}
            0\\
            0
          \end{bmatrix},
$$

我们得到

$$
\mathbf{s}_{\mathbf a}=W_1\mathbf a+\mathbf b_1
          =
          \begin{bmatrix}
            0\\
            0\\
            0
          \end{bmatrix}.
$$


因此

$$
\mathbf{u}_{\mathbf a}
          =
          \sigma(\mathbf{s}_{\mathbf a})
          =
          \begin{bmatrix}
            1/2\\
            1/2\\
            1/2
          \end{bmatrix},
          \qquad
          D_{\mathbf a}
          =
          \operatorname{diag}(1/4,1/4,1/4).
$$

 因此

$$
W_2D_{\mathbf a}W_1
          =
          \begin{bmatrix}
            1&0&-1/2\\
            0&1&1/2
          \end{bmatrix}
          \begin{bmatrix}
            1/4&0&0\\
            0&1/4&0\\
            0&0&1/4
          \end{bmatrix}
          \begin{bmatrix}
            1&0\\
            0&1\\
            1&1
          \end{bmatrix}
          =
          \begin{bmatrix}
            1/8&-1/8\\
            1/8&3/8
          \end{bmatrix}.
$$


它的 determinant 是

$$
(1/8)(3/8)-(-1/8)(1/8)=1/16,
$$

所以这个本地 matrix 是 invertible 。

对于$\mathbf c=\begin{bmatrix}1\\0\end{bmatrix}$，我们得到

$$
\mathbf{s}_{\mathbf c}
          =
          \begin{bmatrix}
            1\\
            0\\
            1
          \end{bmatrix},
          \qquad
          D_{\mathbf c}=\operatorname{diag}(d,1/4,d),
          \qquad
          d=\sigma(1)(1-\sigma(1)).
$$

 由于$d\ne 1/4$，$D_{\mathbf c}$的第一个和第三个条目与$D_{\mathbf a}$的相应条目不同。该块是平滑的，但 sigmoid  derivative  随输入变化，因此  Jacobian matrix  可以随基点变化。


<a id="sol-u3-code-relu-block-arrays"></a>

## 代码解读：sigmoid块数组

数组$P$有 shape $2\times 3$。它的 columns 是输入点。由于$W_1$有 shape $3\times 2$，因此数组$S=W_1P+\mathbf{b}_1$有 shape $3\times 3$。数组$U=\sigma(S)$具有相同的 shape 。

 nonlinear 运算是


```python
U = sigmoid(S)
```

$P$ 的第一个  column  是 

$$
\begin{bmatrix}
            0\\
            0
          \end{bmatrix}.
$$

 对于此输入，

$$
\mathbf{s}=
          \begin{bmatrix}
            0\\
            0\\
            0
          \end{bmatrix},
          \qquad
          \mathbf{u}=
          \begin{bmatrix}
            1/2\\
            1/2\\
            1/2
          \end{bmatrix}.
$$


因此，第一个输出  column  是 

$$
W_2\mathbf{u}+\mathbf{b}_2
          =
          \begin{bmatrix}
            1/4\\
            3/4
          \end{bmatrix}.
$$

 完整计算不是  matrix multiplication  $AP$，因为 sigmoid 步长是  nonlinear 。


<a id="sol-u3-softmax-weights-data-dependent"></a>

##  Softmax  权重取决于数据

得分 vector 为

$$
\mathbf{s}
          =
          K\mathbf{q}
          =
          \begin{bmatrix}
            3q_1\\
            3q_2\\
            -3q_1-3q_2
          \end{bmatrix}.
$$


在 $\mathbf{q}=\mathbf{0}$、

$$
\mathbf{s}
          =
          \begin{bmatrix}
            0\\
            0\\
            0
          \end{bmatrix}.
$$

 三个分数相等，因此  softmax  权重为 

$$
\boldsymbol{\alpha}(\mathbf{0})
          =
          \begin{bmatrix}
            1/3\\
            1/3\\
            1/3
          \end{bmatrix}.
$$


因此

$$
F(\mathbf{0})
          =
          V^T
          \begin{bmatrix}
            1/3\\
            1/3\\
            1/3
          \end{bmatrix}
          =
          \begin{bmatrix}
            1/3\\
            1/3
          \end{bmatrix}.
$$


由于 linear map 必须将$\mathbf{0}$发送到$\mathbf{0}$，因此映射$F$不是 linear 。

 softmax  项是正数，并添加到 $1$，因此 $F(\mathbf{q})$ 始终是 $V$ 的  rows  的  weighted average 。  nonlinear 步骤是将分数转化为权重的 softmax 规则。


<a id="sol-u3-code-softmax-square-grid-arrays"></a>

## 代码解读： softmax 方格数组

数组$P$有 shape $2\times 4$。它的 columns 是 query  vectors 。由于 $K$ 有  shape  $3\times 2$，因此乘积 

$$
S=KP
$$

 有  shape  $3\times 4$。数组`Alpha`还有 shape $3\times 4$，每个 column 中有一个 softmax 权重 vector 。

由于 $V^T$ 有  shape  $2\times 3$，因此乘积 

$$
Q=V^T\mathrm{Alpha}
$$

 有  shape  $2\times 4$。其 columns 输出 vectors 。

 nonlinear 运算是


```python
Alpha = softmax_columns(S)
```

完整的计算不是一个  matrix multiplication  $AP$，因为  softmax  步骤使用指数和  column  和。权重与分数非线性相关，而分数取决于 $P$。


<a id="sol-u3-reading-square-grid-behavior"></a>

## 读取方格行为

地图A是 nonlinear  shear 。由于$y^2$项，它可以平滑地弯曲网格线，并且可以在四个角上与 linear  shear 一致，但在边缘和内部点上有所不同。

**Map B is the sigmoid block**: 其本地  matrix  的形式为 $W_2D_{\mathbf a}W_1$，其中 $D_{\mathbf a}$ 存储 sigmoid  derivatives 。它的网格可以弯曲和压缩，因为那些  derivatives  取决于输入。

地图C是 attention 式 softmax 地图。输出为 

$$
V^T\boldsymbol{\alpha},
$$

其中 $\boldsymbol{\alpha}$ 的条目为正，添加到 $1$，并取决于输入。因此，输出是  value vectors  的  weighted average  并保持在它们形成的三角形内。

因此，行为 1 和 4 与映射 A 匹配，行为 2 和 5 与映射 B 匹配，行为 3 和 6 与映射 C 匹配。映射 A 最好地说明了为什么仅四个角就会错过  nonlinear  行为。地图 B 最好地显示了  Jacobian   matrices  的  chain rule 。地图C最好地展示了 attention 风格的 weighted averages 。方形网格可视化可以显示仅四个角可能会错过的弯曲、压缩和变化的局部行为。

