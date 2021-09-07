// 二. let 和 const 命令

// 1.let命令

//例1:for循环内var和const
//变量i是var命令声明的，在全局范围内都有效，所以全局只有一个变量i。
//使用var 所有数组a的成员里面的i，指向的都是同一个i，导致运行时输出的是最后一轮的i的值，也就是 10
/* var a = [];
for(var i = 0 ; i< 10 ;i++){
    a[i] = function(){
        console.log(i);
    }
}
a[6]();//10

//如果使用let，声明的变量仅在块级作用域内有效
var a = [];
for(let i = 0 ; i< 10 ;i++){
    a[i] = function(){
        console.log(i);
    }
}
a[6]();//6 */

//例2：for循环的作用域
//for循环 设置循环变量的那部分是一个父作用域
/* for(let i = 0 ; i< 3 ;i++){//循环体内部是一个单独的子作用域
    let i = 'abc';
    console.log(i);
}//因为同一个作用域不可使用 let 重复声明同一个变量
 */
//例3:暂时性死区
/* 暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，
但是不可获取，只有等到 声明变量 的那一行代码出现，才可以获取和使用该变量。 */

//例4:不允许重复声明
/* 不能在函数内部重新声明参数 */

//2. 块级作用域
//例4 全局变量的泄漏
/* var s = "hello";
for (var i = 0; i < s.length; i++){
    console.log(s[i]);
}
console.log(i);//5,输出s.length的值。上面代码中，变量i只用来控制循环，但是循环结束后，它并没有消失，泄露成了全局变量。
 */

/* //匿名立即执行函数表达式
(function(){
    var temp = '123';
}());
//=>块级作用域
{
    let temp = '123';
} */

//例5:块级作用域与函数声明:块级作用域内声明的函数类似于let
/* 原来，如果改变了块级作用域内声明的函数的处理规则，显然会对老代码产生很大影响。
为了减轻因此产生的不兼容问题，ES6 在附录 B里面规定，浏览器的实现可以不遵守上面的规定，有自己的行为方式。
允许在块级作用域内声明函数。
函数声明类似于var，即会提升到全局作用域或函数作用域的头部。
同时，函数声明还会提升到所在的块级作用域的头部。
注意，上面三条规则只对 ES6 的浏览器实现有效，其他环境的实现不用遵守，还是将块级作用域的函数声明当作let处理。 

避免在块级作用域内声明函数，块级作用域内部，优先使用函数表达式
*/
/* //块级作用域内部的函数声明语句，建议不要使用
{
    let a = 'secret';
    function f(){
        return a;
    }
}
// 块级作用域内部，优先使用函数表达式
{
    let a = 'secret';
    let f = function (){
        return a;
    }
} */

//ES6 的块级作用域必须有大括号，如果没有大括号，JavaScript 引擎就认为不存在块级作用域。

// 3.const 命令
/* const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。
const的作用域与let命令相同：只在声明所在的块级作用域内有效。
const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。
const声明的常量，也与let一样不可重复声明。

const实际上保证的是变量指向的那个内存地址所保存的数据不得改动。
对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。
但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。
因此，将一个对象声明为常量必须非常小心。

 */
/* const a = [];//a储存的是一个地址，这个地址指向一个对象。不可变的只是这个地址，即不能把foo指向另一个地址，但对象本身是可变的，所以依然可以为其添加新属性
a.length = 0;//可以
a.push('Hello');//可以
a = ['Dave'];//error，常量a是一个数组，这个数组本身是可写的，但是如果将另一个数组赋值给a，就会报错。 */

//例6：将对象彻底冻结的函数  对象冻结使用Object.freeze()方法
/* var constantize = (obj) => {
    Object.freeze(obj);
    Object.keys(obj).forEach((key, i) => {
        if (typeof obj[key] === 'object') {
            constantize(obj[key]);
        }
    });
}; */

//4. 顶层对象的属性
/* 一方面规定，为了保持兼容性，var命令和function命令声明的全局变量，依旧是顶层对象的属性；
另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。
也就是说，从 ES6 开始，全局变量将逐步与顶层对象的属性脱钩 */

