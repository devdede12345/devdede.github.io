# Lecture 13：多态与抽象类

**Polymorphism & Abstract Classes**

[查看原课件（19 页）](../slides/lec13-inheritance3.pdf) · [从重点页开始](../slides/lec13-inheritance3.pdf#page=2) · [返回课程目录](../index.md)

!!! note "阅读说明"

    根据 Cole Nelson 的 CS300 Programming II（Fall 2026）课件整理，重点对应 PDF 第 2–17 页。本文是中文复习笔记，不是逐页译文。除明确标注转录的代码外，示例为便于讲解重新编写，各页版本可以独立阅读；Canvas 配套源码未包含在当前资料中。

## 本讲主线

多态把“引用声明成什么类型”与“实际对象是什么类型”分开；抽象类则要求每种具体书本实现共同约定的行为。

## 编译时能调用什么，运行时执行哪个版本

```java
Book book = new Textbook("Calculus", "Author", "MATH221");
System.out.println(book.toString());
// book.getCourseCode(); // 若 Book 没有此方法，则不能直接调用
```

**Declared Type**: 变量的声明类型决定编译器允许调用哪些成员。

**Runtime Type**: 对于被重写的实例方法，实际对象类型决定执行哪个实现。这里 `toString()` 运行 Textbook 的版本。

这条动态分派规则不应直接套用于字段或静态方法。

## 一个集合容纳不同子类

```java
java.util.ArrayList<Book> shelf = new java.util.ArrayList<>();
shelf.add(new Textbook("Calculus", "Author", "MATH221"));
shelf.add(new Novel("Dune", "Frank Herbert", "Science fiction"));
for (Book book : shelf) {
    System.out.println(book.toString());
}
```

示例假设这些子类提供对应构造器。每个元素都能作为 Book 使用，但执行各自重写的行为。课件提醒：统一循环调用 `renew()` 时，ReferenceBook 仍可能拒绝借阅。

## 向上转型与向下转型

**Upcast**: 子类引用赋给父类类型变量，通常自动完成。

**Downcast**: 把父类类型引用视为某个更具体子类，必须确认实际对象确实兼容。

```java
if (book instanceof Textbook) {
    Textbook textbook = (Textbook) book;
    System.out.println(textbook.getCourseCode());
}
```

强制转换不会把一个 Novel 改造成 Textbook；它只改变当前表达式如何被看待。类型不匹配会触发 `ClassCastException`。

## 抽象类与抽象方法

```java
abstract class LoanItem {
    public abstract int getLoanLength();

    public boolean canBorrow() {
        return getLoanLength() > 0;
    }
}

class ReferenceItem extends LoanItem {
    @Override
    public int getLoanLength() {
        return 0;
    }
}
```

**Abstract Method**: 只有声明，没有实现体。抽象方法以分号结束。

**Abstract Class**: 不能直接实例化；可以具有字段、构造器、普通方法和抽象方法。非抽象子类必须实现尚未实现的抽象方法。

课件的应用是让 Textbook、Novel、ReferenceBook 分别决定借期，普通借阅逻辑调用 `getLoanLength()`，而不把所有子类规则硬写进一串类型判断。

??? success "自测：一个类没有抽象方法，它还能声明为 abstract 吗？"

    可以。abstract class 表达不能直接实例化，不要求其中一定有抽象方法。

---

[← 上一讲](./lec12-inheritance2.md) · [下一讲 →](./lec14-interfaces.md)
