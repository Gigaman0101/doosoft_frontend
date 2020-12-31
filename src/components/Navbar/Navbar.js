import React, { useContext, useState } from 'react';
import { Col, Row } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import './Navbar.css';

function Navbar() {

    const { role, setRole } = useContext(UserContext);
    const [border, setBorder] = useState();

    const history = useHistory();

    const onLogout = () => {
        setRole("GUEST");
    }

    // const onPage = () => {
    //     setBorder("5px solid white")
    // };

    return (
        <>
            <Row justify="space-between" align="middle" style={{ backgroundColor: "rgba(102, 189, 82, 1)", padding: "0 40px", height: "8vh", width: "100%" }}>
                <Col span={12} pull="3" style={{ paddingTop: "10px", fontSize: "18px", color: "white" }}>
                    <ul>
                        {role === "GUEST" ? <li className="btn" style={{ display: "inline", marginRight: "30px", borderBottom: "5px solid white" }}><Link to="/" style={{ color: "white" }}>HOME</Link></li> : null}
                        {role === "GUEST" ? <li className="btn active" style={{ display: "inline", marginRight: "30px" }}><Link to="/" style={{ color: "white" }}>ABOUT US</Link></li> : null}
                        {role === "GUEST" ? <li className="btn" style={{ display: "inline", marginRight: "30px" }}><Link to="/" style={{ color: "white" }}>CONTACT</Link></li> : null}
                        {role === "GUEST" ? <li className="btn" style={{ display: "inline" }}><Link to="/" style={{ color: "white" }}>BLOG</Link></li> : null}
                        {role === "ADMIN" ? <li className="btn" style={{ display: "inline", marginRight: "30px" }}><img style={{ width: "52px", height: "32px" }} src="https://s3-alpha-sig.figma.com/img/c29d/7c73/4fdc1e4142ae50f9d84626eafdf84002?Expires=1610323200&Signature=DY6t5IggIoc24PWENP6AQR3wihmN26cxbQklluaEBKWmbQwY3nL0MWscqW8KZofFV0Dnc2~qEsan64mX9oy0Ht5W1EloxLYEcsVP5UAEtLzm6HjWYeB6TxORtBtMkRWw6Pfjt1wUX9fnuY~OKbQIpi66DG6~I2Bt8T6SKkPUnDx6bUjHLY0l4lf4vE2BEURFtkQBm7LDeaBb5MzC-moTjCLYXfic14-xBYEn6vKukwzQP63EXoPQRCg4KCYLzcLhACKadc9gblAXiZkvpf-~mzk1jLhS-Yxsvk4l3WAAPgeJkWde3H4RvSR9XZfU81FH-FZGDCICXxm-EHt3lXOwfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" /></li> : null}
                        {role === "ADMIN" ? <li className="btn" style={{ display: "inline" }}><span style={{ color: "white" }}>DASHBOARD</span></li> : null}
                    </ul>
                </Col>
                <Col span={12} push="0" style={{ paddingTop: "10px", paddingLeft: "300px", fontSize: "18px" }}>
                    <ul>
                        {role === "GUEST" ? <li style={{ display: "inline", marginRight: "60px", borderBottom: "5px solid white" }}><Link to="/register" style={{ color: "white" }}>SIGN UP</Link></li> : null}
                        {role === "ADMIN" ? <li style={{ display: "inline" }}><img style={{ borderRadius: "50%", width: "48px", height: "48px", marginRight: "30px" }} src="https://s3-alpha-sig.figma.com/img/8b96/542f/7daffb8b636affa4cb67a2c198b28f07?Expires=1610323200&Signature=LMqudIShqkQvqTzuG9UEXsyZEucZ01Fh0FEyWmFzi9qf5hUADQ3xSikK~ScfTiIJjWkMHnfnn86tza7qESTJmWhPlC4kQVcaI5VHfAvpp62oVxNVnZIawufwS-lD4nzITuOxLC1gm8RMGAmavnZXQ2LEPDC5Okj6696UTQUvq~Mp7-lZQsgzOPPpDH5dipXgdHh491JMv90vuemHCegMHFn~I~iGVTpBJGAq-sbc9ml-K5eE7hVXitd6yb2H6cYddT0Vgc3Dr5~n9yGBEkIStzCBF1bP~uy67bWrS~nTEFUken5zxL-Io1B3ZY7c36s-tZnGKrtGHGqOBQ823M4HNg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="profile" /></li> : null}
                        {role === "GUEST" ? <li style={{ display: "inline" }}><Link to="/login_admin" style={{ color: "white" }}>LOGIN</Link></li> : <li style={{ display: "inline" }}><Link to="/" onClick={onLogout} style={{ color: "white" }}>LOGOUT</Link></li>}
                    </ul>
                </Col>
            </Row >
        </>
    )
}

export default Navbar
