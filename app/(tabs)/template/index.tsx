import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TextInput,
  Text, 
  Dimensions,
} from 'react-native';
const { width } = Dimensions.get('window');
import NavbarBottom from '@/components/ui/navbar_bottom';

export default function TemplateScreen() {
return (
    <SafeAreaView style={styles.screen}>
        <View style={styles.container}>

asd
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
});