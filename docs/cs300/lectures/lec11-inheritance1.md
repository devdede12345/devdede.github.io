# Lecture 11：继承与父类构造器

**Inheritance**

[查看原课件（20 页）](../slides/lec11-inheritance1.pdf) · [从重点页开始](../slides/lec11-inheritance1.pdf#page=3) · [返回课程目录](../index.md)

!!! note "阅读说明"

    根据 Cole Nelson 的 CS300 Programming II（Fall 2026）课件整理，重点对应 PDF 第 3–19 页。本文是中文复习笔记，不是逐页译文。除明确标注转录的代码外，示例为便于讲解重新编写，各页版本可以独立阅读；Canvas 配套源码未包含在当前资料中。

## 本讲主线

继承表达“是一种”的关系，通过 `extends` 复用父类行为，通过 `super(...)` 初始化父类定义的那部分状态。

## is-a 与 has-a

**Inheritance**: 子类是父类的一种更具体类型。例如 Textbook 是 Book。

**Composition**: 一个对象拥有其他对象。例如 Library 拥有许多 Book。

| 描述 | 合适建模方式 |
|---|---|
| Novel 是一种 Book | `class Novel extends Book` |
| Library 里有 Book | 在 Library 中存储 Book 字段或列表 |
| Playlist 包含 Track | 存储 Track，而不是继承 Track |

不要仅仅为了复用几行代码，就建立语义错误的继承关系。

## 子类构造器

以下假设父类提供 `Book(String title, String author)`：

```java
public class Textbook extends Book {
    private String courseCode;

    public Textbook(String title, String author, String courseCode) {
        super(title, author);
        this.courseCode = courseCode;
    }

    public String getCourseCode() {
        return this.courseCode;
    }
}
```

**Superclass**: 父类，也称 Base Class。

**Subclass**: 子类，也称 Derived Class。

构造器不被继承。按课件的构造器写法，将 `super(...)` 放在首条语句。若省略，编译器通常尝试调用 `super()`；如果父类没有可用的无参数构造器，就会编译失败。

创建 Textbook 时先初始化父类部分，再初始化子类部分。这是同一个对象的构造过程，不是另外创建了一个独立的 Book 对象。

## private 与 protected

父类的私有状态仍是子类对象状态的一部分，但子类不能直接通过父类私有字段名访问它。使用父类构造器和公开的方法。

| 修饰符 | 入门层面的访问范围 |
|---|---|
| `private` | 声明它的类内部 |
| 无修饰符 | 同一个包 |
| `protected` | 同包，以及满足 Java 访问规则的子类上下文 |
| `public` | 可访问该类型的调用者 |

跨包的 `protected` 访问还有接收者限制，不应理解成“子类随便拿一个父类对象都能访问”。本课程的 Book 字段继续保持 private。

## UML 阅读

课件用类框和指向父类的箭头表示继承；`+` 表示 public，`-` 表示 private。看箭头时先确认谁是更一般的类型。

??? success "自测：父类只定义了带两个参数的构造器，子类构造器能什么都不调用吗？"

    不行。隐式 super() 找不到匹配构造器，需要显式传入父类所需参数。

---

[← 上一讲](./lec10-designingclasses.md) · [下一讲 →](./lec12-inheritance2.md)
