const data_calculator = {
	angkaPertama: null,
	operasi: null,
	display: '0',
};

const buttons = document.querySelectorAll('.button');
for (let i of buttons) {
	i.addEventListener('click', (e) => {
		let thisNode = e.target;
		if (thisNode.classList.contains('angka')) {
			inputAngka(thisNode.innerText);
			updateDisplay();
			return;
		}

		if (thisNode.classList.contains('clear')) {
			clear();
			updateDisplay();
			return;
		}

		if (thisNode.classList.contains('operation')) {
			inputOperator(thisNode.innerText);
			updateDisplay();
			return;
		}

		if (thisNode.classList.contains('negative')) {
			negative();
			updateDisplay();
			return;
		}

		if (thisNode.classList.contains('dot')) {
			dot();
			updateDisplay();
			return;
		}

		if (thisNode.classList.contains('equal')) {
			equals();
			updateDisplay();
			clear();
			return;
		}
	});
}
