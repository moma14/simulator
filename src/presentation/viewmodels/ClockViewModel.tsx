import { useState, useEffect } from "react"; 

//export hace que esta funcion pueda usarse en otros archivos
//el const ... declara una funcion, la cual no recibe parametros por eso no hay nada en los paréntesis
export const useClockViewModel=()=>{
    
    //pero si retorna un objeto con la hora que es el time y el setTime
    const [time, setTime] =
     //el setTime es la funcion que va a cambiar el valor de time
    useState(new Date());//aqui se crea una variable llamada time
    //en donde se guarda la fecha y la hora actual

    //aqui se actualiza la hora cada segundo ya que asi funciona el useEffect
    useEffect( () => {
       //adentro del setTime se crea una nueva variable que es hace lo de la linea 9
       //pero con la diferencia que se actualizara cada 1000 milisegundos
        const timer = setInterval(() => setTime(new Date()), 1000); 
        //aqui el 1000, quiere decir que la funcion setTime se repetira cada
        //1000 milisegundos
        return ()=>clearInterval(timer);
        //y aqui el intervalo se limpia cuando el componente se desmonta
    }, []);

    //aqui se retorna time para que otros archivos lo puedan utilizar
    return {time};
};