import {Text, View, Image, TouchableOpacity} from 'react-native'
import * as WebBrowser from 'expo-web-browser';

import { styles } from './HomeStyles'
import ProfilePicture from '../../../assets/profile-picture.jpg'
import AntDesign from '@expo/vector-icons/AntDesign';

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
                    <AntDesign name="linkedin-square" size={24} color="black" />
                    LinkedIn
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{width: '70%'}} onPress={() => openExternalLink('https://github.com/GabriellMDias')}>
                <Text style={styles.button}>
                    <AntDesign name="github" size={24} color="black" />
                    GitHub
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{width: '70%'}} onPress={() => navigation.navigate('Skills')}>
                <Text style={styles.button}>
                    <AntDesign name="star" size={24} color="black" />
                    Skills
                </Text>
            </TouchableOpacity>
        </View>
    )
}