import React from "react" ;
import gs from '../../Styles' ;
import { StyleSheet , FlatList , Text } from "react-native" ;

const TheFlatList = ({

    data ,
    numColumns = 24 ,
    renderFunction = ({ item }) => <Text>{item.toString()}</Text> ,
    initialQuantityRender = undefined ,
    maxRenderPerBatch = undefined ,

}) => {

    // console.log( data ) ;
    
    return (
        <FlatList
            data={data}
            numColumns={numColumns}
            columnWrapperStyle={ ( numColumns>1 && data && data.length>1 ) ? styles.wrapper : null }
            style={{ margin: 4 , marginBottom: 24 }}
            renderItem={ renderFunction }
            initialNumToRender={initialQuantityRender}
            maxToRenderPerBatch={maxRenderPerBatch}
        ></FlatList>
	);
};

const styles = StyleSheet.create({

    wrapper: {
        flexWrap: "wrap",
        flex: 1,
        justifyContent: "center",
    }

}) ;

export default TheFlatList;
