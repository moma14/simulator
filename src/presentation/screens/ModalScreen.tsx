import {View, Modal, Text, Pressable, Image, StyleSheet} from "react-native"
import React, { useState } from "react"
import { FlatList } from "react-native-gesture-handler";

const ListaModal=[
    {id:"1", text:'Jose Cob'},
    {id:"2", text:'Carlos Paz'},
    {id:"3", text:'David Trejo'},
    {id:"4", text:'Tony Herrera'},
]

const ModalScreen=()=>{
    //se definen las variableel estado para el modal
    //para cuando el modal se despliegue y cuando no 
    const [modalVisible, setModalVisible]=useState(false);


    return(

        <View style={styles.ModalScreen} >
            <Text style={ styles.text}> Esta es la vista del modal</Text>
            <Pressable style={styles.buttonPressable} onPress={()=>setModalVisible(true)}>
                <Text style={styles.buttonText}>Despliega el modal</Text>
            </Pressable>
            <Modal
                animationType="none"// Cómo aparece el modal ("slide", se despliega para arriba
                // "fade"solo da un efecto de sombreado, "none" no tienen )
                transparent={false}//solo hace que el fondo sea visible o no
                visible={modalVisible} //muestra o oculta el modal
                onRequestClose={()=>setModalVisible(false)}//cierra el modal en Android con el 
                //boton de atras
            >
                <Pressable style={styles.buttonPressable} onPress={()=>setModalVisible(false)}>
                    <Text style={styles.buttonText}>Despliega el modal</Text>
                </Pressable>
                <Text style={styles.text}>Este texto va adentro del modal</Text>
                <FlatList
                    data={ListaModal}
                    keyExtractor={(item)=>item.id}
                    renderItem={({item})=>(
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>{item.text}</Text>
                        </View>
                    )}
                    contentContainerStyle={styles.contentContainer}
                ></FlatList>
            </Modal>
        </View>
    );
};

const styles=StyleSheet.create({
    ModalScreen:{
        flex:1,//hace que ocupe todo el espacio disponible
        justifyContent:'center',//centra el contenido verticalmente
        alignItems:'center',//lo centra
    },
    contentContainer:{
        flexGrow:1,//permite que la lista crezca y se mantenga centrada
        justifyContent:'center',//centra los elementos dentro del FlatList
        alignItems:'center',
    },
    text:{
        fontFamily:'16',
        color:'#333',
        marginBottom:10,
        textAlign:'center',
        marginTop:15,
    },
    textContainer:{
        fontFamily:'16',
        color:'#333',
        marginBottom:10,
        textAlign:'center',
    },
    buttonPressable:{
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


});
export default ModalScreen;

