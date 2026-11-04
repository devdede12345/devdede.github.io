# Lecture 06：捕获异常与控制流

**Handling Exceptions**

[查看原课件（14 页）](../slides/lec06-handlingexceptions.pdf) · [从重点页开始](../slides/lec06-handlingexceptions.pdf#page=6) · [返回课程目录](../index.md)

!!! note "阅读说明"

    根据 Cole Nelson 的 CS300 Programming II（Fall 2026）课件整理，重点对应 PDF 第 6–12 页。本文是中文复习笔记，不是逐页译文。除明确标注转录的代码外，示例为便于讲解重新编写，各页版本可以独立阅读；Canvas 配套源码未包含在当前资料中。

## 本讲主线

课件以输入处理练习为主：决定在哪一层处理异常、按正确顺序安排 catch，并跟踪 try、catch 和 finally 的执行。

## try / catch 的控制流

```java
try {
    System.out.println("A");
    int number = Integer.parseInt("bad");
    System.out.println("B");
} catch (NumberFormatException e) {
    System.out.println("C");
} finally {
    System.out.println("D");
}
System.out.println("E");
```

这个例子输出 `A C D E`。`B` 被跳过；处理完成后从整个 try/catch 之后继续，不回到 `parseInt` 后面。

**Finally**: 在通常的正常退出、异常退出或 return 路径上执行，常用于清理。JVM 被直接终止等情况不在这种通常保证之内。

如果异常不匹配当前 catch，就继续向外传播；finally 不会自动把未处理异常“消除”。

## 捕获类型必须匹配

`catch (RuntimeException e)` 可以接住它的子类；`catch (NumberFormatException e)` 不能接住所有其他运行时异常。

同一组 catch 从上往下匹配，执行第一个匹配块，不会依次把多个块都执行一次。

```java
try {
    int[] values = {1};
    System.out.println(values[3]);
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("索引错误");
} catch (RuntimeException e) {
    System.out.println("其他运行时错误");
}
```

**Catch Order**: 先具体，后宽泛。把 `RuntimeException` 放前面，会使它后面的相关子类 catch 不可达，编译器会报错。

## 多异常捕获

处理方式相同时，可以使用单个竖线：

```java
try {
    // 执行输入转换和数组访问
} catch (NumberFormatException | ArrayIndexOutOfBoundsException e) {
    System.out.println("输入或索引无效");
}
```

多捕获中的类型不能互为父子类；例如把 `RuntimeException` 与其子类同时列出没有意义，也不合法。

## 在哪一层处理

底层方法通常负责发现并准确报告错误；有能力提示用户、重试或选择替代方案的调用者负责恢复。不要为了让红色错误消失，就写空的 `catch` 把问题静默吞掉。

课件要求下载 Canvas 的 starter 与 solution。当前资料只有 PDF，因此这里整理的是控制流规则，不假定已经取得或补全那些配套源码。

??? success "自测：try 中的异常没被这里的 catch 匹配，finally 还会不会运行？"

    在通常的异常展开过程中会运行，之后异常继续向外传播。如果 finally 自己又抛异常或 return，则会改变原来的结果，应避免这种写法。

---

[← 上一讲](./lec05-exceptions.md) · [下一讲 →](./lec07-throwingexceptions.md)
