import React from "react" ;
import { Tests } from "./Library" ;
import { ImageBackground } from "react-native" ;
import Swiper from 'react-native-swiper' ;
import PostsListTest from "./tests/PostsListTest";

const TestsSample = () => {

    const data = [
        { id: 1 , value: 'Item 1' } ,
        { id: 2 , value: 'Item 2' , disabled: true } ,
        { id: 3 , value: 'Item 3' } ,
        { id: 4 , value: 'Item 4' } ,
        { id: 5 , value: 'Item 5' } ,
        { id: 6 , value: 'Item 6' , disabled: true } ,
        { id: 7 , value: 'Item 7' } ,
        { id: 8 , value: 'Item 8' } ,
        { id: 9 , value: 'Item 9' } ,
        { id: 10 , value: 'Item 10' }
    ] ;

    return (
        <PostsListTest/>
    )

    return (

        <Swiper style={{ }} showsButtons={true}>

            <PostsListTest/>

            {/* <Tests.Pickers data={data}/>{/* Es simple y feo, pero en escencia, funciona */}
            {/* <Tests.MultiSelects data={data}/>{/* Está muy feo :c pero tiene buenas funcionalidades */}
            {/* <Tests.StateControllers/>{/* //TODO: Funcionan checkbox, radiobutton, switch y también el componente maestro */}
            {/* <Tests.Dropdowns data={data}/>{/* //TODO: Va bien, funciona para uno o varios pero falta los estilos deshabilitados */}
            {/* <Tests.InputsText/>{/* //TODO: Funciona quizá podría añadir más funcionalidades */}
            {/* <Tests.Flatlists data={data}/>{/* //TODO: Funciona no hay mucho que decir al respecto */}
            {/* <Tests.Cards/>{/* //TODO: Están bien pero el resize sigue siendo raro */}
            {/* <Tests.Buttons/>{/* //TODO: Funcionan y están bien */}
            {/* <ImageBackground source={require('../uploads/Cohete.jpg')} style={{ resizeMode: 'contain' , flex: 1 }}/> */}

        </Swiper>
    )
}

export default TestsSample

