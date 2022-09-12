import { TextInput } from 'react-native'
import React from 'react'



interface InputProps {
    handleChange?: any;
    value?: string;
    multiLine?: boolean;
    placeHolder?: string
}

export default function Input({ handleChange, value, multiLine, placeHolder }: InputProps) {
    return (
        <TextInput
            underlineColorAndroid="#ebebeb"
            placeholder={placeHolder}
            placeholderTextColor="#828282"
            onChangeText={handleChange}
            value={value}
            autoFocus={true}
            multiline={multiLine}
        />
    );
}
