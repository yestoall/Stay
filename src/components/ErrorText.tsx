//· <ErrorText> ·

import React from "react"
import { View, Text } from "react-native"

export const ErrorText = ({ children }: { children: React.ReactNode }) => (
  <View className="flex-1 items-center justify-center bg-background">
    <Text className="my-2 font-semibold text-xl text-red-500">{children}</Text>
  </View>
)
