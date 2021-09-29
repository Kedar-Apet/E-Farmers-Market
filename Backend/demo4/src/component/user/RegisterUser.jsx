import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

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
console.log()
    }
    render() {
        return(
            <div>
                <h2 className="text-center">Registration Form</h2>
                <form>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" placeholder="name" name="name" className="form-control" value={this.state.name} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" placeholder="email@gmail.com" name="email" className="form-control" value={this.state.email} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" placeholder="asdsa" name="password" className="form-control" value={this.state.password} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label>Account Number:</label>
                    <input type="text" placeholder="12345678" name="accountNo" className="form-control" value={this.state.accountNo} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label>Contact Number:</label>
                    <input type="text" placeholder="1234567890" name="contactNo" className="form-control" value={this.state.contactNo} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label>Adhar Number:</label>
                    <input type="textr" placeholder="3122 3132 4324" name="adharNo" className="form-control" value={this.state.adharNo} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label>City:</label>
                    <input type="text" placeholder="pune" name="city" className="form-control" value={this.state.city} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label>State:</label>
                    <input type="text" placeholder="maharashtra" name="state" className="form-control" value={this.state.state} onChange={this.onChange}/>
                </div>
               
                <div class="form-check">
               
  <input class="form-check-input" type="radio" name="role" id="BUYER" value="BUYER"checked={this.state.role === "BUYER"} onChange={this.onChange}/>
  <label class="form-check-label" for="BUYER">
   Buyer
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="role" id="PRODUCER" value="PRODCUER"  checked={this.state.role === "PRODUCER"} onChange={this.onChange} checked/>
  <label class="form-check-label" for="PRODCUER">
    Producer
  </label>
</div>

                <button className="btn btn-success" onClick={this.saveUser}>Save</button>
            </form>
    </div>
        );
    }
}

export default RegisterUser;