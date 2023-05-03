import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import HOME from "./HOME.js";


const LOGIN = (props) => {
    const [USERDATA,setUSERDATA]=useState([]);
    const [NAME,setNAME]=useState("");
    const [PASSWORD,setPASSWORD]=useState("");

    const LOGINFUNCTION=()=>{
        USERDATA.map((value)=>{
            if(value.USERNAME==NAME && value.PASSWORD==PASSWORD){
                return props.navigation.navigate("HOME");
            }
            else{
                alert("Pls Enter Correct Username And Password");
            }
        })
    }

    useEffect(() => {
        axios.get("http://10.0.2.2:3001/SIGNUP")
        .then((RES)=>{
            setUSERDATA(RES.data);
        },[])
    })
    return <View>
        <Text style={{ fontSize: 30 }}>UserName</Text><TextInput placeholder="Enter Your Name" aria-label="Name" style={{ borderWidth: 2, fontSize: 20, margin: 10 }} onChangeText={(text)=>setNAME(text)}/>
        <Text style={{ fontSize: 30 }}>Password</Text><TextInput placeholder="Enter Your Passsword" aria-label="Password" style={{ borderWidth: 2, fontSize: 20, margin: 10 }} onChangeText={(text)=>setPASSWORD(text)}/>
        <Button title="Login" onPress={LOGINFUNCTION}/>
    </View>
}

export default LOGIN;