// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const userinput=[];
inp.on("line", (data) => {
  userinput.push(data);
});
inp.on("close",() =>   {

//start here
var sum = 0;

for(i=0; i<3;i=i+1)
{
    something = userinput[i].split(" ");
 
   for (j = 0; j <  3; j++)
{
    sum = sum + +something[j];
}

}

  console.log(sum);


/*




var something=userinput[0].split(" ");
var something1=userinput[1].split(" ");
var something2=userinput[2].split(" ");

console.log(something);
console.log(something1);
console.log(something2);

var dd = parseInt(something[0]) + parseInt(something[1]) + parseInt(something[2]) + parseInt(something1[0]) + parseInt(something1[1]) + parseInt(something1[2]) + parseInt(something2[0]) + parseInt(something2[1]) + parseInt(something2[2]);

console.log(dd);
*/
});

