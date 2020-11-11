// function presentAllResult() {
//     let url = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${symbol}`;

//     fetch(url)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             let profile = data.profile;
//             listResult.innerHTML = profile.image;
//             listResult.innerHTML = profile.price;
//             listResult.innerHTML = profile.changesPercentage;

//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }







// .then(function (response) {
    //     return response.json()
    // })
    // .then(function (data) {
    // let results of data
    // let historical = data.historical;
    // console.log(historical);
    // let labelX = [];
    // let labelY = [];
    // for (let i = 0; i < historical.length; i++) {
    //     labelX.push(historical[i].date);
    //     labelY.push(historical[i].close);
    // }
    // return labelX;
    // return labelY;
    // console.log(labelY);
    // console.log(labelX);

    // let myChart = document.getElementById('myChart').getContext('2d');
    // let ChartHi = new Chart(myChart, {
    //     type: 'line',
    //     data: {
    //         labels: labelX,
    //         datasets: [{
    //             label: 'stock price history',
    //             data: labelY,
    //         }
    //         ]
    //     }
    // });

    // })
    // .catch(function (error) {
    //     console.log(error);
    // });