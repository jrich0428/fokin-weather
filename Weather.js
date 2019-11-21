import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

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
    gradient: ["#9a8478", "#1e130c"],
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
    gradient: ["#243B55", "#141E30"],
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

export default function Weather({ temp, condition }) {
  console.log("Weather.js - temp: " + temp);
  console.log("Weather.js - condition: " + condition);
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName || "weather-sunset"}
          color="white"
        />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
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
    fontWeight: "300",
    marginBottom: 10
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start"
  }
});
