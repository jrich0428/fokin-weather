import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import Axios from "axios";
import Weather from "./Weather";

const API_KEY = "ee2bafb12fcb69c1bbe93fa228ff1e7c";

export default class extends React.Component {
  state = {
    isLoading: true,
    condition: "Clear",
    visible: false
  };
  getWeather = async (latitude, longitude) => {
    console.log("App.js(getWeather) - latitude : " + latitude);
    console.log("App.js(getWeather) - longitude : " + longitude);
    const {
      data: {
        main: { temp },
        weather
      }
    } = await Axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    const ret = await Axios({
      method: "post",
      url:
        "http://www.cgv.co.kr/common/showtimes/iframeTheater.aspx/GetSeatList",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      data: {
        theatercode: "0013",
        palyymd: "20191127",
        screencode: "018",
        playnum: "1",
        starttime: "0830",
        endtime: "1048",
        theatername: "CGV 용산아이파크몰",
        cnt: "483",
        screenname: "IMAX관"
      }
    });
    // console.log("ret : " + ret.data.d);
    // ret.data.d = ret.data.d.replace(
    //   /div class=\\"\.*\\">/gi,
    //   "div className={styles..*}>"
    // );
    // console.log("ret : " + ret.data.d);

    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp
      // cgv: ret.data.d
    });
    console.log("App.js(getWeather) - temp : " + temp);
    console.log("App.js(getWeather) - weather : " + weather);
    console.log(
      "App.js(getWeather) - this.state.condition : " + this.state.condition
    );
    console.log("App.js(getWeather) - this.state.temp : " + this.state.temp);
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({ isLoading: false });
      // console.log(
      //   "App.js(after getWeather) - isLoading : " + this.state.isLoading
      // );
      // console.log("App.js(after getWeather) - temp : " + this.state.temp);
      // console.log(
      //   "App.js(after getWeather) - condition : " + this.state.condition
      // );
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition, cgv } = this.state;

    console.log("App.js - isLoading : " + this.state.isLoading);
    console.log("App.js - temp : " + this.state.temp);
    console.log("App.js - condition : " + this.state.condition);
    return isLoading ? (
      <Loading />
    ) : (
      <Weather
        temp={Math.round(temp)}
        condition={condition}
        cgv={cgv}
        visible={this.state.visible}
      />
    );
  }
}
