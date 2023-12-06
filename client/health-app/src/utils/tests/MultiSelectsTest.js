import React , { useState } from "react" ;
import gs from "../../Styles" ;
import { View } from "react-native" ;
import MultiSelect from "../components/MultiSelect" ;

const MultiSelectsTest = ({

    data = []
    
}) => {

    const [ selectedItems1 , setSelectedItems1 ] = useState([]);
    const [ selectedItems2 , setSelectedItems2 ] = useState([]);
    
	return (
		<View style={[ gs.containerTest ]}>
			<MultiSelect
                options={data}
                selectedVariable={selectedItems1}
                onSelectedFunction={ 
                    (selectedItems) => { 
                        /* console.log(selectedItems); */
                        setSelectedItems1(selectedItems);
                    }
                }
            />
            <MultiSelect
                options={data}
                selectedVariable={selectedItems2}
                onSelectedFunction={ 
                    (selectedItems) => { 
                        /* console.log(selectedItems); */
                        setSelectedItems2(selectedItems);
                    }
                }
                isMultiple={true}
            />
		</View>
	) ;
} ;

export default MultiSelectsTest ;
