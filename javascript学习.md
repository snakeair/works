# javascript学习

`理论部分不进行在此学习，直接学习应用部分，部分已经熟识的也不在进行记录`

## 条件语句

### if语句

```javascript
if(a > 10){
	console.log(a);
}else if( a <= 9){
	console.log('a<10');
}
```

上面的就是if语句，如果`if..else..`的只有两种方式的话可以这么使用

```javascript
a >10 ? console.log(a):console.log('a < 10');
```

上面的三元运算符，表示先判断**?**前面的语句如果正确了知行**:**前面的，如果错误了知行后面的。

### switch语句

```javascript
switch (x) {
  case 1:
    console.log('x 于1');
    break;
  case 2:
    console.log('x 等于2');
    break;
  default:
    console.log('x 等于其他值');
}
```

上面的就是switch语句，在有多个`if..else..`语句的时候可以使用，每一个条件结尾都有一个**break**这个是为了结束switch语句，如果我们需要判断所有符合的条件的话就不需要添加，注意，switch语句结尾必须有**default**作为结尾，

