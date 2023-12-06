import React from "react" ;
import gs from "../../Styles" ;
import { View } from "react-native" ;
import Card from "../components/Card" ;
import FlatList from "../components/FlatList" ;

const FlatListsTest = ({ data }) => {

    const renderItem1 = ( item ) => {
        return(
            <Card title={item.item.value} />
        );
    };

    const renderItem2 = ( item ) => {
        return(
            <Card title={item.item.value} width={100} />
        );
    };

    const renderItem3 = ( item ) => {
        return(
            <Card title={item.item.value} width='100%' />
        );
    };
    
	return (
		<View style={[ gs.containerTest ]}>
			<FlatList 
                data={data} 
                renderFunction={renderItem1}
            />
            <FlatList 
                data={data} 
                renderFunction={renderItem2}
            />
            <FlatList 
                data={data} 
                renderFunction={renderItem3}
            />
		</View>
	) ;
} ;

export default FlatListsTest;
