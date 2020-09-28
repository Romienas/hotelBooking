import React, { useState } from 'react'

import Input from '../Components/Input'
import Button from '../Components/Button'

function Admin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showEmailTab, setShowEmailTab] = useState(true)
    const [showPassTab, setShowPassTab] = useState(false)

    return (
        <div className='admin'>
            <div className='admin__login'>
                <div className='admin__login-title'>
                    Sign in to manage your hotel
                </div>
                <div>
                    <p>This is demo version. To sign in use:</p>
                    <p>email: admin@mail.com</p>
                    <p>password: amdin1admin</p>
                </div>
                <div className={showEmailTab ? 'admin__login-username' : 'admin__login-username-next'}>
                    <div className='admin__login-input-title'>
                        Username
                    </div>
                    <Input 
                        type='text'
                        clickHandler={(input) => setEmail(input)}
                    />
                    <div className='admin_login-button'>
                        <Button 
                            text='Continue'
                            clickHandler={() => {
                                setShowEmailTab(false)
                                setShowPassTab(true)
                            }}
                        />
                    </div>
                </div>
                <div className={showPassTab ? 'admin__login-password' : 'displayNone'}>
                    <div className='admin__login-input-title'>
                        Password
                    </div>
                    <Input 
                        type='text'
                        clickHandler={(input) => setPassword(input)}
                    />
                    <div className='admin_login-button'>
                        <Button 
                            text='Sign in'
                            clickHandler={() => {
                                setShowEmailTab(true)
                                setShowPassTab(false)
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin