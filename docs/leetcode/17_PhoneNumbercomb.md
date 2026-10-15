# 题目大意

返回在电话拨号的过程中，每个数字对应的字符串的所有组合。

## 思路

一个思路是使用二维数组去进行对应。对于二维数组 `Array[a][b]` , a 对应拨号的数字本身， b 对于数字下储存的所有字母。
```java

    String[][] dial = {
        { "empty" },
        { "empty" },
        { "a", "b", "c" },
        { "d", "e", "f" },
        { "g", "h", "i" },
        { "j", "k", "l" },
        { "m", "n", "o" },
        { "p", "q", "r", "s" },
        { "t", "u", "v" },
        { "w", "x", "y", "z" }
    };
```

由于传入的参数类型为 `String` 我们需要将其转换至 `int` 类型。

```java
int index = digits.chatAt(i) - '0'
```

我们可以一个个的来处理拨号的数字。保存答案为 `List<String> next` 对于后续的每次操作，我们将此数字的每一个对应字母依次加入至 `next`。

## 代码
```java
class Solution {
  public List<String> letterCombinations(String digits) {

    List<String> result = new ArrayList<>();

    if (digits.length() == 0) {
      return result;
    }

    String[][] dial = {
        { "empty" },
        { "empty" },
        { "a", "b", "c" },
        { "d", "e", "f" },
        { "g", "h", "i" },
        { "j", "k", "l" },
        { "m", "n", "o" },
        { "p", "q", "r", "s" },
        { "t", "u", "v" },
        { "w", "x", "y", "z" }
    };

    result.add("");

    for (int i = 0; i < digits.length(); i++) {
      int index = digits.charAt(i) - '0';

      List<String> next = new ArrayList<>();

      for (String combo : result) {
        for (String letter : dial[index]) {
          next.add(combo + letter);
        }
      }

      result = next;

    }
    return result;
  }
}
```

## 反思

这道题的思路本身不难，但是需要掌握变量对应的含义，以及模拟的时候，每一个指令对程序的影响是什么。
