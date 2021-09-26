import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class LoginUser extends Component{

    constructor(props){
        super(props);
        this.state ={
            
            password: '',
            email: '',
           
            message: null
        }
        this.loginUser= this.loginUser.bind(this);
        this.registerUser= this.registerUser.bind(this);
       
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

loginUser = (e) => {
        e.preventDefault();
        let user = { password: this.state.password, email: this.state.email};
        ApiService.loginUser(user)
            .then(res => {
                console.log(res.data);
               
                window.sessionStorage.setItem("userId", res.data.id);
                this.setState({message : 'User Logged in successfully.'});
                console.log(res.data.role);
                if(res.data.role === "PRODUCER")
                this.props.history.push('/producer');
                else
                this.props.history.push('/buyer');
            }
            ).catch(err => { console.log("in error "+err)
                console.log("in error "+err.response.data)
               //err.response.data =>DTO on the server side :ErrorResponse
                alert(err.response.data.message)
                this.props.history.push('/');}
                );
    }
    registerUser=(e)=> {
        e.preventDefault();
        console.log("In register")
window.location.href="/register"
        console.log("In register")
    }



    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <h2 className="text-center">Login</h2>
                <form>
               
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" placeholder="email@gmail.com" name="email" className="form-control" value={this.state.email} onChange={this.onChange} required />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" placeholder="password" name="password" className="form-control" value={this.state.password} onChange={this.onChange} required />
                </div>
                

              

                <button className="btn btn-success" onClick={this.loginUser}>Login</button>
               
            </form>
            <button className="btn btn-success" style={{width:'100px'}} onClick={this.registerUser}> Register</button>
    </div>
        );
    }
}

export default LoginUser;