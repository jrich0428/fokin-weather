 import React from "react";
 import { StyleSheet, View, Text, StatusBar } from "react-native";
 import PropTypes from "prop-types";
 import { MaterialCommunityIcons } from "@expo/vector-icons";
 import { LinearGradient } from 'expo-linear-gradient';

 export default function Weather({ temp }){
     return (   
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    size={96} 
                    name="weather-lightning-rainy" 
                    color="white" />
                <Text style={styles.temp}>{temp}℃</Text> 
            </View>
            <View style={styles.halfContainer}>
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
         "Clear", "Clouds"
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
    halfContainer :{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});