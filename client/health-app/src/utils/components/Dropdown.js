import React from "react" ;
import { c } from "../basics/Colors" ;
import { s } from "../basics/Sizes" ;
import gs from '../../Styles' ;
import { StyleSheet , View , Text } from "react-native" ;
import Icon from './Icon'
import { SelectList , MultipleSelectList } from 'react-native-dropdown-select-list'

const TheDropdown = ({

    options = [] ,
    label = "Etiqueta selector" ,
    placeholder = undefined ,
    labelSelected = "Opciones seleccionadas: " ,
    placeholderSearch = "Busca una opción" ,
    uniqueKey = "id" ,
    displayKey = "value" ,
    selectedVariable = [] ,
    onSelectedFunction = (selectedItems) => { console.log(selectedItems); } ,
    triggerFunction = () => {} ,
    isDisabled = false ,
    isMultiple = false ,
    notFoundMessage = "Esa opción no se encuentra" ,
    defaultOption , // Sólo funciona en el select (una opción, { key: <...> , value: <...> })
    color = c.primary.base

}) => {

    if ( !placeholder ) {
        if ( isMultiple ) {
            placeholder = "Seleccione una o varias opciones" ;
        } else {
            placeholder = "Seleccione una opción" ;
        }
    }

    const properties = {

        data: options ,
        setSelected: onSelectedFunction ,
        onSelect: triggerFunction ,
        label: labelSelected ,
        save: uniqueKey ,
        placeholder: placeholder ,
        searchPlaceholder: placeholderSearch ,
        uniqueKey: uniqueKey ,
        displayKey: displayKey ,
        selectedItems: selectedVariable ,
        onSelectedItemsChange: onSelectedFunction ,
        isDisabled: isDisabled ,
        notFoundText: notFoundMessage ,
        disabled: isDisabled ,
        defaultOption: defaultOption
        
    } ;

    const styleProperties = {
        searchicon: <Icon name="search" marginVertical={s.tiny.t1 * -1} /> ,
        closeicon: <Icon name="close" size={s.tiny.t8} marginVertical={s.tiny.t1 * -1}/> ,
        arrowicon: <Icon name="caretdown" size={s.tiny.t4} marginVertical={s.tiny.t1} marginHorizontal={s.tiny.t2}/> ,
        height: 'auto' ,

        boxStyles: [ 
            styles.container , gs.text ,
            { borderColor: color } , 
            { widht: window.innerWidth , height: 'auto' } 
        ] ,
        dropdownStyles: [ 
            styles.container , { borderColor: color } , 
            { widht: '100%' , height: 'auto' } , 
            { paddingHorizontal: s.tiny.t1 } ,
            ( isMultiple ) ? { marginTop: s.tiny.t3 * -1 } : { marginTop: s.tiny.t05 * -1 }
        ] ,
        dropdownItemStyles: gs.text ,
        inputStyles: gs.text ,
        dropdownTextStyles: gs.text ,
        labelStyles: gs.text ,

        checkBoxStyles: [ styles.checkbox , { color: c.primary.dark } ] ,
        badgeStyles: { backgroundColor: color } ,
        badgeTextStyles: { fontSize: s.tiny.t45 , fontWeight: 'bold' } ,

        fontFamily: "Roboto" ,

        disabledItemStyles: [ gs.text , { color: c.neutral.greyBase } ] ,
        disabledTextStyles: gs.text ,
        disabledCheckBoxStyles: [ styles.checkbox , { color: c.neutral.greyLight } , { borderWidth: 0 } ]
    }

    return (
        <View style={{ padding: 0 }} >
            <Text style={gs.text}> {label} </Text>
            {   
                ( isMultiple ) ? 
                    <MultipleSelectList {...properties} {...styleProperties} />
                    : <SelectList {...properties} {...styleProperties}/> 
            }
        </View>
    ) ;

} ;

const styles = StyleSheet.create({

    container: {
		borderRadius: s.tiny.t3 ,
		borderWidth: s.tiny.t05 ,
		borderColor: c.primary.base ,
		paddingHorizontal: s.tiny.t3 ,
		marginTop: s.tiny.t2 ,
        marginHorizontal: s.tiny.t2
	} ,

    checkbox: {
        width: s.tiny.t5 , 
        height: s.tiny.t5 ,
        borderWidth: s.tiny.t05 ,
        fontSize: s.tiny.t5
    }

}) ;

export default TheDropdown ;

/* https://www.npmjs.com/package/react-native-dropdown-select-list */
