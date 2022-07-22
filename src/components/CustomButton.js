import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';


const CustomButton = (props) => {
    return (
        <TouchableOpacity
            style={[{
                width: '96%',
                borderColor: props.borderColor ? props.borderColor : 'white',
                borderWidth: 0.5,
                shadowOpacity: 10,
                elevation: 2,
                borderRadius: props.borderRadius ? props.borderRadius : 4,
                marginVertical: 10,
                backgroundColor: props.backgroundColor
            }]}
            onPress={props.onPress}>
            <View
                style={{
                    padding: props.padding,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Text
                    style={[styles.text, { color: props.color ? props.color : 'white' }]}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    text: {
        paddingVertical: 10,
        fontSize: 19,
        fontWeight: '900',
        textAlign: 'center',
        letterSpacing: 2,
    }
})
export default CustomButton;