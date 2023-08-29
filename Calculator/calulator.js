let input = document.getElementById("input");
	let output = document.getElementById("output");
	let background = document.getElementById("body");
	input.style.fontWeight = "bold";
	input.setAttribute("placeholder","type equation.....");
	output.style.textShadow = "0 5px 5px black";
	function res(){
		output.innerHTML =eval(input.value);
		input.value = "";
	}
	function btn_7(){
		input.value += "7";
	}
	function btn_8(){
		input.value += "8";
	}
	function btn_9(){
		input.value += "9";
	}
	function btn_X(){
		input.value += "*";
	}
	function btn_6(){
		input.value += "6";
	}
	function btn_5(){
		input.value += "5";
	}
	function btn_4(){
		input.value += "4";
	}
	function btn_div(){
		input.value += "/";
	}
	function btn_3(){
		input.value += "3";
	}
	function btn_2(){
		input.value += "2";
	}
	function btn_1(){
		input.value += "1";
	}
	function btn_add(){
		input.value += "+";
	}
	function btn_00(){
		input.value += "00";
	}
	function btn_0(){
		input.value += "0";
	}
	function btn_dot(){
		input.value += ".";
	}
	function btn_sub(){
		input.value += "-";
	}
	function btn_ac(){
		input.value = "";
		output.innerHTML = "";
	}
	function btn_de(){
		input.value = input.value.toString().slice(0,-1);
	}
	function btn_per(){
		input.value += "%";
	}