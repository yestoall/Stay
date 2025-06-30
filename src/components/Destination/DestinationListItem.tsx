//· <DestinationListItem> ·

import React from "react"
import { Pressable, Text, View } from "react-native"
import { FlashList } from "@shopify/flash-list"

import { cn } from "@/utils/cn"

interface Props {
  item: Destination
  onPress?: () => void
}

export const DestinationListItem = ({ item, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      className={cn(
        "mx-2 mb-2 rounded-lg bg-black/10 px-3 py-1",
        "transition-all duration-75 ease-out",
        "active:opacity-80"
      )}
    >
      <View className="flex flex-row items-center gap-2">
        {item.isTop && (
          <View className="rounded-md bg-lime-500 px-1">
            <Text className="font-semibold text-xs text-black/60">TOP</Text>
          </View>
        )}
        <View className="flex-1">
          <Text
            className={cn(
              "font-medium text-xl text-white",
              item.childs && item.childs.length > 0 && "mb-2"
            )}
          >
            {item.destinationData.translatableName.es ||
              item.destinationData.translatableName.en ||
              "desconocido"}
          </Text>
        </View>
        {item.isFinalNode && (
          <Text className="font-semibold text-xs text-white/60">❯</Text>
        )}
      </View>
      {item.childs && item.childs.length > 0 && (
        <FlashList
          data={item.childs}
          renderItem={({ item }) => <DestinationListItem item={item} />}
        />
      )}
    </Pressable>
  )
}
