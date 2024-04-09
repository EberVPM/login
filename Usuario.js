import { View, Text } from "react-native"

const Usuario = ({ route }) => {
  const { nombre } = route.params
  return (
    <View>
      <Text>Hola {nombre}</Text>
    </View>
  )
}

export default Usuario