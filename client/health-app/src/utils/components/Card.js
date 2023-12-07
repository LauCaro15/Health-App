import React , { memo , useState } from "react" ;
import { c } from "../basics/Colors" ;
import { s } from "../basics/Sizes" ;
import gs from "../../Styles" ;
import { StyleSheet , View , Image , Text } from "react-native" ;
import Icon from "./Icon" ;
import Swiper from "./Swiper" ;
import Button from "./Button" ;
import Modal from "./Modal" ;
import { Card } from "@rneui/base" ;

const TheCard = ({
    
	title = "" ,
	subtitle = "" ,
	images = [] , // Recibe uris no locales
	styleImages = {} ,
	width = 'auto' ,
	paragraph = "" ,
	buttons = [] ,
	children 
	
}) => {

	if ( images && images.length > 0 ) {
		images = images.map( ( img , index ) => {
			return (
				<TheImageCard url={img} isList={true} key={index} {...styleImages}/>
			);
		} ) ;
	}

	return (
		<Card
			containerStyle = {[ 
				styles.container ,
				( width === '100%' ) ? 
					{ flexGrow: 1 , flexShrink: 0 , flexBasis: '96%' } : 
					( width === 'auto') ? { flexGrow: 1 , flexShrink: 0 } : { width: width } ,
				{ paddingHorizontal:  s.tiny.t4 }
			]}
		>
			<Card.Title style={[ 
				gs.text  , gs.subtitle , 
				{ margin: 0 , padding: 0 } , 
				( !title ) ? { display: 'none' } : null  
			]}> {title} </Card.Title>
			
			<Card.Divider style={ ( !title ) ? { display: 'none' } : null }/>

			<Text 
				style={[ 
					gs.text , { fontWeight: 700 } , 
					( subtitle === "" ) ? {display: 'none'} : null , 
					styles.contentItem
				]}
			>{subtitle}</Text>

			<Text 
				style={[ 
					gs.text , 
					( paragraph === "" ) ? {display: 'none'} : null  , 
					styles.contentItem
				]}
			>{paragraph}</Text>

			{children}
			
			<View style={[
				styles.group ,
				{ justifyContent: 'center' } , 
				{ columnGap: s.tiny.t3 , rowGap: s.tiny.t3 } ,
				{ marginVertical: s.tiny.t2 } ,
				( images.length<=0 ) ? {display: 'none'} : null
				]}>
				{images}
			</View>

			<View style={[
				styles.group ,
				{ justifyContent: 'flex-end' } , 
				styles.contentItem ,
				( buttons.length<=0 ) ? {display: 'none'} : null ,
				{ marginBottom: s.tiny.t2 * -1 } 
				]}>
				{buttons}
			</View>
		
		</Card>
		
	) ;

} ;

export const TheImageCard = ({

	url = "" ,
	width = s.medium.m4 ,
	height = s.medium.m4 ,
	isList = false ,
	nameIcon = undefined ,
	containerIcon = {} , 
	functionIcon = () => console.log( "Acción Imagen" )
	
}) => {

	return (
		<Card
			containerStyle = {[ 
				styles.container ,
				{ width: width , height: height , padding: 0 } ,
				( isList ) ? { margin: 0 } : null
			]}
		>

			<Image 
				style = {[ styles.image , { width: width , height: height } ]}
				resizeMode = "cover"
				source = {{ uri: url }}
			/>

			{ ( nameIcon ) ?
				<View style={{ 
					position: 'absolute' , 
					top: s.tiny.t2 , 
					right: s.tiny.t2 , 
					borderRadius: s.tiny.t10 ,
					...containerIcon
				}}>
					<Icon
						name={nameIcon}
						color={c.neutral.white}
						size={s.tiny.t6}
						onPressAction={functionIcon}
					/> 
				</View> : null
			}
			
		</Card>
		
	) ;

} ;

export const TheColorBlockCard = ({

	text = undefined ,
	width = s.medium.m8 ,
	height = s.small.s2 ,
	backgroundColor = c.neutral.greyLightest ,
	textColor = c.neutral.black 
	
}) => {

	return (
		<View>
			<Card
				containerStyle = {[ 
					styles.container ,
					{ width: width , height: height , padding: 0 } ,
					{ marginVertical: s.tiny.t2 , marginHorizontal: s.tiny.t1 } , 
					{ backgroundColor: backgroundColor } ,
					{ flex: 1 , justifyContent: 'center' , alignContent: 'center' , alignItems: 'center' }
				]}
			>

			<Text style={[ 
				gs.text  , gs.subtitle , 
				{ margin: 0 , padding: 0 } , 
				( !text ) ? { display: 'none' } : null ,
				{ color: textColor }
			]}> {text} </Text>
				
			</Card>
		</View>
		
	) ;

} ;

const styles = StyleSheet.create({

	container: {
		backgroundColor: c.neutral.greyLightest , 
		borderRadius: s.tiny.t3 ,
		elevation: 1 ,
		margin: s.tiny.t3
	} ,

	image: {
		borderRadius: s.tiny.t3 ,
		margin: 0 ,
		padding: 0
	} ,

	contentItem: {
		marginVertical: s.tiny.t1
	} ,

	group: {
		flex: 1 ,
		flexDirection: 'row' , 
		width: '100%' , 
		flexWrap: 'wrap' ,
	}

}) ;

export default TheCard ;
export const ImageCard = TheImageCard ;
export const ColorBlockCard = TheColorBlockCard ;
