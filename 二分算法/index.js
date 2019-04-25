function findIndex(arr, value) {
    var len = arr.length;
    var findValue = null;
    var startIndex = 0;
    var endIndex = len - 1;
    var findIndex = -1;
    var time = 0;
    while (findValue !== value) {
        findIndex = Math.floor((startIndex + endIndex) / 2);
        findValue = arr[findIndex];
        if (findValue > value) {
            endIndex = findIndex - 1;
        }
        else {
            startIndex = findIndex + 1;
        }
        time++;
    }
    console.log("\u672C\u6B21\u67E5\u8BE2\u5171\u8017\u8D39\u6B21\u6570\uFF1A" + time + "\u6B21");
    return findIndex;
}
var arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27];
var num = 7;
var index = findIndex(arr, num);
console.log("\u6570\u5B57 " + num + " \u5728\u6570\u7EC4 " + arr + " \u4E2D\u7684\u7D22\u5F15\u4E3A\uFF1A" + index);
