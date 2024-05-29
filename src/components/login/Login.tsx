import React from 'react'
import './Login.scss'
// muốn dùng scss thì phải cài npm install sass
export default function Login() {
    return (
        <div className='login'>
            <div className='login-name'>
                <label htmlFor=''>username</label>
                <input type='text'></input>
            </div>
            <div className='login-pass'>
                <label htmlFor=''>password</label>
                <input type='text'></input>
            </div>
            <button>login</button>
        </div>

    )
}
