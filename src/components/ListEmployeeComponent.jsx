import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.viewEmployee = this.viewEmployee.bind(this);
  }
  editEmployee(id){
    this.props.history.push(`/add-employee/${id}`)
  }
  deleteEmployee(id){
    EmployeeService.deleteEmployee(id).then(res =>{
      this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
    });
  }
  viewEmployee(id){
    this.props.history.push(`/view-employee/${id}`)
  }
  addEmployee() {
    this.props.history.push("/add-employee/-1");
  }

  
  //use this function to call api and ajx functionalities, async calls
  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
  }
  render() {
    return (
      <div>
        <h2 className="text-center">EmployeeList</h2>

        <button className="btn btn-primary" onClick={this.addEmployee}>
          Add Employee 
        </button>

        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Employee First Name</th>
                <th>Employee last Name</th>
                <th>Employee Email Id</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                //map funcation maps the data in the list ES6 functionality
                this.state.employees.map((employee) => (
                  <tr key={employee.id}>
                    <td> {employee.firstname} </td>
                    <td> {employee.lastname} </td>
                    <td> {employee.emailid} </td>
                    <td>
                      <button onClick = {()=>this.editEmployee(employee.id) } className="btn btn-info">Update</button>
                      <button style={{marginLeft:"10px"}} onClick = {()=>this.deleteEmployee(employee.id) } className="btn btn-danger">Delete</button>
                      <button style={{marginLeft:"10px"}} onClick = {()=>this.viewEmployee(employee.id) } className="btn btn-primary">View</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListEmployeeComponent;
