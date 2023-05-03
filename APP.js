import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SIGN from "./SIGN.js";
import LOGIN from "./LOGIN.js";
import HOME from "./HOME.js";
import DATA from "./DATA.js";



const APP = () => {
    const STACK = createNativeStackNavigator();
    return <NavigationContainer>
        <STACK.Navigator>
            <STACK.Screen name="TAB" component={TAB} />
            <STACK.Screen name="HOME" component={HOME}/>
            <STACK.Screen name="DATA" component={DATA}/>
        </STACK.Navigator>
    </NavigationContainer>
}

const TAB = () => {

    const TAB = createMaterialTopTabNavigator();
    return  <TAB.Navigator>
            <TAB.Screen name="SIGNUP" component={SIGN} options={{
                tabBarLabelStyle: {
                    fontSize: 20
                }
            }} />
            <TAB.Screen name="LOGIN" component={LOGIN} options={{
                tabBarLabelStyle: {
                    fontSize: 20
                }
            }} />
        </TAB.Navigator>
}

export default APP;
