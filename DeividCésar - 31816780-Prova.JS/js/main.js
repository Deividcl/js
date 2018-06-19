/*
 Nome: Deivid César Lemes
   RA: 31816780
*/

// QUESTÃO 1
 function atualizaNome(){
 document.querySelector('title').innerHTML = "Deivid César Lemes - 31816780";
 document.querySelector('h1').innerHTML = "Deivid César Lemes - 31816780";
}

// QUESTÃO 2

function somar(){
	var valor1 = document.getElementById("valor-1").value;
	var valor2 = document.getElementById("valor-2").value;
	document.getElementById("resultado").value = parseInt(valor1) + parseInt(valor2);

	if (valor1 == ""){
		alert("Campo Obrigatorio!");
	}else if (valor2 == ""){
		alert("Campo Obrigatorio!");
	}
	
}

function subtrair(){
	var valor1 = document.getElementById("valor-1").value;
	var valor2 = document.getElementById("valor-2").value;
	document.getElementById("resultado").value = parseInt(valor1) - parseInt(valor2);

	if (valor1 == ""){
		alert("Campo Obrigatorio!");
	}else if (valor2 == ""){
		alert("Campo Obrigatorio!");
		}
	
}

function multiplicar(){
	var valor1 = document.getElementById("valor-1").value;
	var valor2 = document.getElementById("valor-2").value;
	document.getElementById("resultado").value = parseInt(valor1) * parseInt(valor2);

	if (valor1 == ""){
		alert("Campo Obrigatorio!");
	}else if (valor2 == ""){
		alert("Campo Obrigatorio!");
		}
	
}

function dividir(){
	var valor1 = document.getElementById("valor-1").value;
	var valor2 = document.getElementById("valor-2").value;
	document.getElementById("resultado").value = parseInt(valor1) / parseInt(valor2);

	if (valor1 == ""){
		alert("Campo Obrigatorio!");
	}else if (valor2 == ""){
		alert("Campo Obrigatorio!")
		}
	}
// QUESTÃO 3
function colorir(){
var resultado = document.querySelector("#resultado");
document.querySelector("#resultado").style.borderColor = "#FF830F";
if (resultado >=0) {
	resultado.style.color = "#C62828";
}else {
	resultado.style.color = "#2E7D32";
}
}

// QUESTÃO 4

