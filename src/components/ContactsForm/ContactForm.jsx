import React,{ useState } from 'react'
import { Container,Form,Button,Text,InputText } from './ContactFormStyled';
import { addContactsThunk } from 'redux/fetchOperations';
import { nanoid } from 'nanoid'
import { useDispatch } from "react-redux";
import { reduxContacts,reduxIsLoading } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const NewPhoneBookContainer = () =>{
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const dispatch = useDispatch()
    const contactsList = useSelector(reduxContacts)
    const isLoading = useSelector(reduxIsLoading)

    const wrongRegister = (info) => {
        return toast.error(`${info} is already in contact`, {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      } 

    const currentName = (event) =>{
        const {name,value} = event.currentTarget
        
        switch(name){
            case 'name':
        return setName(value)
            case 'number':
        return setNumber(value)
            default:
        return console.log('Wrong qwery')
        }
    }

    const addNewContact = (event) => {
        event.preventDefault()
        if(contactsList.find(option => option.name.toLowerCase() === `${name}`.toLowerCase())){
          return wrongRegister(name)
        }
    
        if(contactsList.find(option => option.number === `${number}`)){
          return wrongRegister(number)
        }
        
        const newContact = {id: `${nanoid()}`, name:`${name}`, number:`${number}`}
        dispatch(addContactsThunk(newContact))
        event.currentTarget.reset()
    }

    return (
        <Container>
        <Form onSubmit={addNewContact}>
        <Text>Name</Text>
        <InputText
        onChange={currentName}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        />
        <Text>Number</Text>
        <InputText
        onChange={currentName}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
        />
        <Button type='submit'>{isLoading ? 'Loadind...' : 'Add Contacts'}</Button>
        </Form>
        
        </Container>
    )
}

export default NewPhoneBookContainer;
