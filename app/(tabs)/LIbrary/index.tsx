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
import NavbarBottom from '@/components/ui/navbar_bottom';
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
                {/* Navigation Back */}
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
                        onPress={() => console.log('Buka PDF clicked')}
                      />
                    </View>
                  ))}
                </View>

                {/* Navbar Bottom */}
                <NavbarBottom
                    activeRoute={2}
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