import React , { memo } from "react" ;
import { c } from "../basics/Colors" ;
import { s } from "../basics/Sizes" ;
import gs from "../../Styles" ;
import { StyleSheet , View , Text } from "react-native" ;
import Swiper from "./Swiper" ;
import Button from "./Button" ;
import Modal from "./Modal" ;
import { Card } from "@rneui/base" ;
import TheCard from "./Card"

export const ThePost = memo ( ({
    
	title = "" ,
	multimedia = [] , // Recibe uris no locales
	maxQuantity = 5 ,
	width = 'auto' ,
	imageSwiperSize = s.gigantic.g10 ,
	paragraph = "" ,
	buttons = [] ,
	isSeeMoreActive = false ,
	
}) => {

	const widthAddSlider = s.medium.m1 ;

	if ( isSeeMoreActive ) {
		buttons.unshift(
			<Modal 
				OpenButton={
					<Button iconName='eye' type="icon" size='sm' key="See" />
				}
				Component={
					<TheCard
						title = {title}
						paragraph = {paragraph}
						images = {multimedia}
						styleImages={{
							nameIcon: 'trash' ,
							containerIcon: {
								backgroundColor: c.semantic.error
							} ,
							width: s.large.l6 ,
							height: s.medium.m10
						}}
						width = '100%'
					/> 
                }
                CloseButton={
                    <Button
                        iconName='close' type="circle" size="sm" iconSize={s.tiny.t8}
                        key="Close" 
                    />
                }
                >
			</Modal>
		);
	}

	return (
		<Card 
			containerStyle = {[ 
				styles.container ,
				( width === '100%' ) ? 
					{ flexGrow: 1 , flexShrink: 0 , flexBasis: '96%' } : 
					( width === 'auto') ? { flexGrow: 1 , flexShrink: 0 } : { width: width } ,
				{ paddingHorizontal:  s.tiny.t4 } ,
				{ justifyContent: 'center' }
			]}
		>
			<View style={[
				styles.group ,
				{ justifyContent: 'center' , alignItems: 'center' } , 
				styles.contentItem ,
				( multimedia.length<=0 ) ? {display: 'none'} : null ,
				{ marginBottom: 0 } ,
				{ overflow: 'hidden' , alignSelf: 'center' , width: imageSwiperSize + widthAddSlider }
				]}>
				<Swiper 
					multimedia = {multimedia} 
					width = {imageSwiperSize} 
					height = {imageSwiperSize} 
					maxQuantity = {maxQuantity}
					widthAddSlider = {widthAddSlider}
				/>
			</View>

			<Card.Title style={[ 
				gs.text  , gs.subtitle , 
				{ marginBottom: 0 , marginTop: s.tiny.t2 , padding: 0 } , 
				( !title ) ? { display: 'none' } : null  
			]}> {title} </Card.Title>

			<Text 
				style={[ 
					gs.text , 
					( paragraph === "" ) ? {display: 'none'} : null  , 
					styles.contentItem
				]}
			>{paragraph}</Text>

			<View style={[
				styles.group ,
				{ justifyContent: 'flex-end' } , 
				styles.contentItem ,
				( buttons.length<=0 ) ? {display: 'none'} : null ,
				{ marginVertical: s.tiny.t1 * -1  }
				]}>
				{buttons}
			</View>
		
		</Card>
		
	) ;

} ) ;

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

export default ThePost
