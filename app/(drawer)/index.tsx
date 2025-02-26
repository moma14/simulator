import { View, Text, StyleSheet } from "react-native";
//se importan las vistas para que se muestren dentro del drawer
//sin la necesidad de pasar el archivo de la vista, adentro de la carpeta (drawer)
import ClockScreen from "../../src/presentation/screens/ClockScreen";

export default ClockScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
