//类型判断
// let say:String = 'hello';
// let say2:Number = 2232123;


//interface接口
// interface Person{
//     name:String;
//     age:Number;
// }
// function getPerson(aaa:Person){
//     return `我叫${aaa.name},我${aaa.age}岁`
// }
// let obj = { name:'rmx',age:20};
// console.log(getPerson(obj));


//类的编写
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");