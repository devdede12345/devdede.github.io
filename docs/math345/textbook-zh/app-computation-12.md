# B.12 Lab 中常用的 Python 写法

!!! note "译文与来源"

    本页依据 2026 年 11 月 3 日读取的官方 v0.2 源文件制作。数学术语保留英文；原书公式、代码、例题、活动、证明与解答保留。译稿使用机器辅助翻译并进行数学与排版检查，未经原作者审定。原作者：Jacob Denson、Kaitlyn Phillipson、Sebastien Roch。除原书另有注明外，遵循 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)。 [阅读英文原文](https://math345-textbook.github.io/appcomp-python-patterns.html)。


<a id="appcomp-python-patterns"></a>

本节帮助您阅读支持实验室中重复数学计算的小型 Python 模式。


```python
def cosim(u, v):
    return (u @ v) / (np.linalg.norm(u) * np.linalg.norm(v))
```


```python
losses = []

for k in range(num_steps):
    losses.append(float(x @ x))
    x = x - alpha * grad_f(x)
```


```python
results = {alpha: run_gd(alpha) for alpha in [0.05, 0.2, 1.05]}
```

## 帮手 function 

`def cosim(u, v):`

Read as. 定义一个助手 function 。

Shape/return.A function 。

Used for. 重复计算。

##  Function 输出

`return ...`

Read as.  function  的输出。

**Shape/return**: 一个值。

Used for. 帮手 functions 。

## 空列表

`losses = []`

Read as. 一个空列表。

**Shape/return**: 一个列表。

Used for. 记录值。

## 重复循环

`for k in range(num_steps):`

Read as. 重复缩进的命令。

**Shape/return**: 重复命令。

Used for. 迭代算法。

## 附加值

`losses.append(...)`

Read as. 添加一个记录值。

**Shape/return**: 修改后的列表。

Used for. 训练或血统历史。

## 普通号码

`float(...)`

Read as. 转换为普通数字。

Shape/return.A scalar 。

Used for. 更干净的输出。

## 字典理解

`{alpha: run_gd(alpha) for ...}`

Read as. 通过重复计算构建字典。

**Shape/return**: 一本字典。

Used for. 比较学习率。

## 列表理解

`[f(x) for x in values]`

Read as. 通过对每个项目应用相同的表达式来构建列表。

**Shape/return**: 一个列表。

Used for. 紧凑的重复计算。

例如，`[A[:, j] for j in pivots]` 在列表中收集选定的 SymPy  columns 。请参阅[SymPy 符号计算](app-computation-11.md#appcomp-sympy)中的工作示例和等效的`for`/`append`循环。

实验室还使用列表推导式 `zip`、`dict`、`len`、`round`、`print` 和 `assert`。这些是普通的 Python 模式。课程重点仍然是计算的数学意义。

