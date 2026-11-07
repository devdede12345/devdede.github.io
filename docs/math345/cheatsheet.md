# Cheatsheet

## Vector Operations

**Norm**: vector 的长度

$$
\|\mathbf v\|=\sqrt{\sum_{i=1}^{n}v_i^2}
$$

**Dot Product**:

$$
\mathbf u\cdot\mathbf v=\sum_{i=1}^{n}u_iv_i
$$

**Cosine Similarity**: 要求两个 vector 都非零

$$
\operatorname{cosim}(\mathbf u,\mathbf v)=\cos\theta
=\frac{\mathbf u\cdot\mathbf v}{\|\mathbf u\|\|\mathbf v\|}
$$

## Lines and Planes

**Line**: 经过 $(x_0,y_0,z_0)$，direction vector 为 $(a,b,c)$

$$
\frac{x-x_0}{a}=\frac{y-y_0}{b}=\frac{z-z_0}{c}
$$

上式要求 $a,b,c$ 都非零；若某个分量为零，使用 parametric form（direction vector 整体不能为零）：

$$
(x,y,z)=(x_0,y_0,z_0)+t(a,b,c)
$$

**Plane**: 经过 $(x_0,y_0,z_0)$，非零 normal vector 为 $(a,b,c)$

$$
a(x-x_0)+b(y-y_0)+c(z-z_0)=0
$$

## Determinants and Inverses

**Determinant**:

$$
\det\begin{bmatrix}a&b\\c&d\end{bmatrix}=ad-bc
$$

**Inverse**: 要求 $ad-bc\ne0$

$$
\begin{bmatrix}a&b\\c&d\end{bmatrix}^{-1}
=\frac{1}{ad-bc}\begin{bmatrix}d&-b\\-c&a\end{bmatrix}
$$

**Cofactor**: $\operatorname{minor}(A)_{ij}$ 是删去第 $i$ 个 row 和第 $j$ 个 column 后所得 matrix 的 determinant

$$
\operatorname{cof}(A)_{ij}=(-1)^{i+j}\operatorname{minor}(A)_{ij}
$$

**Cofactor Expansion**: 对 $n\times n$ matrix，固定第 $i$ 个 row 展开

$$
\det(A)=\sum_{j=1}^{n}a_{ij}\operatorname{cof}(A)_{ij}
$$

或固定第 $j$ 个 column 展开

$$
\det(A)=\sum_{i=1}^{n}a_{ij}\operatorname{cof}(A)_{ij}
$$

## Derivative Rules

**Product Rule**:

$$
(fg)'=f'g+fg'
$$

**Quotient Rule**: 要求 $g\ne0$

$$
\left(\frac{f}{g}\right)'=\frac{gf'-fg'}{g^2}
$$

**Chain Rule**:

$$
(f\circ g)'(x)=f'(g(x))g'(x)
$$

**Trigonometric Derivatives**:

$$
\begin{aligned}
(\sin x)'&=\cos x & (\cos x)'&=-\sin x\\
(\tan x)'&=\sec^2x & (\cot x)'&=-\csc^2x
\end{aligned}
$$

**Exponential Derivatives**: $b>0$

$$
(e^x)'=e^x,\qquad (b^x)'=b^x\ln b
$$

**Logarithmic Derivatives**: $x>0$，且 $b>0,\ b\ne1$

$$
(\ln x)'=\frac1x,\qquad (\log_bx)'=\frac{1}{x\ln b}
$$

## Jacobian and Local Linearization

**Jacobian Matrix**: 若 $F:\mathbb R^n\to\mathbb R^m$，则 $J_F$ 有 $m$ 个 row 和 $n$ 个 column

$$
J_F(\mathbf x)=\begin{bmatrix}
\dfrac{\partial F_1}{\partial x_1}(\mathbf x)&\cdots&\dfrac{\partial F_1}{\partial x_n}(\mathbf x)\\
\vdots&\ddots&\vdots\\
\dfrac{\partial F_m}{\partial x_1}(\mathbf x)&\cdots&\dfrac{\partial F_m}{\partial x_n}(\mathbf x)
\end{bmatrix}
$$

**Local Linearization**: $F$ 在 $\mathbf a$ 处 differentiable 时，在附近使用

$$
F(\mathbf x)\approx L(\mathbf x)
=F(\mathbf a)+J_F(\mathbf a)(\mathbf x-\mathbf a)
$$

**Generalized Chain Rule**: 先经过 $G$，再经过 $F$；要求相应位置 differentiable

$$
J_{F\circ G}(\mathbf a)=J_F(G(\mathbf a))J_G(\mathbf a)
$$

## Gram–Schmidt and QR

**Gram–Schmidt**: 对 linearly independent columns $\mathbf a_1,\ldots,\mathbf a_n$，依次计算；$j=1$ 时空和为零

$$
r_{ij}=\mathbf q_i^T\mathbf a_j\qquad(i<j)
$$

$$
\mathbf p_j=\sum_{i=1}^{j-1}r_{ij}\mathbf q_i
$$

$$
\mathbf v_j=\mathbf a_j-\mathbf p_j
$$

$$
r_{jj}=\|\mathbf v_j\|
$$

$$
\mathbf q_j=\frac{\mathbf v_j}{r_{jj}}
$$

其中 $\mathbf q_j$ 是 unit vector；这些 columns 构成 $Q$，$r_{ij}$ 构成 upper triangular matrix $R$，并有 $A=QR$

## Least Squares

**Normal Equations**: least-squares solution $\widehat{\mathbf x}$ 满足

$$
A^TA\widehat{\mathbf x}=A^T\mathbf b
$$

**QR Method**: 若 $A$ 具有 full column rank，使用 reduced QR factorization $A=QR$，其中 $Q^TQ=I$，求解

$$
R\widehat{\mathbf x}=Q^T\mathbf b
$$
