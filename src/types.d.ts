//· Tipos globales ·

interface DestinationsAPIResponse {
  success: boolean
  errors?: any[]
  data?: Destination[]
}

interface Destination {
  childs: Destination[]
  destinationData: DestinationData
  fatherDestination: number
  id: number
  isTop: boolean
  numEstablishments?: number
  isFinalNode: boolean
}

interface DestinationData {
  translatableName: TranslatableName
  coordinates: Coordinates
  photographs: string[]
}

interface TranslatableName {
  [key: string]: string
}

interface Coordinates {
  latitude: number
  longitude: number
}
