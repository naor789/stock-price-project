const urlParams = new URLSearchParams(window.location.search);
const symbol = urlParams.get('symbol');
let companyName = document.getElementById("companyName");
let companyInfo = document.getElementById("companyInfo");
let linkCompany = document.getElementById("linkCompany");
let companyImage = document.getElementById("companyImage");
let stockPrice = document.getElementById("stockPrice");
let changesPercentage = document.getElementById("changesPercentage");
let spinnerBorder2 = document.getElementById("spinnerBorder2");
spinnerBorder2.classList.add("hide");



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
//     setTimeout(history, 1500);

//     spinnerLoading2();
// async function chatrIt( ) {
// await history();
//                 let myChart = document.getElementById('myChart').getContext('2d');
//                 let ChartHi = new Chart(myChart, {
//                     type: 'line',
//                     data: {
//                         labels: labelY ,
//                         datasets: [{
//                             label: 'stock price history',
//                             data: labelX ,
//                         }
//                         ]
//                     }
//                 });
        
//         .catch(function (error) {
//             console.log(error);
//         } );
// }

        // chatrIt(); 


   function history() {
        spinnerBorder2.classList.remove("hide");

        let url = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/historical-price-full/${symbol}?serietype=line`;

        fetch(url)
            .then (function (response) {
                return response.json();
            })
            .then(function (data) {
                let history = data.historical;
                console.log(history);

                let labelX = [];
                let labelY = [];
                for (let i = 0; i < history.length; i++) {
                    labelX.push(history[i].date);
                    labelY.push(history[i].close);
                }
        

            })
            .catch(function (error) {
                console.log(error);
            });
    }


    history();