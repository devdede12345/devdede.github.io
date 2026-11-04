# Lecture 02：数组、引用与测试

**Working with Arrays**

[查看原课件（17 页）](../slides/lec02-arrays.pdf) · [从重点页开始](../slides/lec02-arrays.pdf#page=4) · [返回课程目录](../index.md)

!!! note "阅读说明"

    根据 Cole Nelson 的 CS300 Programming II（Fall 2026）课件整理，重点对应 PDF 第 4–15 页。本文是中文复习笔记，不是逐页译文。除明确标注转录的代码外，示例为便于讲解重新编写，各页版本可以独立阅读；Canvas 配套源码未包含在当前资料中。

## 本讲主线

在理解 Perfect-size 与 Oversize 的基础上，追踪数组引用，维护有效数据区间，并把数组操作写成可测试的方法。

## 值与引用的复制

```java
int x = 3;
int y = x;
y = 9;                       // x 仍为 3

int[] a = {1, 2, 3};
int[] b = a;
b[0] = 9;                    // a[0] 也变成 9
```

**Primitive Value**: `int` 等基本类型变量直接保存值。

**Reference**: 数组变量保存指向数组对象的引用。`b = a` 复制引用，两个变量指向同一个数组，这叫别名（Aliasing）。

`new int[3]` 创建三个默认零值；`{1, 2, 3}` 在创建时给定元素。二者最终都产生数组对象。

## Oversize 数组的四类操作

| 操作 | 处理的范围 | 必须维护的状态 |
|---|---|---|
| 输出 `print` | `[0, size)` | 不把预留空位当数据 |
| 查找 `indexOf` | `[0, size)` | 没找到时返回约定值，如 `-1` |
| 添加 `add` | 通常写入 `array[size]` | 先检查是否有容量，再更新 `size` |
| 删除 `remove` | 查找后删除对应元素 | 保持紧凑；需要时左移并更新 `size` |

下面是保持顺序的删除示意，假设 `index` 已经通过有效范围检查：

```java
for (int i = index; i < size - 1; i++) {
    array[i] = array[i + 1];
}
array[size - 1] = null; // 此处假设 array 是引用类型数组
size--;
```

如果一个方法接收 `int size` 并修改它，修改的是参数副本；调用者通常需要接收返回的新大小，例如 `size = add(array, size, value)`。

## 二维数组与并行数组

**Two-dimensional Array**: Java 的二维数组是“元素又是数组的数组”，各行可以有不同长度。

```java
int[][] grid = {{4, 5}, {9, 2, 7}};
System.out.println(grid.length);    // 2 行
System.out.println(grid[1].length); // 第二行有 3 个元素
System.out.println(grid[1][2]);     // 7
```

**Parallel Arrays**: 同一个索引关联同一条记录。例如 `menu[i]` 对应 `prices[i]`。插入、删除和移动必须同步，否则关联会错位。

课件购物车例子使用 `String[][]`。其中 `"2"` 是文本，计算前需要 `Integer.parseInt(...)`。

## 测试思路

测试应验证预期行为，而不是只打印结果。至少覆盖空数据、普通输入、找不到元素、容量已满、删除首尾位置，以及移动后其他记录是否仍匹配。

比较字符串内容使用 `.equals()`；`==` 比较引用。浮点价格的测试一般允许很小的误差，而不直接要求两个计算结果用 `==` 完全一致。

??? success "自测：把 b[0] 改掉，何时不会影响 a？"

    当 b 指向另一个数组对象，例如使用 `Arrays.copyOf(a, a.length)` 创建独立的基本类型数组副本时。单纯 `b = a` 不会复制数组内容。

---

[← 上一讲](./lec01-welcome.md) · [下一讲 →](./lec03-using-objects.md)
