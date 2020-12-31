import React, { useContext } from 'react';
import axios from '../../../config/axios';
import { Form, Input, Button, Checkbox, Row, Col, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import LocalStorageService from '../../../services/LocalStorageService';
import { useHistory } from 'react-router-dom';
import UserContext from '../../../context/UserContext';
import jwtDecode from 'jwt-decode';


function AdminRegister() {

    const { role, setRole } = useContext(UserContext);
    const history = useHistory();

    const onFinish = values => {
        axios.post("/admin/register", {
            username: values.username,
            password: values.password
        })
            .then(res => {
                notification.success({
                    description: "Register admin success."
                });
                setRole("ADMIN")
                history.push("/admin")
            })
            .catch(err => {
                console.log(err);
                notification.error({
                    description: "Register admin failed."
                })
            });
    };

    return (
        <Row justify="space-around" style={{ backgroundColor: "black", height: "693px", paddingTop: "20px" }}>
            <Col>
                <Row justify="center">
                    <Col>
                        <img style={{ height: "101px", width: "165px", marginTop: "30px", objectFit: "cover" }} src="https://s3-alpha-sig.figma.com/img/4851/1e74/2ada4a95a5db2c6b1a02e90b9e368579?Expires=1610323200&Signature=KFO8MqQppGUyIAa7JP7Frt11itw8~~7O1RJ~UGmLH-PHTgou-hQRj9ZPDNcz-265yqv94QGyscaA4i8O5ls3GPCf5TWfjPdZ3t8lByFZTnW12p8y476p1KoJiSLkGxAldIYaRr90AEqc31Gl67ommr5vuXNkXJiHeubqo2hcTsOTgWq8jYY9-cdRgBIVjeGRVgz4yWuBm9nbOkeSpanRxZ70TZcwFSFCms-1CHDIUva6OPnpq2APArQwT7PYq1nopwqE-XFyQOGR4EcM3Cjxl16jjjdyXGl77TR2mH5tFkhmv4P3hnYnoas6j2ZPxPFyHUEt2kAR5DWhQqhMoclPXQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="logo" />

                        <h1 style={{ color: "white", textAlign: "left", paddingTop: "20px" }}>REGISTER FOR ADMIN</h1>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your Username!' }]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item >
                                <button style={{ marginRight: "10px", backgroundColor: "rgba(102, 189, 82, 1)", borderRadius: "15px", color: "white", width: "146px", height: "51px" }} type="primary" htmlType="submit" className="login-form-button">
                                    REGISTER
                                </button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default AdminRegister
