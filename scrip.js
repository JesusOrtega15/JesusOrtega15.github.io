
num = prompt("Introduce un numero")
num = parseInt(num)

if(num % 2 === 0){
    alert(`El numero ${num} es par`)
} else if (num % 2 === 1){
    alert(`El numero ${num} es impar`)
} else {
    alert("El dato introducido no es un numero")
}
