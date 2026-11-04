# 第六章：constrained optimization 与 Lagrange multipliers

!!! note "译文与来源"

    本页依据 2026 年 11 月 3 日读取的官方 v0.2 源文件制作。数学术语保留英文；原书公式、代码、例题、活动、证明与解答保留。译稿使用机器辅助翻译并进行数学与排版检查，未经原作者审定。原作者：Jacob Denson、Kaitlyn Phillipson、Sebastien Roch。除原书另有注明外，遵循 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)。 [阅读英文原文](https://math345-textbook.github.io/u6-constraints-svd.html)。


<a id="u6-constraints-svd"></a>

回顾 [优化问题](3-6.md#def-8-1-optimization)：一个  optimization problem  包含要优化的  objective function ，以及允许选择输入的  feasible region 。在  constrained optimization  中，一个或多个等式、不等式会限制这个  feasible region 。

在 [The section “Optimization problems and critical points”](3-6.md#sec-maxima-minima-problems) 中，我们通过求解下式寻找内部的 critical point：

$$
\nabla f(\mathbf{x})=\mathbf{0}.
$$


在  closed bounded region  上， absolute extrema  也可能出现在  boundary 。当边界或 feasible set 由一个或多个等式  constraints  描述时， Lagrange multipliers  可以为候选 critical point 给出相应的方程。

同一方法还把  constrained optimization  与  linear  algebra 联系起来：在 unit sphere 上， symmetric  的  quadratic form  会沿  eigenvector  方向取得极值。沿着这个思路，我们会学习用于  centered data  的 [the section “Principal component analysis”](6-4.md#sec-u6-principal-component-analysis)，以及用于一般  matrix  映射的 [the section “Singular value decomposition”](6-5.md#sec-singular-value-decomposition)。

**核心问题**：当允许的输入受到限制时，如何寻找  absolute extrema ？为什么  eigenvectors  能指出  quadratic forms 、数据集以及  matrix  映射中的极值方向？

**学习目标**：学完本章后，你应当能够：


- U6-LO1。识别封闭区域和有界区域，并通过比较内部和  boundary  候选区域在封闭有界区域上找到  absolute extrema 。

- U6-LO2。制定并解决具有一个等式 constraint 的Lagrange乘子问题，并解释并行 gradient 和Lagrange公式。

- U6-LO3。制定并解决具有多个等式  constraints  的Lagrange乘数问题，并将目标  gradient  解释为  constraint  梯度的  linear combination 。

- U6-LO4。使用 Lagrange multipliers 和 eigenvalues 求unit sphere上 symmetric  quadratic forms 的极值，并将该结果应用到 maximum stretch 和 singular values 。

- U6-LO5。以一个小数据集为中心，形成其 covariance matrix ，计算和解释第一个和第二个 principal directions 、分数、重建和捕获的变化，并将 PCA 与 linear regression 区分开来。

- U6-LO6：构造并解释一个小规模的  singular value decomposition ：

    $$
    A=U\Sigma V^T,
    $$

    包括理解  orthonormal  的输入和输出方向，以及由  singular  value 给出的伸缩系数。

- U6-LO7。使用 SVD 来识别four fundamental subspaces的 rank 和 orthonormal  bases ，并将 centered data 的 SVD 与 PCA 方向、分数和重建连接起来。

**技能清单**：比较内部和 boundary 候选；将  function  限制为简单的  boundary  块；形成并求解一个和多个 constraint Lagrange系统；写出并区分Lagrange量；评估并diagonalization  symmetric   quadratic forms ；中心数据和表格 covariance  matrices ；计算主要分数， projections 和 reconstruction  residuals ；形式$A^TA$；计算 singular values 和 singular vectors ；组装并读取小型 SVD；并确定four fundamental subspaces的 rank 和 bases 。


## 本章目录

- [6.1 closed bounded region 上的 absolute extrema](6-1.md)
- [6.2 Lagrange multipliers](6-2.md)
- [6.3 quadratic forms 与 maximum stretch](6-3.md)
- [6.4 principal component analysis（PCA）](6-4.md)
- [6.5 singular value decomposition（SVD）](6-5.md)
- [6.6 代码回顾](6-6.md)
- [6.7 练习](6-7.md)
- [6.8 本章要点](6-8.md)

