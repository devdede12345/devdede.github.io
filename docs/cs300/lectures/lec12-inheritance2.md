# Lecture 12：方法重写与内容相等

**Overriding**

[查看原课件（19 页）](../slides/lec12-inheritance2.pdf) · [从重点页开始](../slides/lec12-inheritance2.pdf#page=2) · [返回课程目录](../index.md)

!!! note "阅读说明"

    根据 Cole Nelson 的 CS300 Programming II（Fall 2026）课件整理，重点对应 PDF 第 2–17 页。本文是中文复习笔记，不是逐页译文。除明确标注转录的代码外，示例为便于讲解重新编写，各页版本可以独立阅读；Canvas 配套源码未包含在当前资料中。

## 本讲主线

子类可以重写继承来的实例方法，或者在父类行为基础上扩展。随后用 `equals(Object)` 定义书本的内容相等规则。

## Overriding 与 Overloading

| 概念 | 改变了什么 | 识别方法 |
|---|---|---|
| 重写（Overriding） | 为继承的方法提供实现 | 参数签名匹配；在继承关系中 |
| 重载（Overloading） | 增加另一个同名方法 | 参数列表不同 |

```java
@Override
public String toString() {
    return super.toString() + " [" + this.courseCode + "]";
}
```

**Override Annotation**: `@Override` 请编译器检查是否真的重写成功，帮助发现 `toString(int x)` 之类意外变成重载的错误。

`super.toString()` 明确调用父类版本；不必复制父类的字符串拼接逻辑。重写时不能降低可见性，返回类型也要符合重写规则。

## 有时应完全替换行为

课件中的 ReferenceBook 不允许被借走，因此 `renew()` 的重写应拒绝操作，而不是先调用 `super.renew()` 做完借阅，再抛错误。

父类若有两个不同参数列表的 `renew`，重写其中一个并不会自动覆盖另一个。需要逐个检查哪些入口都必须受限制。

## equals(Object)

默认 `Object.equals` 比较对象身份。课件的书本例子希望“标题、作者相同”就视为内容相等。

以下方法写在声明了 `title` 与 `author` 的 Book 类内部：

```java
@Override
public boolean equals(Object obj) {
    if (this == obj) {
        return true;
    }
    if (!(obj instanceof Book)) {
        return false;
    }
    Book other = (Book) obj;
    return java.util.Objects.equals(this.title, other.title)
        && java.util.Objects.equals(this.author, other.author);
}

@Override
public int hashCode() {
    return java.util.Objects.hash(this.title, this.author);
}
```

参数必须是 `Object`；写成 `equals(Book other)` 是重载，不能替换 `Object.equals(Object)`。

`instanceof` 对 `null` 返回 false。代码在确认类型后再强制转换，因此不会因为传入其他类型而直接发生 `ClassCastException`。

同一个类的代码可以访问另一个同类对象的 private 字段，所以 `other.title` 合法。

## 相等规则需要一致

`equals` 应保持自反、对称、传递等性质。上面的 Book 规则也接纳其子类；如果某个子类又加入额外字段作为相等条件，就要重新检查是否破坏对称性。

`hashCode()` 是配套补充：相等对象应具有相同哈希值，便于后续正确使用哈希集合。

??? success "自测：book1 == book2 为 false，equals 是否可以为 true？"

    可以。两个不同对象可以具有相同的标题与作者；身份不同与内容相等并不矛盾。

---

[← 上一讲](./lec11-inheritance1.md) · [下一讲 →](./lec13-inheritance3.md)
