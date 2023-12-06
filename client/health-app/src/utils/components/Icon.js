import React from 'react' ;
import { c } from '../basics/Colors' ;
import { s } from '../basics/Sizes' ;

import Ionicons from 'react-native-vector-icons/Ionicons' ;
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons' ;
import AntDesign from 'react-native-vector-icons/AntDesign' ;
import FontAwesome from 'react-native-vector-icons/FontAwesome' ;

const ionicons = require( '@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Ionicons.json' ) ;
const materialCommunityIcons = require( '@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json' ) ;
const antDesign = require( '@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/AntDesign.json' ) ;
const fontAwesome = require( '@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/FontAwesome.json' ) ;


const TheIcon = ({ 

    name , 
    size = s.tiny.t6 , 
    color = c.neutral.black ,
    library = undefined ,
    onPressAction = undefined ,
    marginVertical = s.tiny.t1 ,
    marginHorizontal = s.tiny.t1

}) => {

    const properties = {
        padding: 0 ,
        name: name , 
        size: size , 
        color: color ,
        onPress: onPressAction ,
        marginVertical: marginVertical ,
        marginHorizontal: marginHorizontal 
    } ;

    const iconLibraries = {

        'Ionicons': { library: Ionicons , nameList: ionicons } ,
        'MaterialCommunityIcons': { library: MaterialCommunityIcons , nameList: materialCommunityIcons } ,
        'AntDesign': { library: AntDesign , nameList: antDesign } ,
        'FontAwesome': { library: FontAwesome , nameList: fontAwesome }
        
    } ;

    if ( library ) {

        if ( iconLibraries[library].nameList[name] ) {
            const Icon = iconLibraries[library].library ;
            return <Icon {...properties} /> ;
        }

    } else {

        for ( let key in iconLibraries ) {
            if ( iconLibraries[key].nameList[name] ) {
                const Icon = iconLibraries[key].library ;
                return <Icon {...properties} /> ;
            }
        }

    }

}

export default TheIcon
