import React, { useState, useCallback, useRef } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TextInput,
  Text, 
  Dimensions,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import NavbarBottom from '@/components/ui/navbar_bottom';
import YoutubePlayer from "react-native-youtube-iframe";
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function LoginScreen() {
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state: string) => {
        if (state === "ended") {
        setPlaying(false);
        Alert.alert("video has finished playing!");
        }
    }, []);

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
                 {/* Header dengan tombol kembali dan judul */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={22} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Level Education</Text>
                </View>


                <View style={{ marginTop: 50, backgroundColor: 'white', padding: 0, borderRadius: 50 }}>
                    <YoutubePlayer
                        height={200}
                        // play={playing}
                        videoId={"iee2TATGMyI"}
                        onChangeState={onStateChange}
                    />
                </View>

                {/* Navbar Bottom */}
                <NavbarBottom
                items={[
                    { icon: require('../../../assets/icon/Home.png'), route: '../auth/login' },
                ]}
                />

            </View>
        </SafeAreaView>
    );
}



const CARD_WIDTH = Math.min(311, width - 40);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: 402,
    height: 874,
    backgroundColor: '#27AE60',
    borderRadius: 20,
    alignItems: 'center',

    // shadow (iOS)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    // elevation (Android)
    elevation: 8,
  },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 30, // Jarak antara header dan kartu
        width: '100%',
    },
    backButton: {
        padding: 5,
        marginRight: 20,
    },
    backIcon: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },

});