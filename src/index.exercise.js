// 🐨 you'll need to import React and ReactDOM up here

// 🐨 you'll also need to import the Logo component from './components/logo'

// 🐨 create an App component here and render the logo, the title ("Bookshelf"), a login button, and a register button.
// 🐨 for fun, you can add event handlers for both buttons to alert that the button was clicked

// 🐨 use ReactDOM to render the <App /> to the root element
// 💰 find the root element with: document.getElementById('root')

import ReactDOM from 'react-dom';
import * as React from 'react';
import { Logo } from './components/logo';
// extra.1
import { Dialog } from '@reach/dialog';
import "@reach/dialog/styles.css";

// extra.2 
function LoginForm({ onSubmit, buttonText, onCancel }) {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)
        console.log(e.target.elements)
        const { username, password } = e.target.elements
        onSubmit({
            username: username.value,
            password: password.value
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">User Name:</label>
            <input type="text" id="username" name="username" />
            <br />
            <label htmlFor="password">PassWord:</label>
            <input type="password" id="password" name="password" />
            <div className='btnGroup-login'>
                <button>{buttonText}</button>
                <button onClick={onCancel}>cancel</button>
            </div>
        </form>
    )
}

function App() {
    const [modalState, setModalState] = React.useState('none')
    const close = () => setModalState('none')

    const onLoginSubmit = (formData) => {
        console.log('login data', formData)
    }

    const onRegisterSubmit = (formData) => {
        console.log('register data', formData)
    }

    return (
        <div className='container'>
            <h1>Bookshelf</h1>
            <Logo />
            <div className='btnGroup'>
                <button onClick={() => setModalState('login')}>login</button>
                <button onClick={() => setModalState('register')}>register</button>
            </div>
            <Dialog isOpen={modalState === 'login'} onDismiss={close} aria-labelledby='login'>
                <LoginForm buttonText='login' onSubmit={onLoginSubmit} onCancel={close} />
            </Dialog>
            <Dialog isOpen={modalState === 'register'} onDismiss={close} aria-labelledby='register account'>
                <LoginForm buttonText='register' onSubmit={onRegisterSubmit} onCancel={close} />
            </Dialog>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App
