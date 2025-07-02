//· <DestinationListItem> ·

import React from "react"
import { Pressable, Text } from "react-native"
import { View, AnimatePresence } from "moti"
import { useRouter } from "expo-router"
import { FlashList } from "@shopify/flash-list"

interface Props {
  item: Destination
}

export const DestinationListItem = ({ item }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const hasChilds = item.childs && item.childs.length > 0
  const router = useRouter()

  const onItemPress = () => {
    if (item.isFinalNode) {
      router.push({
        pathname: "/destination",
        params: {
          id: item.id,
          name: item.destinationData.translatableName.en,
          image: item.destinationData.photographs,
        },
      })
    } else {
      setIsOpen(!isOpen)
    }
  }

  return (
    <Pressable
      onPress={onItemPress}
      className="mx-2 mb-2 rounded-lg bg-black/10 px-3 py-1"
    >
      <View className="flex h-[32px] flex-row items-center justify-center gap-2">
        {item.isTop && (
          <View className="rounded-md bg-lime-500 px-1">
            <Text className="font-semibold text-xs text-black/60">TOP</Text>
          </View>
        )}
        <View className="flex-1">
          <Text className="font-medium text-xl text-white">
            {item.destinationData.translatableName.en}
          </Text>
        </View>

        <AnimatePresence>
          {hasChilds && !isOpen && (
            <View
              from={{ opacity: 0, translateX: -10 }}
              animate={{ opacity: 1, translateX: 0 }}
              exit={{ opacity: 0, translateX: -10 }}
              transition={{ type: "timing", duration: 100 }}
              className="flex h-5 w-5 items-center justify-center rounded-full bg-black/10"
            >
              <Text className="font-semibold text-xs text-white/80">
                {item.childs.length}
              </Text>
            </View>
          )}
        </AnimatePresence>

        <View
          from={{ rotate: "0deg" }}
          animate={{ rotate: isOpen ? "90deg" : "0deg" }}
          exit={{ rotate: "0deg" }}
          transition={{ type: "timing", duration: 100 }}
        >
          <Text className="font-semibold text-xs text-white">{"❯"}</Text>
        </View>
      </View>

      <AnimatePresence>
        {isOpen && (
          <View
            from={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ type: "timing", duration: 100, delay: 50 }}
            className="flex h-full w-full flex-1 p-2"
          >
            <View className="flex h-full w-full flex-1">
              <FlashList
                data={item.childs}
                estimatedItemSize={62}
                renderItem={({ item }) => <DestinationListItem item={item} />}
              />
            </View>
          </View>
        )}
      </AnimatePresence>
    </Pressable>
  )
}
