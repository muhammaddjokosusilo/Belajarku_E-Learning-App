import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Modal,
  Text, 
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


const { width } = Dimensions.get('window');

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
                    <View style={{ marginTop: 10, backgroundColor: '#000', width: '90%', height: '50%', color: '#fff',  }}>
                        <View style={{ backgroundColor: '#0ff', width: '30%', height: '30%' }}>

                        </View>
                        <View style={{ backgroundColor: '#0ff', width: '30%', height: '30%' }}>

                        </View>
                        <View style={{ backgroundColor: '#0ff', width: '30%', height: '30%' }}>

                        </View>
                    </View>
                </View>
        </SafeAreaView>
    )
    
};

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
})