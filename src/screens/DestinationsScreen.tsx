//· <DestinationsScreen> ·

import React from "react"
import { View } from "react-native"
import { FlashList } from "@shopify/flash-list"

import { DestinationListItem } from "@/components/Destination/DestinationListItem"

interface Props {
  destinations: Destination[]
}

export const DestinationsScreen = ({ destinations }: Props) => {
  console.log("DestinationsScreen", destinations)
  return (
    <View className="flex h-full w-full items-start justify-start bg-background">
      <View className="flex h-full w-full flex-1 px-2">
        <FlashList
          data={destinations}
          estimatedItemSize={80}
          renderItem={({ item }) => <DestinationListItem item={item} />}
          ListHeaderComponent={() => <View className="h-4" />}
          ListFooterComponent={() => <View className="h-10" />}
        />
      </View>
    </View>
  )
}
