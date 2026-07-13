import React from 'react'

const Header = () => {
    return (
        <>
            <header>


                <i className="fa-solid fa-bars" id="open_sidebar"></i>


                <nav id="navbar">
                    <div id="spacer">

                    </div>
                    <div className='flex'>
                        <img src="New Project 12 [DC45756].png" alt="CheckMart" className="logo" /><img src="New Project 13 [A92F7B1].png" alt="" className="logo" />

                    </div>
                    <div className="form_container">
                        <div className="searchform">
                            <input type="text" className="srcinp" placeholder="SEARCH" />
                            <button className="srcbtn"><i className="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                        <ul className="results">

                        </ul>

                    </div>
                    <a href="login.html" id="login"><i className="fa-solid fa-user"></i>Login</a>

                    <a href="search with code.html" id="populat_now">
                        <p>Search with code</p>
                    </a>

                </nav>


            </header>
        </>
    )
}

export default Header
