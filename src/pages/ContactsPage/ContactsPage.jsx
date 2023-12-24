import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { AddButton, Title, TitleGroup, Wrapper } from './ContactsPage.styled';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { IoPersonAddSharp } from 'react-icons/io5';

const ContactsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      <Filter />
      <TitleGroup>
        <Title>Contacts</Title>
        <AddButton
          type="button"
          aria-label="Add Contact"
          onClick={handleOpenModal}
        >
          <IoPersonAddSharp size="44" />
        </AddButton>
      </TitleGroup>
      <ContactList />
      {isModalOpen && <Modal closeModal={closeModal} />}
    </Wrapper>
  );
};

export default ContactsPage;
