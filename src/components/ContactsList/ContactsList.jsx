import {UlContacts,LiContacts,LiButton} from './ContactsListStyled'
import { nanoid } from 'nanoid'
import { useSelector, useDispatch } from 'react-redux'
import { getContactsThunk, deleteContactsThunk } from 'redux/fetchOperations'
import { useEffect } from 'react'
import { reduxContacts,reduxFilter,reduxIsLoading,reduxError } from 'redux/selectors'

const ContactsList = () => {
    
    const dispatch = useDispatch()
    const contactsList = useSelector(reduxContacts)
    const filterValue = useSelector(reduxFilter)
    const isLoading = useSelector(reduxIsLoading)
    const isError = useSelector(reduxError)

    useEffect(() => {
        dispatch(getContactsThunk()); 
      }, [dispatch]);    

    const deleteName = (event) =>{
        console.log('deleteButtton')
        const id = event.currentTarget.id
        dispatch(deleteContactsThunk(id))
      }
    
    const newState = contactsList && contactsList.filter(option => option.name.toLowerCase().includes(`${filterValue}`))

    return(
        <UlContacts>

        {newState.length === 0 && !isLoading && !isError && <h3>No contacts found.</h3>}

        {isError && <h3>{isError}</h3>}

        {newState.map(event =>(
            <LiContacts key={nanoid()}>- {event.name}: {event.number}
            <LiButton id={event.id} onClick={deleteName}>{isLoading ? 'Loadind...' : 'Delete'}</LiButton>
            </LiContacts>
            
        ))}
    </UlContacts>
    )
}



export default ContactsList