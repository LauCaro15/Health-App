import React from "react";
import { c } from "../basics/Colors" ;
import { s } from "../basics/Sizes" ;
import gs from '../../Styles' ;
import { StyleSheet } from "react-native" ;
import { CheckBox , Switch as Swiitch } from "@rneui/themed" ;

const disabledColor = c.neutral.greyLight ;
const onPressDefault = () => { /* console.log( variable ) */ } ; 

export const TheCheckBox = ({

    variable: checkVariable ,
    onPressFunction = onPressDefault ,
    isDisabled = false

}) => {

    return (

        <CheckBox

            checked = {checkVariable}
            onPress = {onPressFunction}

            iconType = "material-community"
            checkedIcon = "checkbox-marked"
            uncheckedIcon = "checkbox-blank-outline"
            checkedColor = { (isDisabled) ? disabledColor : c.primary.base }
            uncheckedColor = { (isDisabled) ? disabledColor : c.primary.base }
            
            containerStyle = {[ styles.resize ]}
            center = {true}

            disabled = {isDisabled}
            disabledStyle = {[ { color: disabledColor } ]}

        />
        
    )
} ;

export const TheRadioButton = ({

    variable: radioVariable ,
    onPressFunction = onPressDefault ,
    isDisabled = false

}) => {

    return (

        <CheckBox

            checked = {radioVariable}
            onPress = {onPressFunction}

            iconType = "material"
            checkedIcon = "radio-button-checked"
            uncheckedIcon = "radio-button-unchecked"
            checkedColor = { (isDisabled) ? disabledColor : c.primary.base }
            uncheckedColor = { (isDisabled) ? disabledColor : c.primary.base }
            
            containerStyle = {[ styles.resize ]}
            center = {true}

            disabled = {isDisabled}
            disabledStyle = {[ { color: disabledColor } ]}

        />
        
    )
} ;


export const TheSwitch = ({

    variable: switchVariable ,
    onPressFunction = onPressDefault ,
    isDisabled = false

}) => {

    return (

        <Swiitch

            value = {switchVariable}
            onValueChange = {onPressFunction}
            
            color = {c.primary.base}
            style = {[ styles.resize , { marginHorizontal: s.tiny.t3 } ]}

            disabled = {isDisabled}
            disabledStyle = {[ { color: disabledColor } ]}

        />
        
    )
} ;

const TheStateController = ({

    type ,
    variable ,
    onPressFunction = onPressDefault ,
    isDisabled = false

}) => {

    properties = {
        variable: variable ,
        onPressFunction: onPressFunction ,
        isDisabled: isDisabled
    } ;
    
    switch ( type ) {

        case "checbox" :

            return ( <TheCheckBox {...properties}/> ) ;

        case "radiobutton" :

            return ( <TheRadioButton {...properties}/> ) ;

        case "switch" :

            return ( <TheSwitch {...properties}/> ) ;
    
        default :

            return ( <TheCheckBox {...properties}/> ) ;

    }

} ;

const styles = StyleSheet.create({

    resize: {
        transform: [{ scaleX: 1.5 } , { scaleY: 1.5 }]
	}

}) ;

export default TheStateController ;
export const Checkbox = TheCheckBox ;
export const RadioButton = TheRadioButton ;
export const Switch = TheSwitch ;
