const button = document.getElementById("searchButton");
const spinnerBorder = document.getElementById("spinnerBorder");
console.log(spinnerBorder);
const search = document.getElementById("search");
spinnerBorder.classList.add("hide");
button.addEventListener('click', spinnerLoading);


function spinnerLoading() {
    spinnerBorder.classList.remove("hide");
    spinnerBorder.classList.add("show");
    ulResult.innerHTML = " ";

    setTimeout(presentResult, 1000);
}

function presentResult() {
    spinnerBorder.classList.add("hide");
    spinnerBorder.classList.remove("show");
    let url = "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=AA&limit=10&exchange=NASDAQ";

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let results of data) {
                console.log(results);
                let ulResult = document.getElementById("ulResult");
                let listResult = document.createElement("li");
                let link = `${results.name}, ${results.symbol}`;
                let resultedLink = link.link(`/company.html?symbol=${results.symbol}`);
                listResult.innerHTML = resultedLink ;
                ulResult.appendChild(listResult);
                listResult.className = "list-group-item list-group-item-action";

            }
        })
        .catch(function (error) {
            console.log(error);
        });
}