import {Text,InputText} from './FilterStyled'
import { useDispatch,useSelector } from 'react-redux'
import { filterContacts } from 'redux/filterListReducer'
import { reduxFilter } from 'redux/selectors'
const Filter = () => {

    const dispatch = useDispatch()
    const filterValue = useSelector(reduxFilter)
    
    const filterName = (event) =>{
      dispatch(filterContacts({ filterValue: event.currentTarget.value.toLowerCase()}))
    }

     return(
            <>
            <Text>Find contacts by name</Text>
            <InputText
            onChange={filterName}
            name="filter"
            value={ filterValue }
            />
            </>
        )
}

export default Filter