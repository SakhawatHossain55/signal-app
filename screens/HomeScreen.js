import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { StyleSheet, ScrollView, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import CustomListItem from '../components/CustomListItem'
import { auth } from '../firebase'

const HomeScreen = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Signal',
            headerStyle: {backgroundColor: '#fff'},
            headerTitleStyle: {color: 'black'},
            headerTitleColor: 'black',
            headerLeft: () => <View style={{ marginLeft: '20'}}>
                <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
            </View>
        });
    }, [])
    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
