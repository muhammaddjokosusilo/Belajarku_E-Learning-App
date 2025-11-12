// ...existing code...
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
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';
import Button from '@/components/ui/Button';

const { width } = Dimensions.get('window');

export default function LoginScreen() {
    const router = useRouter();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setPassword] = useState('');
  return (
    <SafeAreaView style={styles.screen}>
        <View style={styles.container}>
          <View style={styles.ConMain}>
            {/* Logo */}
            <View style={styles.header}>
            <Image
                source={require('@/assets/images/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            </View>

            {/* Login Form */}
            <View style={styles.cardWrapper}>
                <View style={styles.card}>
                    {/* Input Field */}
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="New Password"
                            placeholderTextColor="#9E9E9E"
                            value={newPassword}
                            onChangeText={setNewPassword}
                            autoCapitalize="none"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Confirm Password"
                            placeholderTextColor="#9E9E9E"
                            value={confirmPassword}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </View>
                    {/* Input Field End */}

                    {/* Button Login */}
                    <View style={styles.button}>
                      <Link href="/auth/login" asChild>
                        <Button title="SEND" style={{ alignSelf: 'flex-start' }} />
                      </Link>
                    </View>
                    {/* Button Login End */}

                    {/* Register */}
                    <View style={styles.registerContainer}>
                     <Text style={styles.registerText}>Have an account?</Text>                      <Text
                        style={styles.registerLink}
                        onPress={() => router.push('/auth/login')}
                      >
                        LOGIN
                      </Text>
                    </View>
                    {/* Register End */}
                </View>
            </View>
          </View>  
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
    justifyContent: 'center',

    // shadow (iOS)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    // elevation (Android)
    elevation: 8,
  },
  ConMain: {
    width: 344,
    height: 544,
  },
  header: {
    height: 150,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 12,
  },
  logo: {
    width: 311,
    height: '100%',
  },
  cardWrapper: {
    alignItems: 'center',
    marginTop: 0,
  },
  card: {
    width: CARD_WIDTH,
    height: 411,
    backgroundColor: '#fff',
    borderRadius: 40,
    paddingVertical: 28,
    paddingHorizontal: 0,
    // shadow
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: 245,
    marginTop: 18,
    gap: 12,
  },
  input: {
    backgroundColor: '#D9D9D9',
    height: 44,
    borderRadius: 22,
    paddingHorizontal: 16,
    color: '#747474',
    fontSize: 20,
  }, 
  button: {
    marginTop: 40,
  },   
  registerContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  registerText: {
    color: '#666',
    marginBottom: 6,
    fontSize: 12,
  },
  registerLink: {
    color: '#19A463',
    fontWeight: '700',
    fontSize: 14,
  },
});
