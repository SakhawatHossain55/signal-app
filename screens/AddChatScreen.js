import React from 'react'
import { useState } from 'react';
import { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input } from 'react-native-elements';

const AddChatScreen = ({ navigation }) => {
    const [input, setInput] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add a new Chat",
            headerBackTitle: "Chats",
        })
    }, [navigation])
    return (
        <View style={styles.container}>
            <Input
                placeholder="Enter a chat name"
                value={input}
                onChangeText={(text) => setInput(text)} />
        </View>
    )
}

export default AddChatScreen

const styles = StyleSheet.create({
    container: {

    }
})
