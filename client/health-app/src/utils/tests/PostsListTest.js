class PostSchema {
    
    constructor( title="" , description="" , multimedia=[] , active=true ) {
        this._title = title ;
        this._description = description ;
        this._multimedia = multimedia ;
        this._active = active ;
    }

    get title() { return this._title ; }
    set title( value ) { this._title = value ; }

    get description() { return this._description ; }
    set description( value ) { this._description = value ; }

    get multimedia() { return this._multimedia ; }
    set multimedia( value ) { this._multimedia = value ; }

    get active() { return this._active ; }
    set active( value ) { this._active = value ; }

}

import React from "react" ;
import gs from "../../Styles" ;
import { View } from "react-native" ;
import { FlatList , Post , Button } from "../Library" ;

const PostsListTest = (  ) => {

    let posts = [
        new PostSchema( 'Gato en el jardín' , 'Un gato disfrutando de la naturaleza.' , 
            [ 'https://placekitten.com/200/300' , 'https://placekitten.com/201/300' , 'https://placekitten.com/202/300' , 
                'https://placekitten.com/203/300' , 'https://placekitten.com/204/300' , 'https://placekitten.com/205/300'] , 
            Math.random()<0.4 ) ,
        new PostSchema( 'Gato juguetón' , 'Un gato jugando con una pelota de lana.' , 
            [ 'https://placekitten.com/206/300' , 'https://placekitten.com/207/300' , 'https://placekitten.com/208/300' , 
                'https://placekitten.com/209/300' , 'https://placekitten.com/210/300' , 'https://placekitten.com/211/300'] , 
            Math.random()<0.4 ) ,
        new PostSchema( 'Gato durmiendo' , 'Un gato durmiendo plácidamente en su cama.' , 
            [ 'https://placekitten.com/212/300' , 'https://placekitten.com/213/300' , 'https://placekitten.com/214/300' , 
                'https://placekitten.com/215/300' , 'https://placekitten.com/216/300' , 'https://placekitten.com/217/300'] , 
            Math.random()<0.4 ) ,
        new PostSchema( 'Gato comiendo' , 'Un gato disfrutando de su comida favorita.' , 
            [ 'https://placekitten.com/218/300' , 'https://placekitten.com/219/300' , 'https://placekitten.com/220/300' , 
                'https://placekitten.com/221/300' , 'https://placekitten.com/222/300' , 'https://placekitten.com/223/300'] , 
            Math.random()<0.4 ) ,
        new PostSchema( 'Gato curioso' , 'Un gato explorando su entorno.' , 
            [ 'https://placekitten.com/224/300' , 'https://placekitten.com/225/300' , 'https://placekitten.com/226/300' , 
                'https://placekitten.com/227/300' , 'https://placekitten.com/228/300' , 'https://placekitten.com/229/300'] , 
            Math.random()<0.4 ) ,
        new PostSchema( 'Gato feliz' , 'Un gato ronroneando de felicidad.' , 
            [ 'https://placekitten.com/230/300' , 'https://placekitten.com/231/300' , 'https://placekitten.com/232/300' , 
                'https://placekitten.com/233/300' , 'https://placekitten.com/234/300' , 'https://placekitten.com/235/300'] , 
            Math.random()<0.4 ) ,
        new PostSchema( 'Gato sorprendido' , 'Un gato sorprendido por un ruido.' , 
            [ 'https://placekitten.com/236/300' , 'https://placekitten.com/237/300' , 'https://placekitten.com/238/300' , 
                'https://placekitten.com/239/300' , 'https://placekitten.com/240/300' , 'https://placekitten.com/241/300'] , 
            Math.random()<0.4 ) ,
        new PostSchema( 'Gato en la ventana' , 'Un gato mirando por la ventana.' , 
            [ 'https://placekitten.com/242/300' , 'https://placekitten.com/243/300' , 'https://placekitten.com/244/300' , 
                'https://placekitten.com/245/300' , 'https://placekitten.com/246/300' , 'https://placekitten.com/247/300'] , 
            Math.random()<0.4 ) ,
        new PostSchema( 'Gato y su juguete' , 'Un gato jugando con su juguete favorito.' , 
            [ 'https://placekitten.com/248/300' , 'https://placekitten.com/249/300' , 'https://placekitten.com/250/300' , 
                'https://placekitten.com/251/300' , 'https://placekitten.com/252/300' , 'https://placekitten.com/253/300'] , 
            Math.random()<0.4 ) ,
        new PostSchema( 'Gato elegante' , 'Un gato mostrando su elegancia.' , 
            [ 'https://placekitten.com/254/300' , 'https://placekitten.com/255/300' , 'https://placekitten.com/256/300' , 
                'https://placekitten.com/257/300' , 'https://placekitten.com/258/300' , 'https://placekitten.com/259/300'] , 
            Math.random() < 0.4)
    ] ;      

    //console.log( posts ) ;


    /* //TODO: El ojo debe activar una modal que tenga una vista de card normal incluyendo los botones de eliminar la imagen */
    const renderPost = ( item ) => {
        return(
            <Post 
                title={item.item.title} 
                multimedia={item.item.multimedia} 
                paragraph={item.item.description}
                buttons={[
                    <Button 
                        iconName='bookmark' type="icon" size='sm' key="Save" 
                        onPressAction={()=>{console.log("Guardar post",item.item.title)}}
                    /> ,
                    <Button 
                        iconName='heart' type="icon" size='sm' key="Like" 
                        onPressAction={()=>{console.log("Me gusta post",item.item.title)}}
                    />
                ]}
                isSeeMoreActive={true}
            />
        );
    };
    
	return (
		<View style={[ gs.containerTest , { marginHorizontal: -12 } ]}>
			<FlatList 
                data={posts} 
                renderFunction={renderPost}
                initialQuantityRender={3}
                maxRenderPerBatch={2}
            />
		</View>
	) ;

} ;

export default PostsListTest;
