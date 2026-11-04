# 从 AP Calculus BC 到第三、四章 {#ap-calculus-bc}

这份桥梁导读假设你学过单变量 limit、 derivative、 chain rule、 tangent-line approximation 与 Taylor 级数；不假设你已经熟练掌握 vector、 matrix 或 linear 代数证明。它是为本汉化版新增的教学讲解，不是原书译文。

## 你已学过的知识如何继续使用 {#_1}

| BC 中熟悉的概念 | 第三、四章的延伸 | 保留的核心思路 |
|---|---|---|
| 一个数 x 输入，一个数 f(x) 输出 | 输入和输出都可能是多个数 | 先看清输入和输出各是什么 |
| derivative f′(a) | gradient 与 Jacobian | 描述附近的小变化 |
| tangent-line approximation | tangent plane 与 local linearization | 原值 + 预测变化 |
| chain rule | 各路径贡献相加、Jacobian 相乘 | 逐层传递变化 |
| f′(a)=0 的候选极值点 | ∇f(a)=0 的 critical point | 一阶变化为零不保证是极值 |
| 最小化一个变量的误差 | least squares | 在允许的选择中使误差最小 |

## 1. vector 只是把几个数放在一起 {#1}

**Vector**: 例如 $\mathbf x=(2,3)^T$，可以描述平面上的点、位移或一份包含两个数的数据。这里上标 T 表示 transpose，把横着写的数列竖起来，不是乘方。

$$
\mathbf x=\begin{pmatrix}2\\3\end{pmatrix},\qquad
\mathbf h=\begin{pmatrix}0.1\\-0.2\end{pmatrix},\qquad
\mathbf x+\mathbf h=\begin{pmatrix}2.1\\2.8\end{pmatrix}
$$

h 是变化量：第一个 coordinate 加 0.1，第二个 coordinate 减 0.2。字母加粗只是提醒你“里面有多个数”。

$\mathbb R$ 是实数集合，$\mathbb R^2$ 是所有实数对，$\mathbb R^n$ 是所有 n 个实数组成的 vector。 dimension 描述有多少 coordinate，不是把实数做 n 次幂。

## 2. dot product 与长度 {#2}

**Dot Product**: 对应 coordinate 相乘，再相加，结果是一个数。

$$
\begin{pmatrix}2\\3\end{pmatrix}\cdot
\begin{pmatrix}4\\-1\end{pmatrix}
=2\cdot4+3\cdot(-1)=5
$$

**Norm**: 这里使用欧几里得长度。勾股定理给出：

$$
\|\mathbf x\|=\sqrt{x_1^2+\cdots+x_n^2}
$$

例如 (3,4) 的长度是 5；除以长度得到 unit vector (3/5,4/5)。 normalization 只改变长度，不改变方向。

## 3. matrix 是有输入与输出的计算规则 {#3}

**Matrix**: 按行列排列的数表。m×n 表示 m row、n column。 matrix A 乘以 n 个数的 column vector，输出 m 个数。

$$
A=\begin{pmatrix}1&2\\0&1\end{pmatrix},\qquad
A\begin{pmatrix}x\\y\end{pmatrix}
=\begin{pmatrix}x+2y\\y\end{pmatrix}
$$

每一行计算一个输出。例如输入 (3,4)，输出为 (11,4)。 matrix 不必是 square matrix：2×3 matrix 接收三个数、输出两个数。

## 4. matrix multiplication 不要凭位置直接相乘 {#4}

结果第 i row、第 j column 来自“左边第 i row，与右边第 j column 作 dot product”：

$$
\begin{pmatrix}4&1\\-1&2\end{pmatrix}
\begin{pmatrix}1&2\\0&1\end{pmatrix}
=
\begin{pmatrix}
4\cdot1+1\cdot0&4\cdot2+1\cdot1\\
(-1)\cdot1+2\cdot0&(-1)\cdot2+2\cdot1
\end{pmatrix}
=
\begin{pmatrix}4&9\\-1&0\end{pmatrix}
$$

dimension 检查：$(m\times p)(p\times n)$ 才能得到 m×n。先作用右边的 matrix，再作用左边的 matrix：$AB\mathbf x=A(B\mathbf x)$。

## 5. transpose、 identity matrix 与几个空间 {#5}

**Transpose**: 行列互换。 column vector 的 transpose 是 row vector；A 的第 i column 会成为 Aᵀ 的第 i row。因此 Aᵀr 收集 r 与 A 各 column 的 dot product。

**Identity Matrix**: identity matrix I；对角线为 1，其余为 0，满足 I x=x。下标 Iₙ 表示 n×n。

**Linear Combination**: 把 vector 分别乘 coefficient 后相加。例如 2a₁−a₂。

**Span**: 所有可能的 linear combination。一个非零方向的 span 是过原点的直线，两个不共线方向的 span 是过原点的平面。

**Column Space**: column space col(A)；A 的 column 能产生的所有 linear combination，也就是所有可达输出 Ax 的集合。

**Null Space**: null space null(A)；所有满足 Az=0 的输入 z。若 Az=0，则 A(x+z)=Ax；不同输入可能给出同一输出。

**Basis**: 既能 span，又没有冗余方向的 vector 组。“linearly independent”表示只有全零 coefficient 才会组合出 zero vector。

**Rank**: column space 的 dimension，也就是独立 column 方向的数量。 full column rank 表示每个 column 都贡献一个独立方向，不代表 column space 一定覆盖整个输出空间。

## 6. 阅读顺序与证明 {#6}

先读各章开头的 BC 导读，再按小节阅读教材定义、例题和证明。公式出现时依次问：变量是什么？每个对象是数、 vector 还是 matrix？输入在哪个点？结果应是什么形状？

证明通常只反复使用少量工具：展开 dot product、 orthogonal 项为零、平方非负、 matrix multiplication 结合律。第一次阅读可以先弄懂定理的条件和结论，再展开证明；但练习若要求证明，仍需写清理由。

不要把“不熟悉符号”误认为“不懂微积分”。第三章仍在描述变化，第四章仍在寻找最小误差，只是一次处理多个 coordinate。

[开始第三章](3-index.md) · [开始第四章](4-index.md)
