import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeCompenent extends Component {
    constructor(props){
        super(props)

        this.state= {
            id:this.props.match.params.id,
            employee:{}
        }
    }
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then(res=>{
            this.setState({employee: res.data});
        });
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Employee Details</h3>
                    <br></br>
                    <div className = "card-body">
                        <div className ="row">
                            <label> Employee FirstName: {this.state.employee.firstname}</label>
                            <br></br>
                        </div>
                        <div className ="row">
                            <label>Employee LastName: { this.state.employee.lastname }</label>
                            <br></br>
                        </div>
                        <div className ="row">
                            <label>Employee EmailId: { this.state.employee.emailid } </label>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewEmployeeCompenent;