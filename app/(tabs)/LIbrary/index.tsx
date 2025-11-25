import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text, 
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import CardMateri from '@/components/ui/CardLibrary';


export default function LibraryScreen() {
    const router = useRouter();

    const libraryItems = [
        { id: 1, title: 'Bangun Datar', subject: 'Matematika', color: '#FF5C5C', pdf: 'BangunDatar.pdf' },
        { id: 2, title: 'Aljabar', subject: 'Matematika', color: '#2E537D', pdf: 'Aljabar.pdf' },
        { id: 3, title: 'Termokimia', subject: 'Kimia', color: '#556E7A', pdf: 'Termokimia.pdf' },
    ];
    
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
                {/* Header Back */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.push("/Dashboard")} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={22} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Library</Text>
                </View>
                
                {/* Navigation Back End */}

                {/* List Items */}
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                  {libraryItems.map((item) => (
                    <View style={{ marginBottom: 20 }} key={item.id}>
                      <CardMateri
                        titleCard={item.title}
                        subject={item.subject}
                        color={item.color}
                        onPress={() => router.push("/LIbrary/bacaPdf")}
                      />
                    </View>
                  ))}
                </View>
                {/* Navbar Bottom End */}
            </View>
        </SafeAreaView>
    );
}


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
      backgroundColor: '#27AE60',
      borderRadius: 20,
      alignItems: 'center', 
      justifyContent: 'flex-start',
      paddingTop: 50, // Ruang untuk status bar/header
      paddingHorizontal: 20,

    //   // shadow (iOS)
    //   shadowColor: '#000',
    //   shadowOffset: { width: 0, height: 8 },
    //   shadowOpacity: 0.12,
    //   shadowRadius: 12,
    //   // elevation (Android)
    //   elevation: 8,
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