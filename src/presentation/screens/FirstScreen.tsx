import React from "react";
import { ScrollView, Text, Pressable, StyleSheet, Image, TextInput} from "react-native";



const FirstScreen=()=>(
    //el contentContainerStyle lo que hace es que mantiene el scrollView centrado verticalmente
    //solo le pasas la constante styles para los estilos y la clase que usaras para su estilo
    <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Esta es la segunda vista</Text>

        {/*el alert es un modal */}
        <Pressable style={styles.buttonPressable} onPress={()=> alert('Presionaste')}>
            <Text style={styles.text}>Pressable</Text>
        </Pressable>

        {/*imagenes con la url */}
        <Image
             source={{uri:"https://imgs.search.brave.com/pk34_KVWfo4UN6KrRZlGxzIGCxTmTRTFGaREfk4sQBQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGFsZW8uZ2cvZ2Ft/ZXMvandlMi9pbWFn/ZXMvZGluby9zcGlu/b3NhdXJ1cy5wbmc"}}
             style={styles.image}
             />
        <Image
            source={{uri:'https://imgs.search.brave.com/fYVUSHVGOWr1XIzqzVzc7vTu0wcpfHbNi7EJvTBPEjg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zZXJ2aWNlLnph/b25jZS5uZXQvZXlK/aWRXTnJaWFFpT2lK/bWNtOXVkR2xsY2kx/amJYTWlMQ0pyWlhr/aU9pSXlNREl4TFRB/NEwyRnNiRzl6WVhW/eWRYTXVjRzVuSWl3/aVpXUnBkSE1pT25z/aWNtVnphWHBsSWpw/N0luZHBaSFJvSWpv/eE5UQjlmWDA9.jpeg'}}
            style={styles.image}
        />
        <Image
            source={{uri:'https://imgs.search.brave.com/4oHHus_Ht_5anC6nlVC2KCQsYiYZXBXeZeMeLkTFUYI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zZXJ2aWNlLnph/b25jZS5uZXQvZXlK/aWRXTnJaWFFpT2lK/bWNtOXVkR2xsY2kx/amJYTWlMQ0pyWlhr/aU9pSXlNREl4TFRB/NEwySnlZV05vYVc5/ellYVnlkWE11Y0c1/bklpd2laV1JwZEhN/aU9uc2ljbVZ6YVhw/bElqcDdJbmRwWkhS/b0lqb3hOVEI5Zlgw/PQ.jpeg'}} 
            style={styles.image}
        />

        {/*imagen pero desde local */}
        <Image
            //solo se necesita el require, que tendra la ubicacion de la imagen 
            source={require('../../../assets/Stegosaurio.webp')}
            style={styles.image}/>
        <Image
        source={require('../../../assets/spinosaurus.webp')} 
        style={styles.image}
        />
    

    </ScrollView>
);
const styles= StyleSheet.create({
    scrollContainer:{
        flexGrow:1,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:20,
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:20,
    },
    buttonPressable:{
        alignItems:'center',
        backgroundColor:'#007AFF',
        borderRadius:5,
        padding:10,
        marginBottom:10,
    },
    text:{
        color:'white',
        fontWeight:'bold',
        textAlign:'center',
    },
    image:{
        width:100,
        height:100,
        borderRadius:10,
    },

});
export default FirstScreen;