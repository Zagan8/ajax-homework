function getCountries(){
    return new Promise((res,rej)=>{
    $.ajax({
        url: "https://restcountries.eu/rest/v2/all",
        data: "data",
        dataType: "JSON",
        success: function (data) {
            res(data);
        }
    });
})
}

async function renderCountries(){
    const counries = await getCountries();
    console.log(counries)
    counries.forEach(country => {
        const divEl = $(`<div class="card">
        <h1>${country.name}</h1>
        <img class="flag" src="${country.flag}"/>
        <p> Population: ${country.population}</p>
        </div>`);
        $(`#container`).append(divEl);
    });
   
}

$('#searchBtn').on('click',renderCountries);