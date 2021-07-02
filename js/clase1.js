let edad = prompt("Introduce tu edad")
adulto = 18;
if( edad >= adulto){
    confirm( "Bienvenido, Eres adulto puedes acceder");
    let peso = prompt("Hola, cual es tu peso?");
peso = parseInt(peso)
let peso_jupiter= (peso /9.81) * 24.79;
alert("Tu peso en Jupiter es de "+peso_jupiter + "Kg");
peso_jupiter = parseFloat(peso_jupiter)

let peso_marte= (peso /9.81) * 3.711;
alert("Tu peso en Marte es de "+peso_marte + "Kg");

let peso_luna= (peso /9.81) * 1.622;
alert("Tu peso en la Luna es de "+peso_luna + "Kg");

let peso_urano= (peso /9.81) * 8.87;
alert("Tu peso en Urano es de "+peso_urano + "Kg");

let peso_sol= (peso /9.81) * 274;
alert("Tu peso en el Sol es de "+peso_sol + "Kg");

let peso_mercurio= (peso /9.81) * 3.7;
alert("Tu peso en Mercurio es de "+peso_mercurio + "Kg");

let peso_saturno= (peso /9.81) * 10.44;
alert("Tu peso en Saturno es de "+peso_saturno + "Kg");

alert("Hasta pronto");

}
else{
    alert("Lo siento, eres menor de edad, vuelve en unos años")
}

