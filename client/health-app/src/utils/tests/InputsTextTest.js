import React from "react" ;
import { View } from "react-native" ;
import gs from '../../Styles' ;
import InputText from "../components/InputText" ;

const InputsTextTest = () => {

	const validationError = (textEntry) => {
		if ( textEntry ) {
			return false;
		} else {
			return true;
		}
	};

	return (
		<View style={[ 
			gs.containerTest , 
			{ gap: 20 } 
		]}>
			<InputText label='Normal' />
			<InputText label='Contraseña Visible' isPassword={true} />
			<InputText label='Contraseña Protegida' isPassword={true} />
			<InputText label='Error' validationFunction={(textEntry) => true} />
			<InputText
				label='Validando Error'
				validationFunction={validationError}
				errorMessage='El campo está vacío'
			/>
			<InputText label='Deshabilitado' isDisabled={true} />
		</View>
	);
};

export default InputsTextTest;
