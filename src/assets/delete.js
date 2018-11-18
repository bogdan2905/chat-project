import React from 'react'

export default function ({...rest}) {
    return (
        <svg {...rest} style={{width:45, height: 45, cursor: 'pointer'}} viewBox="0 0 24 24">
            <path fill='white' d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
        </svg>
    )
}
