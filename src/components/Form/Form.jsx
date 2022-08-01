import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
// import { Component } from 'react';

import styles from './Form.module.css';

export const Form = ({ onAddUser }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const id = nanoid();
    const user = { name, number, id };
    onAddUser(user);
    setName('');
    setNumber('');

    // reset();
  };

  // useEffect(() => {

  // },[])

  // const reset = () => {
  //   setName({ name: '', number: '' });
  // };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            className={styles.input}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

Form.propTypes = {
  onAddUser: PropTypes.func.isRequired,
};

// Copi

// export class Form extends Component {
//   static propTypes = {
//     onAddUser: PropTypes.func.isRequired,
//   };
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();
//     const id = nanoid();
//     const user = { ...this.state, id };
//     this.props.onAddUser(user);

//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <>
//         <form className={styles.form} onSubmit={this.handleSubmit}>
//           <label className={styles.label}>
//             Name
//             <input
//               className={styles.input}
//               type="text"
//               name="name"
//               value={this.state.name}
//               onChange={this.handleChange}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//           </label>
//           <label className={styles.label}>
//             Number
//             <input
//               className={styles.input}
//               type="tel"
//               name="number"
//               value={this.state.number}
//               onChange={this.handleChange}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//           </label>
//           <button className={styles.btn} type="submit">
//             Add contact
//           </button>
//         </form>
//       </>
//     );
//   }
// }
