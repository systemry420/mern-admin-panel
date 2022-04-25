import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
    render(): ReactNode {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="navbar-brand" href="/">Navbar</a>
                    </li>
                    <li className="nav-item">
                        <a className="navbar-brand" href="/users">Users</a>
                    </li>
                </ul>
            </nav>
        )
    }
}