
let n=[];

for (let index = 0; index < 5; index++) {
    n [index]= Math.round((Math.random()*10))
        
      
}
console.log("array n: ",n)
n=n.slice(0,n.length-2)
console.log("array n: ",n)


// n.splice(-2);
// console.log(n);

