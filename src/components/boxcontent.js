import React from "react";


const style1 = {
    width: '100%',
    fontSize: '20px',
    color: '#00FFFF',
    textAlign: 'center',
    position: 'absolute',
    top: '200px'
}

export const BC1 = () => {
    return (
        <>
            <div className="bc">
                This is created using Functional component
            </div>
            <M />
            <I />
        </>
    )
}

export class BC2 extends React.Component {
    render() {
        return (
            <>
                <div className="bc">
                    This is created using class component
                </div>
                <M />
                <I />
            </>
        )
    }
}

const M = () => {
    return (
        <div className="bc1">
            This is done using external stylesheet
        </div>
    )
}

const I = () => {
    return (
        <div style={style1}>
            This is done using Inline CSS
        </div>
    )
}