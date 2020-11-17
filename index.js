import Marquee from './marquee.js';

// const button = document.getElementById("searchButton");
// const spinnerBorder = document.getElementById("spinnerBorder");
// const search = document.getElementById("search");
// spinnerBorder.classList.add("hide");

// const urlParams = new URLSearchParams(window.location.search);
// const symbol = urlParams.get('symbol');

// function currentStockPrice() {
//     let url = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=AA&limit=10&exchange=NASDAQ`;

//     fetch(url)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             for (let results of data) {
//             }
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }

// currentStockPrice();

// button.addEventListener('click', spinnerLoading);


// function spinnerLoading() {
//     spinnerBorder.classList.remove("hide");
//     spinnerBorder.classList.add("show");
//     ulResult.innerHTML = " ";

    // setTimeout(presentResult, 1000);
// }
// async function presentResult() {
//     spinnerBorder.classList.add("hide");
//     spinnerBorder.classList.remove("show");

//     let inputUser=input.value;
//     let url = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${inputUser}&limit=10&exchange=NASDAQ`;

//     await fetch(url)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             // let symbol;
//             for (let results of data) {
//                 let symbol = results.symbol;
//                 let ulResult = document.getElementById("ulResult");
//                 let listResult = document.createElement("li");
//                 let link = `${results.name}, (${results.symbol})`;
//                 let resultedLink = link.link(`/company.html?symbol=${results.symbol}`);
//                 ulResult.appendChild(listResult);
//                 listResult.className = "list-group-item list-group-item-action";

//                 async function companyResults() {
//                     let url = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${symbol}`;

//                     await fetch(url)
//                         .then(function (response) {
//                             return response.json();
//                         })
//                         .then(function (data) {
//                             listResult.innerHTML = `<img class="result-img" src="https://financialmodelingprep.com/image-stock/${results.symbol}.png"/> ${resultedLink} ${data.profile.changesPercentage}`;


//                         });
//                 }
//                 companyResults();

//             }
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }

function marquee() {
    const url = "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=50";
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
                let price;
                const marquee = new Marquee(data, MarqueeEL, function (item) {
                    price = item.price;
                    return `${item.symbol} (${price}) `;
                });
 
                marquee.showMarquee();



        })
        .catch(function (error) {
            console.log(error);
        });

}

marquee();




