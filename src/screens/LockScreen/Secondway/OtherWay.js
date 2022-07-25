import { View, Text } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function OyherTimer({ navgation }) {
    const [SaveTime, setSaveTime] = useState();
    const [NewTime, setNewTime] = useState()
    const prevValue = useRef('')
    console.log('======>', SaveTime)
    const CheckTimerValue = () => {
        if (SaveTime != 0) {

        } else {
            navgation.navigate('Password')
        }
    }

    const storeData = async () => {
        try {
            const res = await AsyncStorage.setItem('@Key01', JSON.stringify(prevValue))
            alert('data saved')
            console.log('======>', JSON.parse(res))
        } catch (e) {
            alert('error')
        }
    }
    const getData = async () => {
        try {
            const res1 = await AsyncStorage.getItem('@key01')
            setNewTime(res1)
        }
        catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        storeData()
        getData()
        setSaveTime(NewTime);
        prevValue.current = SaveTime;
    }, [SaveTime])
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <CountdownCircleTimer
                isPlaying
                duration={30}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[7, 5, 2, 0]}
                updateInterval={0}
            >
                {({ remainingTime }) =>

                    <Text style={{ fontWeight: 'bold', fontSize: 26 }}>{setSaveTime(remainingTime)}{SaveTime}</Text>}
            </CountdownCircleTimer>
        </View>
    )
}
