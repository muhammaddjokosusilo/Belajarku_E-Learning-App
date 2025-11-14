// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import CardLibrary from '@/components/ui/CardLibrary'; // pastikan path-nya sesuai
// import { useNavigation } from '@react-navigation/native';

// export default function MyLibraryScreen() {
//   const navigation = useNavigation();

//   // Data contoh, kamu bisa ubah ke data dinamis
//   const libraryItems = [
//     { id: 1, title: 'Bangun Datar', subject: 'Matematika', color: '#FF5C5C', pdf: 'BangunDatar.pdf' },
//     { id: 2, title: 'Aljabar', subject: 'Matematika', color: '#2E537D', pdf: 'Aljabar.pdf' },
//     { id: 3, title: 'Termokimia', subject: 'Kimia', color: '#556E7A', pdf: 'Termokimia.pdf' },
//   ];

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Ionicons name="arrow-back" size={22} color="#fff" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>My Library</Text>
//       </View>

//       {/* List Card */}
//       <ScrollView contentContainerStyle={styles.cardContainer}>
//         {libraryItems.map((item) => (
//           <CardLibrary
//             key={item.id}
//             title={item.title}
//             subject={item.subject}
//             backgroundColor={item.color}
//             onPress={() => console.log(`Buka ${item.pdf}`)}
//           />
//         ))}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#2DCB75',
//     paddingTop: 40,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     marginBottom: 10,
//   },
//   backButton: {
//     marginRight: 10,
//   },
//   headerTitle: {
//     fontSize: 20,
//     color: '#fff',
//     fontWeight: '700',
//   },
//   cardContainer: {
//     paddingHorizontal: 20,
//     paddingBottom: 20,
//   },
// });
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TextInput,
  Text, 
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import NavbarBottom from '@/components/ui/navbar_bottom';
import CardMateri from '@/components/ui/CardLibrary';


export default function LibraryScreen() {
    const navigation = useNavigation();

    const libraryItems = [
        { id: 1, title: 'Bangun Datar', subject: 'Matematika', color: '#FF5C5C', pdf: 'BangunDatar.pdf' },
        { id: 2, title: 'Aljabar', subject: 'Matematika', color: '#2E537D', pdf: 'Aljabar.pdf' },
        { id: 3, title: 'Termokimia', subject: 'Kimia', color: '#556E7A', pdf: 'Termokimia.pdf' },
    ];
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
                {/* Navigation Back */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={22} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>My Library</Text>
                </View>
                
                {/* Navigation Back End */}

                {/* List Items */}
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                    <CardMateri
                        titleCard="Bangun Datar"
                        subject="Matematika"
                        color="#FF5C5C"
                        onPress={() => console.log('Buka PDF clicked')}
                    />
                </View>

                {/* Navbar Bottom */}
                <NavbarBottom
                    items={[
                        { icon: require('../../../assets/icon/Home.png'), route: '../auth/login' },
                    ]}
                />
                {/* Navbar Bottom End */}
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

    // shadow (iOS)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    // elevation (Android)
    elevation: 8,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 64,
    paddingHorizontal: 20,
    
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
  },
});