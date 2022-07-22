import React from "react";

interface Props {

}

export default class Header extends React.Component {
    constructor(props: Props) {
        super(props)

        this.onSignIn = this.onSignIn.bind(this);
        this.onSignUp = this.onSignUp.bind(this);
    }

    onSignUp(e: React.FormEvent) {

    }

    onSignIn(e: React.FormEvent) {

    }

    render(): React.ReactNode {
        return (
            <header className="header">
                <nav className="main-nav">
                    <div className="header__left-side"></div>
                    <div className="header__middle">
                        <div className="title">Welbex BLOG by Magomed</div>
                    </div>
                    <div className="header__right-side">
                        <button className="sign-up-btn">Sign in</button>
                        <button className="sign-in-btn">Sign up</button>
                    </div>
                </nav>
            </header>
        )
    }
}