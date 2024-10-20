import React from 'react';
import { TextInput, TextInputProps, View, Text } from 'react-native';

import { styles } from './StdInputStyles';

interface StdInputProps extends TextInputProps {
    labelText?: string
}

export default function StdInput({labelText = '', style,  ...props}: StdInputProps) {
  return (
    <View>
        <Text style={styles.label}>{labelText}</Text>
        <TextInput style={[styles.textInput, style]} {...props}/>
    </View>
  );
}