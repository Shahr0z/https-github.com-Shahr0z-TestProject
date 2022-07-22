import { View, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function InputField(props) {
    const [isFocused, setisFocused] = useState(true)
    const handleFocus = () => { setisFocused(true) }
    const handleBlur = () => { setisFocused(false) }
    const handleEndEdit = () => { setisFocused(false) }

    return (
        <View style={[styles.Input, { width: props.width }]}>
            <TextInput
                placeholder={props.placeholder}
                keyboardType={props.keyboardType}
                autoCapitalize="none"
                autoCorrect={false}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onEndEditing={handleEndEdit}
                style={[styles.Inputtext, {
                    borderColor: isFocused ? 'black' : 'gray', borderWidth: 1,
                }]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Input: {
        backgroundColor: 'white',
        height: 46,
        elevation: 1,
        borderRadius: 4,
        marginVertical: 14,
        justifyContent: 'center',
        elevation: 1,
        shadowOpacity: 6,
    },
    Inputtext: {
        flex: 1,
        letterSpacing: 0.5,
        textAlign: 'left',
        paddingLeft: 8,
        color: 'black',
    }
})