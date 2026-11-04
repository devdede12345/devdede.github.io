# 第二章：剖析线性映射

> 中文改写学习笔记，对应教材 Unit 2。涵盖主要定义、计算方法和概念联系，并配有独立练习；不是逐字全译。完整证明、活动、插图及全部习题请参阅[教材原章](https://math345-textbook.github.io/u2-anatomy-linear-map.html)。[来源与许可](sources.md)。

## 2.1 理解线性映射的三个问题

设 $T(\mathbf x)=A\mathbf x$，其中 $A\in\mathbb R^{m\times n}$。

1. **可达性：**指定输出 $\mathbf b$ 能否由某个输入产生？即 $A\mathbf x=\mathbf b$ 有没有解。
2. **唯一性：**如果有解，能否唯一确定输入？
3. **信息保留：**哪些输入方向被压成了零？

例如 $P=\begin{bmatrix}1&0&0\\0&1&0\end{bmatrix}$ 把 $(x,y,z)$ 映成 $(x,y)$：所有二维输出都能到达，但高度 $z$ 的信息丢失，因此无法唯一恢复三维输入。

本章把这些问题分别联系到像空间、零空间、秩和可逆性。

[阅读教材 2.1](https://math345-textbook.github.io/sec-u2-analyzing-linear-map.html)

## 2.2 线性方程组（Linear systems）

### 矩阵表示与几何意义

线性方程中的未知量只以一次形式出现，不能有 $x^2$、$xy$ 或 $\sin x$。常数可以是任意实数。

$$
\begin{cases}x+2y=5,\\3x-y=1\end{cases}
\quad\Longleftrightarrow\quad
\begin{bmatrix}1&2\\3&-1\end{bmatrix}
\begin{bmatrix}x\\y\end{bmatrix}
=\begin{bmatrix}5\\1\end{bmatrix}.
$$

把系数和右端合并为**增广矩阵（augmented matrix）** $[A\mid\mathbf b]$。竖线右边不是新变量。

二维的一条线性方程通常描述直线，三维通常描述平面；联立就是求它们的公共部分。平行的两个平面可能重合，也可能没有交点；法向量不平行的两个平面相交成一条直线。

### 直线与平面

经过 $\mathbf p$、方向为非零向量 $\mathbf v$ 的直线为

$$
\mathbf x=\mathbf p+t\mathbf v,\quad t\in\mathbb R.
$$

三维中，经过 $\mathbf p$、法向量为 $\mathbf n\ne\mathbf0$ 的平面满足

$$
\mathbf n\cdot(\mathbf x-\mathbf p)=0.
$$

若 $\mathbf n=(a,b,c)$，则得到 $ax+by+cz=d$，其中 $d=\mathbf n\cdot\mathbf p$。也可以用两个线性无关的方向向量表示平面：$\mathbf x=\mathbf p+s\mathbf u+t\mathbf v$。

### 初等行变换

以下操作不改变方程组的解集：

- 交换两行。
- 把一行乘以非零常数。
- 把一行的若干倍加到另一行。

**必须对整行操作，包括右端常数。**不能把一行乘以零，因为这样会丢掉约束。

### 阶梯形与高斯消元

教材的**行阶梯形（REF）**约定：零行放在底部，每个非零行首个非零元素为 $1$，且这些主元逐行向右移动，主元下方为零。有些其他教材允许 REF 主元不为 $1$，做题时以本课定义为准。

**简化行阶梯形（RREF）**进一步要求每个主元是该列唯一非零元素。

高斯消元的基本流程：从左侧寻找可用主元，必要时换行，将主元标准化并消去下方元素，再向右下方继续；需要 RREF 时继续消去主元上方元素。

### 解的分类

若出现 $[0\ \cdots\ 0\mid d]$ 且 $d\ne0$，就得到矛盾 $0=d$，方程组无解。

否则方程组相容（consistent）：主元列对应主变量，其余变量为自由变量。若有 $n$ 个未知量、系数部分有 $r$ 个主元，则自由参数个数为 $n-r$。

- 相容且 $r=n$：唯一解。
- 相容且 $r<n$：无穷多解。
- 有矛盾行：无解，不论自由变量有多少。

### 完整例题：从消元到参数解

$$
\begin{cases}x+y+z=3,\\2x+2y+3z=7\end{cases}
$$

增广矩阵做 $R_2\leftarrow R_2-2R_1$，再做 $R_1\leftarrow R_1-R_2$：

$$
\left[\begin{array}{ccc|c}1&1&1&3\\2&2&3&7\end{array}\right]
\longrightarrow
\left[\begin{array}{ccc|c}1&1&1&3\\0&0&1&1\end{array}\right]
\longrightarrow
\left[\begin{array}{ccc|c}1&1&0&2\\0&0&1&1\end{array}\right].
$$

$x,z$ 是主变量，$y=t$ 自由，因此

$$
\mathbf x=\begin{bmatrix}2-t\\t\\1\end{bmatrix}
=\begin{bmatrix}2\\0\\1\end{bmatrix}
+t\begin{bmatrix}-1\\1\\0\end{bmatrix}.
$$

### 齐次系统与基本解

齐次系统 $A\mathbf x=\mathbf0$ 总有零解，故绝不会无解。若有自由变量，可依次把一个自由变量设为 $1$、其余设为 $0$，求得一组**基本解**。所有齐次解都是这些基本解的唯一线性组合。

[阅读教材 2.2](https://math345-textbook.github.io/sec-u2-systems-geometry-row-reduction.html)

## 2.3 子空间、零空间与像空间

### 子空间判定

$U\subseteq\mathbb R^n$ 是**子空间（subspace）**，需要满足：

1. $\mathbf0\in U$。
2. 若 $\mathbf u,\mathbf v\in U$，则 $\mathbf u+\mathbf v\in U$。
3. 若 $c\in\mathbb R$、$\mathbf u\in U$，则 $c\mathbf u\in U$。

过原点的直线、平面以及 $\mathbb R^n$ 都是例子。仅有原点仍不够：第一象限包含原点，却对负数倍不封闭。平移后不经过原点的直线也不是子空间。

### 零空间：被遗忘的输入方向

$$
\operatorname{null}(A)=\{\mathbf x\in\mathbb R^n:A\mathbf x=\mathbf0\}.
$$

它是输入空间 $\mathbb R^n$ 的子空间。线性性保证零空间对加法与数乘封闭。

### 像空间与列空间：能到达的输出

$$
\operatorname{im}(A)=\operatorname{col}(A)
=\{A\mathbf x:\mathbf x\in\mathbb R^n\}
\subseteq\mathbb R^m.
$$

设矩阵的列为 $\mathbf a_1,\ldots,\mathbf a_n$，由第一章列组合公式得

$$
\operatorname{col}(A)=\operatorname{span}\{\mathbf a_1,\ldots,\mathbf a_n\}.
$$

其中 **span（张成空间）**指全部线性组合组成的集合。判断 $\mathbf b$ 是否在给定向量的 span 中，把这些向量放成矩阵的列，再检验 $A\mathbf c=\mathbf b$ 是否相容。

### 非齐次通解的结构

如果 $\mathbf x_p$ 是 $A\mathbf x=\mathbf b$ 的一个特解，则所有解为

$$
\mathbf x=\mathbf x_p+\mathbf z,\qquad\mathbf z\in\operatorname{null}(A).
$$

证明思路：$A(\mathbf x-\mathbf x_p)=\mathbf b-\mathbf b=\mathbf0$；反过来给特解加上任何零空间向量，都不改变输出。若 $\mathbf b\ne\mathbf0$，这个非空解集是平移后的子空间，通常称仿射子空间，本身不是线性子空间。

[阅读教材 2.3](https://math345-textbook.github.io/sec-u2-subspaces.html)

## 2.4 线性无关、基与维数

### 线性无关

向量组 $\mathbf v_1,\ldots,\mathbf v_k$ **线性无关（linearly independent）**，是指

$$
c_1\mathbf v_1+\cdots+c_k\mathbf v_k=\mathbf0
\quad\Longrightarrow\quad c_1=\cdots=c_k=0.
$$

若存在非全零系数使组合为零，则线性相关。将向量放成矩阵的列，解齐次系统即可判断。有零向量的向量组必相关；在 $\mathbb R^n$ 中超过 $n$ 个向量必相关。

三个向量两两不平行，不代表整体无关。例如 $(1,0)$、$(0,1)$、$(1,1)$，第三个就是前两个的和。

### 基与维数

$U$ 的**基（basis）**必须同时张成 $U$ 且线性无关。每个 $\mathbf v\in U$ 都能且只能用这组基线性组合一次。

有限维空间所有基的向量个数相同，这个数称为**维数（dimension）**。零空间 $\{\mathbf0\}$ 的维数为 $0$，可用空集作基；$\{\mathbf0\}$ 自身不是一组线性无关的基向量。

若 $\dim U=d$，且已知有 $d$ 个向量属于 $U$，证明它们无关或证明它们张成 $U$，任一条件就能推出它们是一组基。少于 $d$ 个向量不能张成 $U$，多于 $d$ 个向量不可能无关。无关集可以扩充为基，张成集可以删去冗余向量变成基。

若 $U\subseteq W$，则 $\dim U\leq\dim W$；若两者维数相同，则 $U=W$。没有包含关系时，“维数相同”并不意味着空间相同。

### 基下坐标

给定有序基 $B=(\mathbf b_1,\ldots,\mathbf b_k)$，如果

$$
\mathbf v=c_1\mathbf b_1+\cdots+c_k\mathbf b_k,
$$

则坐标向量为 $[\mathbf v]_B=(c_1,\ldots,c_k)^T$。教材也使用 $C_B(\mathbf v)$ 记号。基的顺序改变，坐标会跟着改变。

例如基 $B=((1,1),(1,-1))$ 下，$(4,2)=3(1,1)+(1,-1)$，所以 $[(4,2)]_B=(3,1)$。

### 行空间、列空间和零空间的基

对 $m\times n$ 矩阵：

| 空间 | 所在环境 | 求基方法 |
|---|---|---|
| 列空间 $\operatorname{col}(A)$ | $\mathbb R^m$ | 用行化简定位主元列，取**原矩阵**中对应的列 |
| 行空间 $\operatorname{row}(A)$ | $\mathbb R^n$ | 取 REF 或 RREF 的非零行 |
| 零空间 $\operatorname{null}(A)$ | $\mathbb R^n$ | 解 $A\mathbf x=0$，取基本解 |

行变换保留行空间与零空间，但一般改变列空间，因此不能把化简后的主元列当作原矩阵列空间的基。

### 秩与零度

$$
\operatorname{rank}(A)=\dim\operatorname{col}(A)=\dim\operatorname{row}(A)
=\text{主元个数},
$$

$$
\operatorname{nullity}(A)=\dim\operatorname{null}(A)=\text{自由变量个数}.
$$

**秩—零度定理（rank–nullity）：**

$$
\operatorname{rank}(A)+\operatorname{nullity}(A)=n.
$$

右侧是**列数，即输入维数**。输出可独立变化的维数，加上被映成零的输入维数，等于输入总维数。

### 贯穿例题

$$
A=\begin{bmatrix}1&2&3\\0&1&1\end{bmatrix},\qquad
\operatorname{rref}(A)=\begin{bmatrix}1&0&1\\0&1&1\end{bmatrix}.
$$

主元列为第 $1,2$ 列，故秩为 $2$、零度为 $1$。

$$
\operatorname{col}(A)=\operatorname{span}\left\{
\begin{bmatrix}1\\0\end{bmatrix},\begin{bmatrix}2\\1\end{bmatrix}\right\}=\mathbb R^2,
$$

$$
\operatorname{null}(A)=\operatorname{span}\left\{\begin{bmatrix}-1\\-1\\1\end{bmatrix}\right\}.
$$

所有二维输出都能到达，但输入并不唯一：加上 $t(-1,-1,1)$ 不会改变结果。

### 数据中的冗余特征

如果数据矩阵 $X$ 的列线性相关，则存在 $\mathbf z\ne0$ 使 $X\mathbf z=0$。于是

$$
X(\boldsymbol\beta+t\mathbf z)=X\boldsymbol\beta.
$$

相同预测不一定来自相同系数。注意“变量有关系”不等于“线性冗余”：面积是长与宽的乘积，并不是它们固定系数的线性组合。

[阅读教材 2.4](https://math345-textbook.github.io/sec-u2-independence-bases-dimension.html)

## 2.5 逆矩阵与行列式

### 逆矩阵与可逆性

方阵 $A\in\mathbb R^{n\times n}$ 可逆，是指存在 $A^{-1}$ 满足

$$
AA^{-1}=A^{-1}A=I_n.
$$

逆矩阵唯一，表示撤销原变换；$A\mathbf x=\mathbf b$ 的解就是 $A^{-1}\mathbf b$。

对 $n\times n$ 方阵，以下条件等价：

- $A$ 可逆。
- $\operatorname{rank}(A)=n$，即每列、每行都有主元。
- $\operatorname{rref}(A)=I_n$。
- 列向量构成 $\mathbb R^n$ 的一组基；行向量也构成一组基。
- $\operatorname{null}(A)=\{\mathbf0\}$。
- 对**每个** $\mathbf b\in\mathbb R^n$，方程组都有唯一解。
- $\det A\ne0$。

这些整套等价条件针对方阵；矩形矩阵不能直接套用通常的逆矩阵、行列式判定。

### 二阶公式

$$
\det\begin{bmatrix}a&b\\c&d\end{bmatrix}=ad-bc.
$$

当 $ad-bc\ne0$ 时，

$$
\begin{bmatrix}a&b\\c&d\end{bmatrix}^{-1}
=\frac1{ad-bc}\begin{bmatrix}d&-b\\-c&a\end{bmatrix}.
$$

例如 $A=\begin{bmatrix}2&1\\1&1\end{bmatrix}$ 的行列式为 $1$，逆矩阵为 $\begin{bmatrix}1&-1\\-1&2\end{bmatrix}$，乘回去可检查结果。

### 一般行列式、余子式与展开

删去第 $i$ 行和第 $j$ 列所得子矩阵的行列式记作 $M_{ij}$；代数余子式为 $C_{ij}=(-1)^{i+j}M_{ij}$。沿固定第 $i$ 行展开：

$$
\det A=\sum_{j=1}^n a_{ij}C_{ij}.
$$

也可沿任意一列展开，结果相同。选零最多的行或列通常更省算力。符号按棋盘排列，第一行是 $+,-,+,\ldots$。

**例：**

$$
\det\begin{bmatrix}1&0&2\\0&3&0\\4&0&5\end{bmatrix}
=3\det\begin{bmatrix}1&2\\4&5\end{bmatrix}=3(5-8)=-9.
$$

### 行变换与行列式

| 操作或结构 | 对行列式的影响 |
|---|---|
| 交换两行 | 变号 |
| 一行乘 $c$ | 整个行列式乘 $c$ |
| 一行加上另一行的倍数 | 不变 |
| 上三角或下三角矩阵 | 等于主对角线元素乘积 |
| 有零行、零列或重复的行、列 | 为零 |

此外，

$$
\det(AB)=\det(A)\det(B),\quad\det(A^T)=\det(A),\quad
\det(cA)=c^n\det(A).
$$

最后一个公式缩放的是全部 $n$ 行，不能与“只把一行乘 $c$”混淆。通常 $\det(A+B)\ne\det A+\det B$。

逆矩阵的常用规则为

$$
(AB)^{-1}=B^{-1}A^{-1},\qquad
(A^T)^{-1}=(A^{-1})^T,\qquad
\det(A^{-1})=\frac1{\det A}.
$$

### 可选：用消元求逆

对增广矩阵 $[A\mid I_n]$ 做行变换，如果能得到 $[I_n\mid B]$，那么 $B=A^{-1}$。若完成消元后左边不能变成单位矩阵，$A$ 就不可逆。

实际数值计算只需解 $A\mathbf x=\mathbf b$ 时，一般直接调用线性求解器，而不是先显式算逆。

[阅读教材 2.5](https://math345-textbook.github.io/sec-u2-inverses-determinants.html)

## 2.6 编程回顾

SymPy 适合精确符号计算，NumPy 适合浮点数值计算。

```python
import sympy as sp

A = sp.Matrix([[1, 2, 3], [0, 1, 1]])
R, pivots = A.rref()
print(R)                       # [[1, 0, 1], [0, 1, 1]]
print(pivots)                  # (0, 1)，Python 从零计数
print(A.columnspace())         # 原矩阵列空间的一组基
print(A.rowspace())            # 行空间的一组基
print(A.nullspace())           # [Matrix([-1, -1, 1])]
print(A.rank())                # 2
assert A.rank() + len(A.nullspace()) == A.cols

b = sp.Matrix([4, 1])
print(sp.linsolve((A, b)))      # {(2-tau0, 1-tau0, tau0)}
```

`nullspace()` 返回的是**基向量列表**。空列表表示零空间只有零向量，并不是没有齐次解。

```python
import numpy as np

B = np.array([[2., 1.], [1., 1.]])
b = np.array([3., 2.])
x = np.linalg.solve(B, b)
print(x)                       # [1., 1.]
print(np.linalg.det(B))         # 1.0（允许浮点舍入）
print(np.linalg.matrix_rank(B)) # 2
assert np.allclose(B @ x, b)
```

浮点数据中的“几乎相关”需要结合精度与容差判断，不能机械地用 `det == 0` 处理所有数值问题。

[教材代码回顾与原始 notebook 入口](https://math345-textbook.github.io/sec-u2-apps-computation.html)

## 2.7 自测练习

以下为本笔记配套练习，教材完整习题见[2.7 Exercises](https://math345-textbook.github.io/u2-exercises.html)。

1. 判断 $U=\{(x,y):x+y=0\}$ 与 $V=\{(x,y):x+y=1\}$ 是否为子空间。
2. 求 $A=\begin{bmatrix}1&2&3\\0&1&1\end{bmatrix}$ 的秩、零度、零空间的基。
3. 对同一个 $A$，解 $A\mathbf x=(4,1)^T$，判断解是否唯一。
4. 在有序基 $B=((1,1),(1,-1))$ 下求 $(5,1)$ 的坐标。
5. 求 $C=\begin{bmatrix}2&1\\1&1\end{bmatrix}$ 的行列式及逆矩阵。

??? success "参考答案"
    1. $U$ 是子空间；$V$ 不包含原点，故不是。
    2. 秩 $2$，零度 $1$，零空间的一组基为 $\{(-1,-1,1)^T\}$。
    3. $\mathbf x=(2,1,0)^T+t(-1,-1,1)^T$，有无穷多解。
    4. $[(5,1)]_B=(3,2)^T$。
    5. $\det C=1$，$C^{-1}=\begin{bmatrix}1&-1\\-1&2\end{bmatrix}$。

## 2.8 本章速查与易错点

| 要回答的问题 | 检查方法 |
|---|---|
| $A\mathbf x=\mathbf b$ 有没有解？ | 检查增广矩阵有无矛盾行；等价于 $\mathbf b\in\operatorname{col}(A)$ |
| 已知有解，是否唯一？ | 检查 $\operatorname{null}(A)=\{0\}$，即没有自由变量 |
| 每个输出都可到达？ | $\operatorname{rank}(A)=m$ |
| 输入能否被唯一识别？ | $\operatorname{rank}(A)=n$ |
| 有多少自由方向？ | $n-\operatorname{rank}(A)$ |
| 方阵是否可逆？ | 满秩、RREF 为单位阵或行列式非零 |

常见错误：

- 把增广列计入未知量个数，或漏掉自由参数。
- 用化简矩阵的列代替原矩阵列空间的基。
- 忘记行空间与列空间可能处在不同的环境空间。
- 只证明张成，没有检查线性无关，就宣布找到基。
- 认为某一个右端有解，就代表所有右端都有解。
- 把“全体输入对应唯一输出”与“输出能唯一决定输入”混淆。
- 认为非齐次解集一定是子空间。
- 算逆矩阵、转置或映射复合时忘记反转乘法顺序。

本章的列空间将用于最小二乘，零空间将用于理解解的自由度，行列式与基将用于后续的特征值和对角化。

[教材本章总结](https://math345-textbook.github.io/u2-highlights.html) · [返回第一章](chapter1.md)
