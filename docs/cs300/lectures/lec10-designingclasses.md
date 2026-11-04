# Lecture 10：类的设计与静态成员

**Designing with Classes**

[查看原课件（21 页）](../slides/lec10-designingclasses.pdf) · [从重点页开始](../slides/lec10-designingclasses.pdf#page=3) · [返回课程目录](../index.md)

!!! note "阅读说明"

    根据 Cole Nelson 的 CS300 Programming II（Fall 2026）课件整理，重点对应 PDF 第 3–19 页。本文是中文复习笔记，不是逐页译文。除明确标注转录的代码外，示例为便于讲解重新编写，各页版本可以独立阅读；Canvas 配套源码未包含在当前资料中。

## 本讲主线

把构造器、重载、封装、`toString()` 和静态成员放在一起，决定一项状态应该属于某个对象，还是属于整个类。

## 从对象职责决定成员归属

| 需求 | 合适的成员 |
|---|---|
| 某本书的标题、作者、借阅状态 | 实例字段 |
| 读取某本书的标题 | 实例方法 |
| 记录累计创建过多少本书 | 静态字段 |
| 查询这个共享计数 | 静态方法 |

**Static Field**: 类共享的一份状态。创建对象不会再复制一份该字段。

## 构造器链与共享计数

这是一个独立于前面版本的简化示例：

```java
public class Book {
    private static int numberOfBooks = 0;
    private String title;

    public Book(String title) {
        this.title = title;
        Book.numberOfBooks++;
    }

    public Book() {
        this("Untitled");
    }

    public String getTitle() {
        return this.title;
    }

    public static int getNumberOfBooks() {
        return Book.numberOfBooks;
    }

    @Override
    public String toString() {
        return this.title;
    }
}
```

`new Book()` 会委托给另一个构造器，但只创建一个 Book。将计数逻辑集中在被委托的构造器中，避免同一个对象计数两次。

这个计数表示**累计创建次数**，不是当前仍可达对象的数量，也不会在垃圾回收时自动减少。

## 类方法与实例方法

```java
Book a = new Book("Dune");
Book b = new Book("Emma");
System.out.println(a.getTitle());
System.out.println(Book.getNumberOfBooks());
```

静态方法通过类名调用更清楚。实例方法可以访问类状态，也可以访问自己的实例状态；静态方法不能在没有对象的情况下直接访问实例字段。

## 设计检查清单

- 构造器是否建立有效状态，并避免重复初始化？
- 同名重载是否真的有不同参数类型列表？
- 是否只公开调用者需要的方法？
- getter 是否暴露内部可变对象？
- setter 是否检查范围，或者应该直接不提供 setter？
- `toString()` 是否返回有意义的文本？

??? success "自测：把 getTitle() 改成 static，为什么不是解决 main 中访问错误的好办法？"

    标题属于某一本书，而不是整个类。main 应通过具体 Book 引用调用实例方法；修改成员归属会改变模型，而不是只修复调用方式。

---

[← 上一讲](./lec09-encapsulation.md) · [下一讲 →](./lec11-inheritance1.md)
