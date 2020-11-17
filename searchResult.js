class SearchResults {

    constructor(results) {
        this.results = results;
    }
    async renderResults(list) {
        this.showResults(list);

    }
    async showResults(list) {
        const input = document.getElementById("input").value;
        const spinnerBorder = document.getElementById("spinnerBorder");
        spinnerBorder.classList.remove("show");
        spinnerBorder.classList.add("hide");
        // result.innerHTML = " ";
        let url = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${input}&limit=10&exchange=NASDAQ`;

        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                let symbol = results.symbol;
                companyResults();


                async function companyResults() {
                    let url = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${symbol}`;

                    await fetch(url)
                        .then(function (response) {
                            return response.json();
                        })
                        .then(function (data) {
                            let result = document.getElementById("results");
                            let listResult = document.createElement("li");
                            result.appendChild(listResult);
                            let link = `${results.name}, (${results.symbol})`;
                            let resultedLink = link.link(`/company.html?symbol=${results.symbol}`);
                            listResult.className = "list-group-item list-group-item-action";
                            listResult.innerHTML = `<img class="result-img" src="https://financialmodelingprep.com/image-stock/${results.symbol}.png"/> ${resultedLink} `;


                        });
                }

            })
    }
}

