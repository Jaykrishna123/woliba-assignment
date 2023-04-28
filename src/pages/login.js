import Link from 'next/link'
import React from 'react'
import Footer from '../../components/footer'
import { getStore, setStore } from '../../utils';
import Router from 'next/router';

export default class Login extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            submitted: false,
            loginStatus: '',
            isPasswordShown: false

        }
    }

    componentDidMount() {
        if (getStore()) {
            Router.replace('/')
        }
    }


    inputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    loginForm = async (event) => {
        this.setState({ submitted: true });
        event.preventDefault();
        console.log(this.state)
        if (this.state.email === "abc@abc.com" && this.state.password === "123456") {
            setStore('userData', { email: this.state.email, fname: "ABC" })
            Router.replace('/');
        }
        else {
            alert("Please Enter the valid Email address and Password")
        }
    }

    togglePasswordVisiblity = () => {
        this.setState((prevState) => ({
            isPasswordShown: !prevState.isPasswordShown,
        }));
    };


    render() {
        const { isPasswordShown } = this.state;
        const iconClass = isPasswordShown ? <img className='w-9 h-9' src='images/eye.svg' /> : <div><img className='w-9 h-9' src="images/eye.svg" /><div className='shown'></div></div>;
        const inputType = isPasswordShown ? "text" : "password";

        return (
            <div className="flex">
                <div className="hidden lg:block lg:w-[40%] bg-color h-screen">
                    <span className='text-center text-white text-4xl block font-bold w-[50%] mx-auto mt-10 mb-16 uppercase'>It's Work Life Balance</span>
                    <img src="images/background.svg" />
                </div>
                <div className="w-full lg:w-[60%] bg-white flex flex-col lg:pt-10 justify-center items-center h-screen">
                    <img className='w-36 mb-11' src='images/logo.svg' />
                    <span className='text-xl text-[#002F47] font-bold '>Login To Your Account</span>
                    <span className='text-[#9C9C9C] text-xs font-medium'>New to Woliba? <Link href="/createaccount" className='text-[#69C2FF] text-sm'>Create An Account</Link></span>
                    <div className='mt-10 w-[324px]'>
                        <div className='flex flex-col mb-4'>
                            <label className='text-[#002F47] text-sm mb-3'>Your Email</label>
                            <input placeholder='Enter Email address' className='text-sm' onChange={this.inputChange} type='email' name='email' />
                        </div>
                        <div className='flex flex-col mb-6 relative'>
                            <label className='text-[#002F47] text-sm mb-3'>Password</label>
                            <input placeholder='Enter Password' className='text-sm' type={inputType} onChange={this.inputChange} name='password' />
                            <a
                                className='absolute top-9 right-3'
                                onClick={this.togglePasswordVisiblity}
                            >{iconClass}</a>
                        </div>
                        <a className='bg-[#FD7175] py-[8px] text-white rounded-sm block text-center' onClick={this.loginForm}>Login</a>
                    </div>
                    <div className="col-sm-12 center mt-1">
                        {this.state.submitted && this.state.loginStatus.length > 0 && <span className='error'>{this.state.loginStatus}</span>}
                    </div>
                    <Footer />
                </div>
            </div>)
    }
}
