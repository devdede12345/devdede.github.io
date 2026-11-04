# 桶排序（Bucket Sort）

根据 `9.pdf` §9.8（PDF 第 46–48 页，资料标为 Optional）整理。Java 示例为重新编写，限定非负 int；桶内使用插入排序以便明确分析成本。

## 1. 先按数值范围分组

**Bucket**: 桶；保存某个数值范围中的元素。按桶顺序拼接时，前一个桶的所有值不大于后一个桶中的值，但同一个桶内仍需要排序。

**Bucket Sort**: 找范围 → 创建桶 → 分配元素 → 每桶排序 → 按桶顺序拼回。

设最大值 M、桶数量 K，则非负整数 v 所在的桶索引为：

$$
\operatorname{index}(v)=\left\lfloor\frac{vK}{M+1}\right\rfloor
$$

分母使用 M+1，确保最大值也落在 0…K−1 的合法索引中。不能直接使用 M 作分母，否则 v=M 时可能得到 K。

## 2. 逐步追踪

输入 `[71,22,99,7,14]`，K=5、M=99：

| 桶索引 | 数值范围 | 放入后 | 桶内排序后 |
|---|---|---|---|
| 0 | 0–19 | `[7,14]` | `[7,14]` |
| 1 | 20–39 | `[22]` | `[22]` |
| 2 | 40–59 | 空 | 空 |
| 3 | 60–79 | `[71]` | `[71]` |
| 4 | 80–99 | `[99]` | `[99]` |

依次拼接得到 `[7,14,22,71,99]`。如果把桶内排序这一步漏掉，同一个桶有多个乱序元素时，整体结果仍可能乱序。

## 3. Java 实现

类文件顶部需要 `import java.util.ArrayList;`。a 非 null；bucketCount>0，且元素必须非负。

```java
static void bucketSort(int[] a, int bucketCount) {
    if (bucketCount <= 0) {
        throw new IllegalArgumentException("bucketCount must be positive");
    }
    if (a.length == 0) {
        return;
    }
    int max = 0;
    for (int value : a) {
        if (value < 0) {
            throw new IllegalArgumentException("nonnegative values required");
        }
        max = Math.max(max, value);
    }
    ArrayList<ArrayList<Integer>> buckets = new ArrayList<>();
    for (int i = 0; i < bucketCount; i++) {
        buckets.add(new ArrayList<>());
    }
    for (int value : a) {
        int index = (int) (((long) value * bucketCount) / ((long) max + 1));
        buckets.get(index).add(value);
    }
    int out = 0;
    for (ArrayList<Integer> bucket : buckets) {
        for (int i = 1; i < bucket.size(); i++) {
            int value = bucket.get(i);
            int j = i;
            while (j > 0 && bucket.get(j - 1) > value) {
                bucket.set(j, bucket.get(j - 1));
                j--;
            }
            bucket.set(j, value);
        }
        for (int value : bucket) {
            a[out++] = value;
        }
    }
}
```

中间算式先转 long，避免 int 乘法和 max+1 溢出。分母至少为 1，因此全零数组也能处理。支持负数可通过偏移等方式扩展，但不是本页实现的输入范围。

## 4. 为什么不一定是线性时间

设第 i 个桶包含 nᵢ 个元素，所有 nᵢ 之和为 N。

- 找最大值、分配、收集共 Θ(N)，创建桶为 Θ(K)。
- 桶内插入排序最坏需要累计 $\sum n_i^2$ 的工作。
- 因而总体上界为 $O(N+K+\sum n_i^2)$。

在各元素独立且近似均匀落入各桶的模型下，期望时间为 Θ(N+K+N²/K)。当 K 与 N 同阶时，才得到期望 Θ(N)。如果 K 是固定常数，不能靠增加 N 保持线性结论。

若大量不同值集中于同一个桶，且桶内顺序很差，插入排序可能退化为 Θ(N²)；加上桶创建成本，整体最坏为 Θ(N²+K)。

额外空间 Θ(N+K)。这个版本按原顺序追加进桶，桶内使用稳定的插入排序，因此按键排序时能保持相等键的顺序。若换用不稳定的桶内排序，整体稳定性也可能改变。

## 5. 与比较排序的关系

桶排序利用数值范围和分布，不只是通过两个元素之间的比较来决定去向。条件良好时得到线性期望时间，不违背一般比较排序的 Ω(N log N) 最坏比较次数下界。

资料也提醒，“bucket sort”有时作为一类分桶排序的统称。这里讨论的是按范围分桶、桶内另行排序的版本，不要与计数排序或基数排序直接混同。

## 自测

??? question "1. 为什么不能只把每个元素放进桶就结束？"

    每个桶只保证数值范围相同，不保证桶内顺序。需要排序每个桶并按桶序收集。

??? question "2. K=10、M=99 时，7 和 14 还在同一个桶吗？"

    不在。索引分别为 floor(70/100)=0 和 floor(140/100)=1。

??? question "3. 全相等值都落在一个桶，一定平方时间吗？"

    不一定。本页插入排序对相等值不做移动，仍可线性处理。最坏结论要求桶内排序也遇到坏输入，不能只看一个桶很满。

[排序总览](index.md) · [返回 CS300](../index.md)
