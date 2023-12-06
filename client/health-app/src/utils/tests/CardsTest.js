import React from "react" ;
import gs from '../../Styles' ;
import { ScrollView , Text } from "react-native" ;
import s from "../basics/Sizes" ;
import c from "../basics/Colors" ;
import Card , { ImageCard , PostCard } from "../components/Card" ;
import Button from "../components/Button" ;

const CardsTest = () => {

	const imageCardProperties = {
		width: s.large.l10 ,
		height: s.large.l10 ,
		nameIcon: 'trash' ,
		containerIcon: {
			backgroundColor: c.semantic.error
		}
	}

	return (
		<ScrollView 
			style={[ gs.containerTest ]}
			contentContainerStyle={[ 
				{ flexDirection: 'row' , flexWrap: 'wrap' , justifyContent: 'center' } , 
				{ paddingBottom: s.tiny.t10 }
			]}
		>
			<Card 
				title='Título' 
				width='100%'
				images={[ 
					"https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg" , 
					"https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg" , 
					"https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_1280.jpg" ,
					"https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg" ,
					"https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg"
				]}
				styleImages={{nameIcon: 'trash' ,
				containerIcon: {
					backgroundColor: c.semantic.error
				}}}
				key = {1}
			></Card>
			<Card
				title='Título'
				subtitle='Subtítulo largo para ver qué pasa cuando hace salto de línea'
				paragraph='Texto de párrafo más largo para ver si se ajusta.'
				buttons={[
					<Button text='Hola' size='sm' key={1}/>,
					<Button text='Somos' size='sm' key={2}/>,
					<Button text='Botones' size='sm' key={3}/>,
				]}
				key = {2}
			>
				<Text>Prueba de envío</Text>
			</Card>
			<Card title='Título' key = {3}></Card>
			<Card subtitle='Subtítulo' paragraph="Texto" key={4}></Card>
			<Card title='Título' width='100%' key={5}></Card>
			<Card title='Título' key={6}><Text>Cosas cosas cosas</Text></Card>
			<ImageCard 
				url="https://www.elespectador.com/resizer/lZcP_cqKxjBwScJGInZnNF6Oghc=/arc-anglerfish-arc2-prod-elespectador/public/SQT6VSTKY5ALBBK4QFI22JCWNY.jpg" 
				key={7} {...imageCardProperties}/>
			<ImageCard 
				url="https://cdn.pixabay.com/photo/2017/11/14/13/06/kitty-2948404_1280.jpg" 
				key={8} {...imageCardProperties}/>
			<ImageCard 
				url="https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_1280.jpg" 
				key={9} {...imageCardProperties}/>
			<ImageCard 
				url="http://1.bp.blogspot.com/-YIO0qIkq6Mo/USe7MTG3R_I/AAAAAAAAAW0/MpORauh_8f0/s1600/cats_animals_little_kittens_kitten_kitty_cat_adorable_desktop_1920x1080_hd-wallpaper-782249.jpeg" 
				key={10} {...imageCardProperties}/>
			<PostCard 
				title='Título' 
				width='100%'
				multimedia={[ 
					"https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg" , 
					"https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg" , 
					"https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_1280.jpg" ,
					"https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg" ,
					"https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg"
				]}
				key = {11}
			></PostCard>
		</ScrollView>
	);
};

export default CardsTest;

