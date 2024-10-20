import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

import { styles } from './StdButtonStyles';

interface StdButtonProps extends TouchableOpacityProps {
    buttonText?: string
}

export function StdButton({buttonText = '', ...props}:StdButtonProps) {
  return (
    <TouchableOpacity {...props}>
        <Text style={styles.button}>
            {buttonText}
        </Text>
    </TouchableOpacity>
  );
}