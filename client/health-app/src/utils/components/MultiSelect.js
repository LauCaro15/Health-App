// https://github.com/toystars/react-native-multiple-select

import React from "react" ;
import { c } from "../basics/Colors" ;
import { s } from "../basics/Sizes" ;
import gs from '../../Styles' ;
import { StyleSheet } from "react-native" ;
import MultiSelect from "react-native-multiple-select" ;

const TheMultiSelect = ({

    options = [] ,
    label = "Etiqueta selector" ,
    placeholder = "Selecciona una o varias opciones" ,
    placeholderWithSelected = "Agrega o modifica tu selección" ,
    placeholderSearch = "Busca una opción" ,
    uniqueKey = "id" ,
    displayKey = "value" ,
    selectedVariable = [] ,
    onSelectedFunction = (selectedItems) => { console.log(selectedItems); } ,
    isDisabled = false ,
    isMultiple = false

}) => {

    return (
        <MultiSelect
            items = {options}
            uniqueKey = {uniqueKey}
            displayKey = {displayKey}
            onSelectedItemsChange = {onSelectedFunction}
            selectedItems = {selectedVariable}
            selectText = {placeholder}
            selectedText = {placeholderWithSelected}
            searchInputPlaceholderText = {placeholderSearch}

            tagRemoveIconColor = {c.semantic.error}
            tagBorderColor = {c.primary.base}
            tagTextColor = {c.primary.darkest}
            tagColor = {c.primary.base}
            tagContainerStyle = {{}}

            selectedItemTextColor = {c.primary.base}
            styleTextDropdownSelected = {{ ...gs.text , color: c.neutral.black }}
            selectedItemIconColor = {c.primary.base}
            itemTextColor = {c.neutral.black}

            textInputProps = {{ color: c.neutral.black }}
            
            searchInputStyle = {{ 
                ...styles.container , 
                color: c.neutral.black , 
                borderColor: 'transparent' , 
                fontSize: s.tiny.t45 
            }}
            altFontFamily = { "Roboto" }
            flatListProps = {{ ...styles.container , ...gs.text , borderWidth: 0 }}
            fontFamily = "Roboto" 
            fontSize = {s.tiny.t45}
            itemFontFamily = "Roboto"
            itemFontSize = {s.tiny.t45}
            noItemsText = "No hay opciones para mostrar"
            styleDropdownMenu = {[ styles.container ]}
            styleSelectorContainer = {[ 
                styles.container , 
                { paddingHorizontal: 0 , paddingBottom: (isMultiple) ? s.tiny.t05 : null } , 
                { borderRadius: s.tiny.t3 } ,
                { backgroundColor: c.primary.base }
            ]}
            styleTextDropdown = {[ gs.text , { color: c.neutral.black } ]}
            submitButtonColor = {c.primary.base}
            submitButtonText = "Aceptar Opciones Seleccionadas"
            disabled = {isDisabled}

            iconSearch = {{ width: s.tiny.t6 , heigth: s.tiny.t6 }}
            styleIndicator = {{  }}

            styleMainWrapper = {[ { borderRadius: s.tiny.t3 } ]}
            styleInputGroup = {{ 
                paddingHorizontal: s.tiny.t2 , 
                paddingRight: s.tiny.t4 , 
                height: 'auto' , 
                borderTopStartRadius: s.tiny.t3 ,
                borderTopEndRadius: s.tiny.t3 ,
                paddingBottom: s.tiny.t2
            }}

            single = {!isMultiple}
        />
	) ;
} ;

/* //TODO: No deshabilita */
/* //TODO: Cambiar tamaño de los íconos y color del texto de búsqueda */
/* //TODO: Obviamente arreglar el fondo y ojalá el botón */

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

export default TheMultiSelect ;
