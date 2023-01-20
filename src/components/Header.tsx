import { View, TouchableOpacity, Text } from "react-native";
import Logo from "../assets/logo.svg";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
const Header = () => {
  return (
    <View className="w-full flex-row items-center justify-between">
      <Logo />

      <TouchableOpacity
        className="flex-row h-11 px-4 border border-violet-500 rounded-lg items-center"
        activeOpacity={0.7}
      >
        <Feather name="plus" color={colors.violet[500]} size={20} />

        <Text className="text-white ml-3 font-semi-bold text-base">Novo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
