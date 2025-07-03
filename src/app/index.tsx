//· app/index ·

import React from "react"
import { useQuery } from "@tanstack/react-query"

import { Loading } from "@/components/Loading"
import { ErrorText } from "@/components/ErrorText"

import { DestinationsScreen } from "@/screens/DestinationsScreen"

export default function Index() {
  // obtener los destinos desde el API y cachearlos con tanstack/query
  const destinationsQuery = useQuery({
    queryKey: ["destinations"],
    queryFn: () => fetch("/api/destinations").then((res) => res.json()),
  })

  if (destinationsQuery.isLoading) return <Loading />

  if (destinationsQuery.isError)
    return <ErrorText>{destinationsQuery.error.message}</ErrorText>

  if (!destinationsQuery.data.success)
    return <ErrorText>ERROR en el API destinations</ErrorText>

  if (destinationsQuery.data.error)
    return <ErrorText>ERROR en el API destinations</ErrorText>

  if (!destinationsQuery.data || destinationsQuery.data.length === 0)
    return <ErrorText>No hay datos disponibles</ErrorText>

  const destinations = destinationsQuery.data.data.data as Destination[]
  return <DestinationsScreen destinations={destinations} />
}
