import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function GetTime() {

    const [curTime, setcurTime] = useState([''])
    const [asynSetTime, setasynSetTime] = useState()
    const UpdateTime = asynSetTime + 60;


    useEffect(() => {
        setInterval(() => {
            setcurTime(
                new Date().getTime() / 1000 | 0
            )
        }, 1000)
        storeData();
        getData()
        return () => {
            clearInterval(curTime);
        };
    })
    const Check = () => {
        if (UpdateTime === curTime) {
            navigation.naviagte('Password')
        } else {
            navigation.naviagte('Timer')
        }
    }

    const storeData = async () => {
        try {
            await AsyncStorage.setItem('@Key01', JSON.stringify(curTime))
        } catch (e) {
            alert('error')
        }
    }
    const getData = async () => {
        try {
            const result = await AsyncStorage.getItem('@key01')
            setasynSetTime(JSON.parse(result))
        }
        catch (error) {
            alert(error)
        }
    }
    return (
        <View style={styles.mainBox}>
            <Text style={styles.textStyle}>GetTime</Text>
            {curTime.map(item => { <Text style={styles.textStyle}>{item.toString()}</Text> })}
            <Text style={styles.textStyle}>{asynSetTime}</Text>
            <Text style={styles.textStyle}>{UpdateTime}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainBox: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    textStyle: { fontWeight: 'bold', fontSize: 26, color: 'black' }
})





// const [hour, sethour] = useState('')
// const [minutes, setminutes] = useState('')
// const [seconds, setseconds] = useState('')
// setInterval(() => {
//     sethour(
//         new Date().getHours()
//     )
// }, 1000)
// setInterval(() => {
//     setminutes(
//         new Date().getMinutes()
//     )
// }, 1000)
// setInterval(() => {
//     setseconds(
//         new Date().getSeconds()
//     )
// }, 1000)
// <Text style={styles.textStyle}>{hour}:{minutes}:{seconds}</Text>





// const [time, setTime] = useState(null);
// const getCurrentTime = () => {
//     let today = new Date();
//     let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
//     let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
//     let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
//     return hours + ':' + minutes + ':' + seconds;
// }
// useEffect(()=>{ let time = getCurrentTime();
//     setTime(time)})

// <Text style={styles.textStyle}>{'Current time'} - {time}</Text>