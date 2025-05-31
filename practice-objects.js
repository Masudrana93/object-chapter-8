// *****Practice Objects****

// 1. বই নামে একটা অবজেক্ট বানিয়ে ফেল। সেটার মধ্যে বইয়ের নাম, লেখক, দাম ইত্যাদি থাকবে। তারপর অবজেক্টের সব প্রোপার্টি (keys) এবং সব ভ্যালু (values) কনসোল লগ কর।

const book ={
    name: "Learning JavaScript",
    writer: 'Jonkar Mahabub',
    price: 750,
};
 const bookKeys = Object.keys(book);
 console.log(bookKeys);

 //2.এই অবজেক্টটিতে চেক কর, author ‍ প্রোপার্টি আছে কি না । const article = { title: "Learning JS", category: "Programming"};

 const article = {
    title: "Learning JS",
    category: 'Programming',

 };
 const articleKeys = Object.keys(article);
 const hasAuthor = articleKeys.includes('author');
 console.log(hasAuthor);

 //3. তোকে ল্যাপটপ নামের একটা অবজেক্ট দেয়া হলো -const laptop = {brand: "Del",model: "Inspiron", price: 85000}; এইবার for...inলুপ চালিয়ে প্রতিটি প্রোপার্টি এবং তার মান কনসোল লগ কর।

 const laptop = {
    brand: "Del",
    model: "Inspiron", 
    price: 85000
};
for(const key in laptop){
    const value = laptop[key];
    console.log(key, value);
}

// 4. একটা phone নামের অবজেক্ট  আছে। const phone ={ brand: "Samsung", model: "Galaxy S21", price:75000}; এইটার জন্য object.keys ব্যবহার করে for...of লুপ চালিয়ে প্রতিটি প্রোপার্টি এবং তার মান কনসোল লগ কর।

const phone ={ 
    brand: "Samsung", 
    model: "Galaxy S21", 
    price:75000
};
const keys = Object.keys(phone);
for(const key of keys){
    console.log(key, phone[key]);
}

// 5. তুই একটা bike অবজেক্ট বানাস, যেখানে  brand: 'Hero', price:12000, আর model: "Slendor" প্রোপার্টিগুলো থাকবে। object.values() মেথড ব্যবহার করে সব ভ্যালুগুলো বের কর।

const bike={
    brand: 'Hero', 
    price: 12000,
    model: "Slendor",
};
const bikeValues = Object.values(bike);
console.log(bikeValues);

//6. const books = {book1: "Harry Potter", book2: "The Hobbit", book3: "Game of Throns"}; এর ওপর লুপ চালিয়ে সব বইয়ের নাম কনসোল লগ কর।

const books = {
    book1: "Harry Potter", 
    book2: "The Hobbit", 
    book3: "Game of Throns"
};
const booksValues = Object.values(books);
for(const farqueRiya of booksValues){
    console.log(farqueRiya);
}

//7. সংখ্যা একটা অবজেক্ট দিলাম- const numbers ={ a:10, b: 20, c:30, d:40}; এইবার বুদ্ধি খাটিয়ে এই অবজেক্টের সব প্রোপার্টির ভ্যালোগুলোর যোগফল বের কর।

const numbers ={ 
    a:10, 
    b: 20, 
    c:30, 
    d:40
};
const numbersValues = Object.values(numbers);
let sum =0
for(let singleNumbersValues of numbersValues){
    sum= sum+singleNumbersValues
};
console.log(sum);



//8. একটা player অবজেক্ট বানা, যেখানে name: Messi, team: Argetina, আর goals:91 থাকবে। object.values ব্যবহার করে সব ভ্যালু বের কর।

const player ={
    name: "Messi",
    team: "Argentina",
    goals: 91,
}
const playerValues = Object.values(player);
console.log(playerValues);


//9. একটা building অবজেক্ট বানা, যার মধ্যে floors:10, address{street: Main Road, city: Dhaka} আর type: commercial এখন একটা for....in লুপ চালিয়ে সব প্রোপার্টি আর ভ্যালু প্রিন্ট কর।

const building = {
    floors: 10,
    address:{
        street: "Main Road",
        city: 'Dhaka',
    },
    type: "commercial"

};
for(const key in building){
    const value = building[key];
    console.log(key, value);
}
