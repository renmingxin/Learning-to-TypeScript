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
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
