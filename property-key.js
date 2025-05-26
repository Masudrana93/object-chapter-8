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

//  অবজেক্টের ভিতরের অবজেক্ট এর ‍প্রোপার্টির মান বা ভ্যালু কিভাবে বের করবি।

const college = {
    name: "DPI",
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibos', '21 feb'],
    unique:{
        color: 'blue',
        result:{
            gpa: 5,
            merit: 'top'
        }
    }
};
console.log(college.unique.color);
console.log(college.unique.result.gpa);
console.log(college.events[1]);

//practice

//1. তুই player অবজেক্ট তৈরি করবি। নাম, বয়স, স্পোর্টস, টিম ইত্যাদি প্রোপার্টি থাকবে। তারপর সেই অবজেক্ট থেকে dot notation দিয়ে তার টিমের নাম console কর।

const player ={
    name: 'washim',
    age: 25,
    sports: 'cricket',
    team: 'Bangladesh'
};
console.log(player.team);

//2. একটা latop অবজেক্ট তৈরি কর। তার brand, price, hardDisc, ram, screenSize ইত্যাদি প্রোপার্টি থাকবে। dot notation দিয়ে screenSize বের কর।

const laptop = {
    brand: 'LG',
    price:65000,
    hardDisc:'500 gb',
    ram: '5gb',
    screenSize:'16 inch'
};
console.log(laptop.screenSize);

//3. তোর একটা প্রিয় জায়গা আছে, যার নাম favPlace । তার মধ্যে কিছু তথ্য আছে। যেমন: name: 'cox's bazar', distance: '400km', আর popularity:"high"। bracket notation দিয়ে popularity প্রোপার্টি console log কর।

const favPlace ={
    name: "cox's bazar",
    distance: '400km',
    popularity:"high"
};
console.log(favPlace['popularity']);

//4. তুই একটা phone অবজেক্ট বানাস। সেখানে brand, color, price প্রোপার্টি থাকে। ব্রান্ড দিস Nokia , কালার black আর দাম 5000। ব্রাকেট নোটেশন দিয়ে দাম বের কর।

const phone={
    brand: 'Nokia',
    color: "black",
    price: 5000
};
console.log(phone['price']);

//5. একটা library অবজেক্ট তৈরি কর। তার মধ্যে name: Publice library, location: Dhaka আর books: 5000 প্রোপার্টি থাকবে। dot notation দিয়ে  location বের কর।

const library={
    name:'Public Library',
    location:"Dhaka",
    books:5000
};
console.log(library.location);

//6. একটা movie অবজেক্ট বানা। যার title: Inception, direction: Nolan, rating: 9। bracket notation দিয়ে rating প্রোপার্টি বের কর।

const movie={
    title: "Inception",
    dirction:"Nolan",
    rating: 9,
};
console.log(movie['rating']);

//7. একটা college অবজেক্ট বানা। যার name: ndc, established:1949, groups: ['science','Arts', 'commerce']  । এইবার তোর কাজ হবে groups এর সেকেন্ড মান অর্থাৎ 1 ইনডেক্সের মান বের কর।


const collegE={
    name: "ndc",
    established: 1949,
    groups: ['science','arts','commerce']
};
console.log(collegE.groups[1]);

//8. একটা family অবজেক্ট বানা। যার মধ্যে একটা প্রোপার্টি হবে father ,আর সেটার মানও আরেকটা অবজেক্ট এবং ফাদারের মধ্যে তোর আব্বুর নাম, বয়স, পেশা থাকবে। একইভাবে family অবজেক্টে mother নামে আরেকটা প্রোপার্টি থাকবে, সেই প্রোপার্টির মানও আরেকটা অবজেক্ট। আর mother এর অবজেক্টের মধ্যে তোর আম্মুর নাম, বয়স আর পেশা থাকবে। এখন তোর কাজ হচেছ, mother এর age প্রোপার্টি বের কর। তারপর তোর আব্বুর age এর মান বের কর।  তারপর এই দুইটা age এর যোগফল বের করে সেটা আউটপুট হিসেবে দেখা।

const family={
    father:{
        name: "Abdul Mannaf",
        age: 85,
        profession: 'farmer'
    },
    mother:{
        name: "Begum",
        age:65,
        profession: "homemaker"
    }
    
};
console.log(family.father.age);
console.log(family.mother.age);
console.log(sum= )
