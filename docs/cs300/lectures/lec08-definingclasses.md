# Lecture 08：定义类与构造器

**Defining a Class**

[查看原课件（26 页）](../slides/lec08-definingclasses.pdf) · [从重点页开始](../slides/lec08-definingclasses.pdf#page=3) · [返回课程目录](../index.md)

!!! note "阅读说明"

    根据 Cole Nelson 的 CS300 Programming II（Fall 2026）课件整理，重点对应 PDF 第 3–23 页。本文是中文复习笔记，不是逐页译文。除明确标注转录的代码外，示例为便于讲解重新编写，各页版本可以独立阅读；Canvas 配套源码未包含在当前资料中。

## 本讲主线

把之前分散在并行数组中的书本信息，组织成一个对象；通过字段、构造器和实例方法，保证每个新对象都有明确的初始状态。

## 一个类管理一类对象

**Abstraction**: 使用一个类时，先依赖它对外提供的方法及约定，而不要求读懂内部每行实现。

**Instance Field**: 每个对象自己保存的状态。两个 Book 可以具有不同标题、作者和借阅状态。

下面是根据课堂 Book 主线重新编写的简化版本，存放在 `Book.java`：

```java
public class Book {
    private String title;
    private String author;
    private boolean checkedOut;
    private int days;

    public Book(String title, String author) {
        this.title = title;
        this.author = author;
        this.checkedOut = false;
        this.days = 0;
    }

    public Book(String title) {
        this(title, "Unknown");
    }

    public String getTitle() {
        return this.title;
    }
}
```

## 构造器的三个规则

1. 名称与类名完全相同。
2. 没有返回类型，连 `void` 都不写。
3. 在对象创建时建立初始状态，不应让字段意外保持无效默认值。

只有在**完全没有声明构造器**时，编译器才会提供默认无参数构造器。一旦写了任意构造器，想继续使用 `new Book()` 就需要自己提供匹配版本。

## this 与名字遮蔽

```java
// 错误示意：参数赋给参数，字段没有被设置
// title = title;

this.title = title;
```

**Shadowing**: 同名参数遮蔽字段；`this.title` 明确表示当前对象的字段。

实例方法中可以使用 `this`；静态方法没有当前实例，因此没有 `this`。

## 重载与构造器委托

**Overloading**: 同名方法或构造器具有不同参数列表。仅改参数名、仅改返回类型，都不能形成合法重载。

| 两个构造器 | 能否共存 |
|---|---|
| `Book(String)` 与 `Book(String, String)` | 可以 |
| `Book(String, boolean)` 与 `Book(boolean, String)` | 可以 |
| `Book(String title)` 与 `Book(String author)` | 不可以，参数类型列表相同 |

`this(...)` 调用本类的另一构造器；`this.field` 访问字段。按课件采用的构造器写法，把 `this(...)` 放在第一条语句，避免复制初始化逻辑。

??? success "自测：public void Book(String title) 是构造器吗？"

    不是，它有返回类型 void，所以是一个普通方法。创建对象时不会把它当构造器调用。

---

[← 上一讲](./lec07-throwingexceptions.md) · [下一讲 →](./lec09-encapsulation.md)
