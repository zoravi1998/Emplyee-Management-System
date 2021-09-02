import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class CreateEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      firstName: "",
      lastName: "",
      emailId: "",
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.saveEmployee = this.saveEmployee.bind(this);
  }

  componentDidMount() {
    if (this.state.id == -1) {
      return;
    } else {
      EmployeeService.getEmployeeById(this.state.id).then((res) => {
        let employee = res.data;
        this.setState({
          firstName: employee.firstname,
          lastName: employee.lastname,
          emailId: employee.emailid,
        });
      });
    }
  };

  saveEmployee = (e) => {
    e.preventDefault();
    let employee = {
      firstname: this.state.firstName,
      lastname: this.state.lastName,
      emailid: this.state.emailId,
    };
    if (this.state.id == -1) {
      EmployeeService.createEmployee(employee).then((res) => {
        this.props.history.push("/employees");
      });
    } else {
      EmployeeService.updateEmployee(employee, this.state.id).then((res) => {
        this.props.history.push("/employees");
      });
    }
  };

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };
  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };
  changeEmailAddressHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };
  
  cancel() {
    this.props.history.push("/employees");
  }

  getTitle() {
    if (this.state.id == -1 ) {
      return <h3 className="text-center">Add Employee </h3>;
    } else {
      return <h3 className="text-center">Update Employee </h3>;
    }
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Employee Form</h1>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <div class="row">
                  <div className="col-xs-6">
                    <form className="form-horizontal">
                      <div className="form-group">
                        <label for="nameField" className="col-xs-2">
                          First Name
                        </label>
                        <div className="col-xs-10">
                          <input
                            placeholders="First Name"
                            class="form-control"
                            names="firstName"
                            value={this.state.firstName}
                            onChange={this.changeFirstNameHandler}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="nameField" className="col-xs-2">
                          Last Name
                        </label>
                        <div className="col-xs-10">
                          <input
                            placeholders="Last Name"
                            class="form-control"
                            names="lasttName"
                            value={this.state.lastName}
                            onChange={this.changeLastNameHandler}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="nameField" className="col-xs-2">
                          Email Address
                        </label>
                        <div className="col-xs-10">
                          <input
                            placeholders="Email Address"
                            class="form-control"
                            names="emailId"
                            value={this.state.emailId}
                            onChange={this.changeEmailAddressHandler}
                          />
                        </div>
                      </div>
                      <br />
                      <button
                        className="btn btn-success"
                        onClick={this.saveEmployee}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={this.cancel.bind(this)}
                        style={{ marginLeft: "10px" }}
                      >
                        Cancel
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEmployeeComponent;
