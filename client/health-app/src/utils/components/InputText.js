import React , { useState } from "react" ;
import { c } from "../basics/Colors" ;
import { s } from "../basics/Sizes" ;
import gs from "../../Styles" ;
import { StyleSheet } from "react-native";
import { Input } from "@rneui/base";
import Icon from './Icon' ;

const TheInputText = ({

    label = "Etiqueta Campo" ,
    placeholder = "Placeholder" ,
	setTextFunction = undefined ,
    errorMessage = "Error en el campo" ,
    isPassword = false ,
	validationFunction = ( textEntry ) => false ,
	isDisabled = false ,
	iconName = undefined ,
	color = c.primary.base

}) => {

	const [ textEntry , setTextEntry] = useState("") ;
    const [ showContent , setShowContent ] = useState([]) ;

	const handleTextChange = ( value ) => {
		setTextEntry( value ) ;
		if (setTextFunction) {
			setTextFunction(value);
		}
	} ;

	const iconSize = s.tiny.t6 ;

	if ( !validationFunction( textEntry ) ) {
		errorMessage = '' ;
	}

	if ( !iconName ) { 
		iconName = ( isPassword ) ? 'lock' : 'text' ;
	}

	if ( isPassword ) {
		setShowContent( false ) ;
	}

	return (
		<Input
			containerStyle = {{ width: window.innerWidth }}
			inputContainerStyle = {[ 
				styles.container , { borderColor: color } ,
				errorMessage ? { borderColor: c.semantic.error } : null ,
				isDisabled ? { borderColor: c.neutral.greyLight } : null
			]}
			inputStyle = {[ { fontFamily: "Roboto" , fontSize: s.tiny.t45 } ]}

			onChangeText = {handleTextChange}
			value = {textEntry}
			secureTextEntry={!showContent}
			
			errorMessage= {errorMessage}
			errorStyle = {[ { fontFamily: "Roboto" , fontSize: s.tiny.t4 , color: c.semantic.error } ]}
			errorProps = {{}}
			renderErrorMessage = { false }

			label = {label}
			labelStyle = {[ gs.text , { color: c.neutral.black , paddingHorizontal: s.tiny.t1 } ]}
			labelProps = {{}}
			placeholder = {placeholder}

			leftIcon = {
				<Icon name={iconName} size = {iconSize} />
			}
			leftIconContainerStyle = {{}}

			rightIcon = {
                !isPassword ? 
					<Icon 
						name='close' 
						size = {iconSize + 4} 
						onPressAction={() => handleTextChange('')}
					/> : 
					<Icon 
						name = {showContent ? 'eye' : 'eye-off'} 
						size = {iconSize} 
						onPressAction = {() => setShowContent(!showContent)} 
						library={'Ionicons'}
					/>
            }
			rightIconContainerStyle = { 
				isPassword ? { marginRight: s.tiny.t1 * -1 } : { marginRight: s.tiny.t2 * -1 }
			}

			disabled = { isDisabled }

		/>
	);
};

const styles = StyleSheet.create({

	container: {
		borderRadius: s.tiny.t3 ,
		borderWidth: s.tiny.t05 ,
		borderBottomWidth: s.tiny.t05 ,
		borderColor: c.primary.base ,
		paddingHorizontal: s.tiny.t2 ,
		marginTop: s.tiny.t2 ,
	}

}) ;

export default TheInputText;
