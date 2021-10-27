// // JavaScript基础知识总结


// // 2.变量let var const
// var a=1;
// function foo(){
//     a=10;
//     return;
//     function a(){

//     }
// }
// foo();
// console.log('a',a);//1

// // 2.1 let之作用在当前的作用域{}中的 没有变量提升
// function person(status) {
//     if (status) {
//         let value = "a"
//     }else {
//         console.log ('value:',value)
//     }
//     console.log('value',value)
// }
// // undefined

// // 2.2 var
// // 在全局作用域声明的变量会有一种行为挂载在window对象上，会创建一个新的全局变量作为全局对象的属性
// // 变量提升,把变量myName提升到开头
// // 在全局作用域中，只有使用var关键字声明的变量才会变量提升，变量提升的时候浏览器只知道有这个变量，且undefined（未初始化值）
// console.log(myName);
// var myName = "wy"//wy
// // 函数提升，同变量提升，只有声明，没有给其赋值
// // showName ();
// // console.log(showName);
// // var showName =function(){
// //     console.log ('函数被执行');
// // }
// // 作用域提升
// console.log('a:',a);
// var a = 1;
// test();
// function test () {
//     console.log ('test is running')
// }
// b=2;
// //a:1
// // test is running
// // 2

// // 2.3 const
// // 不能修改指针，但是可以修改值
// //etc 定义一个对象，可以修改对象里的属性值，但是不可以重写整个对象
// const abc = 1;
// // a=3;
// console.log ('a:',abc);
// // Uncaught SyntaxError: Identifier 'a' has already been declared
// const ppp = {
//     name : 'wy',
//     age :21
// }
// ppp.name = 'g'
// ppp.age = 18
// console.log('ppp:',ppp)
// // {name: "g", age: 18}


// // 3.数据类型7+1种+typeof运算符查看数据类型
// typeof 1;
// //"number"
// typeof ''
// // "string"
// typeof true
// // "boolean"
// typeof undefined
// // "undefined"

// typeof null
// // "object"
// typeof []
// // "object"
// typeof new Date;
// // "object"

// 'rieiieiewi'.length//10
// Number(undefined)//NaN

// //4.类型转换
// // 转换为string类型
// // 转换为number类型
// // 转换为boolean类型 

// // number=>String
// // 显示转换
// let aaa=10;
// var ccc=String (aaa);
// console.log('ccc:',ccc)//ccc: 10
// // 隐式转换
// let q =10
// let qp =q+''
// console.log('qp:',qp)//qp:10

// Number(undefined)
// // NaN
// Number(0)
// // 0
// Number(true)
// // 1
// Number(null)
// // 0
// Number(String)
// // NaN
// Number('  ')
// // 0
// Boolean(true)
// // true
// Boolean(0)
// // false
// // 对 "0" 和只有空格的字符串（比如：" "）进行布尔型转换时，输出结果为 true。
// Boolean('0')
// // true
// Boolean(" ")
// // true
// Boolean(undefined)
// // false
// Boolean(null)
// // false
// Boolean ("任意除了NaN，undefined，null，0，‘’以外都输出true")
// // true
// Boolean(NaN)
// // false

// // String=>number
// var awake ='123'
// // 法1
// parseInt(awake)
// // 法2
// awake-0
// // 法3
// Number(awake)

// // x=>Boolean
// var asleep=123
// // 法1
// Boolean(asleep)//true
// // 法2
// !!asleep//true

// // x=>String
// let go=123
// // 法1
// String(go);//"123"
// // 法2
// // quick.toString()//"123"

// // 5. 值的比较
// console.log('abcd?ahcd',"abcd"<"ahcd");//true
// console.log(null>=0);//true
// console.log(undefined>0)//false
// console.log(undefined<0)//false
// console.log(undefined>=0)//false
// //与运算&&  的优先级比 或运算|| 要高

