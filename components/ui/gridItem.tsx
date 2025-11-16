import { TouchableOpacity, View, Image, Text } from "react-native";
import { useRouter } from "expo-router";

type Props = {
  image: any;
  title: string;
  route: string;
  styles: any
};

export default function GridItem({ image, title, route, styles }: Props) {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => router.push(route)}
    >
      <View style={[styles.iconBox, { backgroundColor: "#fff" }]}>
        <View
          style={{
            width: 73,
            height: "70%",
            borderRadius: 12,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image source={image} />
        </View>
        <Text style={styles.iconLabel} numberOfLines={1}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
