import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { FlatList } from "react-native";
import { DataTable } from "react-native-paper";

const DATA = () => {
    const [USERDATA, setUSERDATA] = useState([]);

    useEffect(() => {
        axios.get("http://10.0.2.2:3001/USERDATA")
            .then((RES) => {
                setUSERDATA(RES.data);
            }, [])
    })
    return <View>
        <DataTable.Header>
            <DataTable.Title textStyle={{ fontSize: 20, margin: 10 }}>Name</DataTable.Title>
            <DataTable.Title textStyle={{ fontSize: 20, margin: 10 }}>CollegeName</DataTable.Title>
            <DataTable.Title textStyle={{ fontSize: 20, margin: 10 }}>RollNumber</DataTable.Title>
            <DataTable.Title textStyle={{ fontSize: 20, margin: 10 }}>RegisterNumber</DataTable.Title>
            <DataTable.Title textStyle={{ fontSize: 20, margin: 10 }}>MobileNumber</DataTable.Title>
        </DataTable.Header>
        <FlatList data={USERDATA} renderItem={({ item }) =>
            <ScrollView horizontal={true}>
                <DataTable.Row>
                    <DataTable.Cell textStyle={{ fontSize: 20, margin: 10 }}>{item.USERNAME}</DataTable.Cell>
                    <DataTable.Cell textStyle={{ fontSize: 20, margin: 10 }}>{item.COLLEGENAME}</DataTable.Cell>
                    <DataTable.Cell textStyle={{ fontSize: 20, margin: 10 }}>{item.ROLLNUMBER}</DataTable.Cell>
                    <DataTable.Cell textStyle={{ fontSize: 20, margin: 10 }}>{item.REGISTERNUMBER}</DataTable.Cell>
                    <DataTable.Cell textStyle={{ fontSize: 20, margin: 10 }}>{item.MOBILENUMBER}</DataTable.Cell>
                </DataTable.Row>
            </ScrollView>
        } />
    </View>
}

export default DATA;