// // 6. 空值合并运算符 '??'
// // 用来获取列表中第一个“已定义”的变量（译注：即值不是 null 或 undefined 的变量）
// //  优先级低，?? 在大多数其他运算之后，但在 = 和 ? 之前进行运算
// // 如果没有明确添加括号，不能将其与 || 或 && 一起使用。
// let height =100;
// alert(height||0);//100    ||返回第一个真值
// alert(height??0);//100    ？？返回第一个已经定义的值

// // 7. 循环：while 和 for
// // while
// let i=0;
// while(i<3) {
//     console.log('i:',i);
//     i++;
// }

// let fast=3;
// while (fast) {// 当 i 变成 0 时，条件为 false，循环终止
//     console.log('fast:',fast);
//     fast--;
// }

// //不管条件是否为真，循环体至少执行一次
// let mm=0;
// do {
//     console.log('mm:',mm);
//     mm++;
// }while(mm<3);

// for (let jjj = 0; jjj < 3 ; jjj++ ){
//     console.log('jjj:',jjj)
// }
// //内联变量声明：jjj是在循环中声明的。这样的变量只在循环中可见

// let her =0;
// for( her=0;her<3;her++){//由于前面已经声明了her并赋值，省略写法for(;her<3;her++)
//     console.log('her:',her);
// }//0 1 2
// console.log('her:',her);//3 是在循环之外声明的

// // continue：停止当前这次迭代，并强制启动新一轮循环
// for (let he=0;he<10;he++){
//     if(he%2==0)
//     console.log('he:',he);
// }//0 2 4 6 8

// //continue指令有利于减少嵌套
// for (let he=0;he<10;he++){
//     if(he%2==0)continue;
//     console.log('he:',he);
// }//1 3 5 7 9

////比上一例多一层嵌套
// for (let he= 0; he < 10; he++) {
//     console.log('he bool',he % 2);
//     if (he % 2) {
//         console.log('he:',he);
//     }
//   }// 1 3 5 7 9



//   let hola=3;
//   while(hola){//相当于while(hola!=0)
//       console.log('hola:',hola--);
//   }//3 2 1

// let bef=0;
// while(++bef<5)
// console.log('bef:',bef)
////1 2 3 4

// let bef=0;
// while(bef++<5)
// console.log('bef:',bef)
// //1 2 3 4 5
  
// for(let buena =0;buena<5;buena++)
// console.log('buena:',buena)
////0 1 2 3 4

// for(let buena =0;buena<5;++buena)
// console.log('buena:',buena)
// //0 1 2 3 4

// // 8. 函数
// // 9. 函数表达式

////普通函数
// function add(a,b){
//     return a+b;
// }

//// 匿名函数
//  立即执行函数
// (function(){
//     console.log(1)
// })()//1

//// 10.ES6箭头函数，基础知识

////11. 对象
////12. 对象引用和复制
////一个变量存储的不是“对象的值”，而是一个对值的“引用”（内存地址）
////深拷贝
////浅拷贝

////赋值与浅拷贝的区别
////赋值：赋的是该对象在栈中的地址，而不是队中的数据。也就是一个对象的改变会改变另外一个对象
// obj1 是源对象，obj2 是赋值得到的，obj3 是浅复制得到的，如果我们改变的第一层数据不管是原始类型还是引用类型，那么 obj2 的改变都会导致 obj1 的改变。
//var obj1 = {
//     name:'frontend',
//     content:['first','second']
// }
// var obj2 = obj1;
// obj2.name = 'backend'
// obj2.content[0]='first2'
// console.log('obj1:',obj1)
// console.log('obj2:',obj2)

// // obj1:{name: "backend", content: Array(2)}
// // content: (2) ["first2", "second"]
// // name: "backend"
// // obj2: {name: "backend", content: Array(2)}
// // content: (2) ["first2", "second"]
// // name: "backend"


