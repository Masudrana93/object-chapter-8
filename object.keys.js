// ******অবজেক্টের তালা-চাবি*****

//সব (keys/properties)

//object এর সবগুলো keys/properties যেভাবে দেখা যায়।  object.keys()

const computer={
    brand: "dell",
    price:60000,
    precessor: "intel",
    ssd: '512gb'
};
const keys = Object.keys(computer);
console.log(keys);

//সব মান (values)

//object এর সবগুলো values যেভাবে দেখা যায়।  object.values()

const values= Object.values(computer);
console.log(values);

// name প্রোপার্টি আছে কি না, চেক কর।

const profile ={
    name:"Rahim",
    age:28,
    city:'Dhaka',
};
const profileKeys= Object.keys(profile);
const hasName = profileKeys.includes("name");
console.log(hasName);


// if-else প্রোপার্টি চেক করা যায়।

const amarprofile ={
    name:"karim",
    age:25,
    city:'sylhet',
};
if("email" in amarprofile){
    console.log('email exists');
}else{
    console.log("No email. No Spam");
}
