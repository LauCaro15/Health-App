import React , { useState , cloneElement } from "react" ;
import s from "../basics/Sizes"
import gs from '../../Styles' ;
import { StyleSheet , View , Modal , TouchableWithoutFeedback } from "react-native" ;

const TheModal = ({

    Component ,
    onCloseFunction = () => {} ,
    OpenButton = <Button onPress={() => setModalVisible(true)} />

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
                    {cloneElement(Component, { setModalVisible })}
                </View>
            </Modal>
        </View>
	);
};

const styles = StyleSheet.create({

    container: {
        flex: 1 , 
        marginVertical: s.small.s1 , 
        marginHorizontal: s.tiny.t4 ,
        justifyContent: 'center' ,
        alignItems: 'center' ,
        padding: 0 ,
        width: 'auto' , 
        height: 'auto'
    }

}) ;

export default TheModal ;
