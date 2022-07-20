import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const question = prompt => new Promise(resolve => {
    rl.question(prompt, answer => {
        resolve(answer);
    });
});
let arr1 = ['',''];
let arr2 = ['',''];
let arr3 = ['',''];
let arr4 = ['',''];
 arr1[0] = await question("What should point 1 x be? ");
 arr1[1] = await question("What should point 1 y be? ");
 arr2[0] = await question("What should point 2 x be? ");
 arr2[1] = await question("What should point 2 y be? ");
 arr3[0] = await question("What should point 3 x be? ");
 arr3[1] = await question("What should point 3 y be? ");
 arr4[0] = await question("What should point 4 x be? ");
 arr4[1] = await question("What should point 4 y be? ");
 arr1[0] = Number(arr1[0])
 arr2[0] = Number(arr2[0])
 arr3[0] = Number(arr3[0])
 arr4[0] = Number(arr4[0])
 arr1[1] = Number(arr1[1])
 arr2[1] = Number(arr2[1])
 arr3[1] = Number(arr3[1])
 arr4[1] = Number(arr4[1])
console.log(arr1,arr2,arr3,arr4)
//pretty self explanatory
const pyth = (x1,y1,x2,y2) => {
const x = Math.abs(x1-x2)**2;
const y = Math.abs(y1-y2)**2;
return Math.sqrt(x+y)
}
/*should return a point that is t (0-1) of the way from point 1 to 2
i think it works but im not sure*/
const tsolve = (arr=[0,0],arr2=[0,0],t=0) => {
const ang = Math.atan2(arr[1]-arr2[1],arr[0]-arr2[0])+Math.PI;
const dst = pyth(...arr,...arr2);
const x = arr[0]+(Math.cos(ang)*(dst*t));
const y = arr[1]+(Math.sin(ang)*(dst*t));
return [x,y]
}

//setup
/*
const arr1 = [0,0];
const arr2 = [40,0];
const arr3 = [0,40];
const arr4 = [40,40];
*/
const x = [];
for(let i = 0;i<=40;i++){x.push(['.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.'])};

for(let t=0;t<1;t+=0.005){
//calc, i think this is the problem, why's that i dont know
const d1 = tsolve(arr1,arr2,t);
const d2 = tsolve(arr2,arr3,t);
const d3 = tsolve(arr3,arr4,t);
const d4 = tsolve(d1,d2,t);
const d5 = tsolve(d2,d3,t);
const d6 = tsolve(d4,d5,t);
const end = [Math.round(d6[0]),Math.round(d6[1])];
console.log('\nend ',end)
x[end[0]][end[1]] = '#'
}
for(let i = 0;i<40;i++){
console.log(x[i].join(' '))
}
