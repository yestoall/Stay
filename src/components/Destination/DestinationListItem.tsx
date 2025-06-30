//· <DestinationListItem> ·

import React from "react"
import { Pressable, Text, View } from "react-native"
import { useRouter } from "expo-router"
import { FlashList } from "@shopify/flash-list"

import { cn } from "@/utils/cn"

interface Props {
  item: Destination
}

export const DestinationListItem = ({ item }: Props) => {
  const router = useRouter()
  return (
    <Pressable
      onPress={() => {
        if (item.isFinalNode) {
          router.push({
            pathname: "/destination",
            params: {
              id: item.id,
              name: item.destinationData.translatableName.en,
              image: item.destinationData.photographs,
            },
          })
        }
      }}
      className={cn(
        "mx-2 mb-2 rounded-lg bg-black/10 px-3 py-1",
        "transition-all duration-75 ease-out"
        // "active:opacity-80"
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
            {item.destinationData.translatableName.en}
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
