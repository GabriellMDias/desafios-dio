import { View, Image, TouchableOpacity, Text, TextInput, Alert } from 'react-native'
import { styles } from './Styles'
import BatLogo from '../../assets/BatLogo.png'
import React, { useState } from 'react'
import StdInput from '../components/StdInput/StdInput'
import { StdButton } from '../components/StdButton/StdButton'

export default function Main() {
    const [signalActivate, setSignalActivate] = useState(false)

    const activateSignal = () => {
        setSignalActivate(true)
    }

    const sendData = () => {
        Alert.alert('Dados Enviados!')
    }

    return (
        <View style={styles.container}>
            <View style={signalActivate ? {display: 'none'} : {display: 'flex'}}>
                <Image source={BatLogo} style={styles.batLogo}/>
                
                <StdButton buttonText='Activate Bat Signal' onPress={activateSignal}/>
            </View>
            
            <View style={signalActivate ? {display: 'flex', width: '80%', gap: 5} : {display: 'none'}}>
                <StdInput labelText='Nome' placeholder='Digite o seu nome'/>
                <StdInput labelText='Telefone' placeholder='Digite o seu número de telefone' keyboardType='phone-pad'/>
                <StdInput labelText='Localização' placeholder='Digite a sua localização'/>
                <StdInput labelText='Observação' placeholder='Obs' style={{height: 100, textAlignVertical: 'top'}}/>

                <StdButton buttonText='Enviar' onPress={sendData}/>
            </View>
        </View>
    )
}