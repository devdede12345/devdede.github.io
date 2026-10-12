# 简介

将一个数字反转，比如-321变成-123，120变成21.

## 思路

将输入的数字变成一个字符串，然后挨个进行处理。从 `int` 变成 `String` 的方法为`String.valueOf()`


考虑三种需要修改的类型：

- 保留负号
- 反转后第一个字符如果是0，将其删除
- 超出范围

由于方法是int, 需调用 `Integer.parseInt` 转换类型为 `int`.

## 代码  

```java
class Solution {
  public int reverse(int x) {
    String str = String.valueOf(x);
    boolean negative = str.startsWith("-");

    if (negative) {
      str = str.substring(1);
    }

    String ans = new StringBuilder(str).reverse().toString();

    if (negative) {
      ans = "-" + ans;
    }

    try {
      return Integer.parseInt(ans);
    } catch (NumberFormatException e) {
      return 0;
    }
  }
}
```


## 反思

与其说是算法，这个题目更多的还是考察 `java` 标准库函数的用法。尤其是 `String` 和 `int` 两大常见的数据类型之间的转换。
