//****Object এর অবজে্কশন */

//example-1: স্টুডেন্ট নামে একটা object ডিক্লেয়ার কর।

const student = {
    name: 'kamal',
    age:15,
    roll: 2,
    class: 'ten',
    isSingle: true
}

//example-2: Phone নামে একটা object ডিক্লেয়ার কর।

const phone = {
    brand: "Apple",
    color: 'red',
    version: 20,
    dualSim: true,
    price: 85000
}
console.log(phone);

//example-3: Juice-এর জন্য একটা object ডিক্লেয়ার কর।

const juice = {
    name: 'Green Mango',
    sugar: false,
    price: 100
} 
console.log(juice);

//example-4: গাড়ির জন্য একটা object ডিক্লেয়ার কর।

const car ={
    brand: 'BMW',
    wheels: 4,
    maxSpeed: 100,
    ac: true,
}
console.log(car);

//example-5:  object এর ভিতরে আরেকটা object ক্রিয়েট করতে এবং array  ডিক্লেয়ার করতে চাস, সেটা তুই এভাবে করতে পারিস।

const sunject={
    name:"biology",
    teacher: 'resheda',
    examDate:'30 Dec',
    chaperts:['first', 'second', 'third'],  // array declare
    nextExam:{
        name: 'Final Exam',
        marks: 100
    }
}


//Practice

//1. 