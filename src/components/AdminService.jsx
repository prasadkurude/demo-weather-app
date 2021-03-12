import Axios from 'axios'

export class AdminService {

getWeather = () => {
return Axios({
method: 'get',
url: 'http://api.openweathermap.org/data/2.5/weather?q=Pune&appid=094aa776d64c50d5b9e9043edd4ffd00'
})
}
}
