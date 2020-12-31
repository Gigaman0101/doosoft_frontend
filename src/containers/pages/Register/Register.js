import React from 'react';
import { Row, Form, Col, Input, Checkbox, notification } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from '../../../config/axios';

const { TextArea } = Input;

function Register() {

    const history = useHistory();

    const onFinish = (values) => {
        axios.post("/users/register", {
            name: values.name,
            surname: values.surname,
            phone_number: values.phone_number,
            email: values.email,
            address: values.address
        })
            .then(res => {
                notification.success({
                    description: "Register Success."
                });
                history.push("/success");
            })
            .catch(err => {
                console.log(err);
                notification.error({
                    description: "Register  failed."
                })
            });
    };

    const onBack = () => {
        history.push("/");
    };

    return (
        <div>
            <Row justify="space-around" style={{ backgroundColor: "black" }} >
                <Col style={{ left: "35px", marginTop: "50px" }}>
                    <img style={{ height: "101px", width: "165px", marginTop: "30px", objectFit: "cover" }} src="https://s3-alpha-sig.figma.com/img/4851/1e74/2ada4a95a5db2c6b1a02e90b9e368579?Expires=1610323200&Signature=KFO8MqQppGUyIAa7JP7Frt11itw8~~7O1RJ~UGmLH-PHTgou-hQRj9ZPDNcz-265yqv94QGyscaA4i8O5ls3GPCf5TWfjPdZ3t8lByFZTnW12p8y476p1KoJiSLkGxAldIYaRr90AEqc31Gl67ommr5vuXNkXJiHeubqo2hcTsOTgWq8jYY9-cdRgBIVjeGRVgz4yWuBm9nbOkeSpanRxZ70TZcwFSFCms-1CHDIUva6OPnpq2APArQwT7PYq1nopwqE-XFyQOGR4EcM3Cjxl16jjjdyXGl77TR2mH5tFkhmv4P3hnYnoas6j2ZPxPFyHUEt2kAR5DWhQqhMoclPXQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="logo" />

                    <h1 style={{ color: "white", textAlign: "left" }}>JOIN US</h1>

                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input style={{ borderRadius: "12px", height: "50px" }} placeholder="Name" />
                        </Form.Item>
                        <Form.Item
                            name="surname"
                            rules={[{ required: true, message: 'Please input your surname!' }]}
                        >
                            <Input
                                style={{ borderRadius: "12px", height: "50px" }}
                                placeholder="Surname"
                            />
                        </Form.Item>
                        <Form.Item
                            name="address"
                            rules={[{ required: true, message: 'Please input your address!' }]}
                        >
                            <TextArea
                                // value={}
                                // onChange={this.onChange}
                                style={{ borderRadius: "12px", height: "300px" }}
                                placeholder="Address"
                                autoSize={{ minRows: 10, maxRows: 10 }}
                            />
                        </Form.Item>
                        <Form.Item
                            name="phone_number"
                            rules={[{ required: true, message: 'Please input your phonenumber!' }]}
                        >
                            <Input style={{ borderRadius: "12px", height: "50px" }} placeholder="Tel." />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input style={{ borderRadius: "12px", height: "50px" }} placeholder="Email" />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox style={{ color: "white" }}> I accept <span style={{ color: "green" }}>Doosoft</span> terms of service, community guidelines and privacy policy.</Checkbox>
                        </Form.Item>
                        <br />
                        <br />
                        <Form.Item >
                            <Row justify="space-around">
                                <button onClick={onBack} style={{ borderRadius: "12px", width: "150px", height: "75px", color: "black" }}>
                                    Back
                                </button>
                                <button style={{ marginRight: "10px", borderRadius: "12px", width: "150px", height: "75px", backgroundColor: "green", color: "white" }} type="primary" htmlType="submit" className="login-form-button">
                                    Continue
                                </button>
                            </Row>
                        </Form.Item>
                    </Form>
                </Col>
                <Col>
                    <div style={{ marginTop: "50px" }}>
                        <img alt="coding" src="/coding.png" style={{ width: "500px", height: "500px", objectFit: "cover" }} />
                    </div>
                </Col>
            </Row>
        </div >
    )
}

export default Register
