import { View, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

type Props = {
  activeRoute: number; // 1=Home, 2=Forum, 3=Library, 4=Profile
};

export default function NavbarBottom({ activeRoute }: Props) {
  const router = useRouter();

  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          paddingVertical: 12,
          shadowColor: "rgba(62, 62, 100, 1)",
          shadowOffset: { width: 0, height: -5 },
          shadowOpacity: 0.3,
        }}
      >
        {/* Home */}
        <TouchableOpacity onPress={() => router.push("/Dashboard")}>
          <Ionicons
            name={activeRoute === 1 ? "home" : "home-outline"}
            size={26}
            color={activeRoute === 1 ? "#4CAF50" : "#999"}
          />
        </TouchableOpacity>

        {/* Library */}
        <TouchableOpacity onPress={() => router.push("/LIbrary")}>
          <Ionicons
            name={activeRoute === 2 ? "book" : "book-outline"}
            size={26}
            color={activeRoute === 2 ? "#4CAF50" : "#999"}
          />
        </TouchableOpacity>

        {/* Forum */}
        <TouchableOpacity onPress={() => router.push("/forum")}>
          <Ionicons
            name={activeRoute === 3 ? "chatbubble" : "chatbubble-outline"}
            size={26}
            color={activeRoute === 3 ? "#4CAF50" : "#999"}
          />
        </TouchableOpacity>


        {/* Profile */}
        <TouchableOpacity onPress={() => router.push("/Profile")}>
          <Ionicons
            name={activeRoute === 4 ? "person" : "person-outline"}
            size={26}
            color={activeRoute === 4 ? "#4CAF50" : "#999"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
