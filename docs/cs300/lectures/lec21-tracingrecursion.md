# Lecture 21：递归追踪与成本分析

**Tracing Recursion**

[查看原课件（19 页）](../slides/lec21-tracingrecursion.pdf) · [从重点页开始](../slides/lec21-tracingrecursion.pdf#page=2) · [返回课程目录](../index.md)

!!! note "阅读说明"

    根据 Cole Nelson 的 CS300 Programming II（Fall 2026）课件整理，重点对应 PDF 第 2–18 页。本文是中文复习笔记，不是逐页译文。除明确标注转录的代码外，示例为便于讲解重新编写，各页版本可以独立阅读；Canvas 配套源码未包含在当前资料中。

## 本讲主线

先手工追踪调用与返回，再计算每次调用实际做了多少工作。递归复杂度不能只数代码中有几个递归语句。

## 阶乘的返回过程

| 调用 | 等待什么 | 最终返回 |
|---|---|---|
| `factorial(4)` | `factorial(3)` | 24 |
| `factorial(3)` | `factorial(2)` | 6 |
| `factorial(2)` | `factorial(1)` | 2 |
| `factorial(1)` | 不再递归 | 1 |

调用向下展开，答案从基本情况往回传。每一层都有自己的 n；它们不是在共享一个会被覆盖的局部变量。

## 课堂 f(3)：返回值与打印内容分开

以下代码转录自课件第 6–7 页：

```java
public static int f(int n) {
    if (n <= 0) {
        return 0;
    } else {
        int result = f(n - 1);
        System.out.print(n + " ");
        return 1 + result;
    }
}
```

`f(3)` 返回 **3**，但打印 **`1 2 3 `**。因为打印发生在递归调用返回以后，所以先打印最深层的 1，再逐层打印 2、3。

如果把打印移动到递归调用之前，展开顺序会变成从大到小。若外层又写 `System.out.println(f(3))`，还会额外打印最终返回值 3，不能和 f 内部的输出混为一谈。

## 课堂 g：按索引扫描字符串

课件第 15 页的方法如下：

```java
public static int g(String word, int i) {
    if (i == word.length()) {
        return 0;
    } else if (word.charAt(i) == 'x') {
        return g(word, i + 1) + 1;
    } else {
        return g(word, i + 1) + 0;
    }
}
```

前提为 word 非 null，且初始索引在有效扫描范围内。`g("xxhixx", 1)` 从索引 1 开始，只统计后面的 `'x'`，结果为 **3**，不是整个字符串中 x 的数量 4。

每次只执行一个分支、发出一个递归调用；虽然代码中出现两处 `g(...)`，也不代表每层都会产生两个调用。

## 递归成本：每层的成本求和

课件最长歌曲例子提醒你查看 `ArrayList.remove` 内部的移动操作。

| 策略 | 剩余 k 个元素时的成本 | 总体最坏时间 |
|---|---|---|
| 每次删开头或靠前位置 | 最多移动约 k 个元素 | $\Theta(N^2)$ |
| 每次复制当前列表再递归 | 复制约 k 个引用 | $\Theta(N^2)$ |
| 只复制一次，但仍反复删前面 | 复制一次，再累计移动 | $\Theta(N^2)$ |
| 只复制一次，每次从末尾或倒数第二位删除 | 每层只移动零个或一个元素 | $\Theta(N)$ |
| 不删除，用索引缩短处理区间 | 每层常数工作 | $\Theta(N)$ |

!!! note "不要把复杂度机械相乘"

    若同一层既复制 k 个元素，又移动约 k 个元素，成本是 O(k) + O(k) = O(k)，不是 O(k²)。再对各层求和得到 O(N²)，不能把已经得到的 N² 又凭空乘一个 N。

## 课件的末尾删除优化

```java
int last = songs.size() - 1;
if (songs.get(last).getSeconds()
        < songs.get(last - 1).getSeconds()) {
    songs.remove(last);     // 不需要向前移动其他元素
} else {
    songs.remove(last - 1); // 只需移动一个元素
}
```

该片段假设列表至少有两个元素，并在外层基本情况中处理只剩一个元素的情况。若不希望改变原列表，可以在递归开始前复制一次，而不是每一层重新复制。

## 时间与额外空间分别分析

线性层数、每层常数工作的递归，时间可以是 $\Theta(N)$，但调用栈仍需要 $\Theta(N)$ 的额外空间。不要把“没有 new 数组”理解成“空间是常数”。

若每层实际执行两个规模约为 n-1 的递归调用，调用数则可能指数增长。分析时要看**实际执行分支、子问题规模、每层工作和栈深度**。

??? success "自测：g(word, i) 的两个递归分支会同时执行吗？"

    不会。if/else 只选一个分支。每次 i 加一，调用数与剩余字符数量成线性关系，额外栈空间也是线性的。

## 配套补充

[zyBooks 8 补充：递推关系与二分查找](../recursion/analysis.md) · [归并排序](../sorting/merge.md)

---

[← 上一讲](./lec20-recursion.md)
