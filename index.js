
w3.getHttpObject("https://api.adviceslip.com/advice", getAdvice);


	function getAdvice(data){

		let advice = data.slip.advice

		let adviceContent = advice

		document.querySelector('.advice').textContent = ' " ' + adviceContent + ' " '

		let infoAdvice = data.slip.id

		document.querySelector('.info-advice span').textContent = infoAdvice

		console.log(data.slip.advice)

	}

function rAdvice(){

	w3.getHttpObject("https://api.adviceslip.com/advice", getAdvice);


	function getAdvice(data){

		let advice = data.slip.advice

		let adviceContent = advice

		document.querySelector('.advice').textContent = ' " ' + adviceContent + ' " '

		let infoAdvice = data.slip.id

		document.querySelector('.info-advice span').textContent = infoAdvice


	}

}

