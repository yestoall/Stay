//· <DestinationScreen> ·

import React from "react"
import { View, Text } from "react-native"

interface Props {
  id: string
  name: string
  image: string
}

export const DestinationScreen = ({ id, name, image }: Props) => {
  console.log("render destinationScreen", { id, name, image })
  return (
    <View className="flex h-full w-full items-start justify-start bg-background p-8">
      <Text className="font-semibold text-3xl text-white">{name}</Text>
      <View className="mt-4 h-[190px] w-full items-center justify-center rounded-lg bg-black/30">
        <Text className="font-semibold text-xl text-white/70">
          photo {image}
        </Text>
      </View>
    </View>
  )
}
