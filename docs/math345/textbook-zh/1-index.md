# Vectors, matrices, and linear maps {#vectors-matrices-and-linear-maps}

!!! note "译文与来源"

    本页为教材公开源文件 v0.2 的非官方中文翻译，保留原公式、例题、活动、代码和习题；例题与活动等编号按本地小节重排，解答和证明可点击展开；正文与标题中的数学专有名词保留英文，中文用于解释；术语表保留中英对照以便查阅。原文作者：Jacob Denson、Kaitlyn Phillipson、Sebastien Roch。除另有注明的插图外，译文遵循 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)。[阅读英文原文](1-index.md)。

## 本章目录 {#_1}

- [1.1 vector ](1-1.md)
- [1.2 matrix ](1-2.md)
- [1.3 matrix-vector product 及 linear map ](1-3.md)
- [1.4 matrix multiplication 与映射复合](1-4.md)
- [1.5 代码回顾](1-5.md)
- [1.6 练习](1-6.md)
- [1.7 第一章要点](1-7.md)

## 本章导言 {#_2}

vector 可以表示空间中的位移，但在本课程中，它们更经常表示数据或模型参数。单词、文档、 graph 或用户可以被编码为 vector。然后 matrix 作用于 vector， matrix-vector product 给出了我们研究的第一个大 function 族：linear map。

大问题。 vector 如何表示数据、 matrix 如何作用于 vector 以及 linear function 有何特别之处？

学习目标。在本章结束时，学生应该能够：


- U1-LO1。计算和解释 vector norm、 dot product、距离、 orthogonality 和余弦相似性。

- U1-LO2。将几何位移、对象或数据表示为 vector，并解释 cosine similarity 和欧几里得距离测量的不同之处。

- U1-LO3。执行基本 matrix 运算并检查 matrix、 vector 和 matrix product 表达式的 dimension。

- U1-LO4。计算 $A\mathbf{x}$ 并将其解释为 row dot product 和$A$  column 的 linear combination。

- U1-LO5。识别、构造和解释 linear transformation 的 matrix 表示。

- U1-LO6。计算小 matrix product 并解释乘法如何表示 linear map 的组合。

- U1-LO7。区分 linear map 和 affine map，例如 $\mathbf{x}\mapsto W\mathbf{x}+\mathbf{b}$。

- U1-LO8。计算和解释加权平均值，解释涉及余弦相似性、 attention 式加权平均值以及将一个 matrix 应用于多个输入的简单代码、表格或图表。


工具箱技能。计算 vector norm、距离、 dot product、 cosine similarity、 matrix 和、 scalar 倍数、 transpose、 matrix-vector product、小 matrix 积和简单加权平均值。

<a id="u1-vectors-matrices-linear-maps"></a>
