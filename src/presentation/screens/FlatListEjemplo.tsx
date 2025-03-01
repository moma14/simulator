import React, { useState } from "react";
import {View, FlatList, Text, StyleSheet, TextInput, StatusBar} from "react-native";

//aqui definimos el array y lo que tendra adentro
const ListaTexto=[
    {id:"1", text:'Primera lista'},
    {id:"2", text:'Segunda lista'},
    {id:"3", text:'Tercera lista'},
    {id:"4", text:'Cuarta lista'},
]

const ListText=()=>{
    //se necesita un useState para manejar el estado de lo que se va a ingresar
    const[inputText, setInputText]=useState("");//para almacenar y actualizar el texto ingresado

    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Escribe tu nombre"
                value={inputText} secureTextEntry//el value es lo que se va a ingresar en el input
                //con esto se actualiza el estado cada que el usuario ingresa algo
                onChangeText={(text)=>setInputText(text)}

            />
            <StatusBar backgroundColor="#007AFF" />  
            
            {/*el inputText es el texto */}
            <Text style={styles.displayText}>Ingresaste: {inputText}</Text>

            
            <FlatList
                data={ListaTexto}//aqui le pasamos el nombre de la constante array

                //el item es cada elemento que hay en la lista
                //aqui le decimos que los item de la lista, los convierta en un id unico
                //para poder identificarlo mejor y mostrarlo de mejor manera en la vista
                keyExtractor={(item)=>item.id}

                renderItem={({item})=> ( //aqui se renderiza cada elemento

                <View style={styles.textContainer}>
                <Text style={styles.listtext}>{item.text}</Text>
                </View>
                )}
                contentContainerStyle={styles.listContainer}//esto hace que la lista se mantenga
                //centrada verticalmente
                
            />
        </View>
    );
};

const styles=StyleSheet.create({
    listtext:{
        color:'black',
        fontWeight:'bold',
        textAlign:'center',
    },
    listContainer:{
        flexGrow:1,//permite que la lista crezca y se mantenga centrada
        justifyContent:'center',//centra los elementos dentro del FlatList
        alignItems:'center',
    },
    textContainer:{
        backgroundColor:"#f0f0f0",
        padding:10,
        marginVertical:5,
        borderRadius:5,
        alignItems: 'center',
        justifyContent:'center',

    },
    displayText:{
        fontFamily:'16',
        color:'#333',
        marginTop:25,
    },
    container:{
        flex:1,
        alignItems:'center',
        padding:20,
    },
    input:{
        width:'80%',
        height:50,
        borderColor:'#ccx',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginTop:50,
        
    }
});

export default ListText;