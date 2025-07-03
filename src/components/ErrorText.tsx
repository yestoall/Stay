//· <ErrorText> ·

import React from "react"
import { View, Text } from "react-native"

export const ErrorText = ({ children }: { children: React.ReactNode }) => (
  <View className="flex-1 items-center justify-center bg-background">
    <View className="rounded-lg bg-red-500 px-5 py-2 shadow-sm">
      <Text className="my-2 font-semibold text-xl text-white">{children}</Text>
    </View>
  </View>
)
