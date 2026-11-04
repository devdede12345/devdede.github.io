# Lecture 05：异常与栈轨迹

**Exceptions**

[查看原课件（24 页）](../slides/lec05-exceptions.pdf) · [从重点页开始](../slides/lec05-exceptions.pdf#page=4) · [返回课程目录](../index.md)

!!! note "阅读说明"

    根据 Cole Nelson 的 CS300 Programming II（Fall 2026）课件整理，重点对应 PDF 第 4–22 页。本文是中文复习笔记，不是逐页译文。除明确标注转录的代码外，示例为便于讲解重新编写，各页版本可以独立阅读；Canvas 配套源码未包含在当前资料中。

## 本讲主线

异常本身也是对象。它用类型说明错误是什么，用消息提供细节，用栈轨迹说明经过了哪些调用。

## 先读栈轨迹

**Stack Trace**: 异常发生时的调用路径。顶部通常最接近抛出位置，再向下寻找自己代码中的调用者。

课件强调区分“在哪里崩溃”和“错误决定发生在哪里”：空引用可能在一个方法中被使用，却是在更早的调用者里选错了数组位置。

排查顺序：确认异常类型，读消息，找最上面的相关源码行，再检查传入的数据与调用链。

## 常见异常对应什么错误

| 异常 | 典型触发条件 |
|---|---|
| `NullPointerException` | 对 null 解引用，或拆箱 null |
| `ArrayIndexOutOfBoundsException` | 数组索引小于零或不小于长度 |
| `ArithmeticException` | 例如整数除以零 |
| `NumberFormatException` | 例如把 `"hello"` 解析成整数 |

浮点除以零与整数除以零不同，不要把表中的例子推广到所有数值运算。

## 检查型与非检查型

```text
Throwable
├── Error
└── Exception
    ├── RuntimeException
    │   └── NullPointerException 等
    └── IOException 等
```

**Checked Exception**: 编译器要求调用者捕获，或在方法声明中继续声明可能传播的异常。

**Unchecked Exception**: `RuntimeException`、`Error` 及其子类，不受同样的强制处理要求。课件主要讨论 `Exception` 分支，因此不能把“不是 RuntimeException”直接推广为整个 Throwable 树都必须检查。

例如 `FileNotFoundException` 属于检查型异常。**Checked 不代表编译时发生错误；异常仍在运行时发生，编译器检查的是处理责任。**

## 为什么不总是返回特殊值

```java
static int parseCount(String text) {
    return Integer.parseInt(text);
}
```

解析失败时，异常清楚表达“没有得到有效结果”。如果偷偷返回零，调用者可能把无效输入当成真实的零，错误反而在更远的地方暴露。

如果可以合理地预先检查输入，可以使用 guard；如果方法无法履行正常返回的约定，可以抛异常。两者需要结合方法契约（Contract）决定。

## 捕获到的也是一个对象

```java
try {
    int count = parseCount("hello");
    System.out.println(count);
} catch (NumberFormatException e) {
    System.out.println("请输入整数：" + e.getMessage());
}
```

异常发生后，`try` 中尚未执行的部分被跳过，进入匹配的 `catch`；不会回到出错语句重新开始。

??? success "自测：为什么读取错误输入时不一定应该简单返回 -1？"

    要先确认 -1 是否可能是合法结果，以及调用者是否会检查它。异常可以避免把失败伪装成一个看似正常的返回值。

---

[← 上一讲](./lec04-object-memory.md) · [下一讲 →](./lec06-handlingexceptions.md)
