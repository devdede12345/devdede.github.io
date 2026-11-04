# Lecture 03：使用对象与包装类

**Using Objects**

[查看原课件（29 页）](../slides/lec03-using-objects.pdf) · [从重点页开始](../slides/lec03-using-objects.pdf#page=3) · [返回课程目录](../index.md)

!!! note "阅读说明"

    根据 Cole Nelson 的 CS300 Programming II（Fall 2026）课件整理，重点对应 PDF 第 3–26 页。本文是中文复习笔记，不是逐页译文。除明确标注转录的代码外，示例为便于讲解重新编写，各页版本可以独立阅读；Canvas 配套源码未包含在当前资料中。

## 本讲主线

对象把状态（State）和行为（Behavior）放在一起。使用对象时，先看构造器和方法签名，确定它们属于类还是某个实例。

## 类、对象与构造器

**Class**: 对象的类型与定义。

**Instance**: 根据类创建的某一个具体对象。

```java
Book dune = new Book("Dune");
```

`new` 创建对象，匹配的构造器（Constructor）初始化状态，最后把引用交给变量 `dune`。构造器可以重载（Overloading）：同名，但参数类型、数量或顺序不同。

## static 与实例成员

| 成员 | 属于谁 | 常见调用方式 |
|---|---|---|
| 类成员（Static Member） | 类共享的一份状态或行为 | `Math.pow(2, 3)` |
| 实例成员（Instance Member） | 某一个对象 | `name.toUpperCase()` |

课件用借阅规则与某本书的状态区分二者：统一借阅政策可以是类状态，某本书是否借出则是实例状态。

`main` 是静态方法，本身没有对应对象，不能直接使用实例字段；需要通过一个对象引用访问。反过来，不应为了消除错误而把所有字段都改成 `static`。

## null 与对象数组

```java
Book[] shelf = new Book[3];
// shelf 是一个数组对象，但其中的三个元素都是 null
shelf[0] = new Book("Dune");

for (Book book : shelf) {
    if (book != null) {
        System.out.println(book.toString());
    }
}
```

**Null Reference**: 不指向任何对象的引用。在它上面调用实例方法或访问实例字段，会触发 `NullPointerException`。

检查时要问“究竟哪个引用是 null”：数组引用、数组某个元素，还是元素内部的另一个引用？

## 包装类与自动装箱

| 基本类型 | 包装类 |
|---|---|
| `int` | `Integer` |
| `double` | `Double` |
| `char` | `Character` |
| `boolean` | `Boolean` |

**Autoboxing**: 基本类型值自动转换为包装类对象。

**Unboxing**: 包装类对象自动转换为基本类型值；对 `null` 拆箱也会触发空指针异常。

```java
Integer count = 3; // 装箱
int n = count;     // 拆箱
Integer missing = null;
// int x = missing; // 编译可以通过，运行时会因拆箱 null 而异常
```

两个包装类引用使用 `==` 比较的仍是对象身份。小整数缓存会让部分实验“看起来像在比较值”，不能据此设计比较逻辑。课件以 -128 到 127 为例；其他范围不要依赖对象是否共用。内容比较应使用 `.equals()`，同时处理可能的 `null`。

## 不可变对象

**Immutable Object**: 创建后自身内容不能改变，例如 `String` 和基本类型包装类。把变量重新赋给另一个对象，不等于修改原对象。

```java
String title = "dune";
title.toUpperCase();          // 没有改变 title 所指的字符串
title = title.toUpperCase();  // 接收返回的新字符串
```

??? success "自测：new Book[3] 调用了几次 Book 构造器？"

    零次。它只创建数组对象；每个 Book 需要单独创建。

---

[← 上一讲](./lec02-arrays.md) · [下一讲 →](./lec04-object-memory.md)
