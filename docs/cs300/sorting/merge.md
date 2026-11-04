# 归并排序（Merge Sort）

根据 `9.pdf` §9.5（PDF 第 17–25 页）整理，代码为重新编写。

## 1. 先分别排好，再合并

**Divide and Conquer**: 把问题分成较小的同类问题，分别解决，再组合结果。

Merge Sort 将数组切成两半，递归排序每半，再把两个有序区间合并。长度为 0 或 1 时，已经有序。

```text
[8,3,7,4]
  [8,3]       [7,4]
  [8] [3]     [7] [4]
  [3,8]       [4,7]
        [3,4,7,8]
```

拆分时不必真的创建两个子数组；传递左右索引就能描述区间。

## 2. 合并：比较两边最前面的元素

合并 `[3,8,11]` 和 `[4,18,25]`：

| 比较 | 取出的值 | 已写出的结果 |
|---|---|---|
| 3 与 4 | 3 | `[3]` |
| 8 与 4 | 4 | `[3,4]` |
| 8 与 18 | 8 | `[3,4,8]` |
| 11 与 18 | 11 | `[3,4,8,11]` |
| 左边为空 | 追加右边 18、25 | `[3,4,8,11,18,25]` |

两边有序，才保证最小剩余值一定出现在两边的开头。一边用完后，另一边可以直接追加。

## 3. Java 实现

下面区间包含两端 `[lo,hi]`；资料用 i、j、k 命名，这里改为 lo、mid、hi。只分配一次辅助数组，各层重复使用。

```java
static void mergeSort(int[] a) {
    int[] work = new int[a.length];
    mergeSort(a, work, 0, a.length - 1);
}

static void mergeSort(int[] a, int[] work, int lo, int hi) {
    if (lo >= hi) {
        return;
    }
    int mid = lo + (hi - lo) / 2;
    mergeSort(a, work, lo, mid);
    mergeSort(a, work, mid + 1, hi);
    merge(a, work, lo, mid, hi);
}

static void merge(int[] a, int[] work, int lo, int mid, int hi) {
    int left = lo;
    int right = mid + 1;
    int out = lo;
    while (left <= mid && right <= hi) {
        if (a[left] <= a[right]) {
            work[out++] = a[left++];
        } else {
            work[out++] = a[right++];
        }
    }
    while (left <= mid) {
        work[out++] = a[left++];
    }
    while (right <= hi) {
        work[out++] = a[right++];
    }
    for (int i = lo; i <= hi; i++) {
        a[i] = work[i];
    }
}
```

a 非 null，调用 `mergeSort(a)`，会修改原数组。merge 的前提是两个区间已经分别有序，由前面的递归保证。

## 4. 为什么是 Θ(N log N)

一次合并处理当前区间的所有元素，成本 Θ(N)；两个子问题规模约为 N/2：

$$
T(N)=2T(N/2)+\Theta(N)
$$

每层所有合并累计 Θ(N)，一共有 Θ(log N) 层，因此时间 Θ(N log N)。这里没有“已经有序就跳过合并”的优化，最好情况也相同。

辅助数组 Θ(N)，调用栈 Θ(log N)，合计额外空间 Θ(N)。该数组实现不是常数额外空间排序。

相等时使用 `<=` 优先取左边，保留相等键的原相对顺序，因此稳定。若改成 `<`，相等时先取右边，可能破坏稳定性。

## 自测

??? question "1. mid=2，lo=0，hi=5，两半分别是什么？"

    左半 [0,2]，右半 [3,5]，各 3 个元素。不要把 mid 同时放进两边。

??? question "2. 合并两个长度分别为 3、3 的区间，必须恰好比较 6 次吗？"

    不一定。两边的元素比较最多 5 次，一边用完后直接复制；但 6 个元素都要写入合并结果，整体仍为线性成本。

[排序总览](index.md) · [下一页：快速排序](quick.md)
