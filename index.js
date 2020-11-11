const button = document.getElementById("searchButton");
const spinnerBorder = document.getElementById("spinnerBorder");
const search = document.getElementById("search");
spinnerBorder.classList.add("hide");
const changesPercentage = document.getElementById("changesPercentage");

const urlParams = new URLSearchParams(window.location.search);
const symbol = urlParams.get('symbol');




button.addEventListener('click', spinnerLoading);


function spinnerLoading() {
    spinnerBorder.classList.remove("hide");
    spinnerBorder.classList.add("show");
    ulResult.innerHTML = " ";

    setTimeout(presentResult, 1000);
    // setTimeout(percentage, 1000);
}
async function presentResult() {
    // await companyResults();
    spinnerBorder.classList.add("hide");
    spinnerBorder.classList.remove("show");
    let url = "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=AA&limit=10&exchange=NASDAQ";

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // console.log(data);
            for (let results of data) {
                // console.log(data);
                let ulResult = document.getElementById("ulResult");
                let listResult = document.createElement("li");
                let link = `${results.name}, (${results.symbol})`;
                let resultedLink = link.link(`/company.html?symbol=${results.symbol}`);
                ulResult.appendChild(listResult);
                listResult.className = "list-group-item list-group-item-action";

                listResult.innerHTML = `<img class="result-img" src="https://financialmodelingprep.com/image-stock/${results.symbol}.png"/> ${resultedLink}`;
                // console.log(results);

            }
        })
        .catch(function (error) {
            console.log(error);
        });

}


function companyResults() {


    let url = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${symbol}`;

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.profile);
            let profile = data.profile;
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

// function percentage() {
//     let urlP = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${symbol}`;
//     fetch(urlP)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             let profile = data.profile;
//             // console.log(profile);
//             let Percentage = profile.changesPercentage;
//             if (Percentage.includes('+')) {
//                 percentage.classList.add("green");
//             } else {
//                 percentage.classList.add("red");
//             }
//             listResult.innerHTML += `${Percentage}`;
//         // })
//         // .catch(function (error) {
//         //     console.log(error);
//         // });

// })
// }


