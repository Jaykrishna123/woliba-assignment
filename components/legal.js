import React from 'react'
import { setStore } from '../utils'
import Router from 'next/router'
import { connect } from 'react-redux';
import Sidebar from './sidebar';

class Legal extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            legalterms: false
        }
    }

    onGoBack = () => {
        this.props.onCloseLegalPage()
    }

    onClickLegalTerms = () => {
        this.setState({
            legalterms: true
        })
    }

    HandleSubmitForm = () => {
        console.log(this.props.data.data[0])
        let temp = this.props.data.data.pop();
        if (this.state.legalterms && temp.email === "") {
            alert("Please Add your email address")
        }
        else if (this.state.legalterms && temp.email !== "") {
            setStore('userData', { fname: temp.fname, email: temp.email });
            Router.push('/')
        }
        else {
            alert("Please Accept Terms and Updates")
        }
    }

    render() {
        return (
            <div className='flex'>
                <Sidebar stepper="login" legal={true}/>
                <div className='w-[88%] mx-auto lg:w-[69%] flex justify-center'>
                    <div className='bg-white h-[500px] w-[700px] pt-5'>
                        <div className='border-b flex flex-col pb-3'>
                            <span className='text-[#69C2FF] px-5 font-semibold'>Legal Updates</span>
                            <span className='px-5 text-sm'>Enter Your Location and Company Position</span>
                        </div>
                        <div className='flex items-center px-5 pt-5 border-b pb-5 relative  '>
                            {this.state.legalterms &&
                                <img src='images/check.svg' className='w-4 h-4 mr-4 absolute top-5' onClick={() => this.setState({
                                    legalterms: false
                                })} />
                            }
                            <a className='w-4 h-4 mr-4 border rounded-full' onClick={this.onClickLegalTerms}></a>
                            <span className='text-xs'>I have read and agree to Training Amigo's updated Privacy Policy and Terms of Use
                            </span>
                        </div>
                        <div className='flex justify-between px-5 border-t pt-5'>
                            <a className='bg-[#69C2FF]/10 text-[#69C2FF] py-2 px-7 text-sm rounded-lg' onClick={this.onGoBack}>{"<"} Go Back</a>
                            <a className='bg-[#69C2FF] text-white py-2 px-7 text-sm rounded-lg' onClick={this.HandleSubmitForm}>Submit {">"}</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        data: state,
    };
};

export default connect(mapStateToProps)(Legal);