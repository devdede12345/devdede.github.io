# Lecture 01：课程导览与数组容量

**Welcome & Course Overview**

[查看原课件（26 页）](../slides/lec01-welcome.pdf) · [从重点页开始](../slides/lec01-welcome.pdf#page=17) · [返回课程目录](../index.md)

!!! note "阅读说明"

    根据 Cole Nelson 的 CS300 Programming II（Fall 2026）课件整理，重点对应 PDF 第 17–24 页。本文是中文复习笔记，不是逐页译文。除明确标注转录的代码外，示例为便于讲解重新编写，各页版本可以独立阅读；Canvas 配套源码未包含在当前资料中。

## 本讲主线

CS300 从单个方法扩展到多类程序（Multi-class Programs），并同时训练代码编写和代码阅读。本讲后半部分用数组引出一个贯穿后续课程的问题：**存储空间有多大，与当前存了多少数据，是两件事。**

## 数组的容量与有效元素

**Capacity**: 数组创建后固定的存储容量，通过 `array.length` 读取。它是字段，不是方法，没有括号。

**Size**: 程序当前使用的元素数量。Java 数组不会替你记录它。

```java
String[] roster = new String[5];
roster[0] = "Ada";
roster[1] = "Grace";
roster[2] = "Linus";
int size = 3;

System.out.println(roster.length); // 5
System.out.println(size);          // 3
```

这里的两个空位依然存在，`roster.length` 不会因此变成 3。

| 数组策略 | `length` 表示什么 | 是否另存 `size` |
|---|---|---|
| 精确大小数组（Perfect-size Array） | 所有元素都属于数据，长度就是数据量 | 通常不需要 |
| 超额容量数组（Oversize Array） | 预留容量，只有部分位置正在使用 | 需要 |

紧凑存放（Compact）还要求有效数据连续位于索引 `0` 到 `size - 1`。数组访问的合法范围是 `0` 到 `length - 1`，但遍历有效数据通常应使用 `i < size`。

## 需要始终成立的条件

$$
0\leq \text{size}\leq \text{array.length}
$$

新建引用类型数组的元素默认是 `null`，数值类型数组默认是零；默认值不能自动代表“未使用”。例如，零也完全可能是一条有效数据。

## 课程安排如何阅读

课件介绍了预习、课堂练习、编程任务及求助渠道。按这份 Fall 2026 课件，成绩类别为考试 50%、编程作业 25%、每周活动 25%；课件还介绍了指定形成性活动的 80% 规则。**这些是课件中的安排，具体截止时间和适用范围仍应查看当前 Canvas 与 syllabus。**

课程还要求对 AI 使用保留记录；本栏目是复习整理，不代替你完成课程要求的编程练习。

## 自测

容量为 8、`size = 0` 的数组，是空数组还是没有有效元素的数组？

??? success "参考解释"

    数组对象已经存在，也有 8 个位置；只是当前有效元素数量为零。它不是 `null`，长度也不是零。

---

[下一讲 →](./lec02-arrays.md)
