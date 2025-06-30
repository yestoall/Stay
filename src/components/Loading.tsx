//· <Loading> ·

import React from "react"
import { Text, ActivityIndicator } from "react-native"

export const Loading = () => (
  <>
    <ActivityIndicator size="large" color="#FFF" />
    <Text className="my-2 text-white">Loading...</Text>
  </>
)
