interface Person{
    Name: String;
    
     Age:number;
     //run(arg: any):void; //method
}

class Student implements Person {
   Name!: String;
    Age!: number;
   // Name: String | undefined;
    //Age: number | undefined;
       //Age: number;
       //Name: String | undefined;
       Class: String | undefined;
       Fav_Sub: String | undefined;
    /*
       constructor(Name: String,Age: number,Class: String, Fav_Sub:String ) {
           this.Name;
           this.Age;
           this.Class;
           this.Fav_Sub;
       }
       console.log(Name);
        console.log(Age);
        console.log(Class);
        console.log(Fav_Sub);   */
    }

    class School extends Student 
    {
        SchoolName: String | undefined;
        
       constructor(Name: String,Age: number,Class: String, Fav_Sub:String ) {
           super();
        this.Name;
        this.Age;
        this.Class;
        this.Fav_Sub;
    }
    School: console.log(Name: any);
     console.log(Age: any);
     console.log(Class: any);
     console.log(Fav_Sub: any);  
    console.log(SchoolName: any);
    }
   

   
   
   //let student: Person=new Student('abcd');
   //student.run("Jay");
  // student.run(21);