//globalThis 对象

// 三.变量的解构赋值

// 1.数组的解构赋值
//例1 解构成功
/* let [head , ...tail ]= [1,2,3,4]
console.log(head);//1
console.log(tail);//[2,3,4]

let [a,b,d]=[1,[2,3],4];
console.log(a);//1
console.log(b);//[2,3]
console.log(d);//4 */
//例2 Set 结构，也可以使用数组的解构赋值
/* let [x,y,z] = new Set(['a','b','c']);
console.log(x);//'a' */
//例3 解构不成功
/* let [foo1] =[];
console.log('foo1',foo1);//undefined
let [bar ,foo2]= [1];
console.log('foo2',foo2);//undefined */
//例4 不完全解构
/* let [a,[b],d]=[1,[2,3],4];
console.log(a);//1
console.log(b);//2
console.log(d);//4 */

//默认值
//例5 解构赋值允许指定默认值
/* let [foo =true] =[];
console.log(foo);//true */

//例6 ES6 内部使用严格相等运算符（===），判断一个位置是否有值 一个数组成员严格等于undefined可以 null默认值就不生效
/* let [x, y = 'b'] = ['a']; // x='a', y='b'
let [x, y = 'b'] = ['a', undefined]; // x='a', y='b' */

//例7 默认值可以引用解构赋值的其他变量，但该变量必须已经声明。
/* let [x=yield,y=1] = [];//// ReferenceError: y is not defined
let [x=1,y=x]=[1,2];//x=1,y=2 */

// 2.对象的解构赋值
/* 例8 对象的解构与数组有一个重要的不同。
数组的元素是按次序排列的，变量的取值由它的位置决定；
而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。 */
/* let {baz,bar,foo} = {foo:'foo',baz:'baz'}
console.log(baz);//baz */
//例9 将现有对象的方法，赋值到某个变量
/* let { sin,cos,tan} = Math;
console.log(sin);//ƒ sin() { [native code] } */
//例10 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者
/* let {foo:baz}={foo:'aaa',head:'bbb'}
console.log(baz);//aaa,foo是匹配的模式，baz才是变量。真正被赋值的是变量baz，而不是模式foo */
/* const node = {
    loc :{
        start:{
            line:1,
            column:5
        }
    }
};
let {loc,loc:{start},loc:{start:{line}}} = node;
console.log(line);//1
console.log(loc);//{start: {…}}
console.log(start);//{line: 1, column: 5}  这里只有line是变量，loc和start都是模式，不是变量 */

//例11 如果解构模式是嵌套的对象，而且子对象所在的父属性不存在，那么将会报错。
/* let {foo: {bar}} = {baz: 'baz'};//error foo这是等于undefined，再取自属性会报错 */
//例12 对象的默认值同数组的默认值
/* JavaScript 引擎会将{x}理解成一个代码块，从而发生语法错误。
只有不将大括号写在行首，避免 JavaScript 将其解释为代码块，才能解决这个问题 */
/* let x;
({x} = {x:1});
console.log(x);//1  不写最外面的括号就会报错 */

//例13 对数组进行对象属性的解构
/* let arr = [1,2,3];
let {0:first,[arr.length - 1]:last} = arr;
console.log(first);//1
console.log(last);//3 */

// 3.字符串的解构赋值 
//例14
/* const [a,b,c,d,e] = 'hello';
console.log(a);//h

let {length:len} = 'hello';
console.log(len);//5 */

//4 数值和布尔值的解构赋值 
/* 
只要等号右边的值不是对象或数组，就先将其转为对象。
由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错 */
//例15 解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
/* let {toString:s} = 123;
s === Number.prototype.toString;//true */

//函数参数的解构赋值 
/* [[1,2],[3,4]].map(([a,b]) => a+b);//[3,7] */

