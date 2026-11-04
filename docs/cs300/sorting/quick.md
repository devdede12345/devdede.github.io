# 快速排序（Quicksort）

根据 `9.pdf` §9.6（PDF 第 26–38 页）整理。以下 Java 保持资料的“中点值作 pivot、返回左分区末尾”的 Hoare 风格分区思路，重新编写并明确边界。

## 1. 先分区，再递归

**Pivot**: 枢轴；当前用于划分大小的一个数值。选择中点索引只是选择某个位置，不是在计算数值中位数。

**Partition**: 分区；把元素重排成低值区和高值区。低值区元素≤pivot，高值区元素≥pivot，相等值可以落在两边。每个区间内部还没有保证有序。

Merge Sort 先递归再合并；Quicksort 先分区再递归。它不需要把两边再归并一次，因为两边已经满足大小关系。

## 2. 双指针如何工作

以 `[6,4,7,18,8]` 为例，中点索引是 2，pivot=7：

1. 左指针跨过 6、4，在 7 停下。
2. 右指针跨过 8、18，也在 7 停下。
3. 指针相遇，分区结束，返回 j=2。
4. 左区间 `[6,4,7]`、右区间 `[18,8]` 仍需继续排序。

再看一次真正交换的情况：`[8,3,6,1,7]`，pivot=6。左边的 8 与右边的 1 交换，得到 `[1,3,6,8,7]`；继续扫描后指针在索引 2 相遇，左区≤6，右区≥6。

## 3. Java 实现

```java
static void quickSort(int[] a) {
    quickSort(a, 0, a.length - 1);
}

static void quickSort(int[] a, int lo, int hi) {
    if (lo >= hi) {
        return;
    }
    int split = partition(a, lo, hi);
    quickSort(a, lo, split);
    quickSort(a, split + 1, hi);
}

static int partition(int[] a, int lo, int hi) {
    int pivot = a[lo + (hi - lo) / 2];
    int left = lo;
    int right = hi;
    while (true) {
        while (a[left] < pivot) {
            left++;
        }
        while (a[right] > pivot) {
            right--;
        }
        if (left >= right) {
            return right;
        }
        int saved = a[left];
        a[left] = a[right];
        a[right] = saved;
        left++;
        right--;
    }
}
```

a 非 null，调用 `quickSort(a)`。空数组和单元素数组直接返回。

!!! warning "split 不是 pivot 的最终位置"

    这个版本返回的是左分区的最后索引，所以递归 `[lo,split]` 与 `[split+1,hi]`。不要照搬另一种把 pivot 放到最终位置的分区算法，并把这里改成 split−1。不同分区实现的返回值约定不同。

pivot 保存的是值；数组中最初那个 pivot 元素可能被交换。两个相等值交换后也要移动指针，否则全相等输入可能无法推进。

## 4. 时间与栈空间

一次分区的扫描成本为 Θ(N)。

- 持续均衡：$T(N)=2T(N/2)+\Theta(N)$，时间 Θ(N log N)，栈深 Θ(log N)。
- 持续极不均衡：$T(N)=T(N-1)+\Theta(N)$，时间 Θ(N²)，栈深 Θ(N)。

资料以典型均衡分区说明常见 O(N log N)。平均时间要明确输入分布；随机排列等标准模型下可得到平均 Θ(N log N)。本页确定性选择中点值，没有对所有输入提供最坏 O(N log N) 保证。

已排序输入是否为最坏情况，要看 pivot 策略和分区方式。对于这里的中点值策略，有序且不同的元素通常得到均衡划分；不能直接套用“有序输入快排一定最坏”。

这个版本交换远距离元素，通常不稳定。分区只用常数局部变量，但整个算法仍要计入递归栈。

## 自测

??? question "1. 分区后左边还有一个 6 在 4 前面，是否说明分区错误？"

    不一定。分区只要求左右符合 pivot 大小约束，内部顺序由后续递归解决。

??? question "2. 中点索引为什么不保证两边元素数相等？"

    索引位于中间不代表该位置的数值处在所有值的中间。分区取决于与 pivot 比较的结果。

[排序总览](index.md) · [下一页：堆排序](heap.md)
