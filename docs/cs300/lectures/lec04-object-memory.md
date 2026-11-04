# Lecture 04：对象内存与拷贝

**Objects in Memory**

[查看原课件（21 页）](../slides/lec04-object-memory.pdf) · [从重点页开始](../slides/lec04-object-memory.pdf#page=3) · [返回课程目录](../index.md)

!!! note "阅读说明"

    根据 Cole Nelson 的 CS300 Programming II（Fall 2026）课件整理，重点对应 PDF 第 3–20 页。本文是中文复习笔记，不是逐页译文。除明确标注转录的代码外，示例为便于讲解重新编写，各页版本可以独立阅读；Canvas 配套源码未包含在当前资料中。

## 本讲主线

跟踪“变量在哪里、对象在哪里、哪些引用仍可到达对象”，再区分别名、浅拷贝与深拷贝。最后引入 `ArrayList` 和回调。

## 课件使用的内存模型

| 区域 | 用于理解的内容 |
|---|---|
| 代码区（Code） | 程序指令 |
| 静态区（Static Memory） | 类的静态状态 |
| 栈（Stack） | 每次方法调用的参数与局部变量 |
| 堆（Heap） | 对象与数组 |

这是帮助追踪程序的概念模型。实例字段是对象的一部分，并不是“所有变量都在栈上”。

**Stack Frame**: 每次方法调用都有独立栈帧。方法返回后，该次调用的局部变量消失，但它曾引用的对象不一定消失。

```java
static Book makeBook() {
    Book local = new Book("Dune");
    return local;
}

Book saved = makeBook();
```

`makeBook()` 返回后，`local` 消失；对象仍能通过 `saved` 到达，因此可以继续使用。

## 垃圾与可达性

**Garbage**: 从程序仍可使用的根引用出发，已无法到达的对象。

```java
Book a = new Book("Dune");
Book b = a;
a = null; // 对象仍能通过 b 到达
b = null; // 若没有其他可达引用，对象才成为垃圾回收候选
```

垃圾回收（Garbage Collection）不意味着赋值 `null` 的瞬间立即释放内存。互相引用、但整体都不可达的对象也可能被回收。

## 赋值、浅拷贝与深拷贝

```java
Book[] a = {new Book("Dune"), new Book("Emma")};
Book[] b = a;
Book[] c = java.util.Arrays.copyOf(a, a.length);
```

| 操作 | 数组对象 | 数组中的 Book 对象 |
|---|---|---|
| `b = a` | 同一个 | 同一批 |
| `Arrays.copyOf(...)` | 新数组 | 元素引用仍指向原来的 Book |
| 深拷贝（Deep Copy） | 新数组 | 按需求再创建独立 Book |

**Shallow Copy**: 复制容器，不自动复制容器引用的每个可变对象。因而 `c[0] = ...` 不改变 `a[0]`，但通过 `c[0]` 修改那个共享 Book 的状态，可能从 `a[0]` 看见变化。

## ArrayList

```java
java.util.ArrayList<String> names = new java.util.ArrayList<>();
names.add("Ada");
names.add("Grace");
String first = names.get(0);
int size = names.size();
names.remove(0);
```

它自动维护大小，按需扩容；`remove(index)` 会把后面的元素前移。泛型参数必须是引用类型，因此用 `ArrayList<Integer>`，不能用 `ArrayList<int>`。

## 回调

**Callback**: 由框架或另一个程序调用、由你实现的方法。GUI 事件循环可能在按键或绘图时调用它；方法名与参数必须匹配约定，不能因为自己不直接调用就随意改签名。

??? success "自测：复制 Book[] 后，把副本某个位置设为 null，会让原数组对应位置也变 null 吗？"

    浅拷贝得到的是另一个数组，所以不会。只有两个变量本来就是同一数组的别名时，修改同一位置才会共享。

---

[← 上一讲](./lec03-using-objects.md) · [下一讲 →](./lec05-exceptions.md)
