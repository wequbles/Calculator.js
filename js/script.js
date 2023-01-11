var op;
	function func() {
		var result;
		var num1_str = String(document.getElementById("num1").value);
		var num2_str = String(document.getElementById("num2").value);
		let num1 = Number(num1_str)
		let num2 = Number(num2_str)
		if (isNaN(num1)) {
			document.getElementById("result").innerHTML = 'Только числа';
			return;
		}
		if (isNaN(num2)) {
			document.getElementById("result").innerHTML = 'Только числа';
			return;
		}
		if ((num1_str.length == 0) || (num1_str.indexOf(' ') != -1)) {
			document.getElementById("result").innerHTML = 'Вы не ввели первое число';
			return;
		}
		if ((num2_str.length == 0) || (num2_str.indexOf(' ') != -1)) {
			document.getElementById("result").innerHTML = 'Вы не ввели второе число';
			return;
		}
		if ((num2 == 0) && (op == '/')) {
		document.getElementById("result").innerHTML = 'На ноль делить нельзя';
			return;
		}
		if ((num1 > 999999999) || (num2 > 999999999)) {
		document.getElementById("result").innerHTML = 'Число должно быть меньше <br> 1 000 000 000';
			return;
		}
		switch (op) {
			case '+':
				result = num1 + num2;
				break;
			case '-':
				result = num1 - num2;
				break;
			case '*':
				result = num1 * num2;
				break;
			case '/':
				result = num1 / num2;
				break;
			default: result = 'Выберите действие'
		}
		document.getElementById("result").innerHTML = result;
	}
