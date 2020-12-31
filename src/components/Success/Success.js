import React from 'react';
import { Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';

function Success() {

    const history = useHistory();

    return (
        <Row justify="center" style={{ paddingTop: "120px", backgroundColor: "black", height: "92vh" }}>
            <Col>
                <div onClick={() => { history.push("/") }} style={{ fontSize: "30px", color: "white", backgroundColor: "green", borderRadius: "50%", width: "500px", height: "500px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div>SIGN UP COMPLETE !</div>
                    <br />
                    <div>GET START</div>
                </div>
            </Col>
        </Row>
    )
}

export default Success
