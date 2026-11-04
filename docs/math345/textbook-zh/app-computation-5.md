# B.5 Dot products、norms、distances 与 cosine similarity

!!! note "译文与来源"

    本页依据 2026 年 11 月 3 日读取的官方 v0.2 源文件制作。数学术语保留英文；原书公式、代码、例题、活动、证明与解答保留。译稿使用机器辅助翻译并进行数学与排版检查，未经原作者审定。原作者：Jacob Denson、Kaitlyn Phillipson、Sebastien Roch。除原书另有注明外，遵循 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)。 [阅读英文原文](https://math345-textbook.github.io/appcomp-dot-norm-cosim.html)。


<a id="appcomp-dot-norm-cosim"></a>

本节帮助您阅读  dot products 、长度、距离和基于方向的比较的简短 NumPy 表达式。


```python
u = np.array([3.0, 4.0])
v = np.array([4.0, 3.0])

dot = u @ v
norm_u = np.linalg.norm(u)
distance = np.linalg.norm(u - v)
cosine = (u @ v) / (np.linalg.norm(u) * np.linalg.norm(v))
```

##  Dot product 

`u @ v`

Read as. dot product $u\cdot v$。

Shape/return.A scalar 。

Used for. 对齐或得分。

##  Norm 

`np.linalg.norm(u)`

Read as. norm $\|u\|$。

Shape/return.A scalar 。

Used for. 长度。

##  Row -明智 norms 

`np.linalg.norm(X, axis=1)`

Read as. `X` 中每 row  一个 norm 。

**Shape/return**: 一个一维数组，每个  row  有一个条目。

Used for.  Row  明智的余弦相似度，例如文档排名分数。

## 欧氏距离

`np.linalg.norm(u - v)`

Read as. $u$ 和 $v$ 之间的欧几里德距离。

Shape/return.A scalar 。

Used for.  vectors  之间的距离。

##  Cosine similarity 

`(u @ v) / (...)`

Read as. cosine similarity $\frac{u\cdot v}{\|u\|\|v\|}$。

Shape/return.A scalar 。

Used for. 基于方向的比较。

**注意： Cosine similarity  不是距离**

Cosine similarity 比较 normalization 之后的方向。它与欧几里得距离不同。

