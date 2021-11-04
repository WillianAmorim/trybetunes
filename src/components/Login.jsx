import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      disable: true,
    };
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      name: value,
    });
  }

  enableButton = (value) => {
    const { name } = this.state;
    const NUMBER = 3;
    if (value.length >= NUMBER) {
      this.setState({
        disable: false,
      });
    }
  }

  render() {
    const { name, disable } = this.state;
    return (
      <div data-testid="page-login">
        Componente Login
        <form>
          <input
            type="text"
            data-testid="login-name-input"
            value={ this.enableButton }
          />
          Insira seu nome
          <button
            data-testid="login-submit-button"
            type="button"
            disabled={ disable }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
