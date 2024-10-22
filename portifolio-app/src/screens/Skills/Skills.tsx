import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native"
import * as WebBrowser from 'expo-web-browser';

import ProfilePicture from '../../../assets/profile-picture.jpg'
import { styles } from "./SkillsStyles"

export default function Skills() {
    const openExternalLink = async (link: string) => {
        let result = await WebBrowser.openBrowserAsync(link);
      };

    return(
        <View style={styles.container}>
            <Image source={ProfilePicture} style={styles.profilePicture}/>

            <Text style={styles.title}>Minhas Habilidades</Text>

            <ScrollView contentContainerStyle={{gap: 10}}>
                <Text style={styles.text}>JavaScript: ⭐⭐⭐⭐⭐</Text>
                <Text style={styles.text}>HTML: ⭐⭐⭐</Text>
                <Text style={styles.text}>CSS: ⭐⭐⭐</Text>
                <Text style={styles.text}>React: ⭐⭐⭐</Text>
                <Text style={styles.text}>ReactNative: ⭐⭐⭐</Text>
                <Text style={styles.text}>SQL: ⭐⭐⭐⭐</Text>
                <Text style={styles.text}>Python: ⭐⭐⭐</Text>
                <Text style={styles.text}>Java: ⭐⭐⭐</Text>
                <Text style={styles.text}>Spring: ⭐⭐</Text>
                <Text style={styles.text}>C: ⭐⭐</Text>
            </ScrollView>

            <TouchableOpacity style={{width: '100%'}} onPress={() => openExternalLink('https://wa.me/5515996375886?text=')}>
            <Text style={styles.button}>
                Fale Comigo
            </Text>
        </TouchableOpacity>
        </View>
    )
}