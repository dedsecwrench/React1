import React from "react";
import { BC1, BC2 } from "./boxcontent";



export const C1 = () => {
    return (
        <div className="box box1">
            <BC1 />
        </div>
    )
}

export class C2 extends React.Component {
    render() {
        return (
            <div className="box box2">
                <BC2 />
            </div>
        )
    }
}