// import React, { useEffect, useState } from "react";
// import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
// import { WebView } from "react-native-webview";
// import { Ionicons } from "@expo/vector-icons";
// import * as FileSystem from "expo-file-system";

// // --------------------
// // ARRAY PDF DALAM FILE
// // --------------------
// const pdfList = [
//   {
//     id: 1,
//     title: "Bangun Datar",
//     file: require("../../assets/pdf/bangun_datar.pdf"),
//   },
// ] as const;

// // Fungsi convert require → uri
// async function loadPdf(requireFile: any) {
//   const fileName = "local_pdf.pdf";
//   const target = FileSystem.cacheDirectory + fileName;

//   await FileSystem.copyAsync({
//     from: requireFile,
//     to: target,
//   });

//   return target;
// }

// export default function PDFViewer() {
//   const [pdfUri, setPdfUri] = useState<string | null>(null);

//   // ambil PDF pertama dari array
//   useEffect(() => {
//     (async () => {
//       const uri = await loadPdf(pdfList[0].file);
//       setPdfUri(uri);
//     })();
//   }, []);

//   return (
//     <View style={styles.screen}>

//       {/* HEADER */}
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.backButton} onPress={() => console.log("Go Back")}>
//           <Ionicons name="arrow-back" size={28} color="#fff" />
//         </TouchableOpacity>

//         <Text style={styles.headerTitle}>{pdfList[0].title}</Text>
//       </View>

//       {/* PDF VIEWER */}
//       <View style={styles.pdfContainer}>
//         {pdfUri && (
//           <WebView source={{ uri: pdfUri }} style={styles.webview} />
//         )}
//       </View>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     backgroundColor: "#27AE60",
//     paddingTop: 40,
//     alignItems: "center",
//   },
//   header: {
//     width: "100%",
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 15,
//     marginBottom: 10,
//   },
//   backButton: {
//     marginRight: 20,
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#fff",
//   },
//   pdfContainer: {
//     width: "85%",
//     height: "85%",
//     borderRadius: 15,
//     overflow: "hidden",
//     backgroundColor: "white",
//   },
//   webview: {
//     flex: 1,
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
const { width } = Dimensions.get('window');
import NavbarBottom from '@/components/ui/navbar_bottom';
import { useNavigation } from '@react-navigation/native';
import { WebView } from "react-native-webview";
import { Ionicons } from '@expo/vector-icons';
import * as FileSystem from "expo-file-system";

// const pdfList = [
//   {
//     id: 1,
//     title: "Bangun Datar",
//     file: require("../../../assets/pdf/bangunDatarPDF.pdf"),
//   },
// ] as const;

// Fungsi convert require → uri
// async function loadPdf(requireFile: any) {
//   const fileName = "local_pdf.pdf";
//   const target = FileSystem.cacheDirectory + fileName;

//   await FileSystem.copyAsync({
//     from: requireFile,
//     to: target,
//   });

//   return target;
// }

export default function TemplateScreen() {
    const navigation = useNavigation();
    const [pdfUri, setPdfUri] = useState<string | null>(null);

    // ambil PDF pertama dari array
    // useEffect(() => {
    //     (async () => {
    //     const uri = await loadPdf(pdfList[0].file);
    //     setPdfUri(uri);
    //     })();
    // }, []);

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

                {/* * <View style={styles.pdfScreen}> */}

                    {/* PDF VIEWER */}
                    {/* <View style={styles.pdfContainer}> */}
                        {/* {pdfUri && ( */}
                        {/* <WebView source={{ uri: pdfUri }} style={styles.webview} /> */}
                        {/* )} */}
                    {/* </View> */}

                {/* </View> */} 

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

    pdfScreen: {
        flex: 1,
        backgroundColor: "#27AE60",
        paddingTop: 40,
        alignItems: "center",
    },
    pdfContainer: {
        width: "85%",
        height: "85%",
        borderRadius: 15,
        overflow: "hidden",
        backgroundColor: "white",
    },
    webview: {
        flex: 1,
    },
});