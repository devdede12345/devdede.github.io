# Lecture 17：复杂度与增长阶

**Introduction to Complexity**

[查看原课件（21 页）](../slides/lec17-complexity.pdf) · [从重点页开始](../slides/lec17-complexity.pdf#page=2) · [返回课程目录](../index.md)

!!! note "阅读说明"

    根据 Cole Nelson 的 CS300 Programming II（Fall 2026）课件整理，重点对应 PDF 第 2–20 页。本文是中文复习笔记，不是逐页译文。除明确标注转录的代码外，示例为便于讲解重新编写，各页版本可以独立阅读；Canvas 配套源码未包含在当前资料中。

## 本讲主线

算法分析不只关心“这次运行几秒”，而是研究输入规模增长时，工作量怎样增长。先数操作，再描述增长阶。

## 先说清楚 N 是什么

**Input Size**: 可以是歌曲数量、标题长度、学生人数或问题数量。选错规模变量，会使分析没有意义。

测量时间还受机器、后台任务等影响。课件改为统计主要步骤，例如处理一首歌或比较一对标题。

## 三种典型增长

| 紧增长阶 | 常见例子 | 规模翻倍后的主要工作量 |
|---|---|---|
| 常数阶 | 通过索引取一个元素 | 大致不变 |
| 线性阶 | 遍历全部 N 首歌 | 大致翻倍 |
| 平方阶 | 比较全部歌曲对 | 大致变为四倍 |

**Big-O**: 描述渐近上界，忽略常数倍与低阶项。课堂常用它表达主要增长阶，但一个宽松的 O 上界本身不能精确确定翻倍比例。

## 遍历一次

```java
static int totalSeconds(int[] seconds) {
    int total = 0;
    for (int value : seconds) {
        total += value;
    }
    return total;
}
```

长度为 N 的数组处理 N 个元素，所以时间是 $\Theta(N)$，也可以说是 $O(N)$。这里只假设整数运算为常数成本，并忽略整数求和溢出问题。

## 比较每一对

```java
static boolean hasDuplicateTitles(String[] titles) {
    for (int i = 0; i < titles.length; i++) {
        for (int j = i + 1; j < titles.length; j++) {
            if (titles[i].equals(titles[j])) {
                return true;
            }
        }
    }
    return false;
}
```

假设元素非 null，并暂把一次标题比较当作常数操作。没有重复时，比较次数为：

$$
\frac{N(N-1)}{2}
$$

课件示例：N 为 1000 时有 499,500 次比较，N 为 2000 时有 1,999,000 次。最坏情况为 $\Theta(N^2)$；很早找到重复时会提前返回。

字符串比较若需要考虑长度，必须再把比较字符串的成本算进去。

## 两层循环不一定是 N²

遍历 N 首歌，再遍历每首歌标题中的字符，总工作量与所有标题的字符数之和有关：

$$
\Theta\!\left(\sum_{i=1}^{N}\ell_i\right)
$$

若每个标题最长 M 个字符，可用 $O(NM)$ 给出上界。如果 M 被视为固定常数，才进一步简化为 $O(N)$。

??? success "自测：N 从 1000 变成 2000，平方阶算法比较次数一定精确乘 4 吗？"

    不一定。N(N-1)/2 的比例趋近于 4，但还含低阶项。增长阶描述大规模趋势，不是每个有限输入的精确比例。

## 配套补充

[zyBooks 7 补充：常数操作、循环求和与增长阶](../complexity/zybooks7.md)

---

[← 上一讲](./lec16-genericclasses.md) · [下一讲 →](./lec18-algorithmanalysis.md)
