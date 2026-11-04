# Lecture 14：接口与 Comparable

**Interfaces**

[查看原课件（21 页）](../slides/lec14-interfaces.pdf) · [从重点页开始](../slides/lec14-interfaces.pdf#page=2) · [返回课程目录](../index.md)

!!! note "阅读说明"

    根据 Cole Nelson 的 CS300 Programming II（Fall 2026）课件整理，重点对应 PDF 第 2–19 页。本文是中文复习笔记，不是逐页译文。除明确标注转录的代码外，示例为便于讲解重新编写，各页版本可以独立阅读；Canvas 配套源码未包含在当前资料中。

## 本讲主线

继承用来表达类型家族，接口用来表达共同能力。Track 与 Playlist 不一定互为父子类，但都可以承诺“可以播放”。

## 接口是一份能力契约

```java
public interface Playable {
    void play();
}
```

在另一个文件中：

```java
public class Song implements Playable {
    @Override
    public void play() {
        System.out.println("Playing song");
    }
}
```

**Interface**: 规定调用者可以依赖哪些方法。实现类通过 `implements` 承诺提供这些行为。

这里 `play()` 的实现必须是 public，不能降低接口方法的可见性。不能直接写 `new Playable()`。

课件先采用最简单的接口写法：无实例状态、无构造器、方法只声明不写实现。Java 接口还允许常量以及 default、static 等方法，但本讲不展开；不要把入门简化理解成接口绝对不能有任何字段或方法体。

## 接口也能作为变量类型

```java
java.util.ArrayList<Playable> upNext = new java.util.ArrayList<>();
upNext.add(new Song());
// Playlist 实现 Playable 后，也可以加入同一个列表
for (Playable item : upNext) {
    item.play();
}
```

调用者只依赖 `play()` 的约定，不需要预先知道每个元素是 Song、Podcast 还是 Playlist。

## 抽象类与接口

| 对比 | 抽象类 | 本讲的接口用法 |
|---|---|---|
| 主要目的 | 共享家族状态与部分实现 | 提供能力契约 |
| 实例字段与构造器 | 可以有 | 没有实例字段或构造器 |
| 类可以直接继承几个 | 一个父类 | 可以实现多个接口 |
| 关键字 | `extends` | `implements` |

## Comparable 与排序

```java
public int compareTo(Song other) {
    return this.title.compareTo(other.title);
}
```

上面的方法用于实现 `Comparable<Song>` 的 Song 类。

**CompareTo Result**: 负数表示当前对象应排在参数前，零表示排序上等价，正数表示排在参数后。返回值不是 boolean，也不要求刚好为 -1、0、1。

有了可用的自然顺序，`Collections.sort(songs)` 就能按该规则排序。比较数字时可以使用 `Integer.compare(a, b)`，避免直接相减造成溢出。

??? success "自测：a.compareTo(b) 返回 -8，能说明 a 比 b 小吗？"

    能，排序只看符号。它不表示两者的“距离”一定是 8。

---

[← 上一讲](./lec13-inheritance3.md) · [下一讲 →](./lec15-genericmethods.md)
