// //product listing

// import { StatusBar } from "expo-status-bar";
// import { View, Text, Image, Button, StyleSheet, ScrollView, FlatList } from "react-native";
// import { SliderBox } from "react-native-image-slider-box";
// import axios from "axios";
// import { useState, useEffect } from "react";

// export default function App() {

//   const [data, setdata] = useState([])

//   useEffect(() => {
//     getAPI();
// }, []);


//   const getAPI = () => {
//     axios({
//       method: "GET",
//       url: "http://139.59.66.191:3016/viewProducts"
//     }).then(res =>{
//       // console.log(res.data);
//       setdata(res.data.data)
//     })
//     .catch(err => console.log(err))
//   }

//   const renderProduct = ({ item }) => {
//     return (
//         <View style={styles.card}>
//             {item.image_url && <Image source={{ uri: item.image_url }} style={styles.image} />}
//             {item.product_name && <Text style={styles.title}>{item.product_name}</Text>}
//             {item.cost && <Text style={styles.description}>Cost : $ {item.cost}</Text>}
//         </View>
//     );
// };

// const renderTwoProducts = ({ item, index }) => {
//   if (index % 2 === 0) {
//       return (
//           <View style={styles.row}>
//               <View style={styles.cardContainer}>
//                   {renderProduct({ item })}
//               </View>
//               {data[index + 1] && (
//                   <View style={styles.cardContainer}>
//                       {renderProduct({ item: data[index + 1] })}
//                   </View>
//               )}
//           </View>
//       );
//   } else {
//       return null;
//   }
// };


//   const image = [
//     require("./assets/OIP.jpeg"),
//     require("./assets/OIP (1).jpeg"),
//     require("./assets/OIP (2).jpeg")
//   ]
//   const logoimg = require("./assets/shansHome.png")
//   const boximage = require("./assets/download.jpeg")
//   const boximage2 = require("./assets/th.jpeg")
//   const boximage3 = require("./assets/th (1).jpeg")

//   return (
//     <View>
//       <ScrollView>
//         <StatusBar backgroundColor="orange" />
//         <Image source={logoimg} style={{ height: 100, width: 200, marginTop: 20, }} />
//         <Image source={{ uri: "https://th.bing.com/th/id/OIP.ji-gbbDBcL1g7q_xGrxP4gHaHa?w=193&h=192&c=7&r=0&o=5&dpr=1.5&pid=1.7" }} style={{ height: 20, width: 20, marginLeft: 300, marginTop: -60 }} />
//         <View style={{ color: "orange", padding: 50 }}>
//           <Button title="what are you looking for ?" color={"black"} />
//           <Text style={{ marginTop: 10 }}>Discount available for Bulk Purchase</Text>
//         </View>

//         <View>
//           <SliderBox images={image} dotColor="orange" />
//         </View>

//         <View style={styles.container2}>
//           <View style={styles.Box}>
//             <Image source={boximage} style={styles.smallimg} />
//             <Button title="Pickup" color={"green"} />
//           </View>
//           <View style={styles.Box}>
//             <Image source={boximage2} style={styles.smallimg} />
//             <Button title="Services" color={"red"} />
//           </View>
//           <View style={styles.Box}>
//             <Image source={boximage3} style={styles.smallimg} />
//             <Button title="Customers" color={"blue"} />
//           </View>
//         </View>

//         <FlatList
//                 data={data}
//                 renderItem={renderTwoProducts}
//                 keyExtractor={(item) => item._id}
//             />

//       </ScrollView>
//     </View>
//   )
// }

// //stylesheet api
// const styles = StyleSheet.create({
//   container2: { padding: 60, flexDirection: 'row', paddingHorizontal: 20, justifyContent: 'space-between', },
//   Box: {
//     height: 100,
//     width: 100,
//     borderWidth: 2,
//     borderColor: "black",
//     borderRadius: 5,
//     padding: 5
//   },
//   Box2: {
//     height: 150,
//     width: 150,
//     borderWidth: 2,
//     borderColor: "yellow",
//     borderRadius: 5,
//     padding: 5
//   },
//   smallimg: {
//     height: 50,
//     width: 50,
//     marginLeft: 20
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 10,
//     marginBottom: 10,
//     shadowColor: '#000',
//     shadowOffset: {
//         width: 0,
//         height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
// },
// image: {
//     width: '100%',
//     height: 200,
//     borderRadius: 10,
//     marginBottom: 10,
// },
// title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
// },
// description: {
//     fontSize: 16,
// },
// container: {
//   flex: 1,
//   padding: 10,
// },
// row: {
//   flexDirection: 'row',
//   justifyContent: 'space-between',
//   marginBottom: 10,
// },
// cardContainer: {
//   width: '48%',
// },
// });


import { View } from "react-native";
import Form from "./Component/Form";

export default function App() {
  return (
    <View>
      <Form />
    </View>
  )
}