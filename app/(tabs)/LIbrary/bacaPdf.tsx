import React, { cache } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text, 
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Pdf from 'react-native-pdf';


export default function TemplateScreen() {
    const router = useRouter();
    const pdfResource = { uri: 'https://smpnegeri3jakarta.sch.id/wp-content/uploads/2022/07/BAB-6-BANGUN-RUANG.pdf', cache: 'true'}
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>

                {/* Header Back */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.push("/Dashboard")} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={22} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Bangun Ruang</Text>
                </View>

                <View style={{ flex: 1 }}>
                    <Pdf
                        trustAllCerts={false}
                        source={pdfResource}
                        style={styles.pdf}
                        onLoadComplete={(numberOfPages, filePath) => {
                            console.log('number of pages: ${numberOfPages}');
                        }}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

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

    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});