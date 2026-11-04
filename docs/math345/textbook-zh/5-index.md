# 第五章：eigenvalues 与 second-order optimization

!!! note "译文与来源"

    本页依据 2026 年 11 月 3 日读取的官方 v0.2 源文件制作。数学术语保留英文；原书公式、代码、例题、活动、证明与解答保留。译稿使用机器辅助翻译并进行数学与排版检查，未经原作者审定。原作者：Jacob Denson、Kaitlyn Phillipson、Sebastien Roch。除原书另有注明外，遵循 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)。 [阅读英文原文](https://math345-textbook.github.io/u5-optimization-training.html)。


<a id="u5-optimization-training"></a>

 Eigenvectors  指出了这样一些方向：沿这些方向的输入经过  square matrix  变换后，仍落在原来的直线上。 Diagonalization  把足够多的这类方向组织成一个  coordinate system ，使  matrix  的作用变为沿不同方向分别伸缩。对于  Symmetric  的  matrices ，可以选取一组  orthonormal  的  eigenvector  作为  coordinates ；这也能简化  quadratic forms 。接着，本章会把这些工具用于 Hessian，并从  projection 、gradient 和曲率三个角度重新理解  least squares 。

**核心问题**：沿哪些方向观察， matrix  的作用最容易理解？这些方向如何描述  quadratic forms ，以及一个  function  在某点附近的  shape ？ projection 、 gradient  等于零以及曲率，为什么能够从不同角度描述同一个  least-squares  问题？

**Readiness Check**: 开始本章前，可以先做 [Unit 5 readiness check](https://math345-textbook.github.io/readiness/u5/)。它会检查本章需要用到的第一至第四章知识，并提示你优先复习哪些内容。

**学习目标**：学完本章后，你应当能够：


- U5-LO1。计算  eigenvalues 、 eigenvectors  和  eigenspaces ，并将  eigenvectors  解释为其线由  square matrix  保留的方向。

- U5-LO2：判断一个  matrix  是否  diagonalizable ；在可能时构造  diagonalization ：

    $$
    A=PDP^{-1}
    $$

    并用它简化  matrix  的作用与幂的计算。

- U5-LO3。orthogonal diagonalization  symmetric   matrices  并将  spectral theorem  解释为  coordinates  的  orthonormal  变化。

- U5-LO4。表示和评估 quadratic forms ，解释其 scaling 行为，在principal axes coordinates 中对其进行分析，并将 symmetric  matrices 分类为 positive definite 、 negative definite 或 indefinite 。

- U5-LO5：构造和使用 Taylor polynomial 与 quadratic approximation，利用  Hessian  的  eigenvalues 、contour plot 以及二元情形的 discriminant 判别法，对 critical point 进行分类。

- U5-LO6。通过 residual  orthogonality 、零 gradient 、 Hessian 曲率、全局极小性和唯一性推导并解释 least squares 。

- U5-LO7：用固定的  nonlinear   features  构造  design matrix ，写出  squared-error loss ：

    $$
    L(\mathbf c)=\|A\mathbf c-\mathbf y\|^2,
    $$

    并解释为什么只拟合 $\mathbf c$ 时，这是一个  least-squares  问题。

**技能清单**：计算  eigenvalues 、 eigenvectors 、 eigenspaces 、diagonalization、 matrix  幂、 orthogonal  diagonalization、 quadratic forms 、 definiteness 、 Hessian   eigenvalue  分类、 normal equations 、 residual  检查，以及固定- feature 设计 matrices 。


## 本章目录

- [5.1 eigenvalues、eigenvectors 与 diagonalization](5-1.md)
- [5.2 symmetric matrices 与 orthogonal diagonalization](5-2.md)
- [5.3 quadratic forms 与 definiteness](5-3.md)
- [5.4 Hessian 与 second derivative test](5-4.md)
- [5.5 重新理解 least squares](5-5.md)
- [5.6 代码回顾](5-6.md)
- [5.7 练习](5-7.md)
- [5.8 本章要点](5-8.md)

