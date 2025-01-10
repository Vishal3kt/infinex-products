import React from 'react'

const Layout = ({ children, id }) => {

    return (
        <div className='main-container' id={id}>
            <div className="main-wrapper">
                <div className="main-content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout