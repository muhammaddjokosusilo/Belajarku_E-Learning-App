// components/CardMateri.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '@/components/ui/Button'

type Props = {
  titleCard: string;
  subject: string;
  color: string;
  onPress?: () => void;
};

export default function CardMateri({ titleCard, subject, onPress }: Props) {
  return (
    <View style={styles.card}>
        <View>
            <Text style={styles.title}>{titleCard}</Text>
            <Text style={styles.subject}>{subject}</Text>
        </View>

        <View>
            <Button 
                title="Buka PDF" 
                onPress={onPress}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 338,
    height: 204,
    backgroundColor: color, // merah lembut
    borderRadius: 16,
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  subject: {
    color: '#fff',
    opacity: 0.8,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#1ABC63', // hijau tombol
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 24,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
});