////浅拷贝：会创建一个对象，再去遍历原始对象，如果原对象的属性值是基础类型，那么就拷贝基础类型，如果是引用类型，拷贝的是指针
////Object.assign
//// obj3 如果第一层数据改变的是原始类型，那么不会影响源数据，改变的是引用类型数据，则会影响 obj1 的改变。
//var obj1 = {
//     name:'frontend',
//     content:['first','second']
// }
// var obj3 = Object.assign({},obj1)
// obj3.name = 'Juan'
// obj3.content[0] = 'uno'
// console.log('obj1:',obj1)
// console.log('obj3:',obj3)

// // obj1:{name: "frontend", content: Array(2)}
// // content: (2) ["uno", "second"]
// // name: "frontend"
// // prepare.js:289 obj3: 
// // obj3:{name: "Juan", content: Array(2)}
// // content: (2) ["uno", "second"]
// // name: "Juan"

////13. 对象方法，"this"

////14. 可选链 "?."

////15. Symbol 类型


////16. 数字类型

////17. 字符串
// //charAt(x)
// var myString = 'Hola!Buenos dias!';
// console.log(myString.charAt(7));

// //charCodeAt(x)返回字符串中x位置处字符的unicode值。
// var message = "Hola!Buenos dias!"
// alert(message.charCodeAt(0))

////concat()方法用于连接两个或多个字符串，此方法不改变现有的字符串，返回拼接后的新的字符串。
// var message ='i'
// var final =message.concat(' am',' green.')
// alert(final)

////slice(start,end)
// var text='excellent'
// alert(text.slice(0,4))
// alert(text.slice(0,7))

////toLowerCase()
// var myString='JAVA';
// myString =myString.toLocaleLowerCase();
// console.log(myString)

////indexOf(substr, [start])
////如果没有找到，则返回-1
// var myString='JAVA';
// if(myString.indexOf('Ah')!=-1)
// alert('java is in here')

////trim()
// var myString='     JAVA      ';
// alert(myString.trim());

// //repeat(n)
// var myString='JAVA ';
// alert(myString.repeat(5));

//// 18. 数组
// // 创建一个数组
// var a = [1,2,3,4,5,6];
// alert(a);
// var a = Array();
// var a = Array()6;
// var a =Array(1,2,3,4,5,6);

//// 19. 数组方法

//// 20. Iterable object（可迭代对象）
//// 21. Map and Set（映射和集合）
//// 22. WeakMap and WeakSet（弱映射和弱集合）
//// 23. 解构赋值

//24. 日期和时间
// 获取当前日期时间
// var now = new Date();
// console.log(now.toLocaleString());

// //根据特定日期和时间创建Date对象
// // 法1 parse(patternStr)函数
// var now = new Date(Date.parse("2020-1-1 12:12:12"));
// var cur = new Date("2021-1-1")
// console.log('now:',now)
// console.log('cur:',cur)
// // 法2 给UTC函数传参获取毫秒值 依次传参:UTC(year,month,day,hour,minute,second,msecond)
// var now = new Date(Date.UTC(2018,0));
// var cur = new Date(Date.UTC(2018,2,27,12,12,21));
// console.log('now:',now)
// console.log('cur:',cur)
// //也可以省略UTC
// var now = new Date(2018,0);
// var cur = new Date(2018,2,27,12,12,21);
// console.log('now:',now)
// console.log('cur:',cur)

// //now()函数当前毫秒值:Date.now()
// //toString:返回带日期和时区的字符串
// var cur  = new Date(2018,2,25);
// console.log(cur)
// //toLocalString:按与浏览器相适应的时区的日期格式返回
// var cur=new Date(2018,2,25,14,6,38);
// console.log(cur.toLocaleString());
// //valueOf: 返回毫秒值，所以两个时间可以直接比较，因为它们在比较前调用了valueOf方法
// var cur = new Date(2018,2,25,2,2,2,2);
// var now = new Date("2021-7-7 12:23:45");
// console.log('cur毫秒值',cur.valueOf());//cur毫秒值 1521914522002
// console.log('cur>now',(cur>now));//cur>now false
// var cur = new Date("2021-1-1").getFullYear()

