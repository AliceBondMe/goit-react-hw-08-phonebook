import { useDispatch } from 'react-redux';
import { BinIcon, DelButton, Item, Letter } from './ContactItem.styled';
import { deleteContact } from '../../redux/contacts/operations';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const removeContact = e => {
    const contactToDelete = e.currentTarget.id;
    dispatch(deleteContact(contactToDelete));
  };

  return (
    <Item>
      <Letter>{contact.name[0]}</Letter>
      {contact.name}: {contact.number}
      <DelButton type="button" id={contact.id} onClick={removeContact}>
        <BinIcon />
      </DelButton>
    </Item>
  );
};