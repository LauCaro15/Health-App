import React , { useState } from "react" ;
import gs from "../../Styles" ;
import { View } from "react-native" ;
import Picker from "../components/Picker" ;

const PickersTest = ({

    data = []

}) => {

    const [ selectedItem1 , setSelectedItem1 ] = useState([]);
    const [ selectedItem2 , setSelectedItem2 ] = useState([]);
    
	return (
		<View style={[ gs.containerTest ]}>
			<Picker
                options={data}
                selectedVariable={selectedItem1}
                onSelectedFunction={ 
                    (selectedItem) => { 
                        /* console.log(selectedItems); */
                        setSelectedItem1(selectedItem);
                    }
                }
            />
            <Picker
                options={data}
                selectedVariable={selectedItem2}
                onSelectedFunction={ 
                    (selectedItem) => { 
                        /* console.log(selectedItems); */
                        setSelectedItem2(selectedItem);
                    }
                }
                isDisabled={true}
            />
		</View>
	) ;
} ;

export default PickersTest ;
