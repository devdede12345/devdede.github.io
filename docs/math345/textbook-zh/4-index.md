# 第四章：orthogonality 与 least squares {#_1}

<!-- bc-teaching-start -->
<a id="bc-guide"></a>

## 只有 AP Calculus BC 基础，应该怎样读 {#ap-calculus-bc}

本章最接近 BC 的入口是“把距离平方写成 function，再求最小值”。 projection、 least squares 与 QR 都围绕这个问题展开。若 vector 或 matrix 还不熟，先读 [数学桥梁](bc-bridge.md)；若 partial derivative、 gradient 还不熟，回看 [3.3](3-3.md) 与 [3.4](3-4.md) 的教材正文。

本章的 BC 导读只保留在这里，用于说明各节之间的联系与阅读顺序。各小节直接进入教材译文，依次呈现定义、定理、证明、例题、活动和代码。

| 建议轮次 | 阅读内容 | 能独立做什么 |
|---|---|---|
| 第 1 轮 | 4.1 | 算 dot product、 normalization、读懂 orthogonal basis coordinate |
| 第 2 轮 | 4.2 | 从一元最小化理解 projection，完成两个 columns Gram–Schmidt |
| 第 3 轮 | 4.3 | 区分 coefficient、 fitted vector 和 residual，解小型 normal equations |
| 第 4 轮 | 4.4 | 从逐 column 重构理解 QR，用 back-substitution 求相同 least-squares solution |
| 第 5 轮 | 4.5–4.7 | 解释数值输出，完成分层练习，检查公式条件 |

不要把“我暂时不懂 QR 的名字”当作“我不会求最小值”。我们会从你已会的一元二次 function 出发，逐步把同一个想法写成 vector 与 matrix 形式。

<!-- bc-teaching-end -->

<a id="textbook-body"></a>

## 教材正文与章节导航 {#_2}


**Orthogonality and Least Squares**

本章收录原教材第四章 4.1–4.7 的中文译文。沿着“orthogonal basis → projection → least squares → QR factorization”的主线，将第三章的局部优化与 column space 中的最近点问题联系起来。

| 小节 | 内容 |
|---|---|
| [4.1 orthogonality 与 orthogonal basis ](4-1.md) | orthogonal 与 orthonormal、 normalization、 linearly independent、 expansion theorem 与 coordinate |
| [4.2 orthogonal projection ](4-2.md) | orthogonal complement、最近点、 projection theorem、 directional derivative、Gram–Schmidt |
| [4.3 作为 projection 的 least squares ](4-3.md) | 可达输出、 fitted vector、 residual orthogonal、 normal equations、 linear regression |
| [4.4 QR factorization 与 least squares ](4-4.md) | 约化 QR、三角方程组、 back-substitution、rectangular matrix Q 的含义与数值检查 |
| [4.5 代码回顾](4-5.md) | NumPy least squares、回归 design matrix、 residual 检查与 QR 输出解读 |
| [4.6 练习](4-6.md) | 原书外部练习入口、12 道书内补充练习，解答仍链接至英文附录 |
| [4.7 本章要点](4-7.md) | 数学速查、常见错误、前后章节联系 |

!!! info "译文与来源"

    基于原教材公开源文件 **v0.2**，于 2026 年 11 月 2 日读取。正文、定义、定理、证明、例题、活动、代码及本章内置练习按原书保留；为网页阅读重排编号，证明与解答可展开。外部练习、配套 Notebook、视频与其他章节仍链接原站，不包含这些外部材料的全文。

    原作者：**Jacob Denson、Kaitlyn Phillipson、Sebastien Roch，© 2024–2026**。本页为非官方中文翻译及 Markdown 排版适配，不代表原作者审定。除另有注明外，按 **[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)** 分享；第三方材料沿用原书署名及许可。

    [英文第四章](4-index.md#u4-orthogonality-least-squares) · [官方公开源文件](https://github.com/MATH345-Textbook/MATH345-Textbook.github.io/tree/main/source/v0.2) · [版权与许可](front-license.md#front-colophon) · [原书改编来源](front-sources.md#sources-and-licenses)

!!! success "完整性核对：2026 年 11 月 2 日"

    已对照当日取得的官方 v0.2 第四章源文件核对 4.1–4.7，包含本章正文、定义与定理、证明、例题与活动、代码、插图、书内练习和要点。外部练习、Notebook、视频及英文解答附录仍保留原站入口，不计作已汉化的第四章正文。

## 术语对照 {#_3}

| 中文 | English |
|---|---|
| 正交 / 标准正交 / 单位化 | Orthogonal / Orthonormal / Normalization |
| 正交基 / 标准正交基 | Orthogonal Basis / Orthonormal Basis |
| 正交补 / 正交投影 | Orthogonal Complement / Orthogonal Projection |
| 展开定理 / 最佳逼近 | Expansion Theorem / Best Approximation |
| 格拉姆–施密特方法 | Gram–Schmidt Process |
| 最小二乘 / 正规方程 | Least Squares / Normal Equations |
| 系数向量 / 拟合向量 / 残差 | Coefficient Vector / Fitted Vector / Residual |
| 设计矩阵 / 线性回归 | Design Matrix / Linear Regression |
| 约化 QR 分解 / 回代 | Reduced QR Factorization / Back-substitution |
| 列满秩 / 舍入误差 | Full Column Rank / Roundoff Error |

---

## 本章导言 {#_4}

<a id="u4-orthogonality-least-squares"></a>

orthogonality 将几何转化为计算。本章用 projection 实现 best approximation，并把回归问题转化为 linear 代数问题。

核心问题：当 $A\mathbf{x}=\mathbf{b}$ 无解时，怎样找到 best approximation 解？

预备知识检查：开始本章前，请完成 [第四章预备知识自测](https://math345-textbook.github.io/readiness/u4/)。它检查本章依赖的第一至三章概念，并提示你应先复习哪些内容。

学习目标：完成本章后，你应当能够：


- U4-LO1：利用 dot product 与 norm 分析 orthogonality，对 vector 进行 normalization，并计算 vector 在 orthogonal basis 或 orthonormal basis 下的展开。

- U4-LO2：使用 Gram–Schmidt 方法构造 orthogonal basis 与 orthonormal basis，并计算 orthogonal complement。

- U4-LO3：计算 vector 在 subspace 上的 orthogonal projection，解决最近点问题。

- U4-LO4：把 least squares 理解为向 column space 的 projection，识别 residual 并解释 residual orthogonality。

- U4-LO5：推导并求解 normal equations $A^TA\hat{\mathbf{x}}=A^T\mathbf{b}$，将其用于小规模回归问题。

- U4-LO6：计算并解释 QR factorization，用 QR 求解 linear system 和 least squares 问题。

- U4-LO7：解读 projection 与 least squares 代码，包括回归、QR 方法以及 `A.T @ r` 等检查，并说明输出能够和不能证明什么。


**计算技能**：计算 dot product 并判断 orthogonality；进行 normalization 和 Gram–Schmidt；求 projection、解释 residual；推导和求解 normal equations；构造 regression 的 design matrix；检查 $A^T\mathbf{r}\approx \mathbf{0}$；以及通过 QR 求 least-squares solution。



[← 第三章](3-index.md) · [开始 4.1 →](4-1.md) · [返回教材目录](index.md)
