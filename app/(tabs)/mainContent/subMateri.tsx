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
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import NavbarBottom from '@/components/ui/navbar_bottom';
import YoutubePlayer from "react-native-youtube-iframe";
import CardSubContent from '@/components/ui/cardSubContent';

const { width } = Dimensions.get('window');

export default function LoginScreen() {

    const navigation = useNavigation();
    const levelEdu = [
    { 
      id: 1, 
      title: "Rumus Keliling",  
    },
    { 
      id: 2, 
      title: "Rumus Lingkaran", 
    },
    { 
      id: 3, 
      title: "Download PDF",   
    },
    { 
      id: 4, 
      title: "Quiz",   
    }
    ];

    const linkTarget = [
      '/Dashboard',
      '/Dashboard',
      '/Dashboard',
      '/Dashboard',
    ] as const;

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


                <View style={{ marginTop: 50}}>
                    <YoutubePlayer
                        height={200}
                        // play={playing}
                        videoId={"iee2TATGMyI"}
                        onChangeState={onStateChange}
                    />
                </View>

                {/* Daftar Pilihan Materi */}
                <View style={styles.cardListContainer}>
                    {levelEdu.map((item, index) => (
                    <Link href={linkTarget[index]} asChild>
                        <View style={{ marginBottom: 20 }} key={item.id}>
                            <CardSubContent
                            title={item.title}
                            bgColor={
                                    index === levelEdu.length - 2
                                    ? '#27AE60'   // hijau
                                    : index === levelEdu.length - 1
                                    ? '#6E8CFB'   // biru
                                    : '#FFFFFF'   // default putih
                                } 
                            color={
                                    index === levelEdu.length - 2
                                    ? '#FFFFFF' 
                                    : index === levelEdu.length - 1
                                    ? '#FFFFFF'  
                                    : '#27AE60'   // default putih
                                } 
                            />
                        </View>
                    </Link>
                    ))}
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
        width: 402, // Menggunakan lebar dan tinggi yang disediakan
        height: 874,
        backgroundColor: '#27AE60', // Hijau yang terlihat di gambar
        borderRadius: 20,
        // Aligment diganti agar konten dimulai dari atas
        alignItems: 'center', 
        justifyContent: 'flex-start',
        paddingTop: 50, // Ruang untuk status bar/header
        paddingHorizontal: 20,
        
        // shadow (iOS)
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.12,
        shadowRadius: 12,
        // elevation (Android)
        elevation: 8,
    },

    // --- Gaya Header ---
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
    
    // Card Materi
    cardListContainer: {
        width: '100%',
        alignItems: 'center', // Agar kartu berada di tengah
    },
    card: {
        width: CARD_WIDTH,
        height: 120, // Tinggi kartu agar sesuai dengan gambar
        backgroundColor: 'white',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginVertical: 15, // Jarak antar kartu
        
        // Gaya bayangan kartu yang lebih halus
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    cardImage: {
        width: 100, // Lebar gambar
        height: 80, // Tinggi gambar
    },
    cardText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#27AE60', // Warna teks hijau
        flex: 1, // Agar teks mengambil ruang dan mendorong panah ke kanan
        textAlign: 'right',
        marginRight: 20,
    },
    arrowContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderColor: '#27AE60',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    arrowIcon: {
        fontSize: 20,
        color: '#27AE60',
        fontWeight: 'bold',
        // Sedikit penyesuaian untuk sentrasi visual panah '>'
        marginTop: -3, 
        marginLeft: 2, 
    }
});