//// 25. JSON 方法，toJSON

//// 26. 递归和堆栈
////堆栈
////数据是存放在栈当中的，先编译先入栈，后编译后入栈，执行完要进行销毁操作


// 数组排序
// 冒泡法
// var arr = [4, 3, 1, 2, 5, 6, 8, 9, 7, 10]
// function bubble(arr){
//     var len=arr.length;
//     for(var i=0;i<len;i++){
//         for(var j=0;j<len-1-i;j++){
//             if(arr[j]>arr[j+1]){
//                 var temp=arr[j+1];
//                 arr[j+1]=arr[j];
//                 arr[j]=temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubble(arr))


//原型链 继承  通过继承判断原型链的属性

//引用类型的四个规则
// const obj = {}
// const arr = []
// const fn = function(){}

//规则1.引用类型都具有对象特性，即可自由扩展属性
/* obj.a = 1;
arr.a = 3;
fn.a = 12;
console.log(obj.a);
console.log(arr.a);
console.log(fn.a);  */ 

//规则2.引用类型都有一个隐式原型__proto__属性，属性值是一个普通的对象
/* console.log('obj.__proto__',obj.__proto__);
console.log('arr.__proto__',obj.__proto__);
console.log('fn.__proto__',obj.__proto__);
 */
// hasOwnProperty()返回一个布尔值，指示对象自身属性中是否具有指定的属性
/* const obj1 = {};
obj1.property1 = 42;
console.log(obj1.hasOwnProperty('property1'));//true
console.log(obj1.hasOwnProperty('toString'));//false
 */
//isPrototypeOf()方法允许检查一个对象是否存在于另一个对象的原型链上
// function Foo(){}
// function Bar(){}
// function Baz(){}

// Bar.prototype = Object.create(Foo.prototype);
// Baz.prototype = Object.create(Bar.prototype);

// var baz = new Baz();

// console.log(Baz.prototype.isPrototypeOf(baz));//true
// console.log(Bar.prototype.isPrototypeOf(baz));//true
// console.log(Foo.prototype.isPrototypeOf(baz));//true
// console.log(Object.prototype.isPrototypeOf(baz));//true

//检查baz对象是否继承自Foo.prototype
/* if(Foo.prototype.isPrototypeOf(baz)){

} */

//规则3.引用类型，隐式原型__proto__的属性值指向他的构造函数的显示原型prototype属性值
/* console.log(obj.__proto__==Object.prototype);
console.log(arr.__proto__==Array.prototype);
console.log(fn.__proto__==Function.prototype); */

//规则4.当你试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么他会去他的隐式原型__proto__（也就是他的构造函数的显式模型prototype）中寻找
/* const obj2 = { a:1 }//obj2对象并没有toString属性，之所以能获取到toString属性，是从他的构造函数Object的prototype里去获取
console.log(obj2.toString);//ƒ toString() { [native code] }
 */
/* function Person(name){
    this.name = name;
    return this;// 其实这行可以不写，默认返回 this 对象

}
    var nick = new Person("nick");
    console.log( nick.toString);//ƒ toString() { [native code] }
//nick是Person构造函数生成的实例，而Person的prototype并没有toString方法。
//nick实例从自身出发检讨自己，发现并没有toString方法；找不到就往上走，找Person构造函数的prototype属性，还是没找到
//就找到Object。prototype下的toString方法 */

//ES5:this永远指向最后调用他的那个对象


//31. 装饰器模式和转发，call/apply
/* apply() 方法调用一个函数, 其具有一个指定的this值，以及作为一个数组（或类似数组的对象）提供的参数
call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。


注意：
call()方法的作用和 apply() 方法类似，
区别就是call()方法接受的是参数列表，
而apply()方法接受的是一个参数数组。
 */

