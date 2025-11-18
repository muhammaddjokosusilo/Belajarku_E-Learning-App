// import React from 'react';
// import {
//   SafeAreaView,
//   View,
//   StyleSheet,
//   Text, 
//   TouchableOpacity,
// } from 'react-native';
// import { useRouter } from 'expo-router';
// import { Ionicons } from '@expo/vector-icons';
// import Pdf from 'react-native-pdf';


// export default function TemplateScreen() {
//     const router = useRouter();
//     const pdfResource = { uri: 'https://smpnegeri3jakarta.sch.id/wp-content/uploads/2022/07/BAB-6-BANGUN-RUANG.pdf', cache: true}
//     return (
//         <SafeAreaView style={styles.screen}>
//             <View style={styles.container}>

//                 {/* Header Back */}
//                 <View style={styles.header}>
//                     <TouchableOpacity onPress={() => router.push("/Dashboard")} style={styles.backButton}>
//                         <Ionicons name="arrow-back" size={22} color="#fff" />
//                     </TouchableOpacity>
//                     <Text style={styles.headerTitle}>Bangun Ruang</Text>
//                 </View>

//                 <View style={{ flex: 1 }}>
//                     <Pdf
//                         trustAllCerts={false}
//                         source={pdfResource}
//                         style={styles.pdf}
//                         onLoadComplete={(numberOfPages, filePath) => {
//                             console.log('number of pages: ${numberOfPages}');
//                         }}
//                     />
//                 </View>
//             </View>
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     backgroundColor: '#f2f2f2',
//   },

//   container: {
//     flex: 1,
//     width: "100%",
//     height: "100%",
//     backgroundColor: '#27AE60',
//     borderRadius: 20,
//     paddingTop: 50,
//     paddingHorizontal: 20,

//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 8 },
//     shadowOpacity: 0.12,
//     shadowRadius: 12,
//     elevation: 8,
//   },

//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//     width: '100%',
//   },

//   backButton: {
//     padding: 5,
//     marginRight: 20,
//   },

//   headerTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//   },

//   pdf: {
//     flex: 1,
//     width: "100%",
//   },
// });
