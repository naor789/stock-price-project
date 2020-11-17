class SearchForm {
    constructor(element) {
        this.element = element;
        this.form();
        this.companies;

    }

    form() {
        this.element.innerHTML = `<input id = "input" type="text" class="form-control" placeholder="Search"/>
         <button class="btn btn-outline-secondary" type="button" id="searchButton"> Search </button>
         <div class="text-center spinner-border" id="spinnerBorder"></div>`;
        this.element.className = "input-group mb-3 input-group-append";
        const spinnerBorder = document.getElementById("spinnerBorder");
        spinnerBorder.classList.add("hide");
        const input = document.getElementById("input");


        const button = document.getElementById("searchButton");
        button.addEventListener('click', () => { this.theCompanies(input.value) });
    }

    onSearch(list) {
        this.companies = list;
    }




    theCompanies(input) {
        const spinnerBorder = document.getElementById("spinnerBorder");
        spinnerBorder.classList.remove("hide");
        spinnerBorder.classList.add("show");
        let url = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${input}&limit=10&exchange=NASDAQ`;

        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then((data) => {
                this.companies = data;
            });

    }
}



