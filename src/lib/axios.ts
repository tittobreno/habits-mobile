import axios from "axios";
import Constants from "expo-constants";

// In development the API usually runs on the same machine as Metro, so reuse
// its host (works on a physical device over the LAN). Override with
// EXPO_PUBLIC_API_URL in .env.local when the API lives elsewhere.
const devServerHost = Constants.expoConfig?.hostUri?.split(":")[0];

export const api = axios.create({
  baseURL:
    process.env.EXPO_PUBLIC_API_URL ??
    `http://${devServerHost ?? "localhost"}:3333`,
});
