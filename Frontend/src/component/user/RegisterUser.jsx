import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import '../../Form.css'
class RegisterUser extends Component{

    constructor(props){
        super(props);
        this.state ={
            name: '',
            password: '',
            email: '',
            city: '',
            state: '',
            contactNo: '',
            accountNo: '',
            adharNo: '',
            role:'',
            message: null
        }
        this.saveUser = this.saveUser.bind(this);
  
    }
    /*
    -----------+-------------+------+-----+---------+-------+
| id         | int         | NO   | PRI | NULL    |       |
| name       | varchar(45) | NO   |     | NULL    |       |
| email      | varchar(45) | NO   |     | NULL    |       |
| city       | varchar(45) | NO   |     | NULL    |       |
| state      | varchar(45) | NO   |     | NULL    |       |
| adhar_no   | int         | NO   |     | NULL    |       |
| contact_no | int         | NO   |     | NULL    |       |
| account_no | int         | NO   |     | NULL    |       |
| role       | varchar(45) | YES  |     | NULL    |       |
| password   | varcha*/

    saveUser = (e) => {
        e.preventDefault();
        console.log(this.state.role);
        let user = {name: this.state.name, password: this.state.password, email: this.state.email, city: this.state.city,state: this.state.state,contactNo: this.state.contactNo, adharNo: this.state.adharNo, accountNo: this.state.accountNo,role: this.state.role};
        ApiService.addUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/');
            }
            ).catch(err => {
                console.log("in error "+err.response.data)
               //err.response.data =>DTO on the server side :ErrorResponse
                alert(err.response.data.message)
                this.props.history.push('/register');}
                );
    }

    onChange = (e) =>{
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state.role)

    }
   
    render() {
        return(
            <div>
                <h2 className="text-center">Registration Form</h2>
                <form className='demoForm'>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" placeholder="name" name="name" className="form-control" value={this.state.name} onChange={this.onChange} required/>
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" placeholder="email@gmail.com" name="email" className="form-control" value={this.state.email} onChange={this.onChange} required/>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" placeholder="asdsa" name="password" className="form-control" value={this.state.password} onChange={this.onChange} required/>
                </div>
                <div className="form-group">
                    <label>Contact Number:</label>
                    <input type="text" placeholder="1234567890" name="contactNo" className="form-control" value={this.state.contactNo} onChange={this.onChange} required/>
                </div>
                <div className="form-group">
                    <label>Adhar Number:</label>
                    <input type="textr" placeholder="3122 3132 4324" name="adharNo" className="form-control" value={this.state.adharNo} onChange={this.onChange} required/>
                </div>
                <div className="form-group">
                    <label>City:</label>
                    <input type="text" placeholder="Pune" name="city" className="form-control" value={this.state.city} onChange={this.onChange} required/>
                </div>
                <div className="form-group">
                    <label>State:</label>
                    <input type="text" placeholder="Maharashtra" name="state" className="form-control" value={this.state.state} onChange={this.onChange} required/>
                </div>
               
                <div onChange={this.onChange}>
        <input type="radio" value="PRODUCER" name="role" /> PRODUCER
        <input type="radio" value="BUYER" name="role" /> BUYER
        
      </div>

                <button className="btn btn-success" onClick={this.saveUser}>Register</button>
            </form>
    </div>
        );
    }
}

export default RegisterUser;