/* //JavaScript Demo: function.apply(thisArg,[argsArray])
const numbers = [5,6,2,3,7];
const max = Math.max.apply(null,numbers);
console.log(max);//7
const min = Math.min.apply(null,numbers);
console.log(min);//2 */
//用apply将数组各项添加到另一个数组
/* var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push.apply(array,elements);
console.info(array);//(5) ["a", "b", 0, 1, 2]
 */

/* //call() 允许为不同的对象分配和调用属于一个对象的函数/方法。
//call() 提供新的 this 值给当前调用的函数/方法。
//你可以使用 call 来实现继承：写一个方法，然后让另外一个新的对象来继承它（而不是在新对象中再写一次这个方法）。
//JavaScript Demo: function.call(thisArg,arg1,arg2...)
function Product(name,price){
    this.name=name;
    this.price=price;
}
function Food(name,price){
    Product.call(this,name,price);
    this.category = 'food';
}
console.log(new Food('cheese',5));
///Food {name: "cheese", price: 5, category: "food"}

 */
 

/* //this的指向
var name = 'windowsName'
function a(){
    var name = "cherry"
    console.log('this.name:'+this.name);//windowsName
    console.log('inner:'+this);//Window
}
a();//这是最后调用 a 的地方；前面没有调用的对象，那么就相当于是全剧对象window，这句话相当于是window.a()
console.log('outer:'+this);//Window
 */

/* var name = "windowsName";
var a={
    name:"cherry",
    fn :function(){
        console.log(this.name);
    }
}
a.fn();//cherry
//函数 fn 是对象 a 调用的，所以打印的值就是 a 中的 name 的值
 */
/* var name = "windowsName";
var a = {
    name : null,
    // name: "Cherry",
    fn : function () {
        console.log(this.name);      // windowsName
    }
}
var f = a.fn;//a对象的fn方法赋值给变量f了，但是没有调用。所以fn仍然是被window调用的，this指向也就是window
f(); */

//32. 函数绑定bind???
/* bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
通常我们应用 bind 来绑定对象方法的 this，这样我们就可以把它们传递到其他地方使用。例如，传递给 setTimeout。
function.bind(thisArg[, arg1[, arg2[, ...]]])

 */
/* const module = {
    x:42,
    getX:function(){
        return this.x;
    }
};
const unboundGetX = module.getX;
console.log(unboundGetX());//undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());//42 */

//33. 深入理解箭头函数
/* 箭头函数的this始终指向函数定义时的this，而非执行时。
箭头函数表达式的语法比函数表达式更简洁，并且没有自己的this，arguments，super或new.target。
箭头函数表达式更适用于那些本来需要匿名函数的地方，并且它不能用作构造函数。
箭头函数中没有this绑定，必须通过查找作用域链来决定它的值，如果箭头函数被非箭头函数包含，则this绑定的是最近一层非箭头函数的this，否则this为undefined */
/* const materials = [
    'Hydrogen',
    'Helium',
    'Lithium'
];
console.log(materials.map(material => material.length));//(3) [8, 6, 7]
 */

//34. 原型继承
/* 原型：通过[[Prototype]]引用的对象 
for..in 循环在其自身和继承的属性上进行迭代。所有其他的键/值获取方法仅对对象本身起作用。
*/

//35. F.prototype???
/* 区别于[[Prototype]],在new F被调用时为新对象的[[Prototype]]赋值
F.prototype的值要么是一个对象，要么是null，其他值不起作用
prototype属性仅在设置了一个构造函数（constructor function），并通过new调用时，才具有这种特殊影响 
默认情况下，所有的函数都有F.prototype={constructor: F}我们可以通过访问他的constructor属性来获取一个对象的构造器*/

