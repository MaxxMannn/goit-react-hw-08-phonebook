import ContactForm from 'components/ContactsForm/ContactForm'
import Filter from '../components/Filter/Filter'
import ContactsList from 'components/ContactsList/ContactsList'
import {Container} from 'components/AppStyled'
import { useSelector } from 'react-redux'

export default function Contacts() {
    const contactsList = useSelector(state=>state.contacts)
    return (
        <Container>
        <h1>PhoneBook</h1>
        <ContactForm
        />
        
        <h2>Contacts</h2>
        <Filter
        />
        {contactsList && 
        <ContactsList
        /> }
        </Container>
    );
  }