//· app/destination ·

import React, { useEffect } from "react"
import { View, Text } from "react-native"
import { useQueryClient } from "@tanstack/react-query"
import { useLocalSearchParams } from "expo-router"

// import { isWeb } from "@/utils/device"

export default function Destination() {
  // const [destination, setDestination] = useState<Destination | null>(null)
  const { id } = useLocalSearchParams<{ id: string }>()
  const queryClient = useQueryClient()

  const destinations = queryClient.getQueryData(["destinations"])
  console.log("+++ Destinations:", destinations)

  useEffect(() => {
    console.log("+++ RecipeEditScreen useEffect", id)
    // if (destinations) {
    //   const chosenDestination = destinations?.find(
    //     (item: any) => item.theID === id
    //   )
    //   console.log("-> destinationData:", chosenDestination)
    // }
    // if (!tuber.user.isLogged) router.replace("/login")
  }, [id])

  // const onClose = () => {
  //   if (router.canGoBack()) router.back()
  // }

  return (
    <View className="flex h-full w-full items-center justify-start bg-black/20 p-6">
      <Text>Aquí van los datos del destino</Text>
    </View>
  )
}
