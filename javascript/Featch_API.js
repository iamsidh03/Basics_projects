const URL ="";
let promise =fetach(URL);
console.log(fetch(URL));

const getFacts =async () =>
{
    console.log("Fetching data from API...");
    let response =await fetch(URL);
    console.log(response); //JSON/AJAJ FORMATE
    let data =await response.json();
    factPara.innerText=data[0].text;
};
