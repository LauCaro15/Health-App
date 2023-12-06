import React , { useState } from "react" ;
import gs from "../../Styles" ;
import { View } from "react-native" ;
import Dropdown from "../components/Dropdown" ;

const DropdownsTest = ({

    data = []

}) => {

    const [ selectedItem1 , setSelectedItem1 ] = useState([]) ;
    const [ selectedItems2 , setSelectedItems2 ] = useState([]) ;

	return (

		<View style={[ gs.containerTest ]}>
			<Dropdown
                options={data}
                selectedVariable={selectedItem1}
                onSelectedFunction={ 
                    (selectedItems) => { 
                        /* console.log(selectedItems); */
                        setSelectedItem1(selectedItems) ;
                    }
                }
            />
            <Dropdown
                options={data}
                selectedVariable={selectedItems2}
                onSelectedFunction={ 
                    (selectedItems) => { 
                        /* console.log(selectedItems); */
                        setSelectedItems2(selectedItems) ;
                    }
                }
                isMultiple={true}
            />
		</View>
	) ;
} ;

export default DropdownsTest ;
