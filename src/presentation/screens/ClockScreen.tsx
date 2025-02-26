import React from "react";
//aqui se importan todos los elementos que se van a utilizar en la vista
import { View, Text, StyleSheet, Button, Pressable, TouchableHighlight, TouchableOpacity, StatusBar } from "react-native";
//se importa la funcion para que podemaos manejar el tiempo
import { useClockViewModel } from "../viewmodels/ClockViewModel";

const ClockScreen = ()=>{
    const {time}=useClockViewModel();

//se crea una funcion, con las variables que creamos anteriormente, para
//que se convierta en un texto mas legible
    const formatTime=(time: Date)=>{

        //aqui se crean funciones para almacenar las horas, minutos y segundos,
        const hours=time.getHours();
        const minutes=time.getMinutes();
        const seconds=time.getSeconds();
        //esta funcion dice que si hours es mayor que 12 cambie a AM o PM
        const amPm=hours < 12?'AM':'PM';

        //EL %12 convierte el reloj a formato de 12 horas
        return `${hours % 12 || 12}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}${amPm}`;
        //esto basicamnete dice que los minutos y segundos tengan 2 digitos (09) en lugar de 1 (9)

    };
    
    return(
        //aqui se renderiza la pantalla para mostrar solo el texto en la vista
        <View style={styles.screen}>

            {/*el texto se personaliza, pasandole la propiedad y la clase */}
            <Text style={styles.time}>{formatTime(time)}</Text>

            {/*se crea una nueva view para envolver el boton,
            se le pasa los estilos y la clase para el estilo*/}
            <View style={styles.buttonContainer}>
                {/*se personaliza el boton y se le indica la accion 
                pero es un boton normalito, no se puede personalizar a menos que se envuelva 
                en un View*/}
                <Button title='Click'  onPress={()=>{}}></Button>
            </View>

            {/*este boton si se puede personalizar sin necesidad de un View,
            la ventaja es que se puede personalizar más y mejor a diferencia de los otros*/}
            <Pressable style={({pressed})=> [
            styles.button, {backgroundColor:pressed ? "#0051A8" : "#007AFF"}]}>{/*aqui si el boton
            esta presionado se aplica el cambio de color, si no, se queda como está */}
                <Text style={styles.buttonText}>Presioname Pressable</Text>
            </Pressable>

            {/*este tambien se puede personalizar mejor, solo que este se puede poner
             un efecto de presionado ligero con la propiedad underlayColor */}
            <TouchableHighlight style={styles.buttonHighlight} underlayColor='0051A8' onPress={()=>{}}>
                <Text style={styles.buttonText} >Presioname TouchableHighlight </Text>
            </TouchableHighlight>

            {/*este boton lo mismo que los dos anteriores, solo que este si, el efecto
            de presionado es mayor, ya que como su nombre lo indica se ve mas la opacidad */}
            <TouchableOpacity style={styles.buttonOpacity} onPress={()=>alert('Presionaste el boton')}>
                {/*el alert es un modal que se despliega cuando se presiona el boton */}
                <Text style={styles.buttonText}>Presioname TouchableOpacity</Text>
            </TouchableOpacity>
            
           {/*solo es para cambiar la parte de arriba del dispositivo */}
            <StatusBar backgroundColor="#007AFF" />  
        </View>//pero el texto que va a aparecer, será con el formato que creamos anteriormente
        
    );
};

const styles =StyleSheet.create({
    screen:{
        flex:1,//hace que ocupe todo el espacio disponible
        justifyContent:'center',//centra el contenido verticalmente
        alignItems:'center',//lo centra
    },
    time:{
        fontSize:24,
        fontWeight: 'bold',
        marginBottom:20,
    },
    buttonContainer:{
        alignItems:'center',
        width:'50%',
        marginBottom:10,
    },
    button:{
        alignItems:'center',
        backgroundColor:'#007AFF',
        borderRadius:5,
        padding:10,
        marginBottom:10,
    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        textAlign:'center',

    },
    buttonHighlight:{
        alignItems:'center',
        backgroundColor:'#007AFF',
        borderRadius:5,
        padding:10,
        marginBottom:10,
    },
    buttonOpacity:{
        alignItems:'center',
        backgroundColor:'#007AFF',
        borderRadius:5,
        padding:10,
    }
});
export default ClockScreen;