# Lecture 20：递归与基本情况

**Recursion**

[查看原课件（20 页）](../slides/lec20-recursion.pdf) · [从重点页开始](../slides/lec20-recursion.pdf#page=2) · [返回课程目录](../index.md)

!!! note "阅读说明"

    根据 Cole Nelson 的 CS300 Programming II（Fall 2026）课件整理，重点对应 PDF 第 2–19 页。本文是中文复习笔记，不是逐页译文。除明确标注转录的代码外，示例为便于讲解重新编写，各页版本可以独立阅读；Canvas 配套源码未包含在当前资料中。

## 本讲主线

递归方法把问题交给规模更小的同类问题；必须有能直接完成的基本情况，并且每次递归都确实朝它前进。

## Base Case 与 Recursive Case

**Base Case**: 可以直接求解，不再递归的情况。

**Recursive Case**: 调用同一方法处理更小问题，再利用较小问题的结果。

```java
static void countdown(int n) {
    if (n < 0) {
        throw new IllegalArgumentException("n 必须非负");
    }
    if (n == 0) {
        System.out.print("Play!");
        return;
    }
    System.out.print(n + "... ");
    countdown(n - 1);
}
```

`countdown(3)` 输出 `3... 2... 1... Play!`。检查三件事：基本情况会不会被执行、执行后是否真的停止、参数是否向基本情况靠近。

如果基本情况只处理零，却允许从负数不断递减，就永远到不了零。这里增加了输入检查；这是对课件例子的防护补充。

## 栈溢出

**StackOverflowError**: 调用不断增加，每个栈帧等待更深一层返回，最终耗尽可用调用栈。

即使有正确的基本情况，如果输入足够大导致递归太深，也可能栈溢出。因此“能终止”与“不会超过栈容量”是两件事。

## 阶乘

$$
n!=n\,(n-1)!,\qquad 0!=1
$$

```java
static long factorial(int n) {
    if (n < 0 || n > 20) {
        throw new IllegalArgumentException("本例只支持 0 到 20");
    }
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
```

课件最初以 `1!` 为基本情况，提醒你检查 `n <= 0` 的输入。这里显式接纳 `0!`，并限制 long 能表示的结果范围；递归正确不代表数值永不溢出。

## 找最长歌曲的递归思路

课件的问题拆分：只有一首歌时，答案就是它；比较两首歌，排除不可能成为唯一最大值的较短者，再对剩余列表递归。

要警惕副作用：从列表删除歌曲会改变调用者的数据；每次复制列表又可能增加成本。下一讲会继续分析这两个问题。

一个不删除输入的整数时长示例：

```java
static int longestFrom(int[] seconds, int index) {
    // 前提：数组非空，且 0 <= index < seconds.length
    if (index == seconds.length - 1) {
        return seconds[index];
    }
    int restMax = longestFrom(seconds, index + 1);
    return Math.max(seconds[index], restMax);
}
```

这里的“规模变小”是未处理区间缩短，不要求必须创建一个更短的新数组。

??? success "自测：写了 if (n == 0) 就一定能终止吗？"

    不一定。基本情况必须停止递归，而且其他输入的递归调用必须能到达它。一直调用原参数，或向相反方向变化，都可能无限递归。

## 配套补充

[zyBooks 8 补充：设计与调用栈](../recursion/foundations.md) · [回溯与全排列](../recursion/backtracking.md)

---

[← 上一讲](./lec19-worstcase.md) · [下一讲 →](./lec21-tracingrecursion.md)
