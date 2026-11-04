# Anatomy of a linear map {#anatomy-of-a-linear-map}

!!! note "译文与来源"

    本页为教材公开源文件 v0.2 的非官方中文翻译，保留原公式、例题、活动、代码和习题；例题与活动等编号按本地小节重排，解答和证明可点击展开；正文与标题中的数学专有名词保留英文，中文用于解释；术语表保留中英对照以便查阅。原文作者：Jacob Denson、Kaitlyn Phillipson、Sebastien Roch。除另有注明的插图外，译文遵循 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)。[阅读英文原文](2-index.md)。

## 本章目录 {#_1}

- [2.1 理解 linear map：预览](2-1.md)
- [2.2 linear system ](2-2.md)
- [2.3 subspace ](2-3.md)
- [2.4 linear independence、 basis 与 dimension ](2-4.md)
- [2.5 inverse matrix 与 determinant ](2-5.md)
- [2.6 代码回顾](2-6.md)
- [2.7 练习](2-7.md)
- [2.8 第二章要点](2-8.md)

## 本章导言 {#_2}

matrix 通过 $\mathbf{x} \mapsto A\mathbf{x}$ 作用于输入。在应用程序中，$A\mathbf{x}$可能表示来自特征的测量、来自参数的预测或来自模型层的分数。本章通过方程$A\mathbf{x}=\mathbf{b}$（包括重要的特殊情况$\mathbf{b}=\mathbf{0}$）研究其结构：哪些输出是可达的，哪些方向被遗忘，输入何时不唯一，以及 subspace、 linear independence、 rank、 nullity 和 inverse matrix 如何组织答案。

大问题。给定一个 linear map，方程组如何揭示它产生什么、忘记什么以及何时可以逆转？

学习目标。在本章结束时，学生应该能够：


- U2-LO1。区分 linear 方程和 nonlinear 方程，并在语言或几何描述、方程组、 augmented matrix 和 matrix 方程 $A\mathbf{x}=\mathbf{b}$ 之间进行转换。

- U2-LO2。使用 row reduction 来求解 linear system，将解集分类为空、唯一或无限，并以参数方式描述解。

- U2-LO3。计算并将$\operatorname{im}(A)$、$\operatorname{null}(A)$、 rank 和 nullity 解释为可达输出、遗忘方向、传输 dimension 和非唯一输入。

- U2-LO4。使用 span、 subspace、 linear independence、 basis、 coordinate 和 dimension 来有效地描述 subspace。

- U2-LO5。使用 row reduction、 rank、 null space、 linear independence、 inverse matrix 和 determinant 标准确定 square matrix 是否 invertible；计算和解释逆，并在适当的时候使用它们来求解 linear system。

- U2-LO6。识别冗余 column 或特征，并解释 null space 方向如何创建具有相同输出的不同输入或参数 vector。

- U2-LO7。使用 cofactor 展开和 determinant 属性计算 determinant，并使用 determinant 测试 invertibility。


**计算技能**：构造 augmented matrix，进行 elementary row operations，识别 REF/RREF 并解 linear systems；求 null-space、column-space 和 row-space basis；计算 rank 与 nullity，检验 linear independence，并用 inverse 和 determinant 分析 invertibility。

<a id="u2-anatomy-linear-map"></a>
