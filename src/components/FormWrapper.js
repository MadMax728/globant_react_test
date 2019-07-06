import React from 'react';
import FormField from './FormField';
const FormTitle = React.createContext('Enquiry Form');

class FormWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      message: "",
      list: []
    }
  }
  handleSubmit = (event) => {
    let obj = {...this.state};
    obj.list.push({
      fullName: obj.fullName,
      email: obj.email,
      message: obj.message
    });
    this.setState({
      list : obj.list
    });
    console.log("list", this.state.list);
  }
  handleChange = (event, key) => {
    console.log("key", key, event.target.value);
    this.setState({
      [key] :  event.target.value
    });
  }

  render() {
    const { fullName, email, message } = this.state;
    return (
      <form >
        <FormTitle.Provider value="Enquiry Form">
          <FormField  />
        </FormTitle.Provider>
        <div className="row">
          <div className="col-md-6">
            <label className="label" class="desc" id="title1" for="Field1" >Full Name</label>
          </div>
          <div className="col-md-6">
            <input className="label" id="Field1" name="Field1" type="text" class="field text fn" value={fullName} onChange={(e) => this.handleChange(e, 'fullName')}  tabindex="1" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label className="label" class="desc" id="title3" for="Field3">
              Email
            </label>
          </div>
          <div className="col-md-6">
            <input className="inputField" id="Field3" name="Field3" type="email" spellcheck="false" value={email} onChange={(e) => this.handleChange(e, 'email')} tabindex="3" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label className="label" class="desc" id="title4" for="Field4">
              Message
            </label>
          </div>
          <div className="col-md-6">
            <textarea className="inputField" id="Field4" name="Field4" onChange={(e) => this.handleChange(e, 'message')} value={message} spellcheck="true" tabindex="4"></textarea>
          </div>
        </div>
        <div className="row">
            <div className="offset-md-4 col-md-4">
            <input id="Field5_0" className="btn btn-primary" name="Field5" type="button" value="Submit" onClick={this.handleSubmit} tabindex="5" />
            </div>
        </div>
      </form>
    );
  }
}

export default FormWrapper;
