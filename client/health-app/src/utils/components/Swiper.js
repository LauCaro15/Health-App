import React , { useState } from 'react' ;
import { c } from "../basics/Colors" ;
import { s } from "../basics/Sizes" ;
import gs from "../../Styles" ;
import Icon from "./Icon" ;
import { StyleSheet , Image , ImageBackground , View } from "react-native" ;
import Swiper from 'react-native-swiper' ;
import { SwiperFlatList } from "react-native-swiper-flatlist" ;
import Carousel from 'react-native-snap-carousel';

export const TheMultimediaSwiper = ({

    multimedia = [] ,
    maxQuantity = 5 ,
    width = '100%' ,
    height = '100%'

}) => {

    let theMultimedia = [...multimedia] ;

    if ( !multimedia || multimedia.length <= 0 ) {
        return <ImageBackground source={require('../../uploads/Cohete.jpg')} style={{ resizeMode: 'contain' , flex: 1 }}/>
    } else if ( multimedia.length > maxQuantity ) {
        theMultimedia = multimedia.slice( 0 , maxQuantity ) ;
    }

    theMultimedia = theMultimedia.map( ( img , index ) => {
        return (
            <Image 
                style = {[ styles.image , { width: width , height: height } ]}
                resizeMode = "cover"
                source = {{ uri: img }}
                key = {index}
            />
        ) ; 
    } ) ;

    console.log( theMultimedia ) ;

    const iconProperties = {
        library: 'AntDesign' ,
        marginHorizontal: 0 ,
        color: c.neutral.greyLightest ,
        size: s.tiny.t8
    } ;

    //console.log( multimedia ) ;
    
    return (
        <Swiper 
            style = {[
                styles.container ,
                { width: width , height: height } ,
                { direction: 'ltr' } ,
                { margin: 0 }
            ]}

            width = {width}
            height = {height}
            loop = {true}
            showsButtons = {true}
            autoplay = {true}
            autoplayTimeout = {2.5}
            showsPagination = {true}
            removeClippedSubviews = {false}

            dotColor = {c.neutral.greyLightest}
            activeDotColor = {c.primary.base}
            nextButton = {<Icon name="right" {...iconProperties}/>}
            prevButton = {<Icon name="left" {...iconProperties}/>}
        >
            { theMultimedia }
        </Swiper>
    )
}

export const TheMultimediaSwiper2 = ({

    multimedia = [] ,
    maxQuantity = 5 ,
    width = '100%' ,
    height = '100%'

}) => {

    if ( multimedia.length > maxQuantity ) {
        multimedia = multimedia.slice( 0 , maxQuantity ) ;
    }

    const renderMedia = ({ item }) => {
            return (
                <View style={{ flex: 1 , width: width , height: height }}>
                    <Image 
                        style = {[ styles.image , { flex: 1 , width: width , height: height , aspectRatio: 1 } ]}
                        resizeMode = "cover" 
                        resizeMethod = "auto"
                        source = {{ uri: item }}
                    />
                </View>
            ) ;
    }
    
    return (
        <SwiperFlatList 

            data = { multimedia }
            renderItem = { renderMedia }
            style = {[ styles.container , {flex: 1} ]}

            paginationStyle = {[ {flex: 1} ]}

            renderAll = {true}
            autoplay = {true}
            autoplayDelay={5}
            autoplayLoop = {true}
            showPagination = {true}

            paginationDefaultColor = {c.neutral.greyLightest}
            paginationActiveColor = {c.primary.base}
        
        >
        </SwiperFlatList>
    )
}

export const TheMultimediaSwiper3 = ({

    multimedia = [] ,
    maxQuantity = 5 ,
    width = s.gigantic.g10 ,
    height = s.gigantic.g10 ,
    widthAddSlider = s.medium.m1

}) => {

    if ( multimedia.length > maxQuantity ) {
        multimedia = multimedia.slice( 0 , maxQuantity ) ;
    }

    const renderMedia = ({ item , index }) => {
        return (
            <View style={{ flex: 1 , width: width , height: height }}>
                <Image 
                    style = {[ styles.image , { flex: 1 , width: width , height: height } ]}
                    resizeMode = "cover" 
                    resizeMethod = "auto"
                    source = {{ uri: item }}
                    key = {index}
                />
            </View>
        ) ;
    }

    return (

        <Carousel 

            data = { multimedia }
            renderItem = { renderMedia }
            style = {[ styles.container , { flex: 1 } ]}

            sliderWidth = {width + widthAddSlider}
            itemWidth = {width}
            sliderHeight = {height}
            itemHeight = {height}

            loop = {true}
            autoplay = {true}
            autoplayInterval = {5000}
            activeSlideAlignment = {'center'}

            containerCustomStyle = {{
                
            }}
            slideStyle = {{}}
        >

        </Carousel>
    )
}

const styles = StyleSheet.create({

	container: {
		borderRadius: s.tiny.t3 ,
		elevation: 1 ,
		margin: s.tiny.t1 ,
		marginBottom: s.tiny.t2 ,
        padding: 0
	} ,

    image: {
		borderRadius: s.tiny.t3 ,
		margin: 0 ,
		padding: 0
	}

}) ;

export default TheMultimediaSwiper3
