# 题目大意
给定一个介于 [0 3000] 的数字，生成其罗马数字的字符串。

## 思路

罗马数字的生成逻辑如下:

- 若此数字不以 4 或者 9 开头，那么可以用该数字中可以减去的最大值对应符号，将其符号加到结果上，最后减去这个数值
- 若此数字以 4 或者 9 开头,将使用此数字减去其后的位置。
  - 例如：4(`IV`) = 1(`I`) less than 5(`V`)

由于题目将数字限制在了 3000 以下，我们可以将可能的结果列举出来。

``` java
int[] values = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
String[] sym = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};
```
  

这里的两个数组的每个元素都是一一对应的。

由于需要特殊判定的条件只有 4 和 9 开头的数字，我们将这两个数字单独列出来，然后将目标数字和 `value` 进行比较。
如果目标数字大于目前的 `value` 进行相减操作，并将其对应的 `sym` 输出至结果。


## 样例

> Input number = 3749

| 条件判断 | 减去对应数值 | 累积罗马数字 |
| --- | --- | --- |
| 3749 >= 1000 | 3749 - 1000 = 2749 | M |
| 2749 >= 1000 | 2749 - 1000 = 1749 | MM |
| 1749 >= 1000 | 1749 - 1000 = 749 | MMM |
| 749 >= 500 | 749 - 500 = 249 | MMMD |
| 249 >= 100 | 249 - 100 = 149 | MMMDC |
| 149 >= 100 | 149 - 100 = 49 | MMMDCC |
| 49 >= 40 | 49 - 40 = 9 | MMMDCCXL |
| 9 >= 9 | 9 - 9 = 0 | MMMDCCXLIX |
;
最后的结果为 `MMMDCCXLIX`


## 源码

```java

class Solution {
    public String intToRoman(int num) {
        int[] values = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
    String[] sym = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};

    StringBuilder result = new StringBuilder();

    for (int i = 0; i < values.length; i++) {
      while (num >= values[i]) {
        result.append(sym[i]);
        num -= values[i];
      }
    }

    return result.toString();
  }
}
```

## 反思

其实最开始做这道题目的时候，我把这道题想复杂了。

特判的条件其实只有两种，一次次的减就好。

`StringBuilder` 和 正常的 `String` 不一样，它可以让我在同一个对象上追加，插入，删除字符。
最后通过 `toString()` 转换成正常的 `String`

```java
StringBuilder sb = new StringBuilder("Java");
sb.append("!");        // Java!
sb.insert(0, "Hi ");   // Hi Java!
sb.delete(0, 3);       // Java!
sb.setCharAt(0, 'j');  // java!
sb.reverse();         // !avaj
```


