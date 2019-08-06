
/**
 * 随机产生100个从0到1000之间不重复的整数
 */


/*let arr = []

while (arr.length < 100) {
    let i = 0
    let a = parseInt(Math.random() * 1000)
    i++
    if (arr[i] !== a) {
        arr.push(a)
    }
}
console.log(arr)*/
/**
 * 为数组编写indexOf()方法*/
 Array.prototype.indexof = function(b) {
     //参数校验
     if (Object.prototype.toString.call(this) !== '[object Array]'){
         console.log(Object.prototype.toString.call(b))
         return new Error('array expected');
     }
        return  this.join('').indexOf(b.join(''))
 }
let arr2=[0,1,2,3,4]
let b=[12]
console.log(arr2.indexof(b))