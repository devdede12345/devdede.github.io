# Lecture 16：泛型类与抽象数据类型

**Bounds & Generic Classes**

[查看原课件（22 页）](../slides/lec16-genericclasses.pdf) · [从重点页开始](../slides/lec16-genericclasses.pdf#page=2) · [返回课程目录](../index.md)

!!! note "阅读说明"

    根据 Cole Nelson 的 CS300 Programming II（Fall 2026）课件整理，重点对应 PDF 第 2–21 页。本文是中文复习笔记，不是逐页译文。除明确标注转录的代码外，示例为便于讲解重新编写，各页版本可以独立阅读；Canvas 配套源码未包含在当前资料中。

## 本讲主线

用类型边界保证方法可调用，再把类型参数提升到整个类。最后区分抽象数据类型描述的“做什么”与具体数据结构的“如何实现”。

## getClass 与 instanceof

```java
Track track = new Song(/* 使用对应构造器参数 */);
// track instanceof Track   -> true
// track instanceof Song    -> true
// track.getClass() == Song.class -> true
```

以上为类型关系示意，Song 的构造器参数需依实际类定义提供。

**Instanceof**: 对象是否属于这个类型家族；对 null 为 false。

**GetClass**: 对象准确的运行时类；引用为 null 时不能调用。

## 接口也可以成为边界

```java
static <T extends Comparable<T>> T min(T a, T b) {
    return a.compareTo(b) <= 0 ? a : b;
}
```

泛型边界始终使用 `extends`，即使 Comparable 是接口，也不在这里写 `implements`。方法体因此可以依赖 `compareTo`。

## 泛型类

```java
class Playlist<T> {
    private final java.util.ArrayList<T> tracks =
            new java.util.ArrayList<>();

    public void add(T track) {
        this.tracks.add(track);
    }

    public T get(int index) {
        return this.tracks.get(index);
    }

    public int size() {
        return this.tracks.size();
    }
}
```

**Generic Class**: `<T>` 写在类名后，字段、参数和返回值都可以使用 T。

这个复习示例使用 ArrayList 简化内部存储。`Playlist<Song>` 的 `get` 返回 Song；不需要调用者每次手动转换。

## 课件的数组实现与类型擦除

课件使用 `Playlist<T extends Track>`，保留 `Track[]` 作为私有底层数组，再从 getter 返回 T：

```java
// 位于 Playlist<T extends Track> 内部
private Track[] tracks;

public T get(int index) {
    return (T) this.tracks[index];
}
```

编译器会提示 unchecked cast。它依赖严格的不变量：数组不对外泄露，添加入口只接受 T，不能通过原始类型等方式绕过类型检查。没有 Track 边界时，课件建议考虑 `Object[]`。

**Type Erasure**: 运行时并不为每个具体 T 保留一套可直接使用的类型信息，因此本课程中的 T 不能直接用于 `new T()`、`new T[n]`、`T.class` 或 `instanceof T`。静态字段也不能直接使用类的类型参数 T。

## 抽象数据类型

**ADT**: 用允许的操作及其规则描述数据，而不依赖某一种存储实现。

| ADT | 规则或操作 | 音乐应用中的例子 |
|---|---|---|
| List | 按位置访问、有顺序 | 播放列表 |
| Stack | 后进先出 | 返回按钮的历史记录 |
| Queue | 先进先出 | Up Next |
| Set | 不重复 | 喜欢的歌曲集合 |
| Map | 按键查值 | 每首歌的播放次数 |

`List<T>` 是接口；`ArrayList<T>` 和 `LinkedList<T>` 是不同实现。两者可以提供相似操作，但操作成本不一定相同。

??? success "自测：泛型类 Playlist<T> 能否因为内部写了 T，就在运行时创建 new T()？"

    不能。类型参数不等于一个可直接调用的构造器；需要其他明确的创建机制，本讲不展开。

---

[← 上一讲](./lec15-genericmethods.md) · [下一讲 →](./lec17-complexity.md)
