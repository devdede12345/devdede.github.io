# B.11 SymPy 符号计算

!!! note "译文与来源"

    本页依据 2026 年 11 月 3 日读取的官方 v0.2 源文件制作。数学术语保留英文；原书公式、代码、例题、活动、证明与解答保留。译稿使用机器辅助翻译并进行数学与排版检查，未经原作者审定。原作者：Jacob Denson、Kaitlyn Phillipson、Sebastien Roch。除原书另有注明外，遵循 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)。 [阅读英文原文](https://math345-textbook.github.io/appcomp-sympy.html)。


<a id="appcomp-sympy"></a>

本节帮助您阅读 SymPy 命令以获取精确的符号公式、 matrices 、部分 derivatives 、梯度、Hessians、Jacobian、替换和零空间。第 3 单元活动使用这些工具将本地预测与实际变化进行比较，并区分  scalar  预测误差。

**SymPy is for exact symbolic expressions**:  NumPy 用于数值数组和数值  linear  代数。


<a id="appcomp-sympy-rref-indexing"></a>

##  Row reduction  和条目索引

使用 `sp.Matrix` 中的整数条目进行精确算术。赋值 `R, pivots = M.rref()` 解包两个结果：减少的  matrix  和 pivot - column  索引的元组。  row  和  column  指数都从零开始。表达式 `R[i, j]` 选择 row  `i`、 column  `j` 中的 scalar  条目。


```python
import sympy as sp

M = sp.Matrix([
    [1, 1, -2, 4],
    [2, 3, -3, 9],
])
R, pivots = M.rref()
z = -1
solution = [R[0, 3] - R[0, 2]*z,
            R[1, 3] - R[1, 2]*z,
            z]
solution
```

这里`pivots`是`(0, 1)`，简化的方程是$x-3z=3$和$y+z=1$。因此`solution`是Python列表`[0, 2, -1]`。例如，`R[0, 3]`是第一个 row 的右侧，$3$。第四个 column 是增强的 column ，而不是第四个变量。这里 `*` 乘以单个数字。要读取 row -减少输出，请参阅[读取代码中的 row reduction （U2-LO1、U2-LO2）](2-2.md#act-u2-reading-row-reduction-code)；对于条目索引，请参阅[在 SymPy 中选择原始  pivot   columns （U2-LO3、U2-LO4）](2-4.md#act-u2-sympy-pivot-column-list)。


<a id="appcomp-sympy-column-lists"></a>

##  Column  切片和列表理解

对于 SymPy  matrix ，`A[:, j]` 选择  column  `j` 中的所有  rows ，生成  column   matrix 。冒号的意思是“沿着这个方向的所有条目”。相反，`A[j, :]` 选择 row 。  list comprehension  计算集合中每一项的一个表达式，并将结果收集到 Python 列表中。


```python
import sympy as sp

A = sp.Matrix([
    [2, 4, 0],
    [1, 2, 1],
    [3, 6, 2],
])
R, pivots = A.rref()
columns = [A[:, j] for j in pivots]
columns
```

将最后一个作业读取为“对于每个  pivot  索引 `j`，选择 `A` 的  column  `j`。”这里`pivots`是`(0, 2)`，所以列表包含`A`的第一个和第三个 columns ，$\operatorname{col}(A)$的 basis 。在 Python 中不加修改地使用这些索引。加一仅用于报告数学 column 数字。从原来的`A`中选择 columns ，因为 row 操作可以改变 column space 。参见[在 SymPy 中选择原始  pivot   columns （U2-LO3、U2-LO4）](2-4.md#act-u2-sympy-pivot-column-list)。

等效循环从一个空列表开始，并使用 `append` 添加每个  column ：


```python
columns = []
for j in pivots:
    columns.append(A[:, j])
```


<a id="appcomp-sympy-products-lists"></a>

## 零空间列表和  matrix - vector  产品

`A.nullspace()` 返回一个 Python 列表，其中包含  null space  的  basis ，每个  vector  存储为 SymPy  column   matrix 。 `basis[0]` 从非空列表中选择第一个  vector ； `len(basis)` 计算 vectors  并给出 nullity 。零  subspace  有一个空的  basis  列表 `[]`，因此在这种情况下没有 `basis[0]`。


```python
import sympy as sp

A = sp.Matrix([
    [1, 0, 2],
    [0, 1, -1],
    [2, 1, 3],
])
basis = A.nullspace()
z = basis[0]
A * z
```

这里`basis`包含一个 vector ，`z`是 column `sp.Matrix([-2, 1, 1])`，`A * z`是$3\times1$零个 column 。将平面列表传递给 `sp.Matrix` 创建一个  column   matrix 。对于两个数，`*`是普通乘法；通过一个数字和一个 matrix ，它可以缩放每个条目。对于两个 SymPy  matrices ，`*` 表示  matrix multiplication ，而 NumPy 数组使用 `@` 表示  matrix multiplication ，使用 `*` 进行逐项乘法。 `A * basis` 是一个错误： vectors  的列表本身不是  column   matrix 。

`z.shape` 给出`(3, 1)`，即对 ( rows ,  columns )。 `z.T` 将  column  转置为 $1\times3$  row 。因此，乘积 `z.T * A` 是  row ，并且当 `A * z` 为零时不必为零。 `sp.ones(3, 1)` 创建一个由三个 1 组成的 SymPy  column ；这通常是不同于 `basis[0]` 的  vector 。在[使用 SymPy 零空间  vector （U2-LO3、U2-LO4、U2-LO6）](2-4.md#act-u2-sympy-nullspace-list-product)中练习这些区别。


<a id="appcomp-sympy-partials-hessian"></a>

## 第一和第二偏音、梯度和 Hessians

`sp.diff(f, x)` 相对于 `x` 微分，同时保持其他符号不变。使用`sp.diff(f, x, 2)`代替`x`中的两个 derivatives 。在`sp.diff(f, x, y)`中，SymPy先微分`x`，然后微分`y`；这是$f_{xy}=(f_x)_y=\partial_y(\partial_x f)$。反转变量，`sp.diff(f, y, x)` 计算$f_{yx}=(f_y)_x=\partial_x(\partial_y f)$。对于下面的多项式，混合部分一致。


```python
import sympy as sp

x, y = sp.symbols("x y")
f = 3*x**2*y + 2*x - 3*y
fx, fy = sp.diff(f, x), sp.diff(f, y)
fxx = sp.diff(f, x, 2)
fxy = sp.diff(f, x, y)
fyx = sp.diff(f, y, x)
grad_f = sp.Matrix([fx, fy])
H = sp.hessian(f, (x, y))
Jf = sp.Matrix([f]).jacobian([x, y])
point = {x: 1, y: 2}

grad_f.subs(point), H.subs(point), Jf.shape
```

输出为  column  $(14,0)$、 matrix  $\begin{bmatrix}12&6\\6&0\end{bmatrix}$ 和 `(1, 2)`。这里`fxx`是`6*y`，两个混合偏音都是`6*x`。  gradient  是$2\times1$  column ， scalar   Jacobian  是$1\times2$  row ， Hessian  是$2\times2$。命令`grad_f.jacobian([x, y])`给出 Hessian ：其$(i,j)$条目区分$f_{x_i}$相对于$x_j$，给出$f_{x_i x_j}$。请参阅 [在 SymPy (U3-LO3) 中读取第一部分 derivatives ](3-3.md#act-u3-sympy-first-partials)、[在 SymPy (U3-LO3) 中读取重复和混合的  derivatives ](3-3.md#act-u3-sympy-second-partials) 和 [在 SymPy (U3-LO3) 中检查  gradient  的  Jacobian ](3-3.md#act-u3-sympy-jacobian-of-gradient)。

**Differentiate the symbolic formula before substituting the point**: 例如，`sp.diff(f, x).subs(point)`是`14`，而`sp.diff(f.subs(point), x)`是`0`：第二个表达式对常数`2`进行微分，因此它失去了`f`的局部变化。


<a id="appcomp-sympy-exact-local-model"></a>

## 精确分数和局部预测

`sp.Rational(1, 10)` 存储精确分数$1/10$。小数（例如 `0.1`）是浮点近似值。检查代数时保持精确的 SymPy 值；当需要数值数组时转换为 NumPy。


```python
import sympy as sp

x, y = sp.symbols("x y")
F = sp.Matrix([x + y**2, y])
J = F.jacobian([x, y])
a = sp.Matrix([0, sp.Rational(1, 2)])
h = sp.Matrix([sp.Rational(1, 10), -sp.Rational(1, 10)])
point = {x: a[0], y: a[1]}
Fa = F.subs(point)
Ja = J.subs(point)
predicted = Fa + Ja*h
actual = F.subs({x: a[0] + h[0], y: a[1] + h[1]})

predicted, actual, actual - predicted
```

三个 columns 是$(1/4,2/5)$、$(13/50,2/5)$和$(1/100,0)$。 `Ja*h`是预测的变化；添加 `Fa` 给出预测输出。这里的差异是精确的，因为所有输入都是精确的。参见[在 SymPy (U3-LO5) 中读取本地  linear  预测](3-4.md#act-u3-sympy-local-linear-prediction)。应用`Ja.rref()`或`Ja.nullspace()`使用单元2对 derivative matrix 的命令；零空间方向给出零一阶变化，其不需要是零实际 nonlinear 变化。


<a id="appcomp-sympy-loss-chain-step"></a>

##  Scalar   loss ，链规则检查和下降步骤

使用 column  residual $R=X\mathbf w-\mathbf y$。乘积`R.T * R`是$1\times1$ matrix ；索引`[0]`提取其 scalar 条目进行区分。该示例使用总平方误差，而不对观测值进行平均。


```python
import sympy as sp

w1, w2 = sp.symbols("w1 w2")
X = sp.Matrix([[1, 0], [0, 1], [1, 1]])
y_data = sp.Matrix([1, 2, 2])
w = sp.Matrix([w1, w2])
R = X*w - y_data
loss = (R.T*R)[0]
grad_loss = sp.Matrix([sp.diff(loss, w1), sp.diff(loss, w2)])
Jloss = sp.Matrix([loss]).jacobian([w1, w2])
chain_row = 2*R.T*X
check = sp.simplify(Jloss - chain_row)
point = {w1: 1, w2: 1}
g0 = grad_loss.subs(point)
w_next = sp.Matrix([1, 1]) - sp.Rational(1, 10)*g0
next_point = {w1: w_next[0], w2: w_next[1]}

check, w_next, loss.subs(next_point), grad_loss.subs(next_point)
```

输出是$1\times2$零 row 、 column $(1,6/5)$、 scalar $17/25$和新的 gradient $(2/5,-6/5)$。零 row 验证了链式法则公式$J_{\mathcal L}=2R^TX$。 `sp.simplify` 尝试减少一个表达式（或  matrix  的每个条目）；零结果证明定义原始表达式的差异为零。未简化为零的结果本身并不能证明表达式不同。如果单项式之和更容易比较，`sp.expand(loss)` 会展开多项式。

将 component 公式代入外部 function 形成 composition ，如[检查 SymPy 中的  chain rule  (U3-LO6)](3-5.md#act-u3-sympy-chain-rule-check)所示。对  composition  进行微分，并与链式法则  matrix product  进行比较，保持外部  derivative  位于内部输出。对于下降步骤，计算一次符号  gradient  并在每个新点对其进行评估；不要在每个步骤中重复使用 `g0`。大步可以增加  loss 。请参阅 [通过预测区分  loss  (U3-LO6)](3-5.md#act-u3-prediction-loss-chain-rule)、[从象征性的 gradient 到下降步骤（U3-LO9）](3-6.md#act-u3-sympy-gradient-descent-step) 和 [一步改进模型的预测（U3-LO8、U3-LO9）](3-6.md#act-u3-prediction-loss-descent)。


```python
import sympy as sp
import numpy as np

x, y = sp.symbols("x y")

F = sp.Matrix([
    x**2 * y,
    x * sp.exp(y)
])

J = F.jacobian([x, y])
J_at_a = J.subs({x: 1.0, y: 0.0})
J_at_a = np.array(J_at_a, dtype=float)
sp.diff(x**3 + x*y, x)
```


```python
B = sp.Matrix([[1, 2, 3],
               [2, 4, 6],
               [0, 1, 1]])

B.rref()
B.nullspace()
sp.eye(3)

A = [[1, 2, 3],
     [2, 4, 6],
     [0, 1, 1]]
sp.Matrix(A).nullspace()
```

## 符号

`sp.symbols("x y")`

Read as. 创建符号变量。

**Shape/return**: 符号。

Used for. 符号公式。

## 象征性 matrix 

`sp.Matrix([...])`

Read as. 象征性的 vector  或 matrix 。

**Shape/return**: 一个 SymPy  Matrix 。

Used for. 精确的  linear  代数。

##  Jacobian 

`F.jacobian([x, y])`

Read as. 根据给定顺序的变量区分每个输出  component 。

**Shape/return**: 一个 SymPy  Matrix 。

Used for.  Local linearization .

## 象征性 derivative 

`sp.diff(f, x)`

Read as. 区分关于`x` 的符号表达式。

**Shape/return**: 象征性表达。

Used for. 第一分音；用 `sp.diff(f, x, 2)` 重复部分；与 `sp.diff(f, y, x)` 混合的部分。

## 替代

`J.subs({...})`

Read as. 替代值。

**Shape/return**: 符号或数值表达式。

Used for. 在一点上进行评估。

## NumPy 转换

`np.array(J_at_a, dtype=float)`

Read as. 转换为 NumPy。

**Shape/return**: 一个 NumPy 数组。

Used for. 数字 matrix multiplication 。

##  Reduced row echelon form 

`M.rref()`

Read as. 准确计算 reduced row echelon form 。

**Output**: 一对`(R, pivots)`。

Used for.  Pivot   columns 、 free variables  以及解集。

**Watch for**:  Pivot  索引从零开始； 0 表示第一个  column 。

## 零空间

`M.nullspace()`

Read as. 返回  null space  的  basis 。

**Shape/return**: SymPy  column   vectors  列表。

Used for. 精确的零空间方向。

## 象征性 identity matrix 

`sp.eye(n)`

SymPy 中的Read as. $n\times n$  identity matrix 。

**Shape/return**: 一个 SymPy  Matrix 。

Used for. 精确的  matrix  示例。

要从精确的 SymPy 计算切换到数值 NumPy 计算，请使用 `np.array(..., dtype=float)` 进行转换，并使用 NumPy 的 `@` 运算符来计算  matrix multiplication 。 Exact SymPy  matrix  产品不需要此转换。

