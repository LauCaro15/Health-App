import React , { useState , cloneElement } from "react" ;
import s from "../basics/Sizes"
import gs from '../../Styles' ;
import Button from "./Button" ;
import { StyleSheet , View , Modal } from "react-native" ;

const TheModal = ({

    Component ,
    onCloseFunction = () => {} ,
    OpenButton = <Button onPress={() => setModalVisible(true)} /> ,
    CloseButton = <Button onPress={() => setModalVisible(false)} />

}) => {

    const [ modalVisible , setModalVisible ] = useState(false) ;
    
    return (
        <View>
            { cloneElement( OpenButton , { onPressAction: () => setModalVisible(true) } ) }
            <Modal
                animationType = "slide"
                transparent = {true}
                visible = {modalVisible}
                onRequestClose = {onCloseFunction}>
                <View style={[ styles.container ]}>
                    { cloneElement(Component, { setModalVisible }) }
                    { cloneElement( CloseButton , { onPressAction: () => setModalVisible(false) } ) }
                </View>
            </Modal>
        </View>
	);
};

const styles = StyleSheet.create({

    container: {
        flex: 1 , 
        marginVertical: s.small.s1 ,
        marginBottom: s.small.s10 ,
        marginHorizontal: s.tiny.t4 ,
        justifyContent: 'center' ,
        alignItems: 'center' ,
        padding: 0 ,
        width: 'auto' , 
        height: 'auto'
    }

}) ;

export default TheModal ;
