import PropTypes from 'prop-types';
import { Component } from 'react';

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

    const namesInPhonebook = contacts.reduce(
      (acc, contact) => [...acc, contact.name],
      [],
    );

    if (namesInPhonebook.includes(name)) {
      alert(`${name} is already in contacts!`);
      return true;
    }
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <h2>{this.props.title}</h2>
        <form onSubmit={this.handeleSubmit}>
          <label>
            Name
            <input
              type="text"
              value={name}
              name="name"
              placeholder="Rosie Simpson"
              onChange={this.handeleChange}
            />
          </label>
          <label>
            Number
            <input
              type="number"
              value={number}
              name="number"
              placeholder="459-12-56"
              onChange={this.handeleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

export default Phonebook;
