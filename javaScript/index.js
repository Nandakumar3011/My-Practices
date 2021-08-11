/* Scope */
function getName() {
    let name = "Nanda";
    console.log("Welcome", name);
}
getName();

/* Invoked Function Expression */
let paintColor = 'red';
const paint = (() => {
    return {
        changeColorToBlue: () => {
            paintColor: 'Blue';
            return paintColor;
        },
        changeColorToGreen: () => {
            paintColor: 'Green';
            return paintColor;
        }
    }
})();
console.log(paint.changeColorToGreen());

/* Callbacks */
const greeting = (name) => {
    console.log('Hello ' + name);
}

const userName = (callback) => {
    name = 'Nandakumar';
    callback(name);
}
userName(greeting);

/* Promises */
const promise = new Promise((resolve, reject) => {
    isNameExist = true;
    if (isNameExist) {
        resolve("User name exist");
    } else {
        reject("error");
    }
})
promise.then(result => console.log(result))
    .catch(() => {
        console.log("error !")
    })

/* Prototype */
function Bike(model, color) {
    this.model = model,
        this.color = color,
        this.getDetails = function () {
            return this.model + ' bike is ' + this.color;
        }
}
var bikeObj1 = new Bike('BMW', 'BLACK');
var bikeObj2 = new Bike('BMW', 'WHITE');
console.log(bikeObj1.getDetails()); //output: BMW bike is BLACK
console.log(bikeObj2.getDetails()); //output: BMW bike is WHITE
console.log(bikeObj1, bikeObj2) //attacheced below image as output

/* Closures */
function User(name) {
    var displayName = function (greeting) {
        console.log(greeting + ' ' + name);
    }
    return displayName;
}
var myFunc = User('Nandu');
myFunc('Welcome '); //Output: Welcome Nandu
myFunc('Hello '); //output: Hello Nandu

/* Module Pattern */
var myModule = (function () {
    'use strict';

    var _privateProperty = 'Hello World';

    function _privateMethod() {
        console.log(_privateProperty);
    }

    return {
        publicMethod: function () {
            _privateMethod();
        }
    };
}());

myModule.publicMethod();                    // outputs 'Hello World'   
console.log(myModule._privateProperty);     // is undefined protected by the module closure                                                         
myModule._privateMethod();                  // is TypeError protected by the module closure

/* Memoization */
const memoizedAdd = () => {
    let cache = {};
    return (value) => {
        if (value in cache) {
            console.log('Fetching from cache');
            return cache[value];
        } else {
            console.log('Calculating result');
            let result = value + 10;
            cache[value] = result;
            return result;
        }
    }
}
// returned function from memoizedAdd
const newAdd = memoizedAdd();
console.log(newAdd(9)); //output: 19 calculated
console.log(newAdd(9)); //output: 19 cached


/* Call, Apply, Bind Method */
var obj = {
    num: 2
}
var add = function (num2, num3, num4) {
    return this.num + num2 + num3 + num4;
}
var arr = [3, 4, 5];
//Call method 
console.log(add.call(obj, 3, 4, 5));  //Output : 14
//Apply method
console.log(add.apply(obj, arr));   //Output : 14
//bind Method
var bound = add.bind(obj);
console.log(bound(3, 4, 5));         //output : 14 


/* Polymorphism */
var employee = new Employee('raja');
//override function
//this method going to execute
Employee.prototype.getDetails = function () {
    return this.name.toUpperCase();
}
console.log(employee.getDetails()); //outPut: RAJA
//object and prototype function
function Employee(name) {
    this.name = name;
}
Employee.prototype.getDetails = function () {
    return this.name;
}


/* Async & Await */
async function getUserDetail() {
    try {
        let users = await getUsers();
        return users[0].name;
    } catch (err) {
        return {
            name: 'default user'
        };
    }
}



