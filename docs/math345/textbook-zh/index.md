# math345 textbook 汉化版 {#math345-textbook}

!!! note "术语约定"

    汉化版全七章的数学专有名词统一保留英文，例如 span、column、basis、projection；正文解释仍为中文。术语表保留中英对照，便于查阅。

独立收录 MATH345 教材全七章与书内附录的中文译稿。你原来的[课程笔记](../index.md)继续保留，方便对照阅读。

## 第三、四章新增：从 AP Calculus BC 出发 {#ap-calculus-bc}

[先读数学桥梁](bc-bridge.md)：从 vector、 dot product、 matrix 和 transpose 开始，不预设你已经熟练掌握 linear 代数。

第三、四章只在各章开头保留面向 BC 基础读者的导读，各小节直接呈现教材译文。[第三章学习路线](3-index.md#bc-guide) 和 [第四章学习路线](4-index.md#bc-guide) 可以帮助你安排阅读顺序。新增讲解是本汉化版的教学补充，同样按下文 CC BY-NC-SA 4.0 许可分享，不代表原作者审定。

## 选择章节 {#_1}

| 章节 | 内容 | 页面范围 |
|---|---|---|
| [第一章：vector、 matrix 与 linear map ](1-index.md) | vector 几何、 matrix 运算、 linear 与 affine map、 matrix multiplication 和复合 | 1.1–1.7 |
| [第二章：剖析 linear map ](2-index.md) | linear system、 row reduction、 subspace、 linear independence、 basis 与 dimension、 inverse matrix 和 determinant | 2.1–2.8 |
| [第三章：local linearization 与 first-order optimization ](3-index.md) | multivariable function、 derivative matrix、局部近似、 chain rule、 gradient descent | 3.1–3.9 |
| [第四章：orthogonality 与 least squares ](4-index.md) | orthogonal basis、 orthogonal projection、Gram–Schmidt、 least squares、 normal equations、回归与 QR factorization | 4.1–4.7 |
| [第五章：eigenvalues 与 second-order optimization](5-index.md) | eigenvalues、diagonalization、quadratic forms、Hessian 与 second derivative test | 5.1–5.8 |
| [第六章：constrained optimization 与 Lagrange multipliers](6-index.md) | absolute extrema、Lagrange multipliers、maximum stretch、PCA 与 SVD | 6.1–6.8 |
| [第七章：abstract vector spaces 与 polynomial approximation](7-index.md) | abstract vector spaces、inner product spaces、polynomial approximation 与 Gram–Schmidt | 7.1–7.6 |

!!! info "阅读说明"

    这是基于原教材公开源文件 **v0.2** 制作的非官方中文译稿，采用机器辅助翻译，并核对主要术语、关键定义与公式。保留原书正文、公式、插图、例题、活动、代码与书内练习；例题与活动等编号按本地小节重排，解答和证明可点击展开。

    书内五组附录也已收录：Transformer 综合练习、计算速查、应用题解答、参考文献与 Lab 索引。原书仅以链接给出的外部视频、在线游戏、外部习题和独立 notebook 保留原链接，不属于书内全文。数学速查表使用 **English Term**: 中文说明的格式。

## 附录与全书资料

- [附录 A：Transformer 综合练习](app-transformer-index.md)
- [附录 B：NumPy 与 SymPy 计算速查](app-computation-index.md)
- [附录 C：应用练习解答提要（第一至第七章）](app-solutions-index.md)
- [参考文献](app-references-index.md) · [Lab 索引](app-labs-index.md)
- [前言](front-preface.md) · [参与作者](front-authors.md) · [来源与许可](front-sources.md) · [版权与许可](front-license.md)

## 常用术语对照 {#_2}

| 中文 | English |
|---|---|
| 范数 / 点积 / 余弦相似度 | Norm / Dot Product / Cosine Similarity |
| 子空间 / 张成空间 / 生成集 | Subspace / Span / Spanning Set |
| 线性无关 / 基 / 维数 | Linear Independence / Basis / Dimension |
| 列空间 / 行空间 / 像空间 / 零空间 | Column Space / Row Space / Image Space / Null Space |
| 主元 / 行阶梯形 / 简化行阶梯形 | Pivot / Row Echelon Form / Reduced Row Echelon Form |
| 逆矩阵 / 行列式 / 余子式 / 代数余子式 | Inverse Matrix / Determinant / Minor / Cofactor |
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

本目录按 2026 年 11 月 3 日读取的官方 v0.2 全书源文件核对章节与书内内容。原有第一至第四章保留已润色的译文，补入本次发现的更新；新增第五至第七章及附录使用机器辅助翻译，重点核对核心定义、定理、公式与排版，仍可能存在需要继续润色的表述。

## 作者、来源与许可 {#_3}

原教材：*MATH345 Linear Algebra and Optimization*。作者与版权持有人：**Jacob Denson、Kaitlyn Phillipson、Sebastien Roch，© 2024–2026**。

- [原教材目录](https://math345-textbook.github.io/frontmatter.html)
- [原教材版权与许可](front-license.md#front-colophon)
- [本译文依据的公开源文件 v0.2](https://github.com/MATH345-Textbook/MATH345-Textbook.github.io/tree/main/source/v0.2)
- [原教材改编来源及插图署名](front-sources.md#sources-and-licenses)

除原书另行注明的内容外，原教材与本中文翻译遵循 **[知识共享署名—非商业性使用—相同方式共享 4.0 国际许可（CC BY-NC-SA 4.0）](https://creativecommons.org/licenses/by-nc-sa/4.0/)**。中文翻译与网页排版适配是相对于原文的修改，不代表原作者认可或审定。

原书部分内容改编自 W. Keith Nicholson 的 *Linear Algebra with Applications*（LibreTexts / Lyryx），以及 Gilbert Strang、Edwin “Jed” Herman 的 *Calculus Volume 3*（OpenStax），均按原书说明保留 CC BY-NC-SA 4.0 署名。`calc3-fig-*.png` 插图来自后者，© 2018 Rice University；Melissa Lindsey 绘制的插图在相应图注保留署名。


第一章另含第三方插图：Glosser.ca 的 neural network 图（[CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)）与 dvgodoy 的 Transformer 架构图（[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)）。它们保留原图及相应图注署名，适用各自的许可。
