import React, { useState } from 'react'

import Input from '../Components/Input'
import Button from '../Components/Button'

function Admin() {
    const [email, setEmail] = useState('')
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
                <div className='admin__login-username'>
                    <div className='admin__login-input-title'>
                        Username
                    </div>
                    <Input 
                        type='text'
                        clickHandler={(input) => setEmail(input)}
                    />
                    <Button 
                        text='Continue'
                        clickHandler={() => console.log('sove')}
                    />
                </div>
            </div>
        </div>
    )
}

export default Admin