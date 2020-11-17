class Marquee {
	constructor(dataEL) {
		this.dataEL = dataEL;

	}

	showMarquee() {
		const url = "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=50";
		fetch(url)
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				for (let item of data) {
					// console.log(item);
					let marqueeItem = document.createElement("span");
					marqueeItem.className = 'marqueeItem';
					marqueeItem.innerHTML = `${item.symbol}(${item.price})`;
					document.getElementById("marquee").appendChild(marqueeItem);

				}

			})
			.catch(function (error) {
				console.log(error);
			});


	}


}

