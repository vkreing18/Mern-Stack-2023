// let a=10;
// console.log(a)
// function Sum(a,b){
//     return a+b;
// }
// console.log(`The sum of a and b`,Sum(7,8))

// var b=[1,2,3,4,5,6,7,8,9,0]
// console.log(b)

// let z=[
//     {
//         bed:100,
//         red:200,
//         fav:150
//     },
//     {
//         ab:20,
//         bc:20
//     }
// ]
// console.log(z)

// b.push(10)
// console.log(b)
// b.pop()
// console.log(b)
// let i=0;
// while(i<b.length){
    // console.log(b[i])
    // i++;
// }
// for(let i=0;i<b.length;i++){
    // console.log(b[i])
// }

let c=[1,2,3,4,5,6,7,8,9,10]
for(let i=0;i<c.length;i++){
    // if(c[i]%2==0)
    // console.log(c[i])
    let count=0;
    for(let j=2;j<c[i]/2;j++){
        if(c[i]%j==0)
        count++; 
    }
    if(count==0)
    console.log(c[i])
}