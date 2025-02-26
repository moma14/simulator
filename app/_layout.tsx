//esto permite poder manejar los gestos de navegacion como el deslizar
//el drawer
import { GestureHandlerRootView } from "react-native-gesture-handler";
//esto permite mostrar diferentes pantallas una tras otra como un sanwish
import { Stack } from "expo-router";

//se exporta el componente principal para que 
export default function Layout() {
  return (
    //esto hace que los gestos ocupen todo el ancho de la pantalla
    <GestureHandlerRootView style={{ flex: 1 }}>

      {/*el stack es un contenedor que permite mostrar varias pantallas
       basicamente el stack controla al drawer */}
      <Stack>
        {/*el name="(drawer)" llama al Drawer Navigation dentro del Stack,
        el options solo oculta la barra superior para evitar que se duplique */}
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        
      </Stack>
    </GestureHandlerRootView>
  );
}
