import React from 'react'
import { c } from "../basics/Colors" ;
import { s } from "../basics/Sizes" ;
import gs from '../../Styles' ;
import { StyleSheet , View } from "react-native" ;
import { Picker } from '@react-native-picker/picker';

const ThePicker = ({

    options = [] ,
    label = "Selecciona una o varias opciones" ,
    placeholderSearch = "Busca una opción" ,
    uniqueKey = "id" ,
    displayKey = "value" ,
    selectedVariable = [] ,
    onSelectedFunction = (selectedItem) => { console.log(selectedItem); } ,
    isDisabled = false

}) => {

    function createItem ( key , label , value , isDisabled ) {
        return (
            <Picker.Item key={key} label={label} value={value} disabled={isDisabled}/>
        )
    }

    return (
        <View style={[ styles.container , { padding: 0 } , (isDisabled) ? {borderColor: c.neutral.greyLight , color: c.neutral.greyLight} : null ]}>
            <Picker
                selectedValue = {selectedVariable}
                onValueChange = {onSelectedFunction}
                style = {[ { margin: 0 } ]}
                dropDownStyle = {[ styles.container ]}
                containerStyle = {[  ]}
                enabled = {!isDisabled}
            >{
                options.map( ( option , index ) => (
                    createItem( index , option.value , option.id , (option.disabled)?true:false )
                ) )
            }</Picker>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
		borderRadius: s.tiny.t3 ,
		borderWidth: s.tiny.t05 ,
		borderColor: c.primary.base ,
		paddingHorizontal: s.tiny.t2 ,
		marginTop: s.tiny.t2 ,
        height: 'auto'
	}

}) ;

export default ThePicker
