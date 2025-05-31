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