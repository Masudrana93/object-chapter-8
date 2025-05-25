//****গার্ডওয়ালা property-এর key****

// জাস্ট অবজেক্টের নামের পরে ডট (.) চিহ্ন দিয়ে এবং প্রোপার্টির নাম ব্যবহার করে ভ্যালু অ্যাক্সেস করতে পারবি।

//example:

const person = {
    name: 'kamal uddin',
    age: 25,
    profession: 'developer',
    salary:25000,
    married: true
};
console.log(person.profession);

// জাস্ট অবজেক্টের নামের পরে থার্ড ব্রাকেট [] চিহ্ন দিয়ে এবং এর ভেতরে প্রোপার্টির নাম কটেশন ‘’ এর মধ্যে রেখে ভ্যালু অ্যাক্সেস করতে পারবি।

const persoN ={
    name: "alom",
    age:30,
    profession: "developer",
    salary:35000,
    married: true,
    'fav places': ['dhaka', 'chittagong', 'sylhet']
};
console.log(persoN['salary']);
console.log(persoN['fav places']);

// অবজেক্টের ‍প্রোপার্টির মান বা ভ্যালু চেইজ্ঞ করা।

const cricketer = {
    position: 4,
    specialty: "batter",
    age: 24,
    runs: 8000
};
console.log(cricketer.position);
console.log(cricketer['runs']);

cricketer.position=1;
cricketer['runs']=10000;

console.log(cricketer['position']);
console.log(cricketer.runs);


