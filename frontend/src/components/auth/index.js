import React, { Component } from 'react';
import './style.css';
import { Redirect } from "react-router-dom";

class Auth extends Component {
    // TODO this should be used in the future to verify authentication
    state = {
        isLogin: false,
        userId: null,
        token: null
    };

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

  async componentDidMount() {

  }

  //auth
  async handleSubmit(e) {
      e.preventDefault();
      const data = {
          username: e.target.elements[0].value,
          password: e.target.elements[1].value
      };

      try {
        const response = await fetch('http://127.0.0.1:8000/token-signin/authenticate/', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(json => {
         window.localStorage.setItem("token", json.token);
         window.localStorage.setItem("idUser", json.id);
    });
      } catch (e) {
          console.log(e)
      }
      window.location.href = '/';
  }

  render() {
    if (window.localStorage.getItem('token') != null)
        return <Redirect to="/" />;
    else return (
        <form data-ui-jp="parsley" onSubmit={this.handleSubmit}>
            <div className="box">
                <div className="box-header">
                    <h2>Авторизация</h2>
                </div>
                <div className="box-body">
                    <p className="text-muted">Введите данные для входа в систему.</p>
                    <div className="form-group">
                        <label>Логин</label>
                        <input type="text" className="form-control" name="login" required/>
                    </div>
                    <div className="form-group">
                        <label>Пароль</label>
                        <input type="password" className="form-control" name="password" required/>
                    </div>
                </div>
                <div className=" p-a text-right">
                    <button type="submit" className="btn info">Войти</button>
                </div>
            </div>
        </form>
    );
  }
}

export default Auth;