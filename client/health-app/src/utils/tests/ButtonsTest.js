import React , { useState } from 'react' ;
import gs from '../../Styles' ;
import { View } from "react-native" ;
import Button from "../components/Button" ;

const ButtonsTest = () => {

    const [ variable , setVariable ] = useState( false ) ;
    /* useEffect( () => {
        console.log( 'La variable ha cambiado a: ' , variable ) ;
    } , [ variable ]
    ) ; */

    return (
        <View style={[ 
            gs.containerTest 
        ]}>

            <View style={{ flexDirection: 'row' , justifyContent: 'center' }}>
                <Button iconName={"star"} height="1x"></Button>
                <Button text={"Normal"} height="1x"></Button>
            </View>
            <Button
                text={"Normal con Ícono Izquierda"}
                iconName={"star"}
                iconPosition='left'
                width={200}
                onPressAction = { () => { 
                    setVariable( !variable ) ; 
                    console.log( variable ) ; 
                    }
                }
            ></Button>
            <Button text={"Deshabilidado"} isDisabled={true}></Button>
            <Button text={"Secundario"} type='outline'></Button>
            <Button
                text={"Secundario con Ícono Derecha"}
                type='outline'
                iconName={"star"}
                iconPosition='right'
            ></Button>
            <Button
                text={"Secundario Deshabilidado"}
                type='outline'
                isDisabled={true}></Button>
            <Button text={"Texto"} type='clear'></Button>
            <Button
                text={"Texto con ícono Arriba"}
                type='clear'
                iconName={"star"}
                iconPosition='top'
            ></Button>
            <Button
                text={"Texto Deshabilitado"}
                type='clear'
                isDisabled={true}
            ></Button>            

        </View>
    ) ;
}

export default ButtonsTest
