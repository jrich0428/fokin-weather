import React from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView,
  Dimensions,
  Button
} from "react-native";
import PropTypes from "prop-types";
import Axios from "axios";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
// import { SquareView } from "react-native-square-view";
import Dialog, { DialogContent } from "react-native-popup-dialog";

const { width, height } = Dimensions.get("window");

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: props.visible, cgv: [{}] };
    this._getCGVRealTimeSeatInfo("20191127");
  }
  render() {
    console.log("Weather.js render!");
    const { cgv } = this.state;
    return (
      <ScrollView
        style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 100 }}
      >
        <View style={styles.container}>
          <Button
            title="Show Dialog"
            onPress={() => {
              this._onPress();
            }}
          />
          <Dialog
            style={{ flex: 2, paddingHorizontal: 10, height: 500 }}
            visible={this.state.visible}
            onTouchOutside={() => {
              this._onTouchOutside();
            }}
          >
            <DialogContent
              style={{
                height: height / 2,
                width: (width / 4) * 3,
                alignItems: "center"
              }}
            >
              {Object.values(cgv).map(i => (
                <View
                  key={i.key}
                  style={[
                    styles.commonStyle,
                    i.seatType === "mini_seat"
                      ? styles.mini_seat
                      : styles.mini_seat_reserved,
                    {
                      left: parseInt(i.left) * 2 + 10,
                      top: parseInt(i.top) * 2 + 50
                    }
                  ]}
                />
              ))}
            </DialogContent>
          </Dialog>
        </View>
      </ScrollView>
    );
  }
  _onPress = () => {
    this.setState({
      visible: true
    });
  };
  _onTouchOutside = () => {
    this.setState({
      visible: false
    });
  };
  _getCGVRealTimeSeatInfo = async palyymd => {
    var tmp = "";
    var tmp2 = [];
    try {
      const ret = await Axios({
        method: "post",
        url:
          "http://www.cgv.co.kr/common/showtimes/iframeTheater.aspx/GetSeatList",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        data: {
          theatercode: "0074",
          palyymd: palyymd,
          screencode: "009",
          playnum: "4",
          starttime: "1530",
          endtime: "1723",
          theatername: "CGV 용산아이파크몰",
          cnt: "216",
          screenname: "IMAX관"
        }
      });

      tmp = ret.data.d.replace(/\\"|;|px/g, "");
      // var temp = tmp.split(/class=(\w*) style=left:(\d*) top:(\d*)/g);
      // tmp = /class=(\w*) style=left:(\d*) top:(\d*)/.exec(tmp);
      tmp = tmp.split(/class=(\w*|\w* \w*) style=left:(\d*) top:(\d*)/g);
      console.log("tmp : " + tmp);
      for (let i = 0; i < Math.floor(tmp.length / 4); i++) {
        tmp2.push({
          key: i,
          seatType: tmp[i * 4 + 1],
          left: tmp[i * 4 + 2],
          top: tmp[i * 4 + 3]
        });
      }
      // console.log("tmp2.length : " + tmp2.length);
      // console.log("tmp2[0].key : " + tmp2[0].key);
      // console.log("tmp2[0].seatType : " + tmp2[0].seatType);
      // console.log("tmp2[0].left : " + tmp2[0].left);
      // console.log("tmp2[0].top : " + tmp2[0].top);
    } catch (error) {
      tmp2.push({
        key: 0,
        seatType: "mini_seat",
        left: 0,
        top: 0
      });
    }
    this.setState({
      cgv: tmp2
    });
  };
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Dust",
    "Ash",
    "Squall",
    "Tornado",
    "Clear",
    "Clouds"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 42,
    color: "white"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "100",
    marginBottom: 10
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24
  },
  textContainer: {
    paddingHorizontal: 10,
    alignItems: "flex-start"
  },
  container2: {
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 40
  },
  fixedRatio: {
    backgroundColor: "rebeccapurple",
    flex: 16,
    width: 4,
    height: 4
  },
  commonStyle: {
    width: 8,
    height: 8,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    position: "absolute"
  },
  mini_seat: {
    backgroundColor: "skyblue"
  },
  mini_seat_reserved: {
    backgroundColor: "steelblue"
  }
});
