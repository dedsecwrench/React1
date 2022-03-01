import React from "react";
import Heading from "./heading";
import './index.css'
import { C1, C2 } from "./pagecontent";

class Content extends React.Component {
    state = {
        content1_status: false,
        content2_status: false
    }

    handleClick1() {
        this.setState({
            content1_status: (this.state.content1_status ? false : true)
        })
    }
    handleClick2() {
        this.setState({
            content2_status: (this.state.content2_status ? false : true)
        })
    }

    render() {
        return (
            <div className="background">
                <Heading />
                <div className="button">
                    <button className="btns btn1" onClick={() => this.handleClick1()}>To see styling in functional component</button>
                    <button className="btns btn2" onClick={() => this.handleClick2()}>To see styling in class component</button>
                </div>
                <div className="content-parent">
                    {(this.state.content1_status) && (<C1 />)}
                    {(this.state.content2_status) && (<C2 />)}
                </div>
            </div>
        )
    }
}

export default Content;