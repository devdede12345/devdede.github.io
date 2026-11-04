# 附录 B：NumPy 与 SymPy 计算速查

!!! note "译文与来源"

    本页依据 2026 年 11 月 3 日读取的官方 v0.2 源文件制作。数学术语保留英文；原书公式、代码、例题、活动、证明与解答保留。译稿使用机器辅助翻译并进行数学与排版检查，未经原作者审定。原作者：Jacob Denson、Kaitlyn Phillipson、Sebastien Roch。除原书另有注明外，遵循 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)。 [阅读英文原文](https://math345-textbook.github.io/app-computation-quick-reference.html)。


<a id="app-computation-quick-reference"></a>

本附录解释了应用程序和计算部分以及链接笔记本中使用的计算符号。它假设您熟悉基本的 Python 变量、算术、 functions  和循环，但不假设您之前具有 NumPy 数组、数组切片、 matrix  产品、数值  linear  代数或 SymPy 符号  matrices  的经验。

**The goal is not to teach all of Python**: 目标是帮助您将简短的计算快照理解为数学符号。

Where to look.

**数组、 shapes 和切片**: 当代码导入库、创建数组、检查  shapes  或选择  rows  和  columns  时，请使用 [如何阅读计算单元](app-computation-1.md#appcomp-reading-code)、[NumPy 数组、 Vectors 、 Matrices  和  Shapes ](app-computation-2.md#appcomp-arrays-shapes) 和 [索引和切片](app-computation-3.md#appcomp-indexing-slicing)。


**产品和 vector 比较**: 当代码使用 `*`、`@`、 norms 、距离、 cosine similarity  或排名时，请使用 [元素算术与  Linear  代数](app-computation-4.md#appcomp-elementwise-vs-linear-algebra)、[ Dot Products 、 Norms 、距离和  Cosine Similarity ](app-computation-5.md#appcomp-dot-norm-cosim) 和 [排序和排名](app-computation-6.md#appcomp-sorting-rankings)。


** Row -wise 计算和构造函数**: 当代码使用轴、总和、最大值、设计  matrices  或常见数组时，请使用 [约简、轴和  Row  明智计算](app-computation-7.md#appcomp-reductions-axes) 和 [构造通用数组和设计 Matrices ](app-computation-8.md#appcomp-array-constructors)。


**数值检查**: 当代码检查近似相等、 residual 、 orthogonality 或舍入输出时，请使用[数值检查和舍入](app-computation-9.md#appcomp-numerical-checks)。


** Linear  代数命令**: 将 [NumPy  Linear  代数命令](app-computation-10.md#appcomp-numpy-linalg) 用于  rank 、行列式、求解、 least squares 、因式分解、 eigenvalue  命令和外积。


**符号计算**: 使用 [SymPy 符号计算](app-computation-11.md#appcomp-sympy) 进行精确算术、SymPy  matrices 、 row reduction 、零空间、部分  derivatives 、梯度、Hessians、Jacobian、替换以及转换为 NumPy。


**小Python图案**: 使用 [实验室中使用的小型 Python 模式](app-computation-12.md#appcomp-python-patterns) 来辅助  functions 、循环、推导式和断言。


**可选代码**: 使用 [布尔掩码、复制和  Attention  助手](app-computation-13.md#appcomp-attention-helpers) 和 [可选绘图](app-computation-14.md#appcomp-plotting) 进行可选的  attention  掩模和绘图。


## 本章目录

- [B.1 如何阅读计算代码](app-computation-1.md)
- [B.2 NumPy arrays、vectors、matrices 与 shapes](app-computation-2.md)
- [B.3 Indexing 与 slicing](app-computation-3.md)
- [B.4 逐元素运算与 linear algebra 运算](app-computation-4.md)
- [B.5 Dot products、norms、distances 与 cosine similarity](app-computation-5.md)
- [B.6 排序与排名](app-computation-6.md)
- [B.7 Reductions、axes 与逐 row 计算](app-computation-7.md)
- [B.8 构造常用 arrays 与 design matrices](app-computation-8.md)
- [B.9 数值检查与 roundoff](app-computation-9.md)
- [B.10 NumPy linear algebra 命令](app-computation-10.md)
- [B.11 SymPy 符号计算](app-computation-11.md)
- [B.12 Lab 中常用的 Python 写法](app-computation-12.md)
- [B.13 Boolean masks、复制与 attention 辅助函数](app-computation-13.md)
- [B.14 可选：绘图](app-computation-14.md)
- [B.15 命令速查表](app-computation-15.md)

