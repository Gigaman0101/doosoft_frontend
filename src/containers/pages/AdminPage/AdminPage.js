import React, { useEffect, useState } from 'react';
import { Col, Row, Table, Tag, Space } from 'antd';
import axios from '../../../config/axios';
import './AdminPage.css';
// import { css } from 'react-emotion';

const columns = [
    {
        title: <div style={{ color: "white" }}>ชื่อ</div>,
        dataIndex: 'name',
        key: 'name',
        align: 'center',
        width: '100px',
    },
    {
        title: <div style={{ color: "white" }}>นามสกุล</div>,
        dataIndex: 'surname',
        key: 'surname',
        align: 'center'
    },
    {
        title: <div style={{ color: "white" }}>ที่อยู่</div>,
        dataIndex: 'address',
        key: 'address',
        align: 'center'
    },
    {
        title: <div style={{ color: "white" }}>เบอร์โทร</div>,
        dataIndex: "phone_number",
        key: "phone_number",
        align: 'center',
        render: (text, record) => {
            let start, middle, end;
            start = record.phone_number.slice(0, 3);
            middle = record.phone_number.slice(3, 6);
            end = record.phone_number.slice(6);
            return <div>{start}-{middle}-{end}</div>
        }
    },
    {
        title: <div style={{ color: "white" }}>อีเมล</div>,
        dataIndex: "email",
        key: "email",
        align: 'center'
    },
    {
        title: <div style={{ color: "white" }}>เช็คอินล่าสุด</div>,
        dataIndex: "createdAt",
        key: "createdAt",
        align: 'center',
        render: (text, record) => {
            let daTe = new Date(record.createdAt).getDate();
            let moNth = new Date(record.createdAt).getMonth();
            let mont_H;
            switch (moNth) {
                case 0:
                    mont_H = 'มกราคม';
                    break
                case 1:
                    mont_H = 'กุมภาพันธ์';
                    break
                case 2:
                    mont_H = 'มีนาคม';
                    break
                case 3:
                    mont_H = 'เมษายน';
                    break
                case 4:
                    mont_H = 'พฤษภาคม';
                    break
                case 5:
                    mont_H = 'มิถุนายน';
                    break
                case 6:
                    mont_H = 'กรกฎาคม';
                    break
                case 7:
                    mont_H = 'สิงหาคม';
                    break
                case 8:
                    mont_H = 'กันยายน';
                    break
                case 9:
                    mont_H = 'ตุลาคม';
                    break
                case 10:
                    mont_H = 'พฤศจิกายน';
                    break
                default:
                    mont_H = 'ธันวาคม'
                    break;
            }
            return <div>{daTe} {mont_H} {new Date(record.createdAt).getFullYear()}, {new Date(record.createdAt).getHours()}:{new Date(record.createdAt).getMinutes()} น.</div>
        }
    },
];

function AdminPage() {

    const [allUsers, setAllUsers] = useState();

    const month = new Date().getMonth();

    let thaiM;
    switch (month) {
        case 0:
            thaiM = 'มกราคม';
            break
        case 1:
            thaiM = 'กุมภาพันธ์';
            break
        case 2:
            thaiM = 'มีนาคม';
            break
        case 3:
            thaiM = 'เมษายน';
            break
        case 4:
            thaiM = 'พฤษภาคม';
            break
        case 5:
            thaiM = 'มิถุนายน';
            break
        case 6:
            thaiM = 'กรกฎาคม';
            break
        case 7:
            thaiM = 'สิงหาคม';
            break
        case 8:
            thaiM = 'กันยายน';
            break
        case 9:
            thaiM = 'ตุลาคม';
            break
        case 10:
            thaiM = 'พฤศจิกายน';
            break
        default:
            thaiM = 'ธันวาคม'
            break;
    }

    const fetchData = async () => {
        const res = await axios.get("/users/");
        setAllUsers(res.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Row justify="center" style={{ marginTop: "80px" }}>
            <Col>
                <h1 style={{ textAlign: "left", fontWeight: "bold" }}>ข้อมูลผู้ใช้</h1>
                <div style={{ textAlign: "left" }}>อัพเดทล่าสุด วันที่ {new Date().getDate()} {thaiM} {new Date().getFullYear()} เวลา {new Date().getHours()}.{new Date().getUTCMinutes()}น.</div>
                <br />
                <Table columns={columns} dataSource={allUsers} style={{ width: "1100px", height: "300px" }} />
                <br />
                <div style={{ color: "rgba(102, 189, 82, 1)" }}>Doosoft copyright &copy; 2020</div>
            </Col>
        </Row>
    )
}

export default AdminPage
