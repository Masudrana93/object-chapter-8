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

//1. তুই teacher নামে একটা অবজেক্ট বানা। এইটার মধ্যে টিচারের নাম থাকবে। উনি কোন সাবজেক্ট পড়ান, সেটার নাম থাকবে; স্যারের বয়স, বাসা কোথায়- এই টাইপের পাচটা জিনিস থাকবে।

const teacher = {
    name: "kamal hossain",
    subject: 'English',
    age: 35,
    address: 'khilgaon, Dhaka',

};

//2. গাছ (tree) নামে একটা object তৈরি কর, যার মধ্যে থাকবে এইটা কি গাছ, উচ্চতা কেমন, বয়স কত, ফলের নাম কী ইত্যাদি।

const tree = {
    name:'Mango tree',
    height: '15 feet',
    age: 15,
    fruitName: 'Mango',
};
console.log(tree);

//3. তোর আশেপাশে কোন প্রাণী থাকলে (গরু, বিড়াল, কুকুর, ইদুর, তেলাপোকা, মশা, মাছি, পিপড়া, টিকটিকি, মানুষ বা অন্য কোনো প্রাণী থাকলে), সেটার জন্য একটা অবজেক্ট লিখে ফেল।

const animal ={
    name: 'cat',
    color: 'white',
    height: '1 feet',
    leg:4,
    ear:2,
    canSpeak: false,
};
console.log(animal);

//4. তোর আব্বুর জন্য father নামে একটা অবজেক্ট বানিয়ে ফেল। সেখানে উনার নাম, পেশা, বয়স, সন্তানের সংখ্যা ইত্যাদি তথ্য দিয়ে ফেল।

const father = {
    name: 'Abdul Mannaf',
    occupation:'Farmer',
    age: 83,
    children: 7,
};
console.log(father);

//5. একটা বাইক (motorbike) নিয়ে object বানা। সেখানে ব্রান্ডের নাম, টায়ারের সংখ্যা, রং, সর্বোচ্চ গতি আর দাম থাকবে।

const motorbike = {
    brand:"BMW",
    tyre: 2,
    color: "white",
    heighSpeed: 150,
    price: 500000,
};
console.log(motorbike);

//6. একটা পাখি (bird) অবজেক্ট তৈরি কর, যেখানে পাখির নাম, রং, খাদ্য ইত্যাদি প্রোপার্টি থাকবে।

const bird = {
    name: 'parot',
    color: "green",
    food: 'rice',
};
console.log(bird);

//7. একটা laptop অবজেক্ট তৈরি কর, যেখানে থাকবে ব্রান্ডের নাম, প্রসেসর, র্যাম, দাম আর ডিসপ্লের সাইজ ইত্যাদি ডাটা।

const laptop = {
    brandName: 'Dell',
    processor: "intel core i5",
    ram: '3gb',
    price: 85000,
    display: "16 inch"
};
console.log(laptop);




