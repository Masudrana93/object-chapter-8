// **** জোড়ায় জোড়ায় entries কর ****

// অবজেক্টের property & value একসাথে আউটপুট এ দেখতে entries যেভাবে ব্যবহার করবি।

const person = {
    name: "Helal",
    age:25,
    country: "Bangladesh"
};
const entries = Object.entries(person);
console.log(entries);