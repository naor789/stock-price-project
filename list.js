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