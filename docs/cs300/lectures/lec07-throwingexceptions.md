# Lecture 07：抛出异常与资源管理

**Throwing Exceptions**

[查看原课件（21 页）](../slides/lec07-throwingexceptions.pdf) · [从重点页开始](../slides/lec07-throwingexceptions.pdf#page=3) · [返回课程目录](../index.md)

!!! note "阅读说明"

    根据 Cole Nelson 的 CS300 Programming II（Fall 2026）课件整理，重点对应 PDF 第 3–20 页。本文是中文复习笔记，不是逐页译文。除明确标注转录的代码外，示例为便于讲解重新编写，各页版本可以独立阅读；Canvas 配套源码未包含在当前资料中。

## 本讲主线

区分真正抛出异常的 `throw` 与声明传播责任的 `throws`，理解调用栈展开、自定义异常、资源清理以及异常测试。

## throw 与 throws

| 关键字 | 写在哪里 | 意义 |
|---|---|---|
| `throw` | 方法体内 | 现在抛出一个异常对象 |
| `throws` | 方法声明中 | 声明这个方法可能把异常交给调用者 |

```java
static void checkAge(int age) {
    if (age < 0 || age > 150) {
        throw new IllegalArgumentException("年龄超出允许范围");
    }
}
```

`new IllegalArgumentException(...)` 只创建对象；真正改变控制流的是 `throw`。对检查型异常，调用者必须捕获，或者也写 `throws` 继续声明传播责任。

```java
static java.util.Scanner openFile(String path)
        throws java.io.FileNotFoundException {
    return new java.util.Scanner(new java.io.File(path));
}
```

`throws` 本身不会主动抛异常，也不会保证每次调用都失败。

## 调用栈展开

**Stack Unwinding**: 某个异常未在当前方法处理时，当前调用退出，向调用者继续寻找处理器。直到找到匹配 catch，或者一路传播到线程顶层。正常路径上尚未完成的语句不会继续执行。

读库方法很多的栈轨迹时，定位自己代码的第一个相关栈帧，再检查调用时传入了什么。

## 自定义异常

```java
class InvalidAgeException extends IllegalArgumentException {
    public InvalidAgeException(String message) {
        super(message);
    }
}
```

异常也是类。这里继承 `IllegalArgumentException`，所以是 unchecked；若改为直接继承 `Exception`，一般就成为 checked。自定义类型适合表达业务语义，不是为了替每一个错误再发明一个名字。

## 自动关闭资源

```java
static void readFirstLine(String path) {
    try (java.util.Scanner input =
            new java.util.Scanner(new java.io.File(path))) {
        if (input.hasNextLine()) {
            System.out.println(input.nextLine());
        }
    } catch (java.io.FileNotFoundException e) {
        System.out.println("文件不存在：" + path);
    }
}
```

**Try-with-resources**: 将支持自动关闭的资源放在括号中，离开该代码块时负责关闭，避免每条退出路径都手写 `close()`。

## 测试“应当抛出异常”

```java
static boolean testInvalidAge() {
    try {
        checkAge(-1);
        return false; // 没抛异常，测试失败
    } catch (IllegalArgumentException expected) {
        return true;
    }
}
```

还要有有效输入测试，确认方法不会错误拒绝正常数据。不要把任意 `Exception` 都视为成功，否则空指针等意外错误也可能被当成预期结果。

??? success "自测：给方法加 throws，会不会自动创建异常对象？"

    不会。它描述方法可能传播的异常；异常对象的创建与抛出是另一回事。

---

[← 上一讲](./lec06-handlingexceptions.md) · [下一讲 →](./lec08-definingclasses.md)
