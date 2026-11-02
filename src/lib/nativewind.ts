import { cssInterop } from "nativewind";
import Animated from "react-native-reanimated";

// NativeWind v4 only maps className -> style for registered components.
// Reanimated's Animated.View is third-party, so register it explicitly
// (used with className in ProgressBar and CheckBox).
cssInterop(Animated.View, { className: "style" });
