
const countdown = () => {
	const contaData = new Date(2022,1,26,0,0,0,0);
	const dataHoje = new Date().getTime();
	const tempoRestante = contaData - dataHoje;

	const segundo = 1000;
	const minuto = segundo * 60;
	const hora = minuto * 60;
	const dia = hora * 24;

	const textoDia = Math.floor(tempoRestante / dia);
	const textoHora = Math.floor((tempoRestante % dia)/hora);
	const textoMinuto = Math.floor((tempoRestante % hora)/minuto);
	const textoSegundo = Math.floor((tempoRestante % minuto)/segundo);
	
	document.querySelector(".dias-tempo").innerText = textoDia;
	document.querySelector(".horas-tempo").innerText = textoHora;
	document.querySelector(".minutos-tempo").innerText = textoMinuto;
	document.querySelector(".segundos-tempo").innerText = textoSegundo;
}

setInterval(countdown, 100);