import {Text, View, Image, TouchableOpacity} from 'react-native'
import * as WebBrowser from 'expo-web-browser';

import { styles } from './HomeStyles'
import ProfilePicture from '../../../assets/profile-picture.jpg'

export default function Home({ navigation }: any) {

    const openExternalLink = async (link: string) => {
        let result = await WebBrowser.openBrowserAsync(link);
      };


    return (
        <View style={styles.container}>
            <Image source={ProfilePicture} style={styles.profilePicture}/>

            <Text style={styles.nameText}>Gabriel Moreira Dias</Text>

            <TouchableOpacity style={{width: '70%'}} onPress={() => openExternalLink('https://www.linkedin.com/in/gabriellmdias/')}>
                <Text style={styles.button}>
                    LinkedIn
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{width: '70%'}} onPress={() => openExternalLink('https://github.com/GabriellMDias')}>
                <Text style={styles.button}>
                    GitHub
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{width: '70%'}} onPress={() => navigation.navigate('Skills')}>
                <Text style={styles.button}>
                    Skills
                </Text>
            </TouchableOpacity>
        </View>
    )
}