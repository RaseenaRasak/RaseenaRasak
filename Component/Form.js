import { StyleSheet } from "react-native";
import { SafeAreaView, TextInput, Text, Button, Alert } from "react-native";
import { useState } from "react";
import axios, { Axios } from "axios";

export default function Form() {

    const [name, setname] = useState("")
    const [paswd, setpaswd] = useState("")
    const [email, setemail] = useState("")
    const [error, seterror] = useState({})

    const CreateCustomer = async () => {
        try {
            const response = await axios.post("http://174.138.39.166:5000/createMarketingVisit", {
                customer_name: name,
                location: paswd,
                customer_industry: email,
            })
            console.log("response =", response.data);

        } catch (error) {
            console.log("Error=", error);

        }
    }

    // const ErrorAlert = ()=>{
    //     if(error){

    //         Alert.alert('Error', 'Failed to create user. Please try again.');
    //         console.log("error=", error);
    //     }
    //      if(seterror){
    //         Alert.alert('Success', 'User created successfully!');
    //     }
    // }

    //form validation function//
    const ValidateForm = () => {
        let error = {}
        if (!name) error.name = "name is required"
        if (!paswd) error.paswd = "password is required"
        if (!email) error.email = "email is required"
        seterror(error)
        return Object.keys(error).length === 0
    }

    const handlesubmit = () => {
        if (ValidateForm()) {
            setname("")
            setpaswd("")
            setemail("")
            seterror({})
        }
    }


    return (
        <SafeAreaView style={{ padding: 60 }}>
            <Text style={styles.hedding}>Customer Creation</Text>
            <Text>Name:</Text>
            <TextInput style={styles.input} value={name} onChangeText={setname} placeholder="enter your name" />
            {
                error.name ? <Text style={styles.errorText}>{error.name}</Text> : null
            }

            <Text>Password:</Text>
            <TextInput style={styles.input} value={paswd} onChangeText={setpaswd} multiline placeholder="enter your password" />
            {
                error.paswd ? <Text style={styles.errorText}>{error.paswd}</Text> : null
            }

            <Text>Email:</Text>
            <TextInput style={styles.input} value={email} onChangeText={setemail} multiline placeholder="enter your email" />
            {
                error.email ? <Text style={styles.errorText}>{error.email}</Text> : null
            }

            <Button title="Submit" color={"green"} onPress={() => { handlesubmit(); CreateCustomer(); }} />
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 250,
        borderWidth: 1,
        padding: 10,
        marginTop: 10
    },
    hedding: {
        fontSize: 25,
        color: "green",
    },
    errorText: {
        fontSize: 10,
        color: "red",
    }
})