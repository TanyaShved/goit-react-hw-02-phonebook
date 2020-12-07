import PropTypes from 'prop-types';
import { Component } from 'react';
import s from './Phonebook.module.css';

class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ),
  };

  handeleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handeleSubmit = e => {
    e.preventDefault();

    if (this.checkContactName()) {
      return;
    }

    this.props.onSubmit(this.state);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  checkContactName = () => {
    const { name } = this.state;
    const { contacts } = this.props;

    const namesInPhonebook = contacts.find(contact => contact.name === name);

    if (namesInPhonebook) {
      alert(`${name} is already in contacts!`);
      return true;
    }
  };

  render() {
    const { name, number } = this.state;
    const { title } = this.props;

    return (
      <div>
        <h2 className={s.title}>{title}</h2>
        <form onSubmit={this.handeleSubmit} className={s.container}>
          <label className={s.textInput}>
            Name
            <input
              type="text"
              value={name}
              name="name"
              placeholder="Rosie Simpson"
              onChange={this.handeleChange}
              className={s.formInput}
            />
          </label>
          <label className={s.textInput}>
            Number
            <input
              type="number"
              value={number}
              name="number"
              placeholder="4591256"
              onChange={this.handeleChange}
              className={s.formInput_phone}
            />
          </label>
          <button type="submit" className={s.addButton}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default Phonebook;
