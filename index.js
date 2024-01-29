const containerElem=document.getElementById('container');
const searchElem=document.getElementById('search-bar');

let city;

searchElem.addEventListener('keyup', (event)=>{
    city=event.target.value;
})

const options={
    method:'GET',
    headers: { 'X-Api-Key': 'VUCLYNika4wywJTpvKRtJg==z4aF0dOnjKQwOlKT'}
}

document.addEventListener('keydown', (event)=>{
    if(event.key==='Enter'){
        getWeather();
    }
})

async function getWeather(){
    try{
    const response=await fetch(`https://api.api-ninjas.com/v1/weather?city=${city}`, options);
    const data=await response.json();

    const temp=data.temp;
    const humidity=data.humidity;

    if(temp===undefined){
        containerElem.innerHTML=`
        <h1>Invalid City</h1>`
        return;
    }
    
    showWeather(temp, humidity);
    }
    catch(err){
        containerElem.innerHTML=`
        <h1>An error occured, try again later</h1>`
    }

}

function showWeather(temp, humidity){
    containerElem.innerHTML=`
    <h1>Temperature  ${temp} &deg;C</h1>
    <h1>Humidity  ${humidity}</h1>`;
    document.body.style.backgroundImage= "url(background2.jpg)";
}