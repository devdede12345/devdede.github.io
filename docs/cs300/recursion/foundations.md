# zyBooks 8：递归设计与调用栈

根据 `8.pdf` 的 §8.1–8.7、8.9（PDF 第 1–27、39–44 页）整理。先读 [Lecture 20](../lectures/lec20-recursion.md)，再结合 [Lecture 21](../lectures/lec21-tracingrecursion.md) 追踪输出。以下 Java 方法为重新编写，可放在类中使用；参数非 null，除非另作说明。

## 1. 递归是在表达什么

**Recursion**: 用同一种方法解决一个更小的同类问题，再把子问题答案组合成当前答案。

设计时依次问：最小情况能直接回答吗？如何缩小问题？拿到更小问题的答案以后，当前层还要做什么？

**Base Case**: 不再继续递归，直接给出结果。一个方法可以有多个基本情况。

**Recursive Case**: 向更小的问题发起调用，再处理返回值。光写一个基本情况不够，每条递归路径还必须最终能到达它。

## 2. 从定义写方法

非负整数的累加：$S(0)=0$，$S(n)=n+S(n-1)$。

```java
static long sumTo(int n) {
    if (n < 0) {
        throw new IllegalArgumentException("n must be nonnegative");
    }
    if (n == 0) {
        return 0;
    }
    return n + sumTo(n - 1);
}
```

这个方法说明递归结构；即使 n 合法，n 很大时也可能栈溢出。实际处理大规模输入应考虑迭代或公式。

调用 `sumTo(3)`：

```text
sumTo(3) 等待 3 + sumTo(2)
  sumTo(2) 等待 2 + sumTo(1)
    sumTo(1) 等待 1 + sumTo(0)
      sumTo(0) 返回 0
    返回 1
  返回 3
返回 6
```

每个调用都有自己的 n 和返回位置。“调用完下一层”以后，当前层会接着执行，并没有消失。

## 3. 同一个问题的几种递归定义

| 问题 | 基本情况 | 缩小方式 | 当前层的工作 |
|---|---|---|---|
| 阶乘 n! | n=0 或 1，返回 1 | n−1 | 乘 n |
| 累加 1…n | n=0，返回 0 | n−1 | 加 n |
| 反转数组区间 | left≥right | 两端向中间移动 | 交换端点 |
| 二分查找 | 空区间或中点命中 | 只保留一半 | 比较并选择区间 |

阶乘用 long 时仅 0! 到 20! 可精确表示。递归正确性、数值溢出、调用栈容量是三个不同问题。

```java
static void reverse(int[] a, int left, int right) {
    if (left >= right) {
        return;
    }
    int saved = a[left];
    a[left] = a[right];
    a[right] = saved;
    reverse(a, left + 1, right - 1);
}
```

初始调用 `reverse(a, 0, a.length - 1)`；right 是包含在区间中的最后索引，不是 length。空数组使用 right=-1，直接命中基本情况。这里没有复制数组，各层都引用同一个数组，方法会修改原内容。

## 4. Stack Frame 与 Stack Overflow

**Stack Frame**: 每次方法调用所需的参数、局部变量与执行状态。返回后，当前调用的栈帧被移除。

**Stack Overflow**: 同时存活的调用层数太多，耗尽可用调用栈。Java 常见表现是 `StackOverflowError`。

有基本情况的递归仍可能因为深度太大而失败。以下两种错误也会阻止正常终止：

```java
// 错误：n>0 时，规模没有缩小
return sumTo(n);

// 错误：对正数输入一直远离 n==0
return sumTo(n + 1);
```

以上是错误片段，不要放入可运行的方法。

!!! note "Java 内存模型补充"

    局部数组变量通常保存引用，数组和 ArrayList 对象内容位于堆中。局部引用指向大数组，并不意味着整个数组内容装进栈帧。但递归每层分配新对象会增加堆内存压力，每层的引用和执行状态仍占调用栈。不要把栈空间和堆空间混成一项。

Java 不保证尾调用消除；把递归写在最后一行，不等于获得常数栈空间。

## 5. Fibonacci：相同数列，不同算法

标准定义为 $F_0=0$、$F_1=1$、$F_n=F_{n-1}+F_{n-2}$。

直接按定义递归计算单个 F(n)，会重复计算相同子问题，例如 F(5) 的两条分支都会求 F(3)。其时间可用 O(2ᴺ) 给出上界，紧界约为 Θ(φᴺ)，φ 为黄金比例；栈深度为 Θ(N)。

资料 §8.7 还展示携带前两个数、每次只递归一次的输出方法。它逐步生成数列，不是上述双分支重复求值算法。在固定宽度算术模型下，生成前 N 项的算术工作是 Θ(N)，递归栈是 Θ(N)，实际大数与输出成本另计。

不能只看到“Fibonacci”这个名字，就断定一定是指数算法。

## 6. GCD 与整数幂

**Greatest Common Divisor**: 最大公约数。资料 §8.7 使用减法版：正整数 a、b 相等时直接返回；否则从较大数减去较小数，再递归。

```java
static int gcd(int a, int b) {
    if (a <= 0 || b <= 0) {
        throw new IllegalArgumentException("positive values required");
    }
    if (a == b) {
        return a;
    }
    return a > b ? gcd(a - b, b) : gcd(a, b - a);
}
```

`gcd(12,8) → gcd(4,8) → gcd(4,4) → 4`。包括最初调用共 3 次，额外调用 2 次。每次 a+b 严格减小且保持正整数，所以最终终止。若允许 0 却不改基本情况，`gcd(a,0)` 可能一直重复同一状态。

减法版不保证对数次数，例如 gcd(N,1) 需要线性次数的减法。常见取模版递归为 gcd(a,b)=gcd(b,a%b)，以 b=0 返回 a；它与这里的减法版推进幅度不同，追踪题应先看清版本。

**Recursive Power**: 对非负整数指数，基本情况是 b⁰=1，递归关系是 bᵉ=b·bᵉ⁻¹。每次指数减一，在固定宽度算术模型下执行 Θ(e) 次乘法并占 Θ(e) 栈空间；结果可能溢出。这里描述定义与设计，不把数学结果的位数增长算作常数。

## 7. 用缩进调试

```java
static long traceSum(int n, int depth) {
    if (n < 0 || depth < 0) {
        throw new IllegalArgumentException();
    }
    String indent = "  ".repeat(depth);
    System.out.println(indent + "enter " + n);
    long result = n == 0 ? 0 : n + traceSum(n - 1, depth + 1);
    System.out.println(indent + "return " + result);
    return result;
}
```

初始调用 `traceSum(3, 0)`。进入时缩进越来越深，返回时越来越浅。该方法为调试演示；构造缩进和打印也需要成本，分析原算法时应先移除这些调试操作。

## 自测

??? question "1. factorial(6) 以 n==1 为基本情况，还会新增几次调用？"

    5 次：5、4、3、2、1。包含最初调用则总计 6 次。先分清题目说的是 additional calls 还是 total calls。

??? question "2. 为什么 reverse(a, 0, a.length) 不正确？"

    对至少两个元素的数组，第一次访问 a[right] 就越界。基本情况只负责终止，不会自动修复传错的索引。

[下一页：回溯与全排列](backtracking.md) · [递归成本与二分查找](analysis.md)
