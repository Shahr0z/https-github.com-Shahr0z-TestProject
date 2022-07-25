import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import Inputfield from '../../../components/InputField'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function PasswordScreen({ navigation }) {

    const [save, setsave] = useState();
    const checkPassword = () => {
        if (save != '1234') {
            navigation.replace('TimerScreen')
        }
    }

    const [asynSetTime, setasynSetTime] = useState()
    const UpdateTime = asynSetTime + 60;
    const getData = async () => {
        try {
            const result = await AsyncStorage.getItem('@key01')
            const finalRes = JSON.parse(result)
            setasynSetTime(finalRes)
        }
        catch (error) {
            alert(error)
        }
    }

    const checkUpdateTime = () => {
        if (asynSetTime != UpdateTime) {
            navigation.navigate('TimerScreen')
        }
    }
    useEffect(() => {
        getData()
        checkUpdateTime()
        clearInterval(asynSetTime)
    })
    return (
        <View style={styles.mainBox}>
            <View style={styles.textBox}>
                <Text style={styles.textStyle} >Confirm Your Identity</Text>
            </View>
            <Inputfield placeholder={'Enter Password'} keyboardType={'number-pad'} onChangeText={(val) => { setsave(val) }} />
            <TouchableOpacity onPress={checkPassword} style={{ margin: 16 }}>
                <Text style={styles.btnText}>Open Password</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    mainBox: { justifyContent: 'center', paddingHorizontal: 20, flex: 1 },
    textBox: { marginVertical: 20, justifyContent: 'center' },
    textStyle: { fontWeight: 'bold', textAlign: 'center', fontSize: 26, color: 'black' },
    btnText: { backgroundColor: 'black', paddingVertical: 14, color: 'white', textAlign: 'center', fontWeight: 'bold', borderRadius: 4 }
})