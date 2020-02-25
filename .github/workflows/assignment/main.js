var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
var School = /** @class */ (function (_super) {
    __extends(School, _super);
    function School(Name, Age, Class, Fav_Sub) {
        var _this = _super.call(this) || this;
        _this.Name;
        _this.Age;
        _this.Class;
        _this.Fav_Sub;
        return _this;
    } /*
    School: console.log(Name: any);
     console.log(Age: any);
     console.log(Class: any);
     console.log(Fav_Sub: any);
    console.log(SchoolName: any);*/
    return School;
}(Student));
//let student: Person=new Student('abcd');
//student.run("Jay");
// student.run(21);
