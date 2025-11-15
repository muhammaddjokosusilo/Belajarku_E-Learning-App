import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text, 
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const { width } = Dimensions.get('window');

type Props = {
  title: string;
  onPress?: () => void;
  bgColor?: string;
  color?: string;
};

export default function CardSubContent({ title, onPress, bgColor, color }: Props) {
  return (
    <TouchableOpacity style={[styles.card, { backgroundColor: bgColor }]} onPress={onPress}>
        <Text style={[styles.cardText, { color: color }]}>{title}</Text>
        <View>
        {/* Menggunakan ikon panah sederhana, ganti dengan aset panah Anda */}
        <Text style={[styles.arrowIcon, { color: color }]}>{'>'}</Text>
        </View>
    </TouchableOpacity>
)};

const CARD_WIDTH = Math.min(311, width - 40); 

const styles = StyleSheet.create({
    card: {
        width: CARD_WIDTH,
        height: 50, // Tinggi kartu agar sesuai dengan gambar
        backgroundColor: 'white',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        marginVertical: 3, // Jarak antar kartu
        
        // Gaya bayangan kartu yang lebih halus
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    cardText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#27AE60', // Warna teks hijau
        flex: 1, // Agar teks mengambil ruang dan mendorong panah ke kanan
        textAlign: 'left',
        marginRight: 20,
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