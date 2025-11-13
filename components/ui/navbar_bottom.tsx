import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from 'react-native';
import { useRouter } from 'expo-router';

type NavItem = {
  label?: string;
  icon?: string; // bisa nanti kamu ganti jadi komponen icon
  route: string;
};

type Props = {
  items: NavItem[];
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
  activeRoute?: string;
};

export default function NavbarBottom({ items, style, activeRoute }: Props) {
  const router = useRouter();

  return (
    <View style={[styles.navbar, style]}>
      {items.map((item) => (
        <Pressable
          key={item.route}
          onPress={() => router.push(item.route)}
          style={({ pressed }) => [
            styles.navItem,
            pressed && styles.pressed,
            activeRoute === item.route && styles.active,
          ]}>
          <View
            style={[
              styles.navImage,
              activeRoute === item.route && styles.activeImage,
            ]}>
            <Image 
                source={item.icon || require('../../assets/icon/Home.png')}
            />
          </View>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.97 }],
  },
  active: {
    backgroundColor: '#06ec8122',
  },

});