//例16 两种写法
//写法一：函数move为变量x和y指定默认值
/* function move({x=0,y=0} = {}) {
    return [x,y];
} */
//写法二：函数move的参数指定默认值，而不是为变量x和y指定默认值
/* function move({x,y} = {x:0,y:0}) {
    return [x,y];
} */
//会出现不一样的结果
/* move({x: 3, y: 8}); // [3, 8] [3, 8]
move({x: 3}); // [3, 0]   [3,undefined]
move({}); // [0, 0]   [undefined,undefined]
move(); // [0, 0]   [0, 0]
 */
//什么时候不能使用圆括号？？？好多好乱啊救命
/* 可以使用圆括号的唯一情况：赋值语句的非模式部分 */

// 例17 交换变量的值
/* let x=1;
let y= 2;
[x,y]=[y,x]; */
//例18 从函数返回多个值
//返回一个数组
/* function example(){
    return[1,2,3];
}
let [a,b,c] =example(); */
//返回一个对象
/* function example() {
    return {
      foo: 1,
      bar: 2
    };
  }
  let { foo, bar } = example(); */

//例19 提取 JSON 数据
/* let jsonData = {
    id:42,
    status:'ok',
    data:[867,5309]
};
let {id,status,data:number} = jsonData;
console.log(id,status,number); */

//例20 获取键名和键值
/* //获取键名
for (let [key] of map){
    //
}
//获取键值
for (let [,value] of map){
    //
} */

// 四.字符串的扩展
//1. 字符的 Unicode 表示法
/* '\z' === 'z'  // true
'\172' === 'z' // true
'\x7A' === 'z' // true
'\u007A' === 'z' // true
'\u{7A}' === 'z' // true */

//2.字符串的遍历器接口 
//例1
/* for (let codePoint of 'foo'){//for...of循环遍历
    console.log(codePoint);
}//f o o  */
//遍历器最大的优点是可以识别大于0xFFFF的码点，传统的for循环无法识别这样的码点

//3.直接输入 U+2028 和 U+2029 
/* U+2028 :行分隔符
U+2029 ：段分隔符 */
/* const json = '"\u2028"';
JSON.parse(json);//可能报错 */

/* 模板字符串现在就允许直接输入这两个字符。另外，正则表达式依然不允许直接输入这两个字符。
这是没有问题的，因为 JSON 本来就不允许直接包含正则表达式 */
/* const Ps = eval ("'\u2029'")//根据这个提案，这个代码不会报错。 */

// 4. JSON.stringify() 的改造
/* JSON.stringify('\u{D834}') // "\"\\ud834\"" */

//5. 模板字符串
//例2 `${}`
/* let a = 'apple';
let b = 'fruit';
console.log(`${a} is ${b}`); */

//例3  如果在模板字符串中需要使用反引号，则前面要用反斜杠转义。
/* console.log(`\`hello\``);//`hello` */
//例 4 不想要这个换行，可以使用trim方法消除它
/* $('#list').html(`
    <ul>
        <li>first</li>
        <li>last</li>
    </ul>
`.trim()    
); */

//例4 大括号内部可以放入任意的 JavaScript 表达式，可以进行运算，以及引用对象属性。
/* let x=1;
let y=2;
`${x}+${y}=${x+y}`//1+2=3 */

/* let obj = {x:1,y:2};
console.log(`${obj.x+obj.y}`);//3 */

//例5  模板字符串之中还能调用函数。
/* function fn() {
    return "Hello World";
  }  
`foo ${fn()} bar`// foo Hello World bar */

//模板字符串甚至还能嵌套。

//如果需要引用模板字符串本身，在需要时执行，可以写成函数。
/* let func = (name) => `hello ${name}!`;
console.log(func('jack'));//hello jack! */

//6.实例：模板编译   还没看
//7. 标签模板 没看完
//例6 tag函数实际上是以以下的形式调用的 tag(['hello','world',''],15,50)
/* let a=5,b=10;
function tag(s,v1,v2){
    console.log(s[0]);
    console.log(s[1]);
    console.log(s[2]);
    console.log(v1);
    console.log(v2);
    return "ok";
}
tag `hello${a+b}world${a*b}`;//'hello' 'world' '' 15 30 */

