class PostSchema {

    constructor( id , title="" , description="" , multimedia=[] ) {
        this._id = id  ;
        this._title = title ;
        this._description = description ;
        this._multimedia = multimedia ;

    }

    get id () { return this._id  ; }
    set id ( value ) { this._id  = value ; }

    get title() { return this._title ; }
    set title( value ) { this._title = value ; }

    get description() { return this._description ; }
    set description( value ) { this._description = value ; }

    get multimedia() { return this._multimedia ; }
    set multimedia( value ) { this._multimedia = value ; }

}

import React , { useEffect , useState } from "react" ;
import gs from "../../Styles" ;
import { View , Alert } from "react-native" ;
import { FlatList , Post , Button } from "../Library" ;
import { useNavigation } from '@react-navigation/native' ;
import AsyncStorage from '@react-native-async-storage/async-storage' ;

const PostsListTest = (  ) => {

    let posts = [
        new PostSchema( '1' , 'Gato en el jardín' , 'Un gato disfrutando de la naturaleza.' ,
            [ 'https://placekitten.com/200/300' , 'https://placekitten.com/201/300' , 'https://placekitten.com/202/300' ,
                'https://placekitten.com/203/300' , 'https://placekitten.com/204/300' , 'https://placekitten.com/205/300'] ) ,
        new PostSchema( '2' , 'Gato juguetón' , 'Un gato jugando con una pelota de lana.' ,
            [ 'https://placekitten.com/206/300' , 'https://placekitten.com/207/300' , 'https://placekitten.com/208/300' ,
                'https://placekitten.com/209/300' , 'https://placekitten.com/210/300' , 'https://placekitten.com/211/300'] ) ,
        new PostSchema( '3' , 'Gato durmiendo' , 'Un gato durmiendo plácidamente en su cama.' ,
            [ 'https://placekitten.com/212/300' , 'https://placekitten.com/213/300' , 'https://placekitten.com/214/300' ,
                'https://placekitten.com/215/300' , 'https://placekitten.com/216/300' , 'https://placekitten.com/217/300'] ) ,
        new PostSchema( '4' , 'Gato comiendo' , 'Un gato disfrutando de su comida favorita.' ,
            [ 'https://placekitten.com/218/300' , 'https://placekitten.com/219/300' , 'https://placekitten.com/220/300' ,
                'https://placekitten.com/221/300' , 'https://placekitten.com/222/300' , 'https://placekitten.com/223/300'] ) ,
        new PostSchema( '5' , 'Gato curioso' , 'Un gato explorando su entorno.' ,
            [ 'https://placekitten.com/224/300' , 'https://placekitten.com/225/300' , 'https://placekitten.com/226/300' ,
                'https://placekitten.com/227/300' , 'https://placekitten.com/228/300' , 'https://placekitten.com/229/300'] ) ,
        new PostSchema( '6' , 'Gato feliz' , 'Un gato ronroneando de felicidad.' ,
            [ 'https://placekitten.com/230/300' , 'https://placekitten.com/231/300' , 'https://placekitten.com/232/300' ,
                'https://placekitten.com/233/300' , 'https://placekitten.com/234/300' , 'https://placekitten.com/235/300'] ) ,
        new PostSchema( '7' , 'Gato sorprendido' , 'Un gato sorprendido por un ruido.' ,
            [ 'https://placekitten.com/236/300' , 'https://placekitten.com/237/300' , 'https://placekitten.com/238/300' ,
                'https://placekitten.com/239/300' , 'https://placekitten.com/240/300' , 'https://placekitten.com/241/300'] ) ,
        new PostSchema( '8' , 'Gato en la ventana' , 'Un gato mirando por la ventana.' ,
            [ 'https://placekitten.com/242/300' , 'https://placekitten.com/243/300' , 'https://placekitten.com/244/300' ,
                'https://placekitten.com/245/300' , 'https://placekitten.com/246/300' , 'https://placekitten.com/247/300'] ) ,
        new PostSchema( '9' , 'Gato y su juguete' , 'Un gato jugando con su juguete favorito.' ,
            [ 'https://placekitten.com/248/300' , 'https://placekitten.com/249/300' , 'https://placekitten.com/250/300' ,
                'https://placekitten.com/251/300' , 'https://placekitten.com/252/300' , 'https://placekitten.com/253/300'] ) ,
        new PostSchema( '10' , 'Gato elegante' , 'Un gato mostrando su elegancia.' ,
            [ 'https://placekitten.com/254/300' , 'https://placekitten.com/255/300' , 'https://placekitten.com/256/300' ,
                'https://placekitten.com/257/300' , 'https://placekitten.com/258/300' , 'https://placekitten.com/259/300'] )
    ] ;

    const [ isUserLoggedIn , setIsUserLoggedIn ] = useState( false ) ;
    const [ userRole , setUserRole ] = useState( 'guess' ) ;
    const navigation = useNavigation() ;
    const userId = AsyncStorage.getItem( 'userId' ) ;

    const ip = "192.168.1.2" ;
    const url = `http://${ip}:3000/api/v1/clients/${userId}` ;

    useEffect( () => {
        const checkLoginStatus = async () => {
            const userToken = await AsyncStorage.getItem( 'accessToken' ) ;
            setIsUserLoggedIn( userToken !== null ) ;
            

            const userRole = await AsyncStorage.getItem( 'role' ) ;
            setUserRole( ( userRole ) ? userRole : 'guess' ) ;
            console.log( userRole ) ;
        } ;

        checkLoginStatus();
    } , [] ) ;

    const goToLogin = () => {
        navigation.navigate('Login') ;
    } ;

    const handleLikePost = async ( postId ) => {

        console.log( "Post id : ", postId ) ;
        try {
            const response = await axios.post( url+`/addLike` , { id_post: postId } ) ;
            console.log( response.data ) ;
        } catch ( error ) {
            console.error( error );
        }
    }

    const handleCollectPost = async ( postId ) => {

        console.log( "Post id : ", postId ) ;

        try {
            const response = await axios.post( url+`/addCollection` , { id_post: postId } ) ;
            console.log( response.data ) ;
        } catch ( error ) {
            console.error( error );
        }
    }

    const goToCreatePost = () => {
        navigation.navigate('CreatePost') ;
    } ;

    //console.log( posts ) ;

    const renderPost = ( item ) => {

        return(
            <Post
                title={item.item.title}
                multimedia={item.item.multimedia}
                paragraph={item.item.description}
                buttons={ [
                    <Button
                        iconName='bookmark' type="icon" size='sm' key="Save"
                        onPressAction={ () => {
                            handleCollectPost( item.item.id ) ;
                            Alert.alert(
                                title = "Post Guardado" ,
                                'Se ha guardado el post : "' + item.item.title + '" con id : ' + item.item.id ,
                                [
                                    { text: "OK" , onPress: () => console.log("OK Pressed") }
                                ] ,
                                { cancelable: true }
                            )
                        } }
                    /> ,
                    <Button
                        iconName='heart' type="icon" size='sm' key="Like"
                        onPressAction={ () => {
                            handleLikePost( item.item.id ) ;
                            Alert.alert(
                                title = "Me Gusta Post" ,
                                'Le ha dado me gusta guardado al post : "' + item.item.title + '" con id : ' + item.item.id ,
                                [
                                    { text: "OK" , onPress: () => console.log("OK Pressed") }
                                ] ,
                                { cancelable: true }
                            )
                        } }
                    />
                ] }
                isSeeMoreActive={isUserLoggedIn}
                userRole={userRole}
            />
        );
    };

    console.log( userRole );

	return (
		<View style={[ gs.containerTest , { marginHorizontal: -12 } ]}>
            { ( userRole === 'guess' ) ? <Button text={"Iniciar Sesión"} onPressAction={goToLogin}/> : null }
			<FlatList
                data={posts}
                renderFunction={renderPost}
                initialQuantityRender={3}
                maxRenderPerBatch={2}
            />
            { ( userRole === 'admin' ) ? <Button text={"Crear Post"} onPressAction={goToCreatePost}/> : null }
		</View>
	) ;

} ;

export default PostsListTest ;
