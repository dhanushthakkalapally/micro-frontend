// import React from "react";
import {Layout, Menu} from "antd";
import logo from "../../assets/logo.png";
import "./Header.css";

const {Header: AntHeader} = Layout;
const Header = () => {

    return (
        <AntHeader style={{display: 'flex', alignItems: "center"}}>

            <img  src={logo} style={{height: "inherit", borderRadius: 125}}/>

             <Menu theme={'dark'} mode={'horizontal'} items={[{key: 10, label: 'sanju'}, {key: 11, label: 'dhanush'},]}/>
        </AntHeader>
    )
}

export default Header;