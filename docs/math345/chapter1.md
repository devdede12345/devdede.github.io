# 第一章：向量、矩阵与线性映射

> 中文改写学习笔记，对应教材 Unit 1。按教材知识结构重新讲解，例题与代码用于辅助理解；不是逐字全译。完整活动、插图及全部习题请参阅[教材原章](https://math345-textbook.github.io/u1-vectors-matrices-linear-maps.html)。[来源与许可](sources.md)。

## 1.1 向量（Vectors）

### 数、坐标与位移

**标量（scalar）**是一个实数。**向量（vector）**是有顺序的一组数：

$$
\mathbf v=(v_1,\ldots,v_n)\in\mathbb R^n.
$$

顺序和分量个数都重要。例如 $(1,2)$ 与 $(2,1)$ 不相等。运算时常把向量写成列：

$$
\mathbf v=\begin{bmatrix}v_1\\\vdots\\v_n\end{bmatrix}.
$$

向量可以表示几何位移，也能记录像素、词频、价格或模型参数。坐标必须采用相同的特征顺序，比较才有意义。

若 $P=(p_1,\ldots,p_n)$、$Q=(q_1,\ldots,q_n)$，从 $P$ 到 $Q$ 的位移为 $Q-P$。箭头可以平移，位移向量本身不变。例如从 $(2,-1)$ 到 $(5,3)$ 的位移是 $(3,4)$。

### 加法、数乘与线性组合

$$
\mathbf u+\mathbf v=(u_1+v_1,\ldots,u_n+v_n),\qquad
c\mathbf v=(cv_1,\ldots,cv_n).
$$

加法在几何上可以用首尾相接或平行四边形理解。数乘改变长度，负数还会反转方向；$0\mathbf v=\mathbf0$。减法是加上相反向量。

**线性组合（linear combination）**为

$$
c_1\mathbf v_1+\cdots+c_k\mathbf v_k.
$$

如果每个 $c_i\geq0$ 且 $\sum_i c_i=1$，则称为**凸组合（convex combination）**，可理解为加权平均。例如 $\frac14(4,0)+\frac34(0,8)=(1,6)$，结果位于两点之间的线段上。

### 长度、距离、点积与夹角

欧几里得范数（Euclidean norm）为

$$
\|\mathbf v\|=\sqrt{v_1^2+\cdots+v_n^2}.
$$

向量间距离是 $\|\mathbf u-\mathbf v\|$，而不是两个长度之差。非零向量的单位化结果为 $\mathbf v/\|\mathbf v\|$。

点积（dot product）把两个同维向量变成一个标量：

$$
\mathbf u\cdot\mathbf v=\sum_{i=1}^n u_iv_i=\mathbf u^T\mathbf v,
\qquad \mathbf v\cdot\mathbf v=\|\mathbf v\|^2.
$$

它对加法满足分配律。对非零向量，

$$
\cos\theta=\frac{\mathbf u\cdot\mathbf v}{\|\mathbf u\|\|\mathbf v\|}.
$$

右侧也称**余弦相似度（cosine similarity）**，范围为 $[-1,1]$。接近 $1$ 表示方向相近，$0$ 表示正交，接近 $-1$ 表示方向相反。零向量与任意向量点积为零，但涉及零向量的夹角、余弦相似度没有定义。

**例：**$\mathbf u=(1,2)$、$\mathbf v=(2,-1)$，则 $\mathbf u\cdot\mathbf v=2-2=0$，所以两者正交。

### 应用：距离与相似度回答不同问题

把文档的词频写成向量。查询 $\mathbf q=(1,1)$ 与文档 $\mathbf d=(5,5)$ 的方向完全相同，余弦相似度为 $1$，但距离为 $4\sqrt2$。因此“内容比例相似”并不意味着“数值接近”。

点积也可以表示总价：商品数量向量 $\mathbf q$ 与单价向量 $\mathbf p$ 的点积就是账单总额。

[阅读教材 1.1](https://math345-textbook.github.io/sec-u1-vector-geometry.html)

## 1.2 矩阵（Matrices）

一个 $m\times n$ 矩阵有 $m$ 行、$n$ 列，记作 $A\in\mathbb R^{m\times n}$。元素 $a_{ij}$ 的第一个下标是行，第二个下标是列。

$$
A=\begin{bmatrix}1&2&3\\4&5&6\end{bmatrix}\in\mathbb R^{2\times3}.
$$

矩阵可以存储数据，也能表示作用于向量的变换。相同大小的矩阵才可以逐项相加；数乘则是每个元素都乘同一个数。

### 转置与特殊矩阵

转置（transpose）交换行和列：$(A^T)_{ij}=a_{ji}$。因此 $A^T$ 的大小为 $n\times m$，且

$$
(A^T)^T=A,\quad (A+B)^T=A^T+B^T,\quad(cA)^T=cA^T.
$$

- **零矩阵**：所有元素为零。
- **方阵**：行数等于列数。
- **单位矩阵 $I_n$**：主对角线为 $1$，其余为 $0$。
- **对角矩阵**：主对角线以外的元素均为 $0$。
- **对称矩阵**：满足 $A^T=A$ 的方阵。

判断两个矩阵相等，先检查大小，再检查每个对应元素。

[阅读教材 1.2](https://math345-textbook.github.io/sec-u1-matrix-operations.html)

## 1.3 矩阵与向量的乘积、线性映射

### 两种计算视角

若 $A\in\mathbb R^{m\times n}$、$\mathbf x\in\mathbb R^n$，则 $A\mathbf x\in\mathbb R^m$。

**行视角：**输出的第 $i$ 个分量，是第 $i$ 行与 $\mathbf x$ 的点积：

$$
(A\mathbf x)_i=\sum_{j=1}^n a_{ij}x_j.
$$

**列视角：**设矩阵各列为 $\mathbf a_1,\ldots,\mathbf a_n$，则

$$
A\mathbf x=x_1\mathbf a_1+\cdots+x_n\mathbf a_n.
$$

这两个视角给出相同结果：每一行负责一个输出，每一列描述一个输入坐标的贡献。

**例：**

$$
\begin{bmatrix}1&2\\-1&3\end{bmatrix}
\begin{bmatrix}4\\1\end{bmatrix}
=\begin{bmatrix}6\\-1\end{bmatrix}
=4\begin{bmatrix}1\\-1\end{bmatrix}+\begin{bmatrix}2\\3\end{bmatrix}.
$$

### 几何变换

| 变换 | 矩阵 | 对输入 $(x,y)$ 的作用 |
|---|---|---|
| 分别缩放 | $\begin{bmatrix}a&0\\0&b\end{bmatrix}$ | $(ax,by)$ |
| 关于 $x$ 轴反射 | $\begin{bmatrix}1&0\\0&-1\end{bmatrix}$ | $(x,-y)$ |
| 投影到 $x$ 轴 | $\begin{bmatrix}1&0\\0&0\end{bmatrix}$ | $(x,0)$ |
| 水平剪切 | $\begin{bmatrix}1&k\\0&1\end{bmatrix}$ | $(x+ky,y)$ |
| 逆时针旋转 $\theta$ | $\begin{bmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{bmatrix}$ | 旋转、保持长度 |

矩阵的第 $j$ 列就是标准单位向量 $\mathbf e_j$ 变换后的位置：$A\mathbf e_j=\mathbf a_j$。知道基向量去了哪里，就能重建整个线性映射。

### 线性与仿射

映射 $T:\mathbb R^n\to\mathbb R^m$ 是**线性的（linear）**，当且仅当

$$
T(\mathbf u+\mathbf v)=T(\mathbf u)+T(\mathbf v),\qquad
T(c\mathbf u)=cT(\mathbf u).
$$

等价地，$T(a\mathbf u+b\mathbf v)=aT(\mathbf u)+bT(\mathbf v)$。矩阵映射 $T(\mathbf x)=A\mathbf x$ 都是线性的，反过来每个这样的线性映射也能用矩阵表示。

线性映射必有 $T(\mathbf0)=\mathbf0$；这只是必要条件，不能单靠它证明线性。例如 $T(x)=x^2$ 过原点，但不满足可加性。

$F(\mathbf x)=A\mathbf x+\mathbf b$ 称为**仿射映射（affine map）**。当 $\mathbf b\ne\mathbf0$ 时，它不是线性的。

[阅读教材 1.3](https://math345-textbook.github.io/sec-u1-matrix-vector-geometric-actions.html)

## 1.4 矩阵乘法与映射复合

若 $A$ 为 $m\times n$、$B$ 为 $n\times p$，则 $AB$ 为 $m\times p$。内侧维数必须相同：

$$
(AB)_{ij}=\sum_{k=1}^n a_{ik}b_{kj}.
$$

也可以逐列计算：$AB=[A\mathbf b_1\ \cdots\ A\mathbf b_p]$。

### 复合从右往左读

$$
(AB)\mathbf x=A(B\mathbf x).
$$

先做 $B$，再做 $A$。例如

$$
R=\begin{bmatrix}0&-1\\1&0\end{bmatrix},\qquad
S=\begin{bmatrix}2&0\\0&1\end{bmatrix}.
$$

$R$ 表示逆时针旋转 $90^\circ$，$S$ 表示把水平方向拉长两倍。直接计算：

$$
RS=\begin{bmatrix}0&-1\\2&0\end{bmatrix},\qquad
SR=\begin{bmatrix}0&-2\\1&0\end{bmatrix}.
$$

因此 $AB$ 通常不等于 $BA$。有时 $AB$ 有定义，而 $BA$ 根本没有定义。

### 可使用的规则

在维数允许时，

$$
A(BC)=(AB)C,\quad A(B+C)=AB+AC,\quad(A+B)C=AC+BC,
$$

$$
AI=IA=A,\qquad(AB)^T=B^TA^T.
$$

注意转置会反转乘法顺序。$AB=0$ 也不意味着 $A=0$ 或 $B=0$：非零映射也可能把另一个矩阵所有列所处的方向压到零。

### 多个查询的批量计算

若 $K\in\mathbb R^{N\times d}$ 的每一行是一个 key，$\mathbf q\in\mathbb R^d$ 是一个 query，则 $K\mathbf q$ 一次得到 $N$ 个点积分数。多个 query 按行组成 $Q\in\mathbb R^{M\times d}$ 后，全部分数为 $QK^T\in\mathbb R^{M\times N}$。

这只是点积打分；完整注意力还会涉及归一化等后续操作，不能把整个注意力机制直接当成固定矩阵线性映射。

[阅读教材 1.4](https://math345-textbook.github.io/sec-u1-matrix-multiplication-composition.html)

## 1.5 编程回顾

```python
import numpy as np

A = np.array([[1., 2.], [-1., 3.]])
x = np.array([4., 1.])
u = np.array([1., 2.])
v = np.array([2., -1.])

print(A.shape)                 # (2, 2)
print(A @ x)                   # [ 6. -1.]
print(A.T)                     # 转置
print(u @ v)                   # 点积：0.0
print(np.linalg.norm(u))        # 长度：sqrt(5)
print(np.linalg.norm(u - v))    # 距离
print((u @ v) / (np.linalg.norm(u) * np.linalg.norm(v)))
```

- `@` 是矩阵乘法，`*` 对 NumPy 数组是逐元素乘法。
- `(n,)` 是一维数组；`(n, 1)` 是二维列向量，`(1, n)` 是二维行向量。
- 一维数组 `x.T` 的形状仍是 `(n,)`，需要时用 `x.reshape(-1, 1)`。
- Python 从下标 `0` 开始计数；`A[0, 1]` 是数学上的 $a_{12}$。
- 浮点计算比较用 `np.allclose(...)`，避免把舍入误差当成数学反例。

[教材代码回顾与原始 notebook 入口](https://math345-textbook.github.io/sec-u1-apps-computation.html)

## 1.6 自测练习

以下为本笔记配套练习，教材完整习题见[1.6 Exercises](https://math345-textbook.github.io/u1-exercises.html)。

1. 对 $\mathbf u=(3,4)$、$\mathbf v=(4,-3)$，计算长度、点积、距离与夹角。
2. 若 $A$ 为 $2\times3$、$B$ 为 $3\times4$，写出 $AB$、$BA$ 是否有定义及大小。
3. 判断 $T(x,y)=(x+2y,3x)$ 和 $F(x,y)=(x+1,y)$ 是否线性。
4. 写出先旋转 $90^\circ$、再把水平方向拉长两倍的矩阵。

??? success "参考答案"
    1. 两者长度均为 $5$，点积为 $0$，距离为 $\sqrt{50}$，夹角 $90^\circ$。
    2. $AB$ 为 $2\times4$；$BA$ 无定义。
    3. $T$ 线性，矩阵是 $\begin{bmatrix}1&2\\3&0\end{bmatrix}$；$F$ 仿射但非线性。
    4. $SR=\begin{bmatrix}0&-2\\1&0\end{bmatrix}$，先作用的矩阵在右侧。

## 1.7 本章要点与易错点

- 向量是数据表示，矩阵既可以存数据，也可以描述线性映射。
- $A\mathbf x$ 同时是行点积和列的线性组合。
- 加法要求大小相同；乘法要求内侧维数匹配。
- 向量点积产生标量；矩阵乘向量产生向量。
- 线性映射必须保留所有线性组合，过原点还不够。
- $AB$ 表示先 $B$ 后 $A$，一般不能交换顺序。
- 余弦相似度看方向；欧几里得距离看位置差异。

下一章用这些运算回答：哪些输出可以到达？哪些输入会被映射成同一个输出？

[教材本章总结](https://math345-textbook.github.io/u1-highlights.html) · [继续第二章](chapter2.md)
