# CS300：Programming II

按课堂顺序整理 Lecture 01–21，覆盖数组、对象、异常、面向对象设计、泛型、复杂度和递归，并补充 zyBooks 第 7–9 章的复杂度、递归与排序算法。每讲都有中文笔记、Java 代码示例、自测解释与原始 PDF 入口。

## 怎么使用

先阅读本讲的主线与概念，再手工追踪代码，最后展开自测解释。需要课堂原始截图或完整页序时，打开对应 PDF；引用 Canvas 的 starter 和 solution 需另从课程平台获取。

!!! info "资料与整理范围"

    来源为你提供的 21 份本地 lecture PDF，课件署名 Cole Nelson，CS300 Programming II，Fall 2026。这里按知识点重新组织为复习笔记，不是逐页翻译，也不代表教师审定。编程作业、测验和考试安排以当前 Canvas 与 syllabus 为准。

    术语尽量中英对照；速查条目使用 **English Term**: 中文说明。对课件入门简化另外标明补充说明，例如接口能力，以及 O、Ω、Θ 与最好、最坏情况的区别。

新增补充笔记依据你提供的 `7.pdf`（28 页）、`8.pdf`（77 页）、`9.pdf`（48 页），是 zyBooks 相应章节的复习整理，与原有 Lecture 编号分开；各页注明来源小节和 PDF 页码。示例为重新编写。

## 学习路线

| 阶段 | 讲次 | 要解决的问题 |
|---|---|---|
| 数组与对象 | 01–04 | 容量与大小、引用与别名、对象状态、内存与拷贝 |
| 异常处理 | 05–07 | 读栈轨迹、选择处理位置、抛出异常、关闭资源 |
| 类与继承 | 08–13 | 构造器、封装、static、继承、重写与多态 |
| 接口与泛型 | 14–16 | 能力契约、排序、类型参数、边界与 ADT |
| 复杂度分析 | 17–19 | 输入规模、隐藏循环、增长阶与渐近界 |
| 递归 | 20–21、zyBooks 8 | 基本情况、调用栈、回溯、递归树与二分查找 |
| 排序算法 | zyBooks 9 | 选择、插入、冒泡、归并、快排、堆排与桶排序 |

## zyBooks 7–9 补充讲义

| 分类 | 补充笔记 | 重点 |
|---|---|---|
| 复杂度分析 | [第 7 章补充](complexity/zybooks7.md) | 常数操作、循环求和、增长阶、O/Ω/Θ |
| 递归 | [递归设计与调用栈](recursion/foundations.md) | 定义、基本情况、栈、Fibonacci 与调试 |
| 递归 | [回溯与全排列](recursion/backtracking.md) | 选择树、撤销操作、排列与组合 |
| 递归 | [递推关系与二分查找](recursion/analysis.md) | 递归树、时间与空间、区间边界 |
| 排序算法 | [总览与复杂度对照](sorting/index.md) | 七种算法、稳定性与实现差异 |

## 全部课件与笔记

| 讲次 | 中文笔记 | 原课件 |
|---|---|---|
| 01 | [课程导览与数组容量](lectures/lec01-welcome.md) | [Welcome & Course Overview](slides/lec01-welcome.pdf) |
| 02 | [数组、引用与测试](lectures/lec02-arrays.md) | [Working with Arrays](slides/lec02-arrays.pdf) |
| 03 | [使用对象与包装类](lectures/lec03-using-objects.md) | [Using Objects](slides/lec03-using-objects.pdf) |
| 04 | [对象内存与拷贝](lectures/lec04-object-memory.md) | [Objects in Memory](slides/lec04-object-memory.pdf) |
| 05 | [异常与栈轨迹](lectures/lec05-exceptions.md) | [Exceptions](slides/lec05-exceptions.pdf) |
| 06 | [捕获异常与控制流](lectures/lec06-handlingexceptions.md) | [Handling Exceptions](slides/lec06-handlingexceptions.pdf) |
| 07 | [抛出异常与资源管理](lectures/lec07-throwingexceptions.md) | [Throwing Exceptions](slides/lec07-throwingexceptions.pdf) |
| 08 | [定义类与构造器](lectures/lec08-definingclasses.md) | [Defining a Class](slides/lec08-definingclasses.pdf) |
| 09 | [封装与防御性拷贝](lectures/lec09-encapsulation.md) | [Encapsulation](slides/lec09-encapsulation.pdf) |
| 10 | [类的设计与静态成员](lectures/lec10-designingclasses.md) | [Designing with Classes](slides/lec10-designingclasses.pdf) |
| 11 | [继承与父类构造器](lectures/lec11-inheritance1.md) | [Inheritance](slides/lec11-inheritance1.pdf) |
| 12 | [方法重写与内容相等](lectures/lec12-inheritance2.md) | [Overriding](slides/lec12-inheritance2.pdf) |
| 13 | [多态与抽象类](lectures/lec13-inheritance3.md) | [Polymorphism & Abstract Classes](slides/lec13-inheritance3.pdf) |
| 14 | [接口与 Comparable](lectures/lec14-interfaces.md) | [Interfaces](slides/lec14-interfaces.pdf) |
| 15 | [泛型方法与类型边界](lectures/lec15-genericmethods.md) | [Generic Methods](slides/lec15-genericmethods.pdf) |
| 16 | [泛型类与抽象数据类型](lectures/lec16-genericclasses.md) | [Bounds & Generic Classes](slides/lec16-genericclasses.pdf) |
| 17 | [复杂度与增长阶](lectures/lec17-complexity.md) | [Introduction to Complexity](slides/lec17-complexity.pdf) |
| 18 | [算法分析与隐藏成本](lectures/lec18-algorithmanalysis.md) | [Algorithm Analysis](slides/lec18-algorithmanalysis.pdf) |
| 19 | [最坏情况与渐近记号](lectures/lec19-worstcase.md) | [Worst Case Analysis](slides/lec19-worstcase.pdf) |
| 20 | [递归与基本情况](lectures/lec20-recursion.md) | [Recursion](slides/lec20-recursion.pdf) |
| 21 | [递归追踪与成本分析](lectures/lec21-tracingrecursion.md) | [Tracing Recursion](slides/lec21-tracingrecursion.pdf) |

## 复习时重点区分

- `length`、`size`、有效元素范围。
- 值复制、引用复制、浅拷贝、深拷贝。
- `==`、`equals`、`compareTo`。
- `throw` 与 `throws`，检查型与非检查型异常。
- `this`、`this(...)`、`super(...)`、`super.method()`。
- 重载与重写，声明类型与运行时类型。
- 普通继承与泛型类型之间的关系。
- 顺序成本相加、重复工作累计、隐藏的方法成本。
- 最好情况、最坏情况，以及 O、Ω、Θ 的不同含义。
- 递归调用顺序、打印顺序、返回值与额外栈空间。
