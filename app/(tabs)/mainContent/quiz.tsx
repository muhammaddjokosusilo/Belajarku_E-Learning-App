import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TextInput,
  Text, 
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
const { width } = Dimensions.get('window');
import NavbarBottom from '@/components/ui/navbar_bottom';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function TemplateScreen() {
const navigation = useNavigation();
const quizData = {
    question: "Rumus keliling lingkaran adalah...",
    options: [
      { id: 1, label: "K=2×πr", color: "#3498DB" },
      { id: 2, label: "K=π×d", color: "#E74C3C" },
      { id: 3, label: "K=2πr", color: "#27AE60" },
      { id: 4, label: "K=π×r×d", color: "#F1C40F" },
    ],
    question2: "Sebuah lingkaran memiliki panjang jari-jari 9 cm. Keliling lingkaran tersebut adalah.... cm",
    answers: [
      { id: 1, label: "50,25", color: "#3498DB" },
      { id: 2, label: "56,52", color: "#E74C3C" },
      { id: 3, label: "62,25", color: "#F39C12" },
      { id: 4, label: "65,25", color: "#27AE60" },
    ]
};
return (
    <SafeAreaView style={styles.screen}>
        <View style={styles.container}>
            {/* Header Back */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Ionicons name="arrow-back" size={22} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Bangun Ruang</Text>
            </View>

            {/* Quiz */}
            <ScrollView contentContainerStyle={styles.quizContainer}>
                
                <View style={styles.quizCard}>
                    {/* Pertanyaan 1 */}
                    <Text style={styles.question}>{quizData.question}</Text>

                    {/* Options */}
                    <View style={styles.row}>
                    {quizData.options.map((opt) => (
                        <TouchableOpacity key={opt.id} style={[styles.option, { backgroundColor: opt.color }]}>
                        <Text style={styles.optionText}>{opt.label}</Text>
                        </TouchableOpacity>
                    ))}
                    </View>

                    {/* Pertanyaan 2 */}
                    <Text style={[styles.question, { marginTop: 25 }]}>{quizData.question2}</Text>

                    {/* Answers */}
                    <View style={styles.row}>
                    {quizData.answers.map((ans) => (
                        <TouchableOpacity key={ans.id} style={[styles.option, { backgroundColor: ans.color }]}>
                        <Text style={styles.optionText}>{ans.label}</Text>
                        </TouchableOpacity>
                    ))}
                    </View>
                </View>

                </ScrollView>

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

    quizContainer: {
        padding: 20,
        backgroundColor: "#27AE60",
        flexGrow: 1,
        alignItems: "center",
    },
    quizCard: {
        backgroundColor: "white",
        padding: 15,
        borderRadius: 15,
        width: "85%",
    },
    question: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: "center",
        color: "#333",
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 10,
    },
    option: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        minWidth: 100,
        alignItems: "center",
    },
    optionText: {
        color: "white",
        fontWeight: "bold",
    },
});