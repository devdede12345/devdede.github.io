# B.6 排序与排名

!!! note "译文与来源"

    本页依据 2026 年 11 月 3 日读取的官方 v0.2 源文件制作。数学术语保留英文；原书公式、代码、例题、活动、证明与解答保留。译稿使用机器辅助翻译并进行数学与排版检查，未经原作者审定。原作者：Jacob Denson、Kaitlyn Phillipson、Sebastien Roch。除原书另有注明外，遵循 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)。 [阅读英文原文](https://math345-textbook.github.io/appcomp-sorting-rankings.html)。


<a id="appcomp-sorting-rankings"></a>

本节帮助您将排序命令理解为对位置和排名的请求。


```python
scores = np.array([0.2, 0.9, 0.5])
doc_names = np.array(["D0", "D1", "D2"])

np.argsort(scores)        # indices from smallest score to largest
np.argsort(scores)[::-1]  # indices from largest score to smallest
np.argmax(scores)         # index of the largest score

ranking = doc_names[np.argsort(scores)[::-1]]
```

## 排序位置

`np.argsort(scores)`

Read as. 从最小分数到最大分数的索引。

**Shape/return**: 索引数组。

Used for. 排序。

## 价值最大的位置

`np.argmax(scores)`

Read as. `scores` 的最大条目的索引。

**Shape/return**: 整数索引。

Used for. 定位采样最大值。

**Watch for**: 这返回一个位置，而不是最大值本身。如果多个条目都达到最大，NumPy 将返回第一个这样的位置。

## 反向排名

`np.argsort(scores)[::-1]`

Read as. 从最大分数到最小分数的索引。

**Shape/return**: 索引数组。

Used for. 排名。

## 重新排序的名称

`doc_names[...]`

Read as. 按索引选择或重新排序名称。

**Shape/return**: 重新排序的数组。

Used for. 文档排名。

**注意：排序后的位置不是排序后的分数**

`np.argsort(scores)` 返回位置，而不是排序分数。

