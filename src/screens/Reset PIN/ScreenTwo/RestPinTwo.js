import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import ProgressBar from '../../ProgressBar/Index'
import Questions from '../../../Language/Questions.json'
import InputField from '../../../components/InputField';
import CustomButton from '../../../components/CustomButton';
import Styles from '../ScreenOne/Styles'

export default function RestPinTwo({ navigation }) {
    const [point, setpoint] = useState(0.3);
    useEffect(() => {
        setpoint(0.3)
    });
    return (
        <View style={Styles.Main}>
            <View>
                <TouchableOpacity onPress={() => { navigation.navigate('RestPinOne') }}>
                    <Image source={require('../../../../assets/images/left.png')} style={Styles.Backbtn} />
                </TouchableOpacity>
            </View>
            <View style={Styles.Databox}>
                <View><Image source={require("../../../../assets/images/logo.jpg")} style={Styles.logo} resizeMode={'cover'} /></View>
                <View>
                    <Text style={Styles.Title}>{Questions.Title}</Text>
                </View>
                <View>
                    <ProgressBar progress={point} width={280} />
                </View>
                <View>
                    <Text style={Styles.SubTitle}>{Questions.SubTitle}</Text>
                    <Text style={Styles.SubTitle2}>{Questions.SubTitle2}</Text>
                </View>
                <View style={Styles.QuesBox}>
                    <Text style={Styles.Questions}>{Questions['Question no 1']}</Text>
                    <InputField placeholder={Questions.placeholder}
                        keyboardType={'default'} width={'96%'} />
                </View>
                <View style={Styles.QuesBox}>
                    <Text style={Styles.Questions}>{Questions['Question no 2']}</Text>
                    <InputField placeholder={Questions.placeholder}
                        keyboardType={'default'} width={'96%'} />
                </View>
                <View style={Styles.QuesBox}>
                    <Text style={Styles.Questions}>{Questions['Question no 3']}</Text>
                    <InputField placeholder={Questions.placeholder} keyboardType={'default'} width={'96%'} />
                </View>
                <View style={Styles.Btnbox}>
                    <CustomButton title={'Continue'} backgroundColor={'#5545BF'} onPress={() => { setpoint(0.3), navigation.navigate('RestPinThree') }} />
                </View>
            </View>
        </View>
    )
}