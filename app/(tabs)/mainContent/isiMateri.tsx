import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text, 
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const { width } = Dimensions.get('window');
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function TemplateScreen() {
    const router = useRouter();
return (
    <SafeAreaView style={styles.screen}>
        <View style={styles.container}>

            {/* Header Back */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.push("/mainContent/subMateri")} style={styles.backButton}>
                <Ionicons name="arrow-back" size={22} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>SD</Text>
            </View>

            {/* Content */}
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF', width: '100%', borderRadius: 20, padding: 20 }}>
                <Text style={{ color: 'black', fontSize: 18 }}>BANGUN RUANG</Text>
                <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center', padding: 20, borderBottomWidth: 1, borderBottomColor: '#000000', width: '100%', borderRightWidth: 1, borderRightColor: '#000000' }}>
                    <Text style={{ color: 'black', fontSize: 30, marginBottom: 10 }}>
                        V = p x l x t 
                    </Text>
                    <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center', padding: 20, borderBottomWidth: 1, borderBottomColor: '#000000', width: '100%', borderRightWidth: 1, borderRightColor: '#000000' }}>
                        <Text style={{ color: 'black', fontSize: 22, marginBottom: 10 }}>
                            p = panjang 
                            {'\n'}
                            l = lebar
                            {'\n'}
                            t = tinggi
                        </Text>
                    </View>
                </View>
            </View>
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

//   header
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