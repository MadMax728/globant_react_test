import React from 'react';
const FormTitle = React.createContext('Enquiry Form');

// TODO: rewrite the same component as a functional component

class FormField extends React.Component {
  static contextType = FormTitle;

  render() {
    return (
        <header>
          <h2>{this.context}</h2>
        </header>
    );
  }
}

export default FormField;
