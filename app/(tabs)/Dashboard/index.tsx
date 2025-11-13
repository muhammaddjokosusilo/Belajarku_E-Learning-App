// import React from 'react';
// import {
//   SafeAreaView,
//   View,
//   Text,
//   StyleSheet,
//   Dimensions,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';

// const { width } = Dimensions.get('window');
// const CONTAINER_PADDING = 16;
// const CARD_WIDTH = width - CONTAINER_PADDING * 2;

// const subjects = [
//   { id: 'mat', title: 'Matematika', color: '#FFB57D' },
//   { id: 'idn', title: 'Bahasa Indonesia', color: '#FF8FA3' },
//   { id: 'eng', title: 'Bahasa Inggris', color: '#A3D8FF' },
//   { id: 'sci', title: 'Fisika', color: '#D7E8A7' },
//   { id: 'eco', title: 'Ilmu Ekonomi', color: '#FFE7A9' },
//   { id: 'hist', title: 'Sejarah', color: '#C6B8FF' },
//   { id: 'bio', title: 'Biologi', color: '#B7EFC5' },
//   { id: 'chem', title: 'Kimia', color: '#D0CFFF' },
// ];

// export default function DashboardScreen() {
//   return (
//     <SafeAreaView style={styles.safe}>
//       <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
//         {/* Header area */}
//         <View style={styles.header}>
//           <View style={styles.headerCard}>
//             <View style={styles.headerLeft}>
//               <Text style={styles.greeting}>Hi, Marsel!</Text>
//               <View style={styles.searchBox}>
//                 <Text style={styles.searchPlaceholder}>🔍  Kamu mau belajar apa hari ini ?</Text>
//               </View>
//             </View>
//             <View style={styles.avatar} />
//           </View>
//         </View>

//         {/* Subjects grid */}
//         <View style={styles.gridWrapper}>
//           {subjects.map((s) => (
//             <TouchableOpacity key={s.id} style={styles.gridItem}>
//               <View style={[styles.iconBox, { backgroundColor: s.color }]} />
//               <Text style={styles.iconLabel} numberOfLines={1}>
//                 {s.title}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Info section */}
//         <View style={styles.infoSection}>
//           <Text style={styles.infoTitle}>belajarku info</Text>
//           <View style={styles.banner}>
//             <Text style={styles.bannerText}>[ Banner / Event / Promo ]</Text>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safe: {
//     flex: 1,
//     backgroundColor: '#19A463', // background like mock
//   },
//   scroll: {
//     padding: CONTAINER_PADDING,
//     paddingBottom: 40,
//   },
//   header: {
//     marginBottom: 18,
//   },
//   headerCard: {
//     width: CARD_WIDTH,
//     backgroundColor: '#14A35A',
//     borderRadius: 12,
//     padding: 16,
//     flexDirection: 'row',
//     alignItems: 'center',
//     // subtle shadow
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 6 },
//     shadowOpacity: 0.12,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   headerLeft: {
//     flex: 1,
//     paddingRight: 8,
//   },
//   greeting: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: '700',
//     marginBottom: 10,
//   },
//   searchBox: {
//     backgroundColor: '#ffffff22',
//     paddingVertical: 10,
//     paddingHorizontal: 12,
//     borderRadius: 20,
//   },
//   searchPlaceholder: {
//     color: '#ffffffcc',
//     fontSize: 13,
//   },
//   avatar: {
//     width: 44,
//     height: 44,
//     borderRadius: 22,
//     backgroundColor: '#fff',
//     borderWidth: 2,
//     borderColor: '#14A35A',
//   },

