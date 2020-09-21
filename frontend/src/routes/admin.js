import React from 'react'

import Input from '../Components/Input'

function Admin() {
    return (
        <div className='admin'>
            <div className='admin__login'>
                <div className='admin__login-title'>
                    Sign in to manage your hotel
                </div>
                <div className='admin__login-username'>
                    <div className='admin__login-input-title'>
                        Username
                    </div>
                    <Input 
                        type='text'
                    />
                </div>
            </div>
        </div>
    )
}

export default Admin