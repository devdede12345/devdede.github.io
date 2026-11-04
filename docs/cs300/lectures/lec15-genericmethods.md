# Lecture 15：泛型方法与类型边界

**Generic Methods**

[查看原课件（20 页）](../slides/lec15-genericmethods.pdf) · [从重点页开始](../slides/lec15-genericmethods.pdf#page=2) · [返回课程目录](../index.md)

!!! note "阅读说明"

    根据 Cole Nelson 的 CS300 Programming II（Fall 2026）课件整理，重点对应 PDF 第 2–19 页。本文是中文复习笔记，不是逐页译文。除明确标注转录的代码外，示例为便于讲解重新编写，各页版本可以独立阅读；Canvas 配套源码未包含在当前资料中。

## 本讲主线

泛型方法把“相同算法、不同元素类型”的代码写一次，同时保留编译器的类型检查。先区分类型参数，再理解类型边界。

## compareTo 的返回值看实现，排序看符号

课件比较 217 秒与 219 秒的歌曲。如果实现直接返回时长差，结果是 -2；如果使用 `Integer.compare`，结果是 -1。二者都表达当前歌曲排在前面。

不能只因为“前者比较小”，就断言任何 compareTo 实现一定返回 -1。

## 为什么 ArrayList<Object> 不够

```java
java.util.ArrayList<String> names = new java.util.ArrayList<>();
// java.util.ArrayList<Object> objects = names; // 不合法
```

String 是 Object，不意味着 `ArrayList<String>` 是 `ArrayList<Object>`。否则就能通过后者把 Integer 放进只应存 String 的列表。

**Generic Invariance**: 不同具体类型参数的泛型类型，通常不会自动沿元素类型的继承关系转换。

## 一个 firstNItems

```java
static <T> java.util.ArrayList<T> firstNItems(
        java.util.ArrayList<T> items, int n) {
    if (n < 0 || n > items.size()) {
        throw new IllegalArgumentException("n 超出有效范围");
    }
    java.util.ArrayList<T> result = new java.util.ArrayList<>();
    for (int i = 0; i < n; i++) {
        result.add(items.get(i));
    }
    return result;
}
```

**Type Parameter**: `<T>` 写在返回类型之前，表示方法中的一个类型占位。

调用时编译器通常能推断 T：输入 `ArrayList<String>`，返回值仍是 `ArrayList<String>`，不必先返回 Object 再强制转换。

类型参数使用引用类型，例如 `Integer`，而不是 `int`。结果列表是新容器，但所含对象仍是原来元素的引用，这不是元素级深拷贝。

## 无边界 T 能调用哪些方法

```java
static <T> String describe(T item) {
    return item.toString();
}
```

编译器只知道未设边界的 T 至少具备 Object 的能力，因此不能直接调用 `item.getSeconds()`。

即使你目前只传 Song，方法声明仍允许其他 T，编译器必须按声明保证安全。并且 `item` 如果是 null，上面的调用仍可能空指针。

## 用边界表达额外能力

假设 Track 定义了 `getSeconds()`：

```java
static <T extends Track> int totalSeconds(
        java.util.ArrayList<T> tracks) {
    int total = 0;
    for (T track : tracks) {
        total += track.getSeconds();
    }
    return total;
}
```

**Upper Bound**: `T extends Track` 保证 T 是 Track 或其子类，所以可以调用 Track 中允许的方法。这里的 `extends` 描述类型约束，并不是创建一个新类。

??? success "自测：把方法参数写成 ArrayList<Track>，就能接收 ArrayList<Song> 吗？"

    一般不能，泛型不变性仍然存在。使用 ArrayList<T> 且 T extends Track，才表达这里想要的受约束泛型方法。

---

[← 上一讲](./lec14-interfaces.md) · [下一讲 →](./lec16-genericclasses.md)
