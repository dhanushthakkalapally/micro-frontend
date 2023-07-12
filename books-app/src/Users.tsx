// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from "react";
import './App.css'
import {Card, Col, Row} from 'antd';
import {createRandomUser} from "./utils.ts";
import IUser from "./types/IUser.ts";
import {faker} from "@faker-js/faker";


const {Meta} = Card;
function Users({message}: {message: string}) {
    const user: IUser[] = faker.helpers.multiple(createRandomUser, {count: 100});
  return (
    <>
        <h2>{message}</h2>
        <Row>

        {user.map(user => (
            <Col span={6}>
            <Card key={user.userId} hoverable cover={<img src={user.avatar}/> }  style={{margin: "0.5rem"}}>
            <Meta title={user.username} />
                <p><b>Email:</b> {user.email}</p>
                <p><b>DOB: </b>{user.birthdate.toString()}</p>
            </Card>
            </Col>
        ))
        }
        </Row>
    </>
  )
}

export default Users
