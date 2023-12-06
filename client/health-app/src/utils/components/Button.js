import React from "react" ;
import { c } from "../basics/Colors" ;
import { s } from "../basics/Sizes" ;
import gs from "../../Styles" ;
import Icon from './Icon' ;
import { StyleSheet , Alert } from "react-native" ;
import { Button } from "@rneui/base" ;

const TheButton = ({

	text = undefined ,
	size = "md" , // "sm" | "md" | "lg"
	width = 'auto' ,
	height = 'auto' , // "1x" | "2x" | "3x" | "4x" 
	isDisabled = false ,
	type = "solid" , // "solid" | "outline" | "clear" | "icon" | "circle"
	color = c.primary.base ,
	iconName = undefined ,
	uppercase = false ,
	iconPosition = "left" , // "left" | "right" | "top" | "bottom"
	iconSize = undefined ,
	onPressAction = () => Alert.alert(
		title = "Botón Presionado" ,
		'Botón : "' + ( (text) ? text : iconName ) + '"' ,
		[
			{ text: "Cancel" , onPress: () => console.log("Cancel Pressed")  , style: "cancel" } ,
			{ text: "OK" , onPress: () => console.log("OK Pressed") }
		] ,  
		{ cancelable: true } 
	)

}) => {

	let colorContent = c.neutral.white ;
	if ( isDisabled ) {
		colorContent = c.neutral.grayBase ;
	} else if ( type === "outline" || type === "clear" || type === "icon" ) {
		colorContent = color ;
	} else {
		colorContent = c.neutral.white ;
	}

	let colorButton = color ;

	let theIconSize = ( !iconSize ) ? s.tiny.t6 : iconSize ;
	let paddingSize = s.tiny.t6 ;

	if ( type === "icon" ) {
		type = "clear"
		theIconSize = ( !iconSize ) ? s.tiny.t8 : iconSize ;
		paddingSize = 0 ;
	} else if ( type === "circle" ) {
		type = "solid"
		paddingSize = s.tiny.t15 ;
	} else if ( !text ) {
		paddingSize = s.tiny.t3 ;
	} else if ( size === 'sm') {
		paddingSize = s.tiny.t4 ;
	}

	switch ( height ) {
		case "1x":
			height = s.small.s2 ;
			break;
		case "2x":
			height = s.small.s4 ;
			break;
		case "3x":
			height = s.small.s6 ;
			break;
		case "4x":
			height = s.small.s8 ;
			break;
		default:
			height = 'auto'
			break;
	}

	let radius = ( type === "circle" ) ? s.medium.m10 : 'lg'

	return (

		<Button

			buttonStyle = {[
				styles.button ,
				type === "outline" && { ...styles.outlined , borderColor: colorButton } ,
				{ paddingHorizontal: paddingSize } ,
				{ width: width , maxWidth: '100%' } ,
				{ height: height } ,
				type === "circle" && { borderRadius: s.medium.m10 }
			]}
			color = {colorButton}
			type = {type}
			size = {size}
			radius = { ( typeof( radius ) === "number" ) ? Number(radius) : 'lg'}
			containerStyle = { styles.container }

			onPress = {onPressAction}

			icon = {
				iconName !== undefined && (
					<Icon
						name = {iconName}
						color = {colorContent}
						size = {theIconSize}
					/>
				)
			}
			iconPosition = {iconPosition}
			iconContainerStyle = {{}}

			title = {text}
			titleProps = {{}}
			uppercase = {uppercase}
			titleStyle = {[
				styles.text , 
				{ color: colorContent } 
			]}

			disabled = {isDisabled}
			disabledStyle = {[]}
			disabledTitleStyle = {{ color: colorContent }}

			key = {text}

		>{text}</Button>

	);
};

const styles = StyleSheet.create({

	button: {
		gap: s.tiny.t2 ,
		alignSelf: 'center'
	} ,

	container: {
		marginHorizontal: s.tiny.t1 ,
		marginVertical: s.tiny.t1 ,
	} ,

	outlined: {
		borderWidth: s.tiny.t05 ,
		borderColor: c.primary.base ,
	} ,

	text: {
		fontFamily: "Roboto" ,
		fontWeight: 700 ,
		fontSize: s.tiny.t5 ,
		letterSpacing: 0.5 ,
	}

});

export default TheButton ;
