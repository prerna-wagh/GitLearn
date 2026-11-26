let person={
    name: "Prerna",
    city: "Pune",
   greet:function(){
    console.log("Hello Prerna");
   }
 };
 let student={};
 student.__proto__ = person;
 student.age=22;

 console.log(student.name);
console.log(student.city);
console.log(student.age);
 student.greet;


 let animal={
    type: "Animal",
    eat:function(){
        console.log("Animal is eating");
    }

 };
 let dog={
    breed: "Labrador",
    bark:function(){
        console.log("Dog is barking");
    }
 };
 dog.__proto__=animal;

 console.log(dog.type);
 console.log(dog.breed);
 dog.eat();
 dog.bark();

 let emp={
    name: "Prerna",
    city: "Pune",
    showDetails:function(){
        console.log("Prerna lives in Pune");
    }
 };
 let Company={
    company: "Thinkitive",
    role: "Software Engineer",
    showJob:function(){
        console.log("Works at Thinkitive");
    }
};


 Company.__proto__=emp;
 console.log(Company.name);
 console.log(Company.city);
 console.log(Company.company);
 console.log(Company.role);
 Company.showDetails();
  Company.showJob();
  console.log(Company.hasOwnProperty("name"));
console.log(Company.hasOwnProperty("company"));

let grandparent={
    country: "India"
};
let parent={
    city: "Pune"
};
let child={
    name :"Prerna"
};
  parent.__proto__=grandparent;
  child.__proto__=parent;
  console.log(child.name);
  console.log(child.city);
  console.log(child.country);
  console.log(child.hasOwnProperty("country"));

//generators

function* employeeId(){
    yield 101;
    yield 102;
    yield 103;
}
let ids=employeeId();
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);

//iterator
let numbers=[10,20,30];
let iterator=numbers[Symbol.iterhator]();
console.log(iterator.next().value); // console.log(iterator.next().value); // 200
console.log(iterator.next().done);  // false



//Symbol.keyFor() only works with Symbols created using Symbol.for().

let a = Symbol("user");
console.log(Symbol.keyFor(a)); // undefined

let b = Symbol.for("user");
console.log(Symbol.keyFor(b)); // user

