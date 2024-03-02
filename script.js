//operators
//arithemetric operators //
//------------ increment and decrement operators--------------///
//assignments operators// = *=   -=  /=   %=   **=
//comparision operators// ==  ===  !=   <>  <=   =>
//logical operators//&& end  || or ! not
//&&// // || //
//++ +| ++ +|
//+- -| +- +|
//-+ -| -+ +|
//-- -| -- +|



let number1=5;
let number2=6;

console.log( number1%number2) //  (% ---> /)
// increment and decrement operators
number2++
console.log(number2);
console.log(number1--);
//-------------------------
let number3=7;
let number4=9;
//assignments operators// = *=   -=  /=   %=   **=
 //number3= number3+2
 //number3+=2;
number4 += 9;
number3**=2;
console.log(number4 );
console.log(number3);
//comparision operators// ==   ===  !=   <>  <=   => 
number5=2;
number6=4;
console.log( number5<=number6);//also data type
//logical operators//&& end  || or ! not
let number7 =2;
let number8=5;
console.log( number7<1 || number8==5);
console.log( number7<1 && number8==5);
console.log(!(number7<1 || number8==5))
 //javascript functions//
 //---------Syntaxs----------
 //console.log ( "HELLO WORLD");
 //print("HELLO WORLD");
 //System.out.println(" HELLO WORLD");



 //------function---///
function run(){

    console.log( "running");//declare of function

}
function swim() {
    console.log("swimming");
}
function jog(){
    console.log("jogging");
}
function add(){
    console.log(23+1);
}
function sub(){
    console.log(number1-number2);
}

function multi( number4,number8) //parameter
{
    console.log(number4*number8);
}

jog()
add()
sub()
multi( 4,8) // arguments  //calling the function



/// if else///
let time= 10;
if ( time<12){
console.log("GOOD MORNING");
}

else if ( time< 17 )
{
    console.log( "GOOD EVENING");
}
else if (time< 24) 
{
console.log( " GOOD  NIGHT ");
}
else{
console.log( "YOUR INPUT IS WRONG ")
} 
//loops
 for(i=0; i<6; i++)
 {
    console.log( " HELLO WORLD ");
 }
 // up too the condition flase the statment will be repeated//++ -- <= 

//while loop

let number11= 0;
 while ( number11< 8){
  console.log (number11  );
  number11++;
 }
//string
  let fname = "bellamkonda";
  let lname = "niveditha";
   console.log( fname + "  " +  lname);
   console.log(fname[6]);
   console.log(fname.toUpperCase ());
   console.log(fname.toLowerCase ());
   console.log(fname.length);





