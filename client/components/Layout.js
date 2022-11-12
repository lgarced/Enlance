import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NP from 'NProgress';



Router.onRouteChangeStart = url => { NP.start(); }
Router.onRouteChangeComplete = url => { NP.done(); }
Router.onRouteChangeError = url => { NP.console.error(); }


const Layout = ({ children }) => {
    const head = () => (
        <React.Fragment>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                crossorigin="anonymous"
            />
            {/* <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
            /> */}
        </React.Fragment>
    );

    const nav = () => (
        <ul className="nav nav-tabs bg-secondary"  >
            <li className="nav-item">
                <Link href="/" className="nav-link text-dark">
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/login" className="nav-link text-dark">
                    Login
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/register" className="nav-link text-dark">
                    Register
                </Link>
            </li>
        </ul>
    );

    return (
        <React.Fragment>
            {head()} {nav()} <div className="container pt-5 pb-5">{children}</div>
        </React.Fragment>
    );
};

export default Layout;
