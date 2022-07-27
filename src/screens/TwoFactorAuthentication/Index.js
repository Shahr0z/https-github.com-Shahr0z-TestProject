import { View, Text, Switch, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Styles from './Styles'

export default function TwoFactorAuthentication() {
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabledTwo, setIsEnabledTwo] = useState(true);
    const [isEnabledThree, setIsEnabledThree] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitchTwo = () => setIsEnabledTwo(previousState => !previousState);
    const toggleSwitchThree = () => setIsEnabledThree(previousState => !previousState);

    return (
        <View style={Styles.Main}>
            <View style={Styles.dataBox}>
                <View>
                    <TouchableOpacity style={Styles.backBox}>
                        <Image source={require('../../../assets/images/close.png')} style={Styles.backBtn} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Image source={require("../../../assets/images/logo.jpg")} style={Styles.logo} resizeMode={'cover'} />
                </View>
                <View style={Styles.otherBox}>
                    <View style={Styles.titleBox}>
                        <Text style={Styles.Title}>Enable two-step</Text>
                        <Text style={Styles.Title}>authentication</Text>
                    </View>
                    <View style={Styles.subTitleBox}>
                        <Text style={Styles.subTitle}>
                            Help secure your wallet by enabling a</Text>
                        <Text style={Styles.subTitle}>second authentication method. This extra</Text>
                        <Text style={Styles.subTitle}>step ensures that is really you trying to</Text>
                        <Text style={Styles.subTitle}>login.</Text>
                    </View>
                    <View style={Styles.switchBox}>
                        <Text style={Styles.bodyStyle}>Two-step authentication</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#63C50B" }}
                            thumbColor={isEnabled ? "white" : "white"}
                            ios_backgroundColor="gray"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <View style={Styles.faceIdBox}>
                        <View style={Styles.faceId}>
                            <Text style={Styles.bodyStyle}>Face ID</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#63C50B" }}
                                thumbColor={isEnabledTwo ? "white" : "white"}
                                ios_backgroundColor="gray"
                                onValueChange={toggleSwitchTwo}
                                value={isEnabledTwo}
                            />
                        </View>
                        <View style={Styles.faceId}>
                            <Text style={Styles.bodyStyle}>PIN code</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#63C50B" }}
                                thumbColor={isEnabledThree ? "white" : "white"}
                                ios_backgroundColor="gray"
                                onValueChange={toggleSwitchThree}
                                value={isEnabledThree}
                                disabled={isEnabled === false ? true : false}
                            />
                        </View>
                    </View>
                </View>
                <View style={Styles.btnBox}>
                    {isEnabled === false ? <View>
                        <Text style={Styles.manageText}>Manage it later in Settings</Text>
                    </View> : <View>
                        <TouchableOpacity>
                            <Text style={Styles.btnText}>Continue</Text>
                        </TouchableOpacity>
                    </View>}
                </View>
            </View>
        </View>
    )
}