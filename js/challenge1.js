// let markWeight=78;
// let markHeight=1.69;
// let johnWeight=92;
// let johnHeight=1.95;
let markWeight=94;
let markHeight=1.88;
let johnWeight=94;
let johnHeight=1.88;
let markBmi=markWeight/(markHeight**2);
let johnBmi=johnWeight/(markHeight**2);
let markHigherBmi=false;
let johnHigherBmi=false;
let result=""
if (markBmi>johnBmi) {
    markHigherBmi=true
    console.log(`MarkBMI is ${markBmi} and johnBmi is  ${johnBmi}.it is ${markHigherBmi} that mark has higher bmi then john `);

    
}
else if(johnBmi>markBmi)
{
    johnBmi=true;
    console.log(`MarkBMI is ${markBmi} and johnBmi is  ${johnBmi}.it is ${markHigherBmi} that mark has higher bmi then john `);


}
else {
    result="Both have equal Bmi"
    console.log(result);

}