//   gridWrapper: {
//     width: CARD_WIDTH,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     paddingVertical: 18,
//     backgroundColor: 'transparent',
//   },
//   gridItem: {
//     width: (CARD_WIDTH - 24) / 4, // 4 columns with small gap
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   iconBox: {
//     width: 56,
//     height: 56,
//     borderRadius: 12,
//     marginBottom: 8,
//   },
//   iconLabel: {
//     color: '#fff',
//     fontSize: 11,
//     textAlign: 'center',
//   },

//   infoSection: {
//     width: CARD_WIDTH,
//     marginTop: 8,
//   },
//   infoTitle: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '700',
//     marginBottom: 10,
//   },
//   banner: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     height: 120,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   bannerText: {
//     color: '#333',
//   },
// });

// ...existing code...
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import NavbarBottom from '@/components/ui/navbar_bottom';

const { width } = Dimensions.get('window');

const subjects = [
  { id: 'mat', title: 'Matematika', photo: require('@/assets/images/mat.png') },
  { id: 'idn', title: 'Bahasa Indonesia', photo: require('@/assets/images/idn.png') },
  { id: 'eng', title: 'Bahasa Inggris' },
  { id: 'sci', title: 'Fisika' },
  { id: 'eco', title: 'Ilmu Ekonomi' },
  { id: 'hist', title: 'Sejarah' },
  { id: 'bio', title: 'Biologi' },
  { id: 'chem', title: 'Kimia' },
];

export default function LoginScreen() {
    const router = useRouter();
    const [search, setSearch] = useState('');
  return (
    <SafeAreaView style={styles.screen}>
        <View style={styles.container}>
            {/* Card Profile and Search */}
            <View style={styles.header}>
                <View style={styles.headerCard}>
                    <View style={styles.headerLeft}>
                        <Text style={styles.greeting}>Hi, Marsel!</Text>
                        <View style={styles.searchBox}>
                          <TextInput
                            placeholder="🔍  Kamu mau belajar apa hari ini ?"
                            placeholderTextColor="#ffffffcc"
                            value={search}
                            onChangeText={setSearch}
                          />
                        </View>
                    </View>
                    <View style={styles.headerRight}>
                        <View style={styles.avatar} />
                    </View>
                </View>
            </View>
            {/* Card Profile and Search End*/}
            
            {/* Subjects grid */}
            <View style={styles.gridWrapper}>
              {subjects.map((s) => (
                <TouchableOpacity key={s.id} style={styles.gridItem}>
                  <View style={[styles.iconBox, { backgroundColor: '#fff'}]}>
                    <View style={{width: 73, height: '70%', borderRadius: 12, alignItems: 'center', justifyContent: 'center'}}>
                        <Image 
                          source={require('@/assets/images/mat.png')}
                        />
                    </View>  
                    <Text style={styles.iconLabel} numberOfLines={1}>
                      {s.title}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
            {/* Subjects grid End */}

            {/* Info section */}
            <Text style={styles.infoTitle}>Belajarku info</Text>
            <View style={styles.infoSection}>
              <View style={styles.banner}>
                <Image 
                  source={require('@/assets/images/event1.png')}
                  style={{width: '100%', height: '100%',}}
                  resizeMode="stretch"
                />
              </View>
              <Text style={{marginTop: 6,}}>Event Tahunan </Text>
            </View>

            {/* Info section End */}
            {/* Bottom Navbar */}
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

    // shadow (iOS)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    // elevation (Android)
    elevation: 8,
  },
  header: {
    marginTop: 64,
    marginBottom: 18,
    width: 371,
    height: 173,
  },
  headerCard: {
    width: '100%',
    height: '100%',
    backgroundColor: '#14A35A',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // subtle shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 6,
  },
  headerLeft: {
    flex: 1,
    height: '100%',
    paddingRight: 8,
    justifyContent: 'flex-end',
  },
  greeting: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  searchBox: {
    backgroundColor: '#ffffff22',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  searchPlaceholder: {
    color: '#ffffffcc',
    fontSize: 13,
  },
  headerRight: {
    height: '100%',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#14A35A',
  },
  
  gridWrapper: {
    width: CARD_WIDTH,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 18,
    backgroundColor: 'transparent',
  },
  gridItem: {
    width: (CARD_WIDTH - 24) / 4, // 4 columns with small gap
    alignItems: 'center',
    marginBottom: 16,
  },
  iconBox: {
    width: 73,
    height: 100,
    borderRadius: 12,
    marginBottom: 8,
    
  },
  iconLabel: {
    color: '#7D7D7D',
    fontSize: 11,
    textAlign: 'center',
    textWrap: 'wrap',
  },

  infoTitle: {
    width: CARD_WIDTH,
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Poppins',
    fontWeight: 600,
  },
  infoSection: {
    width: CARD_WIDTH,
    height: 201,
    borderRadius: 22,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#14A35A',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  banner: {
    width: '90%',
    height: '70%',
    borderRadius: 5,
    
  },
});

