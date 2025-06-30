//· app_layout ·

import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { StatusBar } from "expo-status-bar"
import { useEffect } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import "react-native-reanimated"
import {
  BarlowSemiCondensed_400Regular_Italic,
  BarlowSemiCondensed_400Regular,
  BarlowSemiCondensed_500Medium,
  BarlowSemiCondensed_500Medium_Italic,
  BarlowSemiCondensed_600SemiBold,
  BarlowSemiCondensed_600SemiBold_Italic,
  BarlowSemiCondensed_700Bold,
  BarlowSemiCondensed_700Bold_Italic,
  useFonts as useBarlowFonts,
} from "@expo-google-fonts/barlow-semi-condensed"
// import { isWeb } from "@/utils/device"

import "../global.css"
SplashScreen.preventAutoHideAsync()
const queryClient = new QueryClient()

export default function RootLayout() {
  const [loaded] = useBarlowFonts({
    BarlowSemiCondensed_400Regular_Italic,
    BarlowSemiCondensed_400Regular,
    BarlowSemiCondensed_500Medium,
    BarlowSemiCondensed_500Medium_Italic,
    BarlowSemiCondensed_600SemiBold,
    BarlowSemiCondensed_600SemiBold_Italic,
    BarlowSemiCondensed_700Bold,
    BarlowSemiCondensed_700Bold_Italic,
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <QueryClientProvider client={queryClient}>
      {/* {isWeb && <ReactQueryDevtools initialIsOpen={false} />} */}
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{ headerShown: true, title: "Stay" }}
          />
          <Stack.Screen
            name="location/[id]"
            options={{ headerShown: true, title: "location" }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </GestureHandlerRootView>
    </QueryClientProvider>
  )
}