//8. 模板字符串的限制
//模板字符串默认会将字符串转义，导致无法嵌入其他语言。
//对字符串转义的放松，只在标签模板解析字符串时生效，不是标签模板的场合，依然会报错

 //五.字符串的新增方法

 //1.String.fromCodePoint()
 //可以识别大于0xFFFF的字符，弥补了String.fromCharCode()方法的不足。在作用上，正好与下面的codePointAt()方法相反。
//如果String.fromCodePoint方法有多个参数，则它们会被合并成一个字符串返回。
/* String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y'//true */

// 2.String.raw()
/* 该方法返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，往往用于模板字符串的处理方法
如果原字符串的斜杠已经转义，那么String.raw()会进行再次转义。
String.raw()本质上是一个正常的函数，只是专用于模板字符串的标签函数。
 */

//例1 :如果写成正常函数的形式，它的第一个参数，应该是一个具有raw属性的对象，且raw属性的值应该是一个数组，对应模板字符串解析后的值。
// `foo${1 + 2}bar`
// 等同于
/* String.raw({raw:['foo','bar']},1+2) // "foo3bar" */

//3.实例方法：codePointAt()
/* charCodeAt()方法只能分别返回前两个字节和后两个字节的值。
 */

/* ’𠮷‘需要四个字节储存，对于4个字节的字符
’𠮷‘相当于两个字符 
返回的是码点的十进制值*/
/* let s = '𠮷a';
s.codePointAt(0);//134071
s.codePointAt(1);//57271
s.codePointAt(2);//97 */
//toString方法转换
/* s.codePointAt(0).toString(16);//"20bb7"
s.codePointAt(2).toString(16) // "61" */
/* 但是a在字符串s的正确位置序号应该是1，但是必须向codePointAt()方法传入2 
    使用for...of解决，因为它会正确识别 32 位的 UTF-16 字符。*/
/* for (let ch of s){
    console.log(ch.codePointAt(0).toString(16));
}//20bb7 61 */
/* 使用扩展运算符(...)展开运算解决 */
/* let arr=[...'𠮷'];
arr.forEach(
    ch => console.log(ch.codePointAt(0).toString(16))
);//20bb7 61 */

//codePointAt()方法是测试一个字符由两个字节还是由四个字节组成的最简单方法。
/* function is32Bit(c){
    return c.codePointAt(0) >0xFFFF;
}
is32Bit('𠮷') */

//4.实例方法：normalize() 还没看
//5.实例方法：includes(), startsWith(), endsWith()
/*  includes()：返回布尔值，表示是否找到了参数字符串。
    startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
    endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
这三个方法都支持第二个参数，表示开始搜索的位置。
 */
/* let s="hello world!";
s.startsWith('hello');//true
s.endsWith('!');//true
s.includes('o');//true
s.startsWith('world',6)//true */

//6.实例方法：repeat() 
/* repeat方法返回一个新字符串，表示将原字符串重复n次。
参数如果是小数，会被取整。
如果repeat的参数是负数或者Infinity，会报错。
但是，如果参数是 0 到-1 之间的小数，则等同于 0，这是因为会先进行取整运算。0 到-1 之间的小数，取整以后等于-0，repeat视同为 0。
参数NaN等同于 0。
如果repeat的参数是字符串，则会先转换成数字。
 */
// 'na'.repeat(3)//nanana
// 'na'.repeat(2.9) // "nana"

//7.实例方法：padStart()，padEnd() 
/* 上面代码中，padStart()和padEnd()一共接受两个参数，第一个参数是字符串补全生效的最大长度，第二个参数是用来补全的字符串。
如果原字符串的长度，等于或大于最大长度，则字符串补全不生效，返回原字符串。
如果用来补全的字符串与原字符串，两者的长度之和超过了最大长度，则会截去超出位数的补全字符串。
如果省略第二个参数，默认使用空格补全长度。 */
/* // padStart()的常见用途是为数值补全指定位数。下面代码生成 10 位的数值字符串。
'1'.padStart(10,'0');//"0000000001"
// 另一个用途是提示字符串格式。
'12'.padStart(10,'YYYY-MM-DD');//"YYYY-MM-12"
'09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12" */

