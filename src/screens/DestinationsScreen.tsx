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
    <View className="flex h-full w-full items-start justify-start bg-background pt-4">
      <View className="flex h-full w-full flex-1 px-2">
        <FlashList
          data={destinations}
          estimatedItemSize={80}
          renderItem={({ item }) => {
            console.log("Rendering item:", item.id)
            return (
              <DestinationListItem
                item={item}
                onPress={() => console.log("Destination pressed:", item.id)}
              />
            )
          }}
          ListFooterComponent={() => <View className="h-10" />}
        />
      </View>
    </View>
  )
}
