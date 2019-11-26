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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
// import { SquareView } from "react-native-square-view";
import Dialog, { DialogContent } from "react-native-popup-dialog";

const { width, height } = Dimensions.get("window");

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#a2ab58", "#636363"],
    title: "Clear Title",
    subtitle: "subtitle clear clear"
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Clear Title",
    subtitle: "subtitle clear clear"
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#0083B0", "#00B4DB"],
    title: "Clear Title",
    subtitle: "subtitle clear clear"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#fff", "#076585"],
    title: "Clear Title",
    subtitle: "subtitle clear clear"
  },
  Smoke: {
    iconName: "weather-fog",
    gradient: ["#9a8478", "#1e110c"],
    title: "Clear Title",
    subtitle: "subtitle clear clear"
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Clear Title",
    subtitle: "subtitle clear clear"
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#E1F5C4", "#EDE574"],
    title: "Clear Title",
    subtitle: "subtitle clear clear"
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#2c3e50", "#bdc3c7"],
    title: "Clear Title",
    subtitle: "subtitle clear clear"
  },
  Sand: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Clear Title",
    subtitle: "subtitle clear clear"
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Clear Title",
    subtitle: "subtitle clear clear"
  },
  Ash: {
    iconName: "weather-hail",
    gradient: ["#0083B0", "#00B4DB"],
    title: "Clear Title",
    subtitle: "subtitle clear clear"
  },
  Squall: {
    iconName: "weather-pouring",
    gradient: ["#0083B0", "#00B4DB"],
    title: "Clear Title",
    subtitle: "subtitle clear clear"
  },
  Tornado: {
    iconName: "weather-hurricane",
    gradient: ["#243B55", "#141E10"],
    title: "Clear Title",
    subtitle: "subtitle clear clear"
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#2F80ED", "#56CCF2"],
    title: "Clear Title",
    subtitle: "subtitle clear clear"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#c0c0aa", "#1cefff"],
    title: "Clear Title",
    subtitle: "subtitle clear clear"
  }
};

export default function Weather({
  temp,
  condition,
  cgv,
  _onPress,
  _onTouchOutside,
  visible
}) {
  console.log("Weather.js - temp: " + temp);
  console.log("Weather.js - condition: " + condition);

  return (
    // <LinearGradient
    //   colors={weatherOptions[condition].gradient}
    //   style={styles.container}
    // >
    //   <StatusBar barStyle="light-content" />
    //   <View style={styles.halfContainer}>
    //     <MaterialCommunityIcons
    //       size={96}
    //       name={weatherOptions[condition].iconName || "weather-sunset"}
    //       color="white"
    //     />
    //     <Text style={styles.temp}>{temp}℃</Text>
    //   </View>

    <ScrollView
      style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 100 }}
    >
      <View style={styles.container}>
        <Button
          title="Show Dialog"
          onPress={() => {
            _onPress();
          }}
        />
        <Dialog
          style={{ flex: 2, paddingHorizontal: 10, height: 500 }}
          visible={visible}
          onTouchOutside={() => {
            _onTouchOutside();
          }}
        >
          <DialogContent
            style={{
              height: height / 2,
              width: width - 100,
              alignItems: "center"
            }}
          >
            <View
              style={{ flex: 1, flexDirection: "row", paddingVertical: 5 }}
            ></View>
            <View style={{ flex: 1, flexDirection: "row", paddingVertical: 5 }}>
              <View
                style={[
                  styles.commonStyle,
                  {
                    width: 10,
                    height: 10,
                    position: "absolute",
                    left: 92,
                    top: 36,
                    backgroundColor: "red"
                  }
                ]}
              />
              <View
                style={[
                  styles.commonStyle,
                  {
                    width: 10,
                    height: 10,
                    backgroundColor: "powderblue"
                  }
                ]}
              />
              <View
                style={[
                  styles.commonStyle,
                  { width: 10, height: 10, backgroundColor: "skyblue" }
                ]}
              />
              <View
                style={[
                  styles.commonStyle,
                  { width: 10, height: 10, backgroundColor: "steelblue" }
                ]}
              />
              <View
                style={[
                  styles.commonStyle,
                  {
                    width: 10,
                    height: 10,
                    backgroundColor: "powderblue"
                  }
                ]}
              />
              <View
                style={[
                  styles.commonStyle,
                  { width: 10, height: 10, backgroundColor: "skyblue" }
                ]}
              />
              <View
                style={[
                  styles.commonStyle,
                  { width: 10, height: 10, backgroundColor: "steelblue" }
                ]}
              />
              <View
                style={[
                  styles.commonStyle,
                  {
                    width: 10,
                    height: 10,
                    backgroundColor: "powderblue"
                  }
                ]}
              />
              <View
                style={[
                  styles.commonStyle,
                  { width: 10, height: 10, backgroundColor: "skyblue" }
                ]}
              />
              <View
                style={[
                  styles.commonStyle,
                  { width: 10, height: 10, backgroundColor: "steelblue" }
                ]}
              />
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View
                style={[
                  styles.commonStyle,
                  { width: 10, height: 10, backgroundColor: "powderblue" }
                ]}
              />
              <View
                style={[
                  styles.commonStyle,
                  { width: 10, height: 10, backgroundColor: "skyblue" }
                ]}
              />
              <View
                style={[
                  styles.commonStyle,
                  { width: 10, height: 10, backgroundColor: "steelblue" }
                ]}
              />
            </View>
          </DialogContent>
        </Dialog>
      </View>
    </ScrollView>
    //   <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
    //     <Text style={styles.title}>{weatherOptions[condition].title}</Text>
    //     <Text style={styles.subtitle}>
    //       {weatherOptions[condition].subtitle}
    //     </Text>
    //   </View>
    // </LinearGradient>
  );
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
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  }
});
