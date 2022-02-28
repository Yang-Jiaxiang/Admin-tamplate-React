import React from 'react';
import {Button, Input, List,Item,Image}from 'semantic-ui-react'
require('react-img-carousel/lib/carousel.css');

function TurnImage(){

    const DataImage = [
        { Name: '頭條新聞', Src: '頭條新聞'},
        { Name: '特別報導', Src: '特別報導'},
        { Name: '學術專區', Src: '學術專區'},
    ]

    return(
        <>
            <Input action='新增' placeholder='輸入分類名稱...' />
            <List divided verticalAlign='middle'>
                <List.Item>
                    <List.Content floated='left'>
                        <Button color='red' onClick={()=>{
                            var result = window.confirm('確定刪除嗎?');
                            if(result){
                                console.log('刪除');
                            }else{
                                console.log('不刪除');
                            }
                        }}>刪除</Button>
                        <Button color='blue'>顯示</Button>
                    </List.Content>
                    <List.Content floated='right' style={{padding:'10px'}}>a</List.Content>
                </List.Item>
                <List.Item>
                    <List.Content floated='left'>
                        <Button color='red'>刪除</Button>
                        <Button color='blue'>顯示</Button>
                    </List.Content>
                    <List.Content floated='right' style={{padding:'10px'}}>b</List.Content>
                </List.Item>
                <List.Item>
                    <List.Content floated='left'>
                        <Button color='red'>刪除</Button>
                        <Button color='blue'>顯示</Button>
                    </List.Content>
                    <List.Content floated='right' style={{padding:'10px'}}>c</List.Content>
                </List.Item>
            </List>
        </>
    )
}

export default TurnImage