# B.15 命令速查表

!!! note "译文与来源"

    本页依据 2026 年 11 月 3 日读取的官方 v0.2 源文件制作。数学术语保留英文；原书公式、代码、例题、活动、证明与解答保留。译稿使用机器辅助翻译并进行数学与排版检查，未经原作者审定。原作者：Jacob Denson、Kaitlyn Phillipson、Sebastien Roch。除原书另有注明外，遵循 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)。 [阅读英文原文](https://math345-textbook.github.io/appcomp-quick-reference.html)。


<a id="appcomp-quick-reference"></a>

Array setup and shapes. 请参阅[如何阅读计算单元](app-computation-1.md#appcomp-reading-code) 和[NumPy 数组、 Vectors 、 Matrices  和  Shapes ](app-computation-2.md#appcomp-arrays-shapes)。

**数组**: `np.array([...])`。 Read as. 创建一个数组。 Used for. 所有实验室。


**数组转换**: `np.asarray(...)`。 Read as. 将类似数组的输入视为数组。 Used for. 帮手 functions 。


**重塑**: `.reshape(m, n)`。 Read as. 将条目重新排列到新的  shape  中。 Used for. Matrix 形数值输出。


**显示选项**: `np.set_printoptions(...)`。 Read as. 更改数组的打印显示。 Used for. 可读性。


**浮点数据**: `dtype=float`。 Read as. 请求浮点数值数据。 Used for. SymPy 到 NumPy 的转换。


** Shape**: `A.shape`。 Read as. Dimensions 。 Used for. Shape 检查。


Matrix products and entrywise operations. 请参阅[元素算术与  Linear  代数](app-computation-4.md#appcomp-elementwise-vs-linear-algebra) 和[ Dot Products 、 Norms 、距离和  Cosine Similarity ](app-computation-5.md#appcomp-dot-norm-cosim)。

** Transpose**: `A.T`。 Read as. Transpose 。 Used for. Residual 检查和 normal equations 。


** Dot product**: `u @ v`. Read as.  Dot product . Used for.  Cosine similarity .


** Matrix-vector product**: `A @ x`. Read as.  Matrix-vector product . Used for.  Linear maps .


** Matrix product**: `A @ B`。 Read as. Matrix product 。 Used for. Composition 和 attention 。


** Outer product**: `np.outer(g, h)`。 Read as. Rank -一个 outer product 。 Used for.  Matrix  更新，例如  gradient  步骤。


**入门产品**: `u * v`。 Read as. 逐项产品。 Used for. 元素运算。


** Norm**: `np.linalg.norm(x)`。 Read as. Norm 。 Used for. 距离和  residuals 。


** Row -明智 norms**: `np.linalg.norm(X, axis=1)`。每  row  Read as. 一个  norm 。 Used for. Row -明智的 cosine similarity 。


Indexing, reductions, and entrywise functions. 请参见 [索引和切片](app-computation-3.md#appcomp-indexing-slicing)、[排序和排名](app-computation-6.md#appcomp-sorting-rankings) 和 [约简、轴和  Row  明智计算](app-computation-7.md#appcomp-reductions-axes)。

**排名**: `np.argsort(scores)[::-1]`。 Read as.  Rank  得分从大到小。 Used for. 文档相似度。


**价值最大的位置**: `np.argmax(scores)`。 Read as. 最大条目的索引。 Used for. 定位采样最大值。


**第一个 column**: `A[:, 0]`。 Read as. 所有 rows ，第一个 column 。 Used for. Column 提取。


** Column 块**: `A[:, :k]`。 Read as.全部 rows ，第一个`k` columns 。 Used for.  Principal directions 、 basis   columns ，以及领先的  singular vectors 。


** Row 块**: `Vt[:k, :]`。 Read as.先`k` rows ，全部 columns 。 Used for. 向右引导  singular  方向存储为  rows 。


** Row  总和**: `A.sum(axis=1)`。 Read as. 每 row  一笔金额。 Used for. Attention  normalization 。


**总和**: `np.sum(...)`。 Read as. 所选或所有条目的总和。 Used for. 总计和捕获的变异分数。


** Row 最大**: `np.max(..., axis=..., keepdims=True)`。 Read as. 沿轴的最大值，并保留  shape 。 Used for.稳定 softmax 。


**坐标最大值**: `np.maximum(z, 0)`。 Read as. 逐个条目的最大值为零。 Used for. ReLU。


**指数**: `np.exp(x)`。 Read as. 逐项指数。 Used for. Softmax 。


**对数**: `np.log(x)`。 Read as. 逐项对数。 Used for. Loss  并记录 probabilities 。


**平方根**: `np.sqrt(x)`。 Read as. 逐项平方根。 Used for.  Norms  和音阶。


**双曲正切**: `np.tanh(x)`。 Read as. 逐项双曲正切。 Used for. 修复隐藏层。


**绝对值**: `np.abs(x)`。 Read as. 逐项绝对值。 Used for. 幅度和对齐检查。


**正弦和余弦**: `np.sin(x)`，`np.cos(x)`。 Read as. 以弧度表示的逐项三角值。 Used for. 采样圈。


Constructors and linear algebra. 请参见 [构造通用数组和设计 Matrices ](app-computation-8.md#appcomp-array-constructors)、[数值检查和舍入](app-computation-9.md#appcomp-numerical-checks) 和 [NumPy  Linear  代数命令](app-computation-10.md#appcomp-numpy-linalg)。

**个 vector**: `np.ones(n)`。 Read as.  Vector  个。 Used for. 测试数据和常数 columns 。


**配套的**: `np.ones_like(t)`。 Read as. 具有相同 shape  的。 Used for. 常数  feature   columns  和掩码。


**匹配常数**: `np.full_like(t, value)`。 Read as. 用一个值填充相同的 shape 。 Used for. 基线数组和绘图助手。


**零阵列**: `np.zeros((m, n))`。 Read as. 创建一个 $m\times n$ 零数组。 Used for. 测试数据和占位符。


** Identity matrix**: `np.eye(n)`。 Read as. 制作$n\times n$  identity matrix 。 Used for.  Rank  和  inverse  检查。


** Column 堆栈**: `np.column_stack([...])`。 Read as. 从  columns  构建 matrix 。 Used for.设计 matrices 。


**垂直堆叠**: `np.vstack([...])`。 Read as. 将数组堆叠为  rows 。 Used for. 点表构建。


** Diagonal matrix**: `np.diag(s)`。 Read as. 将  vector  条目放在对角线上。 Used for.  SVD  因子  matrices  和  PCA  分数检查。


**样本网格**: `np.linspace(a, b, N)`。 Read as. 均匀分布的样本点。 Used for. 绘图和采样。


**梯形法则**: `np.trapezoid(values, grid)`。 Read as. 近似样本的积分。 Used for. 多项式 inner products 。


**数字 rank**: `np.linalg.matrix_rank(A)`。 Read as. 数字 rank 。 Used for. 独立方向。


** Determinant**: `np.linalg.det(A)`。 Read as.  Determinant   square matrix 。 Used for. Invertibility 检查。


** Least squares**: `np.linalg.lstsq(A, b, rcond=None)[0]`。 Read as. Least-squares  coefficients 。 Used for. 回归、 projection  和采样多项式近似。


** Residual   orthogonality**: `A.T @ r`。 Read as.  Dot products  与 $A$ 的  columns 。 Used for. Least-squares  residual 检查。


** Linear 解决**: `np.linalg.solve(A, b)`。 Read as. 求解平方 nonsingular  系统。 Used for. Linear 系统。


**一般 eigenvalues**: `np.linalg.eig(H)`。 Read as. Eigenvalues 和 eigenvectors 。 Used for.将军广场 matrices 。


** Symmetric   eigenvalues**: `np.linalg.eigvalsh(H)`。 Read as.  Eigenvalues   symmetric matrix 。 Used for. Hessian 分类。


** Symmetric   eigenvectors**: `np.linalg.eigh(B)`。 Read as. Symmetric  eigenvalues 和 eigenvectors 。 Used for. Quadratic forms 、 covariance  matrices 和$A^TA$。


** QR factorization**: `np.linalg.qr(A)`。 Read as. QR factorization 。 Used for. Least-squares 检查。


** SVD**: `np.linalg.svd(A, full_matrices=False)`。 Read as. 紧凑 SVD 。 Used for.  Matrix  拉伸、 PCA 、 rank  和  singular - vector  恒等式。


Polynomial approximation patterns. 请参见 [元素算术与  Linear  代数](app-computation-4.md#appcomp-elementwise-vs-linear-algebra)、[构造通用数组和设计 Matrices ](app-computation-8.md#appcomp-array-constructors)、[数值检查和舍入](app-computation-9.md#appcomp-numerical-checks) 和 [NumPy  Linear  代数命令](app-computation-10.md#appcomp-numpy-linalg)。

**采样功率**: `xs**2`，`xs**3`。 Read as. $x$ 的采样幂。 Used for.多项式 feature  columns 。


**样品产品**: `xx*yy`。 Read as. 采样$x$- 和$y$- coordinates  的逐项乘积。 Used for. 二变量多项式 features 。


**二变量网格**: `np.meshgrid(grid, grid)`。 Read as.  Coordinate  矩形样本网格的数组。 Used for. 二变量采样拟合。


**展平网格**: `X.ravel()`。 Read as. 将数组压平为一个 dimension 。 Used for. 将网格  coordinates  转换为示例列表。


**拟合采样值**: `A @ c`。 Read as. 拟合采样值。 Used for. 多项式 least-squares  拟合。


** Residual vector**: `y - A @ c`。 Read as. Residual vector 。 Used for.  Residual - orthogonality  检查。


** Quadratic form**: `h @ H @ h`. Read as.  Quadratic form  $\mathbf h^T H\mathbf h$. Used for.  Hessian   quadratic forms .


Python helper patterns. 见[实验室中使用的小型 Python 模式](app-computation-12.md#appcomp-python-patterns)。

**定义 function**: `def f(...):`。 Read as. 定义一个助手 function 。 Used for. 重复计算。


**返回值**: `return ...`。 Read as.  function  的输出。 Used for. 帮手 functions 。


**循环**: `for k in range(n):`。 Read as. 重复缩进的块。 Used for. 迭代算法。


**追加**: `losses.append(...)`。 Read as. 将一项添加到列表中。 Used for. 记录历史。


**普通号码**: `float(...)`。 Read as. 转换为 scalar 。 Used for. 更干净的输出。


**列表理解**: `[f(x) for x in values]`。 Read as. 通过循环构建列表。 Used for. 紧凑的重复计算。


**字典理解**: `{k: v for ...}`。 Read as. 通过循环构建字典。 Used for. 比较 parameter  选择。


**配对**: `zip(a, b)`。 Read as. 将两个可迭代的条目配对。 Used for. 标记循环。


**词典**: `dict(...)`。 Read as. 建立一本字典。 Used for. 命名结果。


**长度**: `len(values)`。 Read as. 计算条目数。 Used for. 尺寸和环。


**圆形**: `round(x, 3)`。 Read as. 对 Python 数字进行舍入。 Used for. 可读输出。


**打印**: `print(...)`。 Read as. 显示一个值。 Used for. 笔记本输出。


**断言**: `assert condition`。 Read as. 检查条件是否成立。 Used for. 实验室健全性检查。


Optional attention, SymPy, checks, and plotting. 请参见 [SymPy 符号计算](app-computation-11.md#appcomp-sympy)、[数值检查和舍入](app-computation-9.md#appcomp-numerical-checks)、[布尔掩码、复制和  Attention  助手](app-computation-13.md#appcomp-attention-helpers) 和 [可选绘图](app-computation-14.md#appcomp-plotting)。

**上三角**: `np.triu(..., k=1)`。 Read as. 对角线上方的上三角形部分。 Used for. Causal mask 。


**布尔值  mask**: `.astype(bool)`。 Read as. 转换为布尔值 mask 。 Used for. 可选 attention 。


**复制**: `.copy()`。 Read as. 制作一份独立的副本。 Used for. 可选 attention 。


** Mask  作业**: `S_masked[mask] = -1e9`。 Read as. 更改选定的条目。 Used for.可选 attention 面罩。


** Row   normalization**: `e / e.sum(axis=1, keepdims=True)`。 Read as. 将每个  row  除以它的  row  总和。 Used for. Softmax  rows 。


**符号**: `sp.symbols("x y")`。 Read as. 创建符号变量。 Used for. SymPy 公式。


**象征性 matrix**: `sp.Matrix([...])`。 Read as. 象征性 matrix  或 vector 。 Used for. 症状。


**象征性身份**: `sp.eye(n)`。 Read as. SymPy  identity matrix 。 Used for. 具体例子。


**象征性的 column**: `sp.ones(n, 1)`。 Read as. $n\times1$ SymPy  column 。 Used for. 准确输入 vectors 。


**症状 matrix product**: `A * z`。 Read as. 乘以 SymPy  matrices 。 Used for. 精确 matrix - vector  产品； NumPy 数组改为使用 `@`。


**SymPy  transpose  和  shape**: `z.T` 和 `z.shape`。 Read as.  Transpose   matrix  并报告（ rows 、 columns ）。 Used for. 区分 column  和 row   vectors 。


** Matrix  条目**: `R[i, j]`。 Read as. 通过从零开始的  row  和  column  索引选择 scalar 。 Used for. 阅读 coefficients  和右侧。


**SymPy  column  列表**: `[A[:, j] for j in pivots]`。 Read as. 收集原版 pivot  columns 。 Used for. A  column -空间 basis ； `A[j, :]` 选择 row 。


** Basis -列表项**: `basis[0]` 和 `len(basis)`。 Read as. 选择第一个 vector ，数出 vectors 。 Used for. 乘以零空间 vector  并找到 nullity 。空列表没有第一个  vector 。


** Derivative**: `sp.diff(f, x)`。 Read as. 象征性 derivative 。 Used for. 精确的  derivative  检查。


** Jacobian**: `F.jacobian([x, y])`。 Read as. 象征性 Jacobian 。 Used for. Local linearization 。


**替代**: `J.subs({...})`。 Read as. 替代值。 Used for.  Jacobian  在一点上。


**NumPy 转换**: `np.array(..., dtype=float)`。 Read as. 将符号输出转换为 NumPy。 Used for. 数值乘法。


** Row reduction**: `M.rref()`。 Read as. Reduced row echelon form 和 pivots 。 Used for. 精确的 pivot  分析。


**零空间**: `M.nullspace()`。 Read as. 符号 column - vector   basis  元素列表。 Used for. 精确的零空间。


** Scalar  亲密程度**: `np.isclose(a, b)`。 Read as. 近似 scalar  相等。 Used for. 数值检查。


**近似相等**: `np.allclose(x, y)`。 Read as. 近似相等。 Used for. 数值检查。


**圆形显示**: `np.round(x, 3)`。 Read as. 舍入数组以进行显示。 Used for. 可读输出。


**图形设置**: `plt.figure(...)`。 Read as. 开始绘制一个图形。 Used for. 可选地块。


**图形和轴**: `plt.subplots(...)`。 Read as. 启动图形和轴对。 Used for. 可选地块。


** Matrix  图片**: `plt.imshow(A)`。 Read as. 将  matrix  显示为图像。 Used for. 可选的  attention  地块。


**色标**: `plt.colorbar(...)`。 Read as. 添加比例尺。 Used for. Matrix 图像解读。


**绘图标签**: `plt.title(...)`、`plt.xlabel(...)`、`plt.ylabel(...)`。 Read as. 添加标签。 Used for. 可读的图。


**勾选标签**: `plt.xticks(...)`，`plt.yticks(...)`。 Read as. 添加刻度标签。 Used for. Token 标签。


**线图**: `plt.plot(...)`。 Read as. 绘制连接的点或曲线。 Used for. 可选的几何图。


**等尺度**: `plt.axis("equal")`。 Read as. 使用相同的水平和垂直比例。 Used for. 可选的几何图。


**网格**: `plt.grid(True)`。 Read as. 显示背景网格。 Used for. 可选的几何图。


**传奇**: `plt.legend()`。 Read as. 显示绘图标签。 Used for. 可选的几何图。


**显示图**: `plt.show()`。 Read as. 显示图形。 Used for. 笔记本。


