import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Header, Form, Image, Button } from 'semantic-ui-react'


function CreateNews() {
    const [period,setPeriod]=React.useState('')
    const [title,setTitle]=React.useState('')
    return (
        <>
        <Form>
            <Form.Input placeholder='請輸入筆記名稱' value={title} onChange={(e)=>{
                setTitle(e.target.value)
            }}></Form.Input>
            <Form.Input placeholder='請輸入筆記名稱' value={title} onChange={(e)=>{
                setTitle(e.target.value)
            }}></Form.Input>

        </Form>
        </>
        
    )
}

export default CreateNews