/* let animal = {
    eats :true
};
function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype = animal ;
//设置 Rabbit.prototype = animal 的字面意思是：“当创建了一个 new Rabbit 时，把它的 [[Prototype]] 赋值为 animal”
let rabbit = new Rabbit("white rabbit");
alert(rabbit.eats); */

//36. 原生的原型
/* 原型prototype  原型链__proto__
Object成为所有对象的原型 */ 

/* 
构造函数：function Birl() {} 、function Person() {} 这类以首字母大写形式来定义的，用来定义某个类型物种的
普通函数：function fly() {}、function eat() {} 这类以首字母小写形式来定义的，用来定义某个动作的
*/

//37. 原型方法，没有 __proto__ 的对象
//38. Class 基本语法
//39. 类继承
/* 
子类可以继承父类的属性和方法：extends
但当子类需要有自己的属性值时：使用super关键字
 */


//super关键字调用父类普通函数，就近原则，当子类有这个方法执行子类的这个方法，没有方法就再向父类查找
/* class Father {
    say() {
      return "我是爸爸";
    }
  }
  
  class Son extends Father {
    say() {
      console.log("我是儿子");
    }
  }
  
  var son = new Son();
  son.say(); // 输出‘我是儿子’，就近原则
   */

/* //当子类需要继承父类的函数又需要自己创建函数时？？？
class Father {
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    money(){
        console.log('money:',this.x + this.y);
    }
}
class Son extends Father {
    constructor(x,y){
        super(x,y);
        this.x=x;
        this.y=y;
    }
    subtract(){
        console.log('subtract:',this.x - this.y);
    }
}
var xx = new Son(1,2);
xx.money;//error

xx.subtract(5,3);//-1 */


//40. 静态属性和静态方法
/* 
静态属性被用于当我们想要存储类级别的数据时，而不是绑定到实例。
静态属性和方法是可被继承的。
*/

//41. 私有的和受保护的属性和方法
/* 
受保护的字段以 _ 开头。这是一个众所周知的约定，不是在语言级别强制执行的。程序员应该只通过它的类和从它继承的类中访问以 _ 开头的字段。
私有字段以 # 开头。JavaScript 确保我们只能从类的内部访问它们。

 */
 
//42. 类检查："instanceof"
// instanceof操作符 使用场景：使用类的层次结构，并想要对该类进行检查，同时还要考虑继承时
// 类型检查的方法
// 1.typeof，缺点：没有办法判断对象的object
console.log(typeof 123)//number
// 2.instanceof
/* console.log(1 instanceof String);//false
console.log([] instanceof Array);//true
console.log([] instanceof Object);//true
console.log({} instanceof Object);//true
function User(){};
let user = new User();
console.log(user instanceof User); //true */
//3.Object.prototype.toString
// console.log(Object.prototype.toString.call('shy'));//[object String]

//43. Mixin 模式
//是一个通用的面向对象编程术语：一个包含其他类的方法的类
// JS不支持多重继承，但是可以通过将方法拷贝到原型中来实现maxin

//44. 错误处理，"try..catch"
/* 错误对象的三个属性：
message
name
stack：函数执行的堆栈跟踪

错误对象只有在抛出时才会变成异常*/
//45. 自定义 Error，扩展 Error

//46. Promise 链
//相对简单抛出异常，我们可以使用 Promise.reject 和Promise.resolve

/* function toUppercase(string){
    if(typeof string != "string"){
        return Promise.reject(TypeError("wrong type given,expected a string"));
    }
    const result = string.toUpperCase();
    return Promise.resolve(result);
}
toUppercase(99)
    .then(result => result)
    .catch(error =>console.error(error.message))
    .finally(() =>console.log("run  run run"));
 */

//this
/* var name = "小红";
function a(){
    var name = "小白";
    console.log(this.name);
}
function d(i){
    return i();
}
var b = {
    name : "小黄",
    detail1 : function (){
        console.log(this.name);
    },
    detail2 : function(){
        return function(){
            console.log(this.name);
        }
    }
}
var c =  */

