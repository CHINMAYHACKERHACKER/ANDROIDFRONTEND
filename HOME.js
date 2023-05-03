import React from "react";
import { View, Text, TextInput, Button, ScrollView   } from "react-native";
import { useState } from "react";
import axios from "axios";

const HOME = (props) => {
    const [USERNAME, setUSERNAME] = useState("");
    const [COLLEGENAME, setCOLLEGENAME] = useState("");
    const [USERROLLNUMBER, setUSERROLLNUMBER] = useState("");
    const [USERREGISTERNUMBER, setUSERREGISTERNUMBER] = useState("");
    const [MOBILENUMBER, setMOBILENUMBER] = useState("");

    const METHOD=()=>{
        if(USERNAME=="" && COLLEGENAME=="" && USERROLLNUMBER=="" && USERREGISTERNUMBER=="" && MOBILENUMBER==""){
            alert("Pls Enter All Field");
        }
        else{
            axios.post("http://10.0.2.2:3001/USERDATA",{
                USERNAME:USERNAME,
                COLLEGENAME:COLLEGENAME,
                USERROLLNUMBER:USERROLLNUMBER,
                USERREGISTERNUMBER:USERREGISTERNUMBER,
                MOBILENUMBER:MOBILENUMBER
            })
        }
        props.navigation.navigate("DATA");
    }

    return <View>
        <ScrollView>
        <Text style={{ fontSize: 30 }}>Username</Text>
        <TextInput placeholder="Enter Username" style={{ borderWidth: 2, fontSize: 20, margin: 10 }} onChangeText={(text)=>setUSERNAME(text)}/>
        <Text style={{ fontSize: 30 }}>College Name</Text>
        <TextInput placeholder="Enter College Name" style={{ borderWidth: 2, fontSize: 20, margin: 10 }} onChangeText={(text)=>setCOLLEGENAME(text)}/>
        <Text style={{ fontSize: 30 }}>Roll Number</Text>
        <TextInput placeholder="Enter Roll Number" style={{ borderWidth: 2, fontSize: 20, margin: 10 }} onChangeText={(text)=>setUSERROLLNUMBER(text)}/>
        <Text style={{ fontSize: 30 }}>Register Number</Text>
        <TextInput placeholder="Enter Register Number" style={{ borderWidth: 2, fontSize: 20, margin: 10 }} onChangeText={(text)=>setUSERREGISTERNUMBER(text)}/>
        <Text style={{ fontSize: 30 }}>Mobile Number</Text>
        <TextInput placeholder="Enter Mobile Number" style={{ borderWidth: 2, fontSize: 20, margin: 10 }} onChangeText={(text)=>setMOBILENUMBER(text)}/>
        </ScrollView>
        <Button title="Submit" onPress={METHOD}/>
    </View>
}

export default HOME;