import React from 'react';
import * as Progress from 'react-native-progress';
export default function ProgressBar(props) {
    return (
        <Progress.Bar
            progress={props.progress}
            width={props.width}
            color={'#4B209D'}
            height={12}
            unfilledColor={'#EEEDFE'}
            borderWidth={0}
            style={{ borderRadius: 6 }}
        />
    );
}