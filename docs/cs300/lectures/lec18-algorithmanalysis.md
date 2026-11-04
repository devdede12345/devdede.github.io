# Lecture 18：算法分析与隐藏成本

**Algorithm Analysis**

[查看原课件（19 页）](../slides/lec18-algorithmanalysis.pdf) · [从重点页开始](../slides/lec18-algorithmanalysis.pdf#page=2) · [返回课程目录](../index.md)

!!! note "阅读说明"

    根据 Cole Nelson 的 CS300 Programming II（Fall 2026）课件整理，重点对应 PDF 第 2–18 页。本文是中文复习笔记，不是逐页译文。除明确标注转录的代码外，示例为便于讲解重新编写，各页版本可以独立阅读；Canvas 配套源码未包含在当前资料中。

## 本讲主线

不仅数可见的循环，也要数方法调用内部隐藏的工作；顺序执行的成本相加，重复调用或嵌套执行的成本按实际次数累计。

## 隐藏在 contains 里的循环

```java
static int countMissing(java.util.ArrayList<String> trip,
        java.util.ArrayList<String> library) {
    int missing = 0;
    for (String song : trip) {
        if (!library.contains(song)) {
            missing++;
        }
    }
    return missing;
}
```

设 trip 有 M 首歌，library 有 N 首歌。ArrayList 的 `contains` 最坏要检查 N 个元素，被重复调用 M 次，所以最坏时间为 $O(MN)$，不是只看外层循环就说 $O(M)$。

这里暂将一次相等比较视为常数操作；若元素比较成本变化，也要计入。

## 相加与相乘

| 结构 | 工作量示意 | 化简结果 |
|---|---|---|
| 遍历 N，之后再遍历 N | N + N | $O(N)$ |
| 每个外层 N 都完整遍历内层 N | N × N | $O(N^2)$ |
| 遍历 N，之后处理全部 N² 对 | N + N² | $O(N^2)$ |
| 先处理 M，再处理 N | M + N | $O(M+N)$ |

两个独立规模都可能变大时，不能随意丢弃其中一个。例如没有 M 与 N 的关系，就不能把 $O(M+N)$ 改写成 $O(N)$。

更一般地，嵌套结构要累加每轮的真实成本。内层次数依赖外层索引时，可能需要等差求和，而不是机械相乘。

## 是否值得先排序

**Linear Search**: 未排序数组逐项找，最坏 $O(N)$。

**Binary Search**: 已排序且支持快速索引的数据，每轮去掉约一半候选，最坏 $O(\log N)$。

只查一次：先排序再查约为 $O(N\log N+\log N)$，通常不如直接线性查找。

重复 Q 次查询：比较 $O(QN)$ 与 $O(N\log N+Q\log N)$。还要考虑原始数据是否会变化，以及排序是否影响原来的顺序。

## 用排序改善重复检测

课件改进方案先复制标题、排序，再只比较相邻标题：

$$
O(N)+O(N\log N)+O(N)=O(N\log N)
$$

重复值排序后相邻，因此不必再比较所有配对。三个步骤是先后执行，成本相加，不是再把排序成本乘上 N。

这个方案也有空间代价：复制标题容器需要额外空间；是否保留原顺序是设计时要考虑的问题。

??? success "自测：一个循环执行 N 次，每轮都调用遍历全部 N 个元素的 totalSeconds，复杂度是多少？"

    在每次调用成本为 Θ(N) 的前提下，总时间为 Θ(N²)。循环藏进方法里不会消除实际工作。

## 配套补充

[zyBooks 7 补充：算法分析与常用界](../complexity/zybooks7.md) · [排序算法对照](../sorting/index.md)

---

[← 上一讲](./lec17-complexity.md) · [下一讲 →](./lec19-worstcase.md)
