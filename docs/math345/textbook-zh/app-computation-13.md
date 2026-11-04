# B.13 Boolean masks、复制与 attention 辅助函数

!!! note "译文与来源"

    本页依据 2026 年 11 月 3 日读取的官方 v0.2 源文件制作。数学术语保留英文；原书公式、代码、例题、活动、证明与解答保留。译稿使用机器辅助翻译并进行数学与排版检查，未经原作者审定。原作者：Jacob Denson、Kaitlyn Phillipson、Sebastien Roch。除原书另有注明外，遵循 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)。 [阅读英文原文](https://math345-textbook.github.io/appcomp-attention-helpers.html)。


<a id="appcomp-attention-helpers"></a>

此可选部分可帮助您阅读可选  attention  材料中使用的数组操作代码。


```python
S = np.array([[1.0, 2.0, 3.0],
              [4.0, 5.0, 6.0],
              [7.0, 8.0, 9.0]])

mask = np.triu(np.ones_like(S), k=1).astype(bool)

S_masked = S.copy()
S_masked[mask] = -1e9
```


```python
def softmax_rows(S):
    S_shifted = S - np.max(S, axis=1, keepdims=True)
    e = np.exp(S_shifted)
    return e / e.sum(axis=1, keepdims=True)
```


```python
grad_W = np.outer(g, h)
```

## 配套的

`np.ones_like(S)`

Read as. 与`S` 相同的 shape 。

**Shape/return**: 一个数组。

Used for. Mask 施工。

## 上三角

`np.triu(..., k=1)`

Read as. 对角线上方的条目。

**Shape/return**: 一个数组。

Used for.  Causal mask .

## 布尔转换

`.astype(bool)`

Read as. 转换为`True`/`False`。

**Shape/return**: 布尔数组。

Used for.  Mask  索引。

## 独立副本

`S.copy()`

Read as. 制作一份独立副本。

**Shape/return**: 一个数组。

Used for. 安全修改。

##  Mask  作业

`S_masked[mask] = -1e9`

Read as. 更改选定的条目。

**Shape/return**: 修改后的数组。

Used for. 蒙面 attention  分数。

##  Row 最大

`np.max(S, axis=1, keepdims=True)`

Read as.  Row  最大。

**Shape/return**:  column  形阵列。

Used for.稳定 softmax 。

## 指数

`np.exp(S_shifted)`

Read as. 逐项指数。

**Shape/return**: 一个数组。

Used for.  Softmax .

##  Row   normalization 

`e / e.sum(axis=1, keepdims=True)`

Read as.  Row   normalization .

**Shape/return**: 与  row  相加为 1 的数组。

Used for. Attention 权重。

##  Outer product 

`np.outer(g, h)`

Read as.  Outer product .

Shape/return.A matrix 。

Used for. Rank -一次更新。

**注意：大负  mask  值是数字占位符**

值 `-1e9` 是可选  attention  代码中非常大的负分数的数值替代。

