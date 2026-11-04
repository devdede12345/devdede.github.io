# 第三章：local linearization 与 first-order optimization {#_1}

<!-- bc-teaching-start -->
<a id="bc-guide"></a>

## 只有 AP Calculus BC 基础，应该怎样读 {#ap-calculus-bc}

你不需要先成为“数学高手”。本章最核心的想法依旧是 BC 的 derivative 与 tangent-line approximation，只是输入、输出可以是一组数。先读 [从 BC 出发的数学桥梁](bc-bridge.md)，把 vector、 matrix、 dot product 和 transpose 补起来。

本章的 BC 导读只保留在这里，用于说明阅读顺序。各小节直接进入教材译文，证明和解答仍可展开查看。阅读时先弄清公式的条件、输入输出和对象类型，再结合例题理解计算。

| 建议轮次 | 阅读内容 | 这一轮的目标 |
|---|---|---|
| 第 1 轮 | 3.1–3.3 的新增讲解 | 看懂 function 类型，能求 partial derivative 并摆出 Jacobian |
| 第 2 轮 | 3.4–3.5 | 用 derivative 预测变化，追踪 composite function 各条路径 |
| 第 3 轮 | 3.6 | 理解 directional derivative、 critical point 和下降一步 |
| 第 4 轮 | 3.7–3.9 | 读代码、做分层练习，再用速查表复习 |

**带着同一个例子贯穿本章**：f(x,y)=x²+2y²。它有两个输入、一个输出； partial derivative 是 2x、4y； gradient 用于近似和方向变化；沿 parametric curve 代入时使用 chain rule。先让这个例子变熟，再处理更一般的符号。

<!-- bc-teaching-end -->

<a id="textbook-body"></a>

## 教材正文与章节导航 {#_2}


本页收录 MATH345 教材第三章的中文译文。你原来的[课程笔记](../index.md)和[第三章笔记](../chapter3.md)继续保留，便于对照阅读。

## 第三章：local linearization 与 first-order optimization {#_3}

**Local Linearization and First-order Optimization**

| 小节 | 内容 |
|---|---|
| [3.1 general function 与 domain ](3-1.md) | function 类型、 domain 与 range、 graph 与 level curve、 limit、 continuity、集合的局部性质 |
| [3.2 one-parameter map 与变化](3-2.md) | parameterization 曲线、 vector-valued function 的 limit、 derivative、 tangent vector 与变化率 |
| [3.3 partial derivative、 gradient、 Hessian matrix 与 Jacobian matrix ](3-3.md) | partial derivative 的计算与几何解释、 higher-order partial derivative、各类 derivative 的 matrix 表示 |
| [3.4 local linearization 与 differentiability ](3-4.md) | linear approximation、 differentiability、 tangent plane、用 Jacobian matrix 预测局部变化 |
| [3.5 matrix multiplication 形式的 chain rule ](3-5.md) | composite function 求导、 matrix dimension 与乘法顺序、 nonlinear 系统的局部模型 |
| [3.6 directional derivative、 critical point 与 gradient descent ](3-6.md) | 方向变化、最速变化方向、极值的候选点、下降更新与 learning rate |
| [3.7 代码回顾](3-7.md) | SymPy 与 NumPy 中的 derivative、局部预测、误差和迭代计算 |
| [3.8 练习](3-8.md) | 原书练习入口与补充应用题 |
| [3.9 本章要点](3-9.md) | 公式速查、常见错误与前后章节的联系 |

!!! info "阅读说明"

    本栏目是基于原教材公开源文件 **v0.2** 制作的非官方中文译本，采用机器辅助翻译，并核对了主要术语、关键定义与公式。正文、例题、活动、书内练习和代码均随原书结构保留；解答与证明可展开查看。为适应网页阅读，例题、活动等编号按本地小节重新编排。

    原书仅以链接列出的 OpenStax 练习、其他章节和附录，仍链接到英文原站；本次收录范围为第三章，不包含那些外部页面的全文。

## 常用术语对照 {#_4}

| 中文 | English |
|---|---|
| 标量值函数 / 向量值函数 | Scalar-valued Function / Vector-valued Function |
| 分量函数 | Component Function |
| 线性映射 / 仿射映射 / 非线性映射 | Linear Map / Affine Map / Nonlinear Map |
| 定义域 / 陪域 / 值域 | Domain / Codomain / Range |
| 图像 / 像 | Graph / Image |
| 水平集 / 等值线 / 等高线图 | Level Set / Level Curve / Contour Plot |
| 开球 / 内点 / 边界点 | Open Ball / Interior Point / Boundary Point |
| 闭集 / 有界集 | Closed Set / Bounded Set |
| 参数化 / 切向量 | Parameterization / Tangent Vector |
| 偏导数 / 混合偏导数 | Partial Derivative / Mixed Partial Derivative |
| 梯度 / 海森矩阵 / 雅可比矩阵 | Gradient / Hessian Matrix / Jacobian Matrix |
| 局部线性化 / 可微性 / 切平面 | Local Linearization / Differentiability / Tangent Plane |
| 链式法则 / 方向导数 | Chain Rule / Directional Derivative |
| 临界点 / 局部极值 / 全局极值 | Critical Point / Local Extremum / Global Extremum |
| 梯度下降 / 学习率 | Gradient Descent / Learning Rate |
| 残差 / 平方误差损失 | Residual / Squared-error Loss |
| 零空间 / 秩 / 零度 | Null Space / Rank / Nullity |

