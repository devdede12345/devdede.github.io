# 题目大意

给定一个字符串，对这个字符串进行提纯，并输出其转换成 `int` 后的数值。

## 思路

按照题目的要求一步步来。



!!! note "小提示"
    这道题不让我们使用内置的库函数（比如`Integet.parseInt` `int()` `Number()` ）



主要的要求有四个

- 去除前面的空格
- 标记其正负号
- 如果遇到字符，自动忽略后面的任何信息。
- 如果超出 `int` 的最大/最小数值，输出 `int` 的最值。

这里的四个要求可以按照顺序来一个个实现。

我们首先使用 `index` 去一个个检查字符串 `a`. 遇到空格继续向后走，如果走完了都没看到数字，返回 `0`。这样可以解决要求一。

然后我们将 `index` 重置为0，继续处理。

正负号我们可以用 `sign` 及其值 1 或 -1 来储存。

最后两个要求将在一个 while 循环里处理。

```java
 while (index < length) {
      char c = a.charAt(index);

      if (c < '0' || c > '9') {
        break;
      }

      res = res * 10 + (c - '0');

      if (sign * res > Integer.MAX_VALUE) return Integer.MAX_VALUE;
      if (sign * res < Integer.MIN_VALUE) return Integer.MIN_VALUE;
    
      index++;
    }

    return (int) (sign * res);
  }
```

注意结尾的 `index++` 一定不能忘记。

## 代码

```java
class Solution {
  public int myAtoi(String a) {
    if (a == null || a.length() == 0) {
      return 0;
    }

    int index = 0;
    int length = a.length();
    int sign = 1;

    while (index < length && a.charAt(index) == ' ') {
      index++;
    }

    if (index == length) {
      return 0;
    }

    char first = a.charAt(index);
    if (first == '+' || first == '-') {
      sign = first == '-' ? -1 : 1;
      index++;
    }

    long res = 0;

    while (index < length) {
      char c = a.charAt(index);

      if (c < '0' || c > '9') {
        break;
      }

      res = res * 10 + (c - '0');

      if (sign * res > Integer.MAX_VALUE) {
        return Integer.MAX_VALUE;
      }
      if (sign * res < Integer.MIN_VALUE) {
        return Integer.MIN_VALUE;
      }

      index++;
    }

    return (int) (sign * res);
  }
}
```

## 反思

1.首先，java不允许 `String` 方法通过类似数组的方式来进行调用。比如

```java
a[1] = "a"; //compile error
a.charAt(1); //allowed

```

2.如果要判断字符串是否是数字，有两种比较通用的方法

```java
char c;

(c < '0' || c > '9')
(Character.isDigit(c))
```

这两种方法在此题是等效的。不过这道题希望我们避免使用 `java` 标准库，就算了。

3.变量名得规范，特别是对于这种模拟题。


