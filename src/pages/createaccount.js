import React from 'react'
import Sidebar from '../../components/sidebar'
import Navbar from '../../components/navbar';
import Wellness from '../../components/wellness';
import { setData } from '../../components/reduxx';
import { connect } from 'react-redux';
import Router from 'next/router';
import { getStore } from '../../utils';

class CreateAccount extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            imageFile: null,
            imageBase64: '',
            fname: this.props.data.fname ? this.props.data.fname : "",
            lname: "",
            email: "",
            confirmemail: "",
            password: "",
            confirmpass: "",
            dob: "",
            phoneno: "",
            gonext: false

        }
    }

    componentDidMount() {
        if (getStore()) {
            Router.replace('/')
        }
    }

    handleImageChange = (event) => {
        const file = event.target.files[0]

        // Convert the file to a base64 encoded string
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            this.setState({
                imageFile: file,
                imageBase64: reader.result
            })
        }
    }

    displayImage = () => {
        this.setState({
            imageBase64: this.state.imageBase64
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(setData({
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            password: this.state.password,
            confirmpass: this.state.confirmpass,
            dob: this.state.dob,
            phoneno: this.state.phoneno,
        }));
        this.setState({
            gonext: true
        })
        console.log(this.props.data)
    };

    onCloseForm = () => {
        this.setState({
            gonext: false
        })
    }


    render() {

        return (
            <>
                <Navbar />
                {this.state.gonext ? <Wellness userdata={this.props.data} onCloseForm={this.onCloseForm} />
                    :

                    <div className='flex'>
                        <Sidebar />

                        <div className='w-[88%] mx-auto lg:w-[69%] flex justify-center py-5'>
                            <div className='bg-white w-[700px] py-5 relative lg:w-[800px] 2xl:w-[1200px]'>
                                <div className='border-b flex flex-col pb-3'>
                                    <span className='text-[#69C2FF] px-5 font-semibold'>Let's get started by getting to know you</span>
                                    <span className='px-5 text-sm'>Your personal information such as first name,
                                        last name email, phone, and picture will be
                                        visible to your clients as a means to contact you.</span>
                                </div>
                                <div className='flex items-center mt-5 px-5'>
                                    <div className='bg-[#9C9C9C]/20 mr-5 w-20 h-20  flex justify-center items-center'>
                                        <img src={this.state.imageBase64} className='w-14 h-14' />
                                    </div>
                                    <div className='file-input'>
                                        <input type='file' accept='image/*' onChange={this.handleImageChange} onClick={this.displayImage} className='bg-[#69C2FF] py-2 px-4 text-sm rounded-lg text-white' />
                                    </div>
                                </div>
                                <div className='px-5 mt-5 grid grid-cols-2 items-center gap-3 border-b pb-5'>
                                    <div className='flex flex-col'>
                                        <label className='text-[#002F47] text-sm mb-2'>FirstName</label>
                                        <input placeholder='Enter a firstname' className='text-sm' value={this.state.fname} required onChange={this.handleChange} name='fname' type='text' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-[#002F47] text-sm mb-2'>LastName</label>
                                        <input placeholder='Enter a lastname' className='text-sm' value={this.state.lname} onChange={this.handleChange} name='lname' type='text' required />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-[#002F47] text-sm mb-2'>Email</label>
                                        <input placeholder='Enter Email' className='text-sm' onChange={this.handleChange} value={this.state.email} name='email' type='email' required />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-[#002F47] text-sm mb-2'>Confirm Email</label>
                                        <input placeholder='Enter a Country' className='text-sm' onChange={this.handleChange} value={this.state.confirmemail} name='confirmemail' type='text' required />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-[#002F47] text-sm mb-2'>Password</label>
                                        <input placeholder='Enter a Password' className='text-sm' onChange={this.handleChange} name='password' value={this.state.password} type='password' required />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-[#002F47] text-sm mb-2'>Confirm Password</label>
                                        <input placeholder='Enter a Confirm Password' className='text-sm' onChange={this.handleChange} value={this.state.confirmpass} name='confirmpass' type='password' required />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-[#002F47] text-sm mb-2'>Birthday</label>
                                        <input className='no-placeholder text-sm' name='dob' onChange={this.handleChange} type='date' value={this.state.dob} placeholder='Select DOB' required />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-[#002F47] text-sm mb-3'>Phone no.</label>
                                        <input placeholder='Enter a Phone Number' className='text-sm' onChange={this.handleChange} value={this.state.phoneno} name='phoneno' type='number' required />
                                    </div>
                                </div>
                                <a className='bg-[#69C2FF] text-white py-2 px-7 text-sm rounded-lg mt-5 flex justify-end items-end w-[100px] float-right mr-6' onClick={this.handleSubmit}>Next{">"}</a>
                            </div>
                        </div>
                    </div>
                }
            </>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state,
    };
};

export default connect(mapStateToProps)(CreateAccount);