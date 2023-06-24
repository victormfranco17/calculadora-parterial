function calcular() {
	let sistolica = document.getElementById("sistolica").value;
	let diastolica = document.getElementById("diastolica").value;
	let resultado = document.getElementById("resultado");

	if (sistolica === '' || diastolica === '') {
		alert("Por favor, ingrese los valores de presión arterial");
		return;
	}

	let presion = sistolica + '/' + diastolica;

	if (sistolica < 120 && diastolica < 80) {
		resultado.textContent = "Su presión arterial es " + presion + " y está en un rango saludable";
		resultado.classList.add("saludable");
		resultado.classList.remove("prehipertension", "hipertensionEtapa1", "hipertensionEtapa2");
	} else if (sistolica >= 120 && sistolica <= 129 && diastolica < 80) {
		resultado.textContent = "Su presión arterial es " + presion + " y está en el rango de prehipertensión";
		resultado.classList.add("prehipertension");
		resultado.classList.remove("saludable", "hipertensionEtapa1", "hipertensionEtapa2");
	} else if ((sistolica >= 130 && sistolica <= 139) || (diastolica >= 80 && diastolica <= 89)) {
		resultado.textContent = "Su presión arterial es " + presion + " y está en el rango de hipertensión Etapa 1";
		resultado.classList.add("hipertensionEtapa1");
		resultado.classList.remove("saludable", "prehipertension", "hipertensionEtapa2");
	} else if (sistolica >= 140 || diastolica >= 90) {
		resultado.textContent = "Su presión arterial es " + presion + " y está en el rango de hipertensión Etapa 2";
		resultado.classList.add("hipertensionEtapa2");
		resultado.classList.remove("saludable", "prehipertension", "hipertensionEtapa1");
	}
}