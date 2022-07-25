import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import CountDown from 'react-native-countdown-component';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TimerScreen({ navigation }) {
    const [curTime, setcurTime] = useState(0)
    const [asynSetTime, setasynSetTime] = useState(0);
    const UpdateTime = asynSetTime + 40;
    const storeData = async () => {
        try {
            await AsyncStorage.setItem('@Key01', JSON.stringify(curTime))
            alert('data saved')
        } catch (e) {
            alert('error')
        }
    }
    const getData = async () => {
        try {
            const result = await AsyncStorage.getItem('@key01')
            setasynSetTime(result)
        }
        catch (error) {
            alert(error)
        }
    }
    const checkTime = () => {
        if (curTime === UpdateTime) {
            navigation.navigate('PasswordScreen')
        }
    }

    useEffect(() => {
        setInterval(() => {
            setcurTime(
                new Date().getTime() / 1000 | 0,
            )
        }, 1000);
        storeData();
        getData();
        checkTime()
        clearInterval(curTime)
    }, []); 8, 44
    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
            <CountDown
                until={60 * 1}
                size={30}
                onFinish={() => navigation.navigate('PasswordScreen')}
                digitStyle={{ backgroundColor: '#FFF' }}
                digitTxtStyle={{ color: '#1CC625' }}
                timeToShow={['H', 'M', 'S']}
                timeLabels={{ h: 'Hrs', m: 'Min', s: 'Sec' }}
            />

            <Text>{curTime}</Text>
            <Text>{asynSetTime}</Text>
            <Text>{UpdateTime}</Text>
        </View>
    )
}


// const getData = async () => {
//     try {
//         const value = await AsyncStorage.getItem('@Key01')
//         setTimeChecker(value)

//     } catch (e) {
//         // error reading value
//     }
// }

// const Check = () => {
//     setTimeout(() => {
//         navigation.navigate('Password')
//     }, 2000);
// }
// useEffect(() => {
//     storeData()
// })