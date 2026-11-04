# 第七章：abstract vector spaces 与 polynomial approximation

!!! note "译文与来源"

    本页依据 2026 年 11 月 3 日读取的官方 v0.2 源文件制作。数学术语保留英文；原书公式、代码、例题、活动、证明与解答保留。译稿使用机器辅助翻译并进行数学与排版检查，未经原作者审定。原作者：Jacob Denson、Kaitlyn Phillipson、Sebastien Roch。除原书另有注明外，遵循 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)。 [阅读英文原文](https://math345-textbook.github.io/u7-abstract-vector-spaces-polynomial-approximation.html)。


<a id="u7-abstract-vector-spaces-polynomial-approximation"></a>

前几章主要研究 $\mathbb R^n$ 中的  vectors 。本章把  vector  space 和  inner product spaces  推广到抽象情形：即使对象不再是普通的坐标列，许多代数与几何思想仍然适用。 Matrices  和 polynomial 是主要例子。最后，我们用  Polynomial spaces  把这些知识联系起来：选定  inner product  以后， projection  就把  least squares 、 Taylor approximation  与  Gram-Schmidt  联系在一起。

**核心问题**：当  vectors  是  matrices  或 polynomial 时，哪些结论仍然成立？选择一个  inner product ，又会怎样决定  projection  和  best approximation ？

**学习目标**：学完本章后，你应当能够：


- U7-LO1。验证 vector -空间属性并在属性失败时生成反例。

- U7-LO2。在非标准 vector 空间，尤其是 matrix 空间和 polynomial spaces ，使用子空间、 span 、独立性、 bases 、 dimension 和 coordinates 进行工作。

- U7-LO3。验证inner product属性，使用  matrices  表示  inner products ，计算  inner products 、 norms  和距离，标准化  vectors ，测试  orthogonality ，并解释更改  inner product  如何改变几何形状。

- U7-LO4。形成 Gram  matrices  并导出、求解和解释有限维  inner product spaces （包括 $G\mathbf c=\mathbf b$）中的  projection  方程。

- U7-LO5。使用  residual  条件和误差测量构建并比较泰勒、连续  least-squares  和采样  least-squares  近似值，包括收缩区间的比较。

- U7-LO6。将 Gram-Schmidt 应用于 polynomial spaces 并解释所得的 orthogonal 多项式 basis 。

**技能清单**：验证 vector -空间公理；测试 subspace 属性；将 bases 、 dimensions 、 coordinate  vectors 写入 matrix 和 polynomial spaces ；测试inner product属性；计算  norms  以及距  inner products  的距离；形式克 matrices ；解 projection 方程；比较 residual 条件；并运行 Gram-Schmidt 。


## 本章目录

- [7.1 abstract vector spaces](7-1.md)
- [7.2 inner product spaces](7-2.md)
- [7.3 polynomial spaces 与全课程的联系](7-3.md)
- [7.4 代码回顾](7-4.md)
- [7.5 练习](7-5.md)
- [7.6 本章要点](7-6.md)

