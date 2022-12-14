import { useState, useEffect } from 'react';
// import { Component } from 'react';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handlerAddUser = user => {
    const repetAlert = contacts.some(
      option => option.name.toLowerCase() === user.name.toLowerCase()
    );
    if (repetAlert) {
      alert(`${user.name} is already in contacts.`);
      return;
    } else if (contacts.some(option => option.number === user.number)) {
      alert(`${user.number} is already in numbers.`);
      return;
    }
    setContacts(prevState => [...prevState, user]);
  };

  const handlerContactList = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handlerFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  const handlerDeleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };
  console.log(handlerContactList());
  return (
    <>
      <div className="container">
        <h1>Phonebook</h1>

        <h3>Name</h3>
        <Form onAddUser={handlerAddUser} />

        <h2>Contacts</h2>
        <Filter onHandlerFilter={handlerFilter} />
        <ContactList
          onContactList={handlerContactList()}
          onDelete={handlerDeleteContact}
        />
      </div>
    </>
  );
};

//copi

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   handlerAddUser = user => {
//     if (
//       this.state.contacts.some(
//         option => option.name.toLowerCase() === user.name.toLowerCase()
//       )
//     ) {
//       alert(`${user.name} is already in contacts.`);
//       return;
//     } else if (
//       this.state.contacts.some(option => option.number === user.number)
//     ) {
//       alert(`${user.number} is already in numbers.`);
//       return;
//     }
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, user],
//     }));
//   };

//   handlerContactList = () => {
//     const { contacts, filter } = this.state;
//     return contacts.filter(user =>
//       user.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   handlerFilter = ({ target: { value } }) => {
//     this.setState({ filter: value });
//   };

//   handlerDeleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   render() {
//     return (
//       <>
//         <div className="container">
//           <h1>Phonebook</h1>

//           <h3>Name</h3>
//           <Form onAddUser={this.handlerAddUser} />

//           <h2>Contacts</h2>
//           <Filter onHandlerFilter={this.handlerFilter} />
//           <ContactList
//             onContactList={this.handlerContactList()}
//             onDelete={this.handlerDeleteContact}
//           />
//         </div>
//       </>
//     );
//   }
// }
