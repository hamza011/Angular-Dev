let bioData: {}[] = [
    {
    name: 'Ali',
    age: 12,

},
 {
    name: 'Ahmed',
    age: 14,
},
 {
    name: 'Abdul',
    age: 16,
},
 {
    name: 'Adil',
    age: 18,
},
 {
    name: 'Adeel',
    age: 20,
},
 {
    name: 'Hamza',
    age: 22,
},
 {
    name: 'Ahsan',
    age: 24,
},
 {
    name: 'Umer',
    age: 26,
},
 {
    name: 'Omer',
    age: 28,
},
 {
    name: 'Muhammad',
    age: 30,
},
 {
    name: 'Noor',
    age: 32,
},
{
    name: 'Moeed',
    age: 34,
},
{
    name: 'Saeed',
    age: 36,
},
{
    name: 'Hasan',
    age: 38,
},
{
    name: 'Amaar',
    age: 40,
},
]
// console.log("All Objects: ", bioData);

let result = bioData.filter(function(obj){
    // console.log(obj);
    let age = (obj['age']);
    console.log('age: ', age);
    return (age <=20) || (age > 30);
})
console.log('result: ',result);