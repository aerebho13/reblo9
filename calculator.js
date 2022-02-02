function calculate(){
    console.log(`Calculator function`);
    let num1=Number(prompt(`Enter the first number:`));
    console.log(num1);
    let num2=Number(prompt(`Enter the second number:`));
    console.log(num2);
    let sum;
    add=num1+num2; 
    sub=num1-num2; 
    mult=num1*num2;
    div=num1/num2;
    console.log(add, sub, mult, div);
    document.getElementById(`results`).innerHTML=
    `<p>${num1} + ${num2} = ${add}</p>
    <p>${num1} - ${num2} = ${sub}</p>
    <p>${num1} * ${num2} = ${mult}</p>
    <p>${num1} / ${num2} = ${div}</p>
    `;
}