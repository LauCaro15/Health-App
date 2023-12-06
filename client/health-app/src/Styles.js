import { StyleSheet } from 'react-native';
import { c } from "./utils/basics/Colors" ;
import { s } from "./utils/basics/Sizes" ;

export default StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    padding: 10,
    borderRadius: 5
  } ,
  cardText: {
    flex: 1,
    flexWrap: 'wrap' ,
    width: 125,
    textAlign: 'center',
    marginBottom: 5,
    fontSize: 15,
  } ,
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  } ,
  text: {
		fontFamily: "Roboto" ,
		fontWeight: '400' ,
		fontSize: s.tiny.t45
	} ,

	title: {
		fontFamily: "Roboto" ,
		fontWeight: '700' ,
		fontSize: s.tiny.t7
	} ,

	subtitle: {
		fontFamily: "Roboto" ,
		fontSize: s.tiny.t5 ,
		fontWeight: '700' ,
		margin: 0 ,
	} ,

	containerTest: {
		flex: 1 , 
		paddingHorizontal: s.tiny.t3
	} ,
});
