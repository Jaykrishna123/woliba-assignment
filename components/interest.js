import React from 'react'

export default class Interest extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    onClickInterestShow = () => {
        this.props.onClickIntrestCheck()
    }
    
    render() {
        return (
            <div className='grid grid-cols-3 gap-3 border-[#9C9C9C] border rounded-lg p-3 mb-3'>
                {this.props.data.map((el, index) =>
                    <a key={index} className='flex justify-between items-center border border-[#9C9C9C] rounded-lg p-2'
                        onClick={() => this.props.onClickIntrestCheck(el.name)}
                    >
                        <div className='flex items-center'>
                            <div className='bg-black p-2 rounded-lg mr-3'>
                                <img className='w-6 h-6' src='images/acrobatics.svg' />
                            </div>
                            <span className='text-sm'>{el.name}</span>
                        </div>
                        {this.props.interestcheck === el.name ?
                            <img src='images/check.svg' className='w-4 h-4' /> :

                            <div className='border border-[#9C9C9C] cursor-pointer border-gray w-4 h-4 rounded-full'>
                            </div>}
                    </a>
                )}
            </div>
        )
    }
}
