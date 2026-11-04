# B.1 如何阅读计算代码

!!! note "译文与来源"

    本页依据 2026 年 11 月 3 日读取的官方 v0.2 源文件制作。数学术语保留英文；原书公式、代码、例题、活动、证明与解答保留。译稿使用机器辅助翻译并进行数学与排版检查，未经原作者审定。原作者：Jacob Denson、Kaitlyn Phillipson、Sebastien Roch。除原书另有注明外，遵循 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)。 [阅读英文原文](https://math345-textbook.github.io/appcomp-reading-code.html)。


<a id="appcomp-reading-code"></a>

在本课程中，通常包含代码来表达数学思想，而不是教授软件工程。


- Read imports as setup. `import numpy as np`、`import sympy as sp` 和 `import matplotlib.pyplot as plt` 等命令使库可以短名称使用；他们没有数学输出。

- Read comments as notes. 以 `#` 开头的行会被 Python 忽略，包含它只是为了帮助读者。

- Read display commands as output choices. 许多笔记本单元格的最后一行会自动显示，而`print(...)` 显式显示一个值。

- Read assertions as sanity checks. `assert A.shape == (2, 3)` 等命令检查条件是否为真。

- Read shape requests as dimension checks. 诸如`A.shape`之类的命令返回一个描述数组的 dimensions 或 matrix 的元组。

- Read display settings as display only. `np.set_printoptions(...)` 等命令更改数组的打印方式，而不是底层数值。


```python
import numpy as np

A = np.array([[1, 2, 3],
              [4, 5, 6]])

print(A.shape)
assert A.shape == (2, 3)
```


```python
np.set_printoptions(precision=3, suppress=True)
```

命令`np.set_printoptions(precision=3, suppress=True)`仅更改数组的显示方式。它不会更改基础数值。

**注意：将代码解读为数学符号**

在实验室中，将代码解读为压缩的数学符号。重要的问题通常是表示什么对象、正在执行什么操作以及输出意味着什么。

**Most sections below follow the same pattern**: 首先，一个简短的代码片段显示了实验室中使用的计算类型。然后，阅读指南将代码模式转换为数学读数、预期输出或 shape ，以及使用该模式的位置。当命令有常见陷阱时，会出现一个简短的警告，解释要注意的事项。

