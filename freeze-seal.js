//***** feeze-এ seal মারা অবজেক্ট ******

// অবজেক্টের কোন প্রোপার্টি ডিলিট করতে চাইলে যা করবি: delete object-name.property-name (এটা অবজেক্টের বাহিরে হবে) এরপর console.log() করে আউটপুট দেখবি। 

const person = {
    name: 'alica',
    age: 25,
    country: "Bangladesh"
};
delete person.age;
console.log(person);



// object.freeze(object name)  -কোন প্রোপার্টির মান ডিলিট, পরিবর্তন বা নতুন প্রোপার্টি যোগ করতে দিবে না ।

// example: 

const adminUser = {
    userName: "Admin",
    email: "admin@gmail.com",
    role: "superadmin"
};
Object.freeze(adminUser);
//attempt to modify the object
adminUser.role = "user";
adminUser.password = "12346";
delete adminUser.email;
console.log(adminUser);

// *** seal ***

// object.seal(object name)  -কোন প্রোপার্টির মান ডিলিট বা নতুন প্রোপার্টি যোগ করতে দিবে না কিন্তু মডিফাই করতে দিবে।

const user = {
    username: "johan",
    email: "johan@gmail.com",
    password: "123old"
};
Object.seal(user);
// attempt to modify the object

user.password = "123new"; // allowed
user.age = 30; //adding new property is not allowed
delete user.email;  //deleting property is not allowed
console.log(user);


//Seal vs freeze :  seal প্রোপার্টির মান চেইজ্ঞ করতে দেয়, আর freeze কোনটাই চেইজ্ঞ করতে দেয় না।


//practice:

//1. ধর, তোর একটা headphone অবজেক্ট আছে, যার মধ্যে brand: "sony", price:3000,  আর color: "red"। object.freeze()  মেথড ব্যবহার করে অবজেক্টটা freeze কর। এরপর আরেকটা নতুন প্রোপার্টি যোগ করতে চেষ্টা কর। দেখ কাজ করে কি না।

const headphone = {
    brand: "Sony",
    price: 3000,
    color: "red"
};
// Object.freeze(headphone);
headphone.warranty = "1 year";
console.log(headphone);





