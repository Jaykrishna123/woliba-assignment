import React from 'react'

export default class Sidebar extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='hidden lg:block bg-white w-64 p-5'>
                <div className='flex items-center relative mb-3'>
                    {this.props.stepper === "login" ?
                        <img src='images/check.svg' className='w-4 h-4 mr-4' />
                        : <div className='bg-[#9C9C9C]/30 rounded-full p-2 mr-3'>
                        </div>
                    }
                    <img className='absolute top-5 left-2' src='images/seperator.svg' />
                    <span className='text-lg'>Login Credentials</span>
                </div>
                <div className='flex items-center relative mb-3'>
                    {this.props.stepper === "login" && this.props.legal ?
                        <img src='images/check.svg' className='w-4 h-4 mr-4' />
                        : <div className='bg-[#9C9C9C]/30 rounded-full p-2 mr-3'>
                        </div>
                    }
                    <img className='absolute top-5 left-2' src='images/seperator.svg' />
                    <span className='text-lg'>Wellness Interest</span>
                </div>
                <div className='flex items-center relative mb-3'>
                    <div className='bg-[#9C9C9C]/30 rounded-full p-2 mr-3'></div>
                    <span className='text-lg'>Legal Updates</span>
                </div>
            </div>
        )
    }
}
