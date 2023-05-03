import React from "react";
import { View,Text ,TextInput,Button } from "react-native";
import axios from "axios";
import { useState } from "react";

const SIGN=()=>{
    const [NAME,setNAME]=useState("");
    const [PASSWORD,setPASSWORD]=useState("");
    const [EMAIL,setEMAIL]=useState("");

    const METHOD=()=>{
        axios.post("http://10.0.2.2:3001/SIGNUP",{
            NAME:NAME,
            PASSWORD:PASSWORD,
            EMAIL:EMAIL
        })
    }
    return <View>
        <Text style={{fontSize:30}}>UserName</Text><TextInput placeholder="Enter Your Name" aria-label="Name" style={{borderWidth:2,fontSize:20,margin:10}} onChangeText={(text)=>setNAME(text)}/>
        <Text style={{fontSize:30}}>Password</Text><TextInput placeholder="Enter Your Passsword" aria-label="Password" style={{borderWidth:2,fontSize:20,margin:10}} secureTextEntry={true} onChangeText={(text)=>setPASSWORD(text)}/>
        <Text style={{fontSize:30}}>Email</Text><TextInput placeholder="Enter Your Email" aria-label="Email" style={{borderWidth:2,fontSize:20,margin:10}} onChangeText={(text)=>setEMAIL(text)}/>
        <Button title="Signup" onPress={METHOD}/>
    </View>
}

export default SIGN;