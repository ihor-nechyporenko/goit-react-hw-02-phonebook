import { Component } from 'react';

import Form from './components/Form';
import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson' },
      { id: 'id-2', name: 'Hermione Kline' },
      { id: 'id-3', name: 'Eden Clements' },
      { id: 'id-4', name: 'Annie Copeland' },
    ],
    name: '',
  };

  formSubmitHandler = data => {
    this.setState(({ contacts }) => ({
      contacts: [data, ...contacts],
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <Form onSubmit={this.formSubmitHandler} />
        <ContactList contacts={contacts} />
      </>
    );
  }
}

export default App;
