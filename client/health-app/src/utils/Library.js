import Colors from './basics/Colors'
import Sizes from './basics/Sizes'
import Styles from '../Styles'

import TheIcon from './components/Icon'
import TheButton from './components/Button'
import TheCard , { TheImageCard , TheColorBlockCard , ThePostCard } from './components/Card'
import TheFlatList from './components/FlatList'
import TheInputText from './components/InputText'
import TheDropdown from './components/Dropdown'
import TheMultiSelect from './components/MultiSelect'
import TheStateController , { 
    TheCheckBox , TheRadioButton , TheSwitch 
} from './components/StateController'
import TheModal from './components/Modal'

import ButtonsTest from './tests/ButtonsTest'
import CardsTest from './tests/CardsTest'
import FlatListsTest from './tests/FlatListsTest'
import InputsTextTest from './tests/InputsTextTest'
import DropdownsTest from './tests/DropdownsTest'
import StateControllersTest from './tests/StateControllersTest'
import MultiSelectsTest from './tests/MultiSelectsTest'
import PickersTest from './tests/PickersTest'

export const c = Colors ;
export const s = Sizes ;
export const gs = Styles ;

export const Icon = TheIcon ;
export const Button = TheButton ;
export const Card = TheCard ;
export const ImageCard = TheImageCard ;
export const ColorBlockCard = TheColorBlockCard ;
export const PostCard = ThePostCard ;
export const FlatList = TheFlatList ;
export const InputText = TheInputText ;
export const Dropdown = TheDropdown ;
export const MultiSelect = TheMultiSelect ;
export const CheckBox = TheCheckBox ;
export const RadioButton = TheRadioButton ;
export const Switch = TheSwitch ;
export const StateController = TheStateController ;
export const Modal = TheModal ;

export const Tests = { 
    Buttons: ButtonsTest  ,
    Cards: CardsTest ,
    Flatlists: FlatListsTest ,
    InputsText: InputsTextTest ,
    Dropdowns: DropdownsTest ,
    StateControllers: StateControllersTest ,
    MultiSelects: MultiSelectsTest ,
    Pickers: PickersTest 
}
