import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text, 
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


export default function ProfileScreen() {
    const router = useRouter();
    return (
        <SafeAreaView style={styles.screen}>
                <View style={styles.container}>
                    {/* Header dengan tombol kembali dan judul */}
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => router.push("/Dashboard")} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={22} color="#fff" />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>Setting</Text>
                    </View>

                    {/* Content */}
                    <View style={{ marginTop: 10, backgroundColor: '#D9D9D9', width: '90%', height: '50%'}}>
                        <View style={styles.conButton}>
                            <TouchableOpacity onPress={() => router.push("/setting")} style={styles.button}>
                                <Text style={{ fontWeight: 'bold' }}>Ganti Tema</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.conButton}>
                            <TouchableOpacity onPress={() => router.push("/setting")} style={styles.button}>
                                <Text style={{ fontWeight: 'bold' }}>Bahasa Aplikasi</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.conButton}>
                            <TouchableOpacity onPress={() => router.push("/setting")} style={styles.button}>
                                <Text style={{ fontWeight: 'bold' }}>Tentang Aplikasi</Text>  
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                </View>
        </SafeAreaView>
    )
    
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#27AE60',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    container: {
        width: 402,
        height: 874,
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center', 
        justifyContent: 'flex-start',
        paddingTop: 50, // Ruang untuk status bar/header
        paddingHorizontal: 20,

        // // shadow (iOS)
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 0 },
        // shadowOpacity: 0.12,
        // shadowRadius: 12,
        // // elevation (Android)
        // elevation: 8,
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

    // Button Content
    conButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        width: '65%',
        backgroundColor: '#FAFAFA',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        // iOS Shadow Properties
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        // Android Elevation
        elevation: 5,
    },
})