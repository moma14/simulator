import { Drawer } from "expo-router/drawer";
//esto permite poder manejar los gestos de navegacion como el deslizar
//el drawer
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        
        {/*el name, lo que hace es asociar la pantalla con el archivo que esta dentro
         de la carpeta (drawer) y el options solo es el nombre que aparecera en el menu
         drawer*/}
        <Drawer.Screen name="index" options={{ drawerLabel: "Reloj" }} />
        <Drawer.Screen name="spino" options={{ drawerLabel: "Dinosaurios" }} />
        <Drawer.Screen name="flastlist" options={{ drawerLabel: "Listas" }} />
        <Drawer.Screen name="modalScreen" options={{ drawerLabel: "Vista de modales" }} />
        
      </Drawer>
    </GestureHandlerRootView>
  );
}
