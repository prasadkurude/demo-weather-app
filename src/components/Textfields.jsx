import React, {Component} from "react";
import {Button, TextField} from "@material-ui/core";
import {AdminService} from "./AdminService";

class CityName extends Component {

constructor(props) {
super(props);
this.state = {
cityName: "",
temp: ''
}
}

changeState = (event) => {
this.setState({
cityName: event.target.value
})
}

displayWeather = () => {

new AdminService().getWeather().then(response => {
console.log(response.data.main.temp)
this.setState({
temp: response.data.main.temp
}, () => localStorage.setItem(this.state.cityName, this.state.temp)
)
}).catch((response) => {

})
}

setValue = (event) => {
const weather = localStorage.getItem(this.state.cityName);
alert("weather is "+weather)
if (weather == null || weather == undefined || weather == "") {
this.displayWeather();
} else {
this.setState({
temp: localStorage.getItem(this.state.cityName)
})
}
const weather2 = localStorage.getItem(this.state.cityName);
alert("temperature of " + this.state.cityName + " is " + this.state.temp)
setTimeout(function () {
    localStorage.removeItem(this.state.cityName);
    }, 10000);
    
}

render() {
return (
<div>
<TextField
onChange={this.changeState}
label={"enter City name"}
/>
<br/>
<br/>
<Button
onClick={this.setValue}
style={{backgroundColor: "green"}}>
Enter</Button>
</div>
)
}
}

export default CityName;