//· app/destination ·

import React from "react"
import { useLocalSearchParams } from "expo-router"

import { DestinationScreen } from "@/screens/DestinationScreen"

// import { isWeb } from "@/utils/device"

export default function Destination() {
  const { id, name, image } = useLocalSearchParams<{
    id: string
    name: string
    image: string
  }>()
  return <DestinationScreen id={id} name={name} image={image} />
}