## 作者、来源与许可 {#_5}

原教材：*MATH345 Linear Algebra and Optimization*。作者与版权持有人：**Jacob Denson、Kaitlyn Phillipson、Sebastien Roch，© 2024–2026**。

- [原教材目录](https://math345-textbook.github.io/frontmatter.html)
- [原教材版权与许可](front-license.md#front-colophon)
- [本译文依据的公开源文件 v0.2](https://github.com/MATH345-Textbook/MATH345-Textbook.github.io/tree/main/source/v0.2)
- [原教材改编来源及插图署名](front-sources.md#sources-and-licenses)

除原书另行注明的内容外，原教材与本中文翻译遵循 **[知识共享署名—非商业性使用—相同方式共享 4.0 国际许可（CC BY-NC-SA 4.0）](https://creativecommons.org/licenses/by-nc-sa/4.0/)**。中文翻译与网页排版适配是相对于原文的修改，不代表原作者认可或审定。

原书部分内容改编自 W. Keith Nicholson 的 *Linear Algebra with Applications*（LibreTexts / Lyryx），以及 Gilbert Strang、Edwin “Jed” Herman 的 *Calculus Volume 3*（OpenStax），均按原书说明保留 CC BY-NC-SA 4.0 署名。`calc3-fig-*.png` 插图来自后者，© 2018 Rice University；Melissa Lindsey 绘制的插图在相应图注保留署名。

---

## 本章导言 {#_6}

[第一章](1-index.md)和[第二章](2-index.md)主要研究 linear map $\mathbf x\mapsto A\mathbf x$，但大多数 function 并不是 linear 的。本章先研究一般的 scalar-valued function 和 vector-valued function，再利用 derivative 与 Jacobian matrix，找出描述 nonlinear function 在某一点附近行为的 linear map。对于 scalar-valued function，同一个局部模型还可以描述沿某个方向的变化、寻找 critical point，并指导下降迭代。



$$
F(\mathbf{a}+\mathbf{h})\approx F(\mathbf{a})+J_F(\mathbf{a})\mathbf{h}.
$$



贯穿本章的例子从第二章的预测 vector $X\mathbf w$ 出发，将它与观测数据 $\mathbf y$ 比较。利用第一章的 vector 长度平方，把 residual 归结为一个 scalar 误差 $\mathcal L(\mathbf w)=\|X\mathbf w-\mathbf y\|^2$。我们将用同一个 function 研究 level curve、 partial derivative、误差的局部预测、 chain rule，以及一次下降迭代。冗余特征使这个计算重新联系到第二章的 null space；第四章则研究一般的 least-squares solution。

核心问题：对于一个 nonlinear function，哪个 linear map 能最好地描述它在某一点附近的行为？怎样利用这个局部模型，选择使 scalar-valued function 减小的一步？

学习目标。在本章结束时，学生应该能够：


- U3-LO1：区分、求值并复合 scalar-valued function 与 vector-valued function；写出 component function 与曲线的参数表示；描述 domain、 range、 graph、 level curve 以及集合在映射下的像。

- U3-LO2：计算 limit、检查 continuity，对一元 scalar-valued function 和一元 vector-valued function 求导，并计算 multivariable function 的 partial derivative。

- U3-LO3。计算和解释 partial derivative、 gradient、 Hessian matrix 和 Jacobian matrix。

- U3-LO4。构造 scalar-valued function 的 tangent plane 和局部 linear approximation。

- U3-LO5。使用 Jacobian matrix 作为 vector-valued function 的局部 linear map：$F(\mathbf{a}+\mathbf{h})\approx F(\mathbf{a})+J_F(\mathbf{a})\mathbf{h}$。

- U3-LO6。以 component 形式应用 chain rule 并将其作为 Jacobian matrix 的 matrix multiplication。

- U3-LO7：识别 affine 部分、 nonlinear 部分及局部 linear approximation，从而理解简单的复合 nonlinear 系统，例如小型 neural network 的前向计算。

- U3-LO8：计算并解释 directional derivative，利用 gradient 确定增长与下降最快的方向。

- U3-LO9：将 interior point 处的 critical point 识别为 local extremum 的候选点，进行 gradient descent 更新，并根据迭代点、代码或损失表格判断 learning rate 的影响。


工具箱技能：写出 component function；计算 partial derivative、 higher-order partial derivative、 gradient、 Hessian matrix 和 Jacobian matrix；写出 tangent plane 方程；计算局部 linear approximation；检查 Jacobian matrix 的 dimension 并按 chain rule 相乘；比较实际变化与 linear 预测；求 critical point、 column critical point 方程；进行 gradient descent 更新；解读代码中的更新公式；根据损失表格比较 learning rate。

<a id="u3-beyond-linear-maps"></a>
