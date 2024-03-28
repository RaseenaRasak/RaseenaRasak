// import { StyleSheet, View } from "react-native";
// import { SafeAreaView, TextInput, Text, Button, Alert } from "react-native";
// import { useState } from "react";
// import axios, { Axios } from "axios";

// export default function Form() {

//     const [name, setname] = useState("")
//     const [paswd, setpaswd] = useState("")
//     const [email, setemail] = useState("")
//     const [error, seterror] = useState({})

//     const CreateCustomer = async () => {
//         try {
//             const response = await axios.post("http://174.138.39.166:5000/createMarketingVisit", {
//                 customer_name: name,
//                 location: paswd,
//                 customer_industry: email,
//             })
//             console.log("response =", response.data);

//         } catch (error) {
//             console.log("Error=", error);

//         }
//     }

//     // const ErrorAlert = ()=>{
//     //     if(error){

//     //         Alert.alert('Error', 'Failed to create user. Please try again.');
//     //         console.log("error=", error);
//     //     }
//     //      if(seterror){
//     //         Alert.alert('Success', 'User created successfully!');
//     //     }
//     // }

//     //form validation function//
//     const ValidateForm = () => {
//         let error = {}
//         if (!name) error.name = "name is required"
//         if (!paswd) error.paswd = "password is required"
//         if (!email) error.email = "email is required"
//         seterror(error)
//         return Object.keys(error).length === 0
//     }

//     const handlesubmit = () => {
//         if (ValidateForm()) {
//             setname("")
//             setpaswd("")
//             setemail("")
//             seterror({})
//         }
//     }


//     return (
//         <SafeAreaView style={{ padding: 60 }}>
//             <Text style={styles.hedding}>Customer Creation</Text>
//             <Text>Name:</Text>
//             <TextInput style={styles.input} value={name} onChangeText={setname} placeholder="enter your name" />
//             {
//                 error.name ? <Text style={styles.errorText}>{error.name}</Text> : null
//             }

//             <Text>Password:</Text>
//             <TextInput style={styles.input} value={paswd} onChangeText={setpaswd} multiline placeholder="enter your password" />
//             {
//                 error.paswd ? <Text style={styles.errorText}>{error.paswd}</Text> : null
//             }

//             <Text>Email:</Text>
//             <TextInput style={styles.input} value={email} onChangeText={setemail} multiline placeholder="enter your email" />
//             {
//                 error.email ? <Text style={styles.errorText}>{error.email}</Text> : null
//             }

//             <View style={{padding: 50}}>
//             <Button title="Submit" color={"green"} onPress={() => { handlesubmit(); CreateCustomer(); }} />
//             </View>

//         </SafeAreaView>
//     )

// }
// const styles = StyleSheet.create({
//     input: {
//         height: 40,
//         width: 250,
//         borderWidth: 1,
//         padding: 10,
//         marginTop: 10
//     },
//     hedding: {
//         fontSize: 25,
//         color: "green",
//     },
//     errorText: {
//         fontSize: 10,
//         color: "red",
//     }
// })


//----------Creation Form-------------------//
import React, { useState } from 'react';
import { View, SafeAreaView, Text, TextInput, StyleSheet, ScrollView, Button } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';



export default function Form() {

    const [source, setsource] = useState([])
    const [sales, setsales] = useState([])
    const [name, setname] = useState("")
    const [Companyname, setCompanyname] = useState("")
    const [job, setjob] = useState("")
    const [phone, setphone] = useState("")
    const [watsappnumber, setwatsappnumber] = useState("")
    const [email, setemail] = useState("")
    const [address, setaddress] = useState("")
    const [remarks, setremarks] = useState("")
    const [description, setdescription] = useState("")
    const [date, setdate] = useState("")
    const [Priority, setPriority] = useState("")


    //Source dropdown
    const Sourcedrp = [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
    ]
    //sales dropdown
    const salesperson = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 1', value: 'option1' },
    ]
    return (
        <View>
            <ScrollView>
                <View style={{ height: 40, width: 360, backgroundColor: "#F42F31", marginTop: 30 }}>
                    <Text style={{ color: "white", padding: 10 }}>  Add Leads </Text>
                </View>

                <View style={{ marginTop: 30, }}>



                    <View style={styles.container}>
                        <Text style={styles.Textinput}>Source :</Text>

                        <Dropdown


                            containerStyle={{ width: 200, height: 40 }}
                            style={{ backgroundColor: '#fafafa' }}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            dropDownStyle={{ backgroundColor: '#fafafa' }}

                        />
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.Textinput}>Sales Person :</Text>
                        <Dropdown
                            containerStyle={{ width: 200, height: 40 }}
                            style={{ backgroundColor: '#fafafa' }}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            dropDownStyle={{ backgroundColor: '#fafafa' }}

                        />
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.Textinput}>Contact Name :</Text>
                        <TextInput style={styles.input} value={name} onChangeText={setname} placeholder="enter contact name" />
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.Textinput}>Company Name :</Text>
                        <TextInput style={styles.input} value={Companyname} onChangeText={setCompanyname} placeholder="enter company name" multiline />
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.Textinput}>Job Position :</Text>
                        <TextInput style={styles.input} value={job} onChangeText={setjob} placeholder="enter job position" multiline />
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.Textinput}>Phone :</Text>
                        <TextInput style={styles.input} value={phone} onChangeText={setphone} placeholder="enter phone number" multiline />
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.Textinput}>Watsapp Number :</Text>
                        <TextInput style={styles.input} value={watsappnumber} onChangeText={setwatsappnumber} placeholder="enter whatsapp number" multiline />
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.Textinput}>Email :</Text>
                        <TextInput style={styles.input} value={email} onChangeText={setemail} placeholder="enter email" multiline />
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.Textinput}>Address :</Text>
                        <TextInput style={styles.input} value={address} onChangeText={setaddress} placeholder="enter your address" multiline />
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.Textinput}>Remarks :</Text>
                        <TextInput style={styles.input} value={remarks} onChangeText={setremarks} placeholder="enter remarks" multiline />
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.Textinput}>Description :</Text>
                        <TextInput style={styles.input} value={description} onChangeText={setdescription} placeholder="enter description" multiline />
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.Textinput}>Expected Completion Date :</Text>
                        <TextInput style={styles.input} value={date} onChangeText={setdate} placeholder="select expected completion date" multiline />
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.Textinput}>Priority :</Text>
                    </View>

                    <View style={styles.Button}>
                        <Button title='SAVE' color={"#F42F31"} />
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}

//stylesheet Api
const styles = StyleSheet.create({
    Textinput: {
        marginRight: 20,
        marginLeft: 10
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 5,
        borderRadius: 5,
        maxWidth: 200,
        marginRight: 10
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    Button: {
        width: 150,
        borderRadius: 2,
        marginLeft: 100,
        padding: 30
    }
})