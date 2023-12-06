import React , { useState } from 'react' ;
import gs from '../../Styles' ;
import { View , StyleSheet } from "react-native" ;
import StateController , { Checkbox , RadioButton , Switch } from "../components/StateController" ;

const StateControllersTest = () => {

    const [ checkVariable , setCheckVariable ] = useState( false ) ;
    // console.log( "Checkbox : " , checkVariable ) ;
    const [ radioVariable , setRadioVariable ] = useState( false ) ;
    // console.log( "RadioButton : " , radioVariable ) ;
    const [ switchVariable , setSwitchVariable ] = useState( false ) ;
    // console.log( "Switch : " , switchVariable ) ;

    const [ checkVariableMC , setCheckVariableMC ] = useState( false ) ;
    const [ radioVariableMC , setRadioVariableMC ] = useState( false ) ;
    const [ switchVariableMC , setSwitchVariableMC ] = useState( false ) ;

    return (
        <View style={[ 
            gs.containerTest
        ]}>

            <View style={ styles.row }>
                <Checkbox 
                    variable={checkVariable} 
                    onPressFunction={ () => {  
                        setCheckVariable( !checkVariable ) ;  
                    } } 
                />
                <Checkbox variable={true} />
                <Checkbox variable={false} />
                <Checkbox variable={true} isDisabled={true} />
                <Checkbox isDisabled={true} />
            </View>

            <View style={ styles.row }>
                <RadioButton 
                    variable={radioVariable} 
                    onPressFunction={ () => {  
                        setRadioVariable( !radioVariable ) ; 
                    } }  
                />
                <RadioButton variable={true} />
                <RadioButton variable={false} />
                <RadioButton variable={true} isDisabled={true} />
                <RadioButton isDisabled={true} />
            </View>

            <View style={ styles.row }>
                <Switch 
                    variable={switchVariable} 
                    onPressFunction={ () => { 
                        setSwitchVariable( !switchVariable ) ;
                    } } 
                />
                <Switch variable={true} />
                <Switch variable={false} />
                <Switch variable={true} isDisabled={true} />
                <Switch isDisabled={true} />
            </View>    

            <View style={ styles.row }>
                <StateController 
                    variable={checkVariableMC} 
                    onPressFunction={ () => { 
                        setCheckVariableMC( !checkVariableMC ) ;
                    } } 
                    type = "checkbox"
                />
                <StateController 
                    variable={radioVariableMC} 
                    onPressFunction={ () => { 
                        setRadioVariableMC( !radioVariableMC ) ;
                    } } 
                    type = "radiobutton"
                />
                <StateController 
                    variable={switchVariableMC} 
                    onPressFunction={ () => { 
                        setSwitchVariableMC( !switchVariableMC ) ;
                    } } 
                    type = "switch"
                />
            </View>

        </View>
    ) ;
}

const styles = StyleSheet.create({

    row: {
        flexDirection: 'row' , 
        justifyContent: 'center' ,
        marginVertical: 18
	}

}) ;

export default StateControllersTest
