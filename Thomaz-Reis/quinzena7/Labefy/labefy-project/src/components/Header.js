import React from "react";
import styled from "styled-components";


const HeaderH1 = styled.div`
    background-color: #5f9ea0;
    font-family: "Verdana";
    color: white;
    display: flex;
    width: 50%;
    height: 8vh;
    margin-top: 50px;
    margin-left: 40px;
    margin-bottom: 40px;
    padding-left: 10px;
    justify-text: center;
    text-align: center;
    border-radius: 50px
`

export default class Header extends React.Component {
    render () {
        return (
            <HeaderH1>
                <h1>LABEFy</h1>
            </HeaderH1>)
    }
}