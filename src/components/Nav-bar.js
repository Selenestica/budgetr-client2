import React, {Component} from 'react'

class Navbar extends Component {

    render() {
        return (
            <>
                <nav>
                    <div className="nav-wrapper purple lighten-3">
                    <a href="/" className="brand-logo purple-text text-lighten-5">Budgetr</a>
                    <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/your-spending">Your Spending</a></li>
                        <li><a href="/your-income">Your Income</a></li>
                        <li><a href="/your-saving">Your Saving</a></li>
                        <li><a href="/budgeting-101">Budgeting 101</a></li>
                        <li><a href="/your-accounts">Your Accounts</a></li>
                        <li><a href="/login">login</a></li>
                        <li><a href="/log-out">sign out</a></li>
                        <li><a href="/register">Register</a></li>

                    </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-demo">
                    <li><a href="/">Home</a></li>
                    <li><a href="/your-spending">Your Spending</a></li>
                    <li><a href="/your-income">Your Income</a></li>
                    <li><a href="/your-saving">Your Saving</a></li>
                    <li><a href="/your-accounts">Your Accounts</a></li>
                    <li><a href="/budgeting-101">Budgeting 101</a></li>
                    <li><a href="/login">login</a></li>
                    <li><a href="/log-out">sign out</a></li>
                    <li><a href="/register">Register</a></li>
                </ul>
            </>
        )
    }

}

export default Navbar