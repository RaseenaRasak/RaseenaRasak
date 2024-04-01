import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Provider as PaperProvider, Appbar, Card, Button, Avatar, IconButton } from 'react-native-paper';


export default function PaperExple() {
    return (
        <View>
            <PaperProvider>
                <Appbar style={{ backgroundColor: "blue", marginVertical: 30, }}>
                <Appbar.BackAction  color='white'/>
                    <Appbar.Content title="Title" color='white'/>
                    <Appbar.Action icon="calendar" color='white' onPress={() => { }} />
                    <Appbar.Action icon="magnify" color='white' onPress={() => { }} />
                    <Appbar.Action icon="delete" color='white' onPress={() => { }} />
                    <Appbar.Action icon="label" color='white' onPress={() => { }} />
                    <Appbar.Action icon="mail" color='white' onPress={() => { }} />
                </Appbar>

                <Card.Title
                    title="Card Title"
                    subtitle="Card Subtitle"
                    left={(props) => <Avatar.Icon {...props} icon="folder" />}
                    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
                    style={{marginTop: -10}}
                />


                <Card.Cover source={{ uri: 'https://t.ly/e0Nz0' }} />

                <Card.Actions style={styles.cardaction}>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>

                <Card.Title
                    title="Card Title"
                    subtitle="Card Subtitle"
                    left={(props) => <Avatar.Icon {...props} icon="folder" />}
                    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
                    style={{marginTop: -150}}
                />


                <Card.Cover source={{ uri: 'https://t.ly/aTQCi' }} />

                <Card.Actions style={styles.cardaction}>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>

            </PaperProvider>
        </View>
    )
}

const styles = StyleSheet.create({
    cardaction: {
        height: 200,
        width: 200,
        position: "relative",
        left: 150,
        bottom: 70
    }
})