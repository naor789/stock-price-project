const urlParams = new URLSearchParams(window.location.search);
const symbol = urlParams.get('symbol');

const companyName = document.getElementById("companyName");
const companyInfo = document.getElementById("companyInfo");
const linkCompany = document.getElementById("linkCompany");
const companyImage = document.getElementById("companyImage");
const stockPrice = document.getElementById("stockPrice");
const changesPercentage = document.getElementById("changesPercentage");


 function companyResults() {
    let url = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${symbol}`;

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let profile = data.profile;
            companyName.innerHTML = profile.companyName;
            companyInfo.innerHTML = profile.description;
            linkCompany.innerHTML = profile.website;
            companyImage.src = profile.image;
            linkCompany.href = profile.website;
            stockPrice.innerHTML += profile.price;
            changesPercentage.innerHTML = profile.changesPercentage;
            (function() {
				const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
				link.type = 'image/x-icon';
				link.rel = 'shortcut icon';
				link.href = `${data.profile.image}`;
				document.getElementsByTagName('head')[0].appendChild(link);
			})();
            let Percentage = profile.changesPercentage;
            if (Percentage.includes('+')) {
                changesPercentage.classList.add("green");
            } else {
                changesPercentage.classList.add("red");
            }

        })
        .catch(function (error) {
            console.log(error);
        });
}
companyResults();


 async function historical() {
    let urlHistorical = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/historical-price-full/${symbol}?serietype=line`;
    const response = await fetch(urlHistorical);
    const data = await response.json()
    const history = data.historical;
    chartIt(history);
}

function chartIt(history) {
    
    let labelX = [];
    let labelY = [];

    for (let i = history.length - 1; i >= 0; i = i - 70) {
        labelX.push(history[i].date);
        labelY.push(history[i].close);
    }

    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels:labelX ,
            datasets: [{
                label: 'stock price history',
                data: labelY,
                backgroundColor:
                    'rgba(255, 99, 132, 0.2)',
                borderColor:
                    'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
            ]
        }
    });
}
historical();
