let clear = () => {
	data_calculator.angkaPertama = null;
	data_calculator.operasi = null;
	data_calculator.display = '0';
};

let inputAngka = (angka) => {
	if (data_calculator.display.length > 10) {
		return;
	}
	if (data_calculator.display == '0') {
		data_calculator.display = angka;
	} else {
		data_calculator.display += angka;
	}
};

let updateDisplay = () => {
	const display = document.querySelector('.display-container');
	display.innerText = data_calculator.display;
};

let inputOperator = (operator) => {
	if (data_calculator.angkaPertama != null) {
		alert('Anda sudah memasukkan operator');
		return;
	}
	data_calculator.operasi = operator;
	data_calculator.angkaPertama = data_calculator.display;
	data_calculator.display = '0';
};

let negative = () => {
	let tempDisplay = +data_calculator.display;
	tempDisplay *= -1;
	data_calculator.display = tempDisplay.toString();
};

let dot = () => {
	for (let i of data_calculator.display) {
		if (i == '.') {
			return;
		}
	}
	data_calculator.display += '.';
};

let checkInt = (angka) => {
	if (angka.toFixed(0) == angka) {
		return true;
	}
	return false;
};

let equals = () => {
	if (data_calculator.operasi == null) {
		alert('Masukkan Operator');
		return;
	}
	// Operator Tambah
	if (data_calculator.operasi == '+') {
		let firstNumber = +data_calculator.angkaPertama;
		let secondNumber = +data_calculator.display;
		firstNumber += secondNumber;
		let hasil;
		if (checkInt(firstNumber)) {
			hasil = firstNumber;
		} else {
			hasil = firstNumber.toFixed(3);
		}
		if (hasil.toString().length > 10) {
			alert('Angka yang dimasukkan terlalu panjang');
		} else {
			data_calculator.display = hasil.toString();
		}
		return;
	}

	// Operator Kurang
	if (data_calculator.operasi == '-') {
		let firstNumber = +data_calculator.angkaPertama;
		let secondNumber = +data_calculator.display;
		firstNumber -= secondNumber;
		let hasil;
		if (checkInt(firstNumber)) {
			hasil = firstNumber;
		} else {
			hasil = firstNumber.toFixed(3);
		}
		if (hasil.toString().length > 10) {
			alert('Angka yang dimasukkan terlalu panjang');
		} else {
			data_calculator.display = hasil.toString();
		}
		return;
	}

	// Operator Perkalian
	if (data_calculator.operasi == 'x') {
		let firstNumber = +data_calculator.angkaPertama;
		let secondNumber = +data_calculator.display;
		firstNumber *= secondNumber;
		let hasil;
		if (checkInt(firstNumber)) {
			hasil = firstNumber;
		} else {
			hasil = firstNumber.toFixed(3);
		}
		if (hasil.toString().length > 10) {
			alert('Angka yang dimasukkan terlalu panjang');
		} else {
			data_calculator.display = hasil.toString();
		}
		return;
	}

	// Operator Pembagian
	if (data_calculator.operasi == '/') {
		if (data_calculator.display == '0') {
			alert('Hasil invalid');
			return;
		}
		let firstNumber = +data_calculator.angkaPertama;
		let secondNumber = +data_calculator.display;
		firstNumber /= secondNumber;
		let hasil;
		if (checkInt(firstNumber)) {
			hasil = firstNumber;
		} else {
			hasil = firstNumber.toFixed(3);
		}
		if (hasil.toString().length > 10) {
			alert('Angka yang dimasukkan terlalu panjang');
		} else {
			data_calculator.display = hasil.toString();
		}
		return;
	}
};
