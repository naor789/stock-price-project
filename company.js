const urlParams = new URLSearchParams(window.location.search);
const symbol = urlParams.get('symbol');

const companyName = document.getElementById("companyName");
// console.log(companyName);
const companyInfo = document.getElementById("companyInfo");
const linkCompany = document.getElementById("linkCompany");
const companyImage = document.getElementById("companyImage");
const stockPrice = document.getElementById("stockPrice");
const changesPercentage = document.getElementById("changesPercentage");
// let spinnerBorder2 = document.getElementById("spinnerBorder2");
// spinnerBorder2.classList.add("hide");


 function companyResults() {
    let url = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${symbol}`;

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.profile);
            let profile = data.profile;
            companyName.innerHTML = profile.companyName;
            companyInfo.innerHTML = profile.description;
            linkCompany.innerHTML = profile.website;
            companyImage.src = profile.image;
            linkCompany.href = profile.website;
            stockPrice.innerHTML += profile.price;
            changesPercentage.innerHTML = profile.changesPercentage;

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

// function spinnerLoading2() {
//     spinnerBorder2.classList.remove("hide");
//     spinnerBorder2.classList.add("show");
//     setTimeout(historical, 1500);

    // spinnerLoading2();


 async function historical() {
    // spinnerBorder2.classList.remove("hide");
    let urlHistorical = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/historical-price-full/${symbol}?serietype=line`;
    const response = await fetch(urlHistorical);
    const data = await response.json()
    const history = data.historical;
    chartIt(history);
}

function chartIt(history) {
    
    let labelX = [];
    let labelY = [];

    for (let i = history.length - 1; i >= 0; i = i - 20) {
        labelX.push(history[i].date);
        labelY.push(history[i].close);
        console.log(history[i].close);
        console.log(history[i].date);
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
// chartIt(history);
historical();
