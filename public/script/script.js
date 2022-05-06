const submit = document.getElementById("submit");
const cityName = document.getElementById("cityName");
const city = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");




const currDate = () => {
    const currentDay = () =>{
        const day = document.getElementById("day");
        let date = new Date()
        let weekday = ['sun', "mon", 'tue', 'wed', 'thu', 'fri', 'sat']
        day.innerText =  weekday[date.getDay()];
    }
    currentDay()
    const mon = document.getElementById("data");
    let m_name = ['jan','feb', 'mar', "api", 'may', 'jun', 'jul', 'aug', 'sep', 'oct','nov','dec']
    let now = new Date()
    let month = m_name[now.getMonth()]
    let date = now.getDate()
    mon.innerText = `${date} ${month}`;
};
currDate()
const getinfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;
  
  

  if (cityVal === "") {
    city.innerText = "Please enter the name of the city";
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=a494b9d810d5d732b657e11dab5693de`;
      let response = await fetch(url);
      let data = await response.json();
      let arrData = [data];
      // console.log(arrData);
      let temparr = arrData[0].main.temp;
      let round_temp = (temparr / 10).toFixed(2);
      console.log(round_temp);
      temp.innerHTML = `${round_temp} &#176;C `;
      temp_status.innerText = arrData[0].weather[0].main;
      city.innerText = cityVal;
      
    } catch {
      city.innerText = "Please enter a valid city name";
    }
  }
};
submit.addEventListener("click", getinfo);
