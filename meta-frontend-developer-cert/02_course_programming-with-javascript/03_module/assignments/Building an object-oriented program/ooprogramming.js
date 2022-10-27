// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }

    sleep() {
        this.energy += 10;
        // test that this works
        console.log(this.name,"had some rest!");
        console.log(this.name+"'s energy level is at",this.energy);
    }

    doSomethingFun() {
        this.energy -= 10;
    }
}

// Task 2: Code a Worker class
class Worker extends Person {
    constructor(xp = 0, hourlyWage = 10, name, age, energy) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    sleep() {
        super.sleep();
        //test that this works
        console.log(this.name,"is ready to go back to work!");
    }
    goToWork() {
        this.xp += 10;
        console.log("xp has increased by 10 and is now",this.xp)
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    var intern = new Worker(xp = 0, hourlyWage = 10, name = "Bob", age = 21, energy = 110);
    intern.goToWork();
    return intern;
}

// Task 4: Code a manager object, methods
function manager() {
    var manager = new Worker(xp = 100, hourlyWage = 30, name = 'Alice', age = 30, energy = 120);
    manager.doSomethingFun();
    return manager
}

console.log(intern());
console.log(manager());