//8.实例方法：trimStart()，trimEnd()
//trimStart()消除字符串头部的空格，trimEnd()消除尾部的空格。
/* const s = '  abc  ';
s.trim();//"abc"
s.trimStart();//"abc  "
s.trimEnd(); //"  abc" */

//9.实例方法：matchAll()
//返回一个正则表达式在当前字符串的所有匹配

//10.实例方法：replaceAll()
/* 它的用法与replace()相同，返回一个新字符串，不会改变原字符串。 */
/* 'aabbcc'.replaceAll('b','***')//"aa******cc" */

//replaceAll()的第二个参数replacement是一个字符串，表示替换的文本，其中可以使用一些特殊字符串。

//$&：匹配的字符串。所以返回结果与原字符串一致
// 'abbc'.replaceAll('b','$&')//abbc
// $` ：匹配结果前面的文本。
// 'abbc'.replaceAll('b','$`')//aaabbc,第一个b替代ab，第二个b替代ab
// $'：匹配结果后面的文本。
// 'abbc'.replaceAll('b',`$'`)//abccc,第一个b替代bc，第二个b替代c
// $n：匹配成功的第n组内容，n是从1开始的自然数。这个参数生效的前提是，第一个参数必须是正则表达式。
// 'abbc'.replaceAll(/(ab)(bc)/g,'$2$1')//bcab $1 表示正则表达式的第一个组匹配，指代`ab` ; $2 表示正则表达式的第二个组匹配，指代`bc`
// $$：指代美元符号$ 
// 'abc'.replaceAll('b', '$$')//a$c
//replaceAll()的第二个参数replacement除了为字符串，也可以是一个函数，该函数的返回值将替换掉第一个参数searchValue匹配的文本。
// 'abc'.replaceAll('b',()=>'_')//aa_cc

//八.正则的扩展

//1.RegExp 构造函数
/* var regex = new RegExp('xyz','i');
//等价于
var regex = new RegExp(xyz/i);
//等价于
var regex = /xyz/i;

//返回的正则表达式会忽略原有的正则表达式的修饰符，只使用新指定的修饰符。
new RegExp(/abc/ig,'i').flags//i   原有正则对象的修饰符是ig，它会被第二个参数i覆盖。
 */

/* RegExp.prototype.test()
test() 方法执行一个检索，用来查看正则表达式与指定的字符串是否匹配。返回 true 或 false。
 */


//2.字符串的正则方法  还没看

//3. u 修饰符:用来正确处理大于\uFFFF的 Unicode 字符。也就是说，会正确处理四个字节的 UTF-16 编码
// /^\uD83D/u.test('\uD83D\uDC2A')//fasle
// /^\uD83D/.test('\uD83D\uDC2A')//true
/* ES5 不支持四个字节的 UTF-16 编码，会将其识别为两个字符，导致第二行代码结果为true。
加了u修饰符以后，ES6 就会识别其为一个字符，所以第一行代码结果为false。 */

//点字符:除了换行符以外的任意单个字符
/* 对于码点大于0xFFFF的 Unicode 字符，点字符不能识别，必须加上u修饰符。 */
/* var s = '𠮷';
/^.$/.test(s) // false
/^.$/u.test(s) // true */

//Unicode 字符表示法
// /\u{61}/.test('a')//false
// /\u{61}/u.test('a')//true

//量词
// /a{2}/u.test('aa');//true
// /𠮷{2}/.test('𠮷𠮷') // false
// /𠮷{2}/u.test('𠮷𠮷') // true

//预定义模式 \S ，匹配所有非空白字符
// /^\S$/u.test('𠮷') // true

//i 修饰符，i 修饰符用于执行对大小写不敏感的匹配。    
/* 有些 Unicode 字符的编码不同，但是字型很相近，比如，\u004B与\u212A都是大写的K。 */
// /[a-h]/i.test('\u212A') // false
// /[a-z]/iu.test('\u212A') // true

//转义,在u模式会报错。
/* /\,/u //error 没有u修饰符时，逗号前面的反斜杠是无效的，加了u修饰符就报错。
/\,/ */













