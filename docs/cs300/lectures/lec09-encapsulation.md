# Lecture 09：封装与防御性拷贝

**Encapsulation**

[查看原课件（19 页）](../slides/lec09-encapsulation.pdf) · [从重点页开始](../slides/lec09-encapsulation.pdf#page=3) · [返回课程目录](../index.md)

!!! note "阅读说明"

    根据 Cole Nelson 的 CS300 Programming II（Fall 2026）课件整理，重点对应 PDF 第 3–16 页。本文是中文复习笔记，不是逐页译文。除明确标注转录的代码外，示例为便于讲解重新编写，各页版本可以独立阅读；Canvas 配套源码未包含在当前资料中。

## 本讲主线

封装不是“把字段改成 private”就结束，还需要控制读写路径、验证输入，并避免把内部可变对象直接泄露给调用者。

## 为什么字段通常保持 private

**Encapsulation**: 将状态和操作状态的方法放在同一个类里，并通过受控接口维护对象的有效状态。

公开字段允许任何调用者直接写入负数天数等无效值。私有字段把检查集中到构造器和公开方法中，而不依赖所有调用者自觉遵守。

## Accessor 与 Mutator

```java
public int getDays() {
    return this.days;
}

public void setDays(int days) {
    if (days < 0) {
        throw new IllegalArgumentException("days 不能为负数");
    }
    this.days = days;
}
```

**Accessor**: 读取信息，常称 getter；布尔属性常使用 `isCheckedOut()` 这种命名。

**Mutator**: 改变对象状态，常称 setter，但也可以是更符合业务语义的 `renew()`、`returnIt()`。

不是每个字段都需要 setter。标题和作者若在这个模型中不允许更改，就不提供修改入口。

## private 字段也可能泄露

假设类中有 `private ArrayList<String> tags`：

```java
// 泄露了内部列表：调用者可以 clear()、add()、remove()
public java.util.ArrayList<String> getTagsUnsafe() {
    return this.tags;
}

// 返回新的容器，保护内部列表结构
public java.util.ArrayList<String> getTags() {
    return new java.util.ArrayList<>(this.tags);
}
```

**Defensive Copy**: 在对象边界上提供副本，防止外部绕过方法直接改状态。构造器或 setter 接收外部可变列表时，也要考虑是否应复制。

这里的副本是浅拷贝。因为 `String` 不可变，共享这些元素通常没有问题；如果元素本身可变，还要继续考虑元素级别的保护。

## toString

```java
@Override
public String toString() {
    return this.title + " by " + this.author;
}
```

`toString()` 应返回可读文本，而不是只在内部打印。`System.out.println(book)` 会用它生成输出。没有重写时，常见结果形如 `Book@6d06d69c`，不能据此把后面的十六进制文本当作稳定的内存地址。

??? success "自测：字段是 private，为什么 getTagsUnsafe().clear() 仍会改变 Book？"

    getter 交出了同一个列表对象的引用。private 限制直接访问字段名，不会自动复制对象，也不会自动阻止通过别名修改它。

---

[← 上一讲](./lec08-definingclasses.md) · [下一讲 →](./lec10-designingclasses.md)
