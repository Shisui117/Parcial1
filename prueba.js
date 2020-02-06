var num1 =Math.floor(Math.random()*19);
var num2=Math.floor(Math.random()*19);
var num3=Math.floor(Math.random()*19);

console.log("///Lista de numeros///");
console.log("Primer numero :"+num1);
console.log("Segundo numero :"+num2);
console.log("Tercer numero :"+num3);

if(num1>num2 && num1>num3){
    
    console.log("El primer numero es mayor");
}
else{
    
    if(num2>num1 && num2>num3){
        console.log("El segundo numero es mayor");
    }
else{    
        console.log("El tercer numero es mayor");   
}
}
