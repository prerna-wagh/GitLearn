
const employees = [

    {
        id: 101,
        name: "Prerna",
        salary: 30000,
        department: {
            name: "IT",
            manager: "Rahul"
        },
        address: {
            city: "Pune",
            state: "Maharashtra",
            pincode: 411001
        }
    },

    {
        id: 102,
        name: "Rahul",
        salary: 40000,
        department: {
            name: "HR",
            manager: "Amit"
        },
        address: {
            city: "Mumbai",
            state: "Maharashtra",
            pincode: 400001
        }
    },

    {
        id: 103,
        name: "Sneha",
        salary: 35000,
        department: {
            name: "IT",
            manager: "Rahul"
        },
        address: {
            city: "Pune",
            state: "Maharashtra",
            pincode: 411002
        }
    },

    {
        id: 104,
        name: "Rohit",
        salary: 45000,
        department: {
            name: "Finance",
            manager: "Priya"
        },
        address: {
            city: "Nashik",
            state: "Maharashtra",
            pincode: 422001
        }
    },

    {
        id: 105,
        name: "Priya",
        salary: 50000,
        department: {
            name: "HR",
            manager: "Amit"
        },
        address: {
            city: "Pune",
            state: "Maharashtra",
            pincode: 411003
        }
    },

    {
        id: 106,
        name: "Amit",
        salary: 28000,
        department: {
            name: "Sales",
            manager: "Neha"
        },
        address: {
            city: "Mumbai",
            state: "Maharashtra",
            pincode: 400002
        }
    },

    {
        id: 107,
        name: "Neha",
        salary: 38000,
        department: {
            name: "IT",
            manager: "Rahul"
        },
        address: {
            city: "Kolhapur",
            state: "Maharashtra",
            pincode: 416001
        }
    },

    {
        id: 108,
        name: "Karan",
        salary: 42000,
        department: {
            name: "Finance",
            manager: "Priya"
        },
        address: {
            city: "Pune",
            state: "Maharashtra",
            pincode: 411004
        }
    },

    {
        id: 109,
        name: "Pooja",
        salary: 32000,
        department: {
            name: "Sales",
            manager: "Neha"
        },
        address: {
            city: "Nashik",
            state: "Maharashtra",
            pincode: 422002
        }
    },

    {
        id: 110,
        name: "Akash",
        salary: 55000,
        department: {
            name: "IT",
            manager: "Rahul"
        },
        address: {
            city: "Mumbai",
            state: "Maharashtra",
            pincode: 400003
        }
    }

];

// Display all employees
console.log(employees);

// Display employee count
console.log("Total Employees:", employees.length);
    //search

    function searchEmployee(id){
        let emp1=employees.find(function(e){
            return e.id===id;
        });
        if(emp1){
             console.log("Employee found:", emp1);
    } else {
        console.log("Employee not found");
    }
}
searchEmployee(101);

//update
function updateEmployee(id,newSalary){
    let emp1=employees.find(function(e){
        return e.id===id;
    });
    if(emp1){
        emp1.salary=newSalary;
         console.log("Employee updated successfully!");
    } else {
        console.log("Employee not found");
    }
    }
    updateEmployee(102,40000);
  //delete
    function deleteEmployee(id) {

    let index = employees.findIndex(function(e) {
        return e.id === id;
    });

    if (index !== -1) {

        employees.splice(index, 1);

        console.log("Employee deleted successfully!");

        console.log("Remaining Employees:");
        console.log(employees);

    } else {
        console.log("Employee not found");
    }
}

deleteEmployee(105);
//filter deparment
//it
let result = employees.filter(function(emp) {
    return emp.department.name === "IT";
});

console.log(result);
//HR
let result1=employees.filter(function(emp){
    return emp.department.name==="HR";

});
console.log(result1);
//finance
let result2=employees.filter(function(emp){
    return emp.department.name==="Finance";

});
console.log(result2);
//sales
let result3=employees.filter(function(emp){
    return emp.department.name==="Sales";

});
console.log(result3);
//reduce

console.log(employees.reduce(function(total, emp) {
    return total + emp.salary;
}, 0));

//sort(ascen)
console.log(employees.sort(function(a,b){
    return a.salary-b.salary
    

}));

//desc

//object.keys

console.log(Object.keys(employees[0]));

console.log(Object.values(employees[6]));
console.log(Object.entries(employees));

//call ,apply,bind
// let employee = employees.find(function(emp) {
//     return emp.id === 101;

// });


function calculateSalary() {
    return this.salary;
}
let emp = employees.find(function(e) {
    return e.id === 101;
});

let salary = calculateSalary.call(emp);

console.log("Employee:", emp.name);
console.log("CAllSalary:", salary);

let salary1 = calculateSalary.apply(emp);

console.log("ApplySalary:", salary1);

//bind
let salaryFunction = calculateSalary.bind(emp);

console.log("PSalary:", salaryFunction());


function shallowCopy(){
let newEmployees=[...employees];
newEmployees[0].salary=60000;

// Check original array
console.log("sallow",employees[0].salary);

// Check copied array
console.log("sallow oriinal",newEmployees[0].salary);
}
//call
shallowCopy();

function deepCopy(employees){
    let newEmployees=structuredClone(employees);
    console.log("dfidbjbfj",employees);

    newEmployees[1].name="rani";
     console.log("Original name:", employees[1].name);
       console.log("Copied name:", newEmployees[1].name);
}
deepCopy(employees);

 //map
    let employeeMap=new Map();
    employees.forEach(function(emp){
        employeeMap.set(emp.id,emp);
    });
    console.log(employeeMap);
    

//promise

 function fetchEmployees(){
    return new Promise(function(resolve,reject){
        console.log("Fetching employees...");
        setTimeout(function(){
            if(employees.length>0){
                resolve(employees);
            }else{
                reject("No employees found!")
            }
        },2000)
    });
}


//fetchEmployees()

fetchEmployees()
.then(function(result){
      console.log("Employees fetched successfully!");

        console.log(result);
})
.catch(function(error){
       console.log("Error:", error);

    })
    .finally(function(){
         console.log("Employee fetching process completed.");
    })

    






     


    