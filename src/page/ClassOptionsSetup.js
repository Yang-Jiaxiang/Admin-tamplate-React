import React from 'react'

function ClassOptionsSetup(){

    const ClassOptions = [
        { key: '頭條新聞', text: '頭條新聞', value: '頭條新聞' },
        { key: '特別報導', text: '特別報導', value: '特別報導' },
        { key: '學術專區', text: '學術專區', value: '學術專區' },
    ]

    for(var i=0;i<JSON.stringify(ClassOptions.length);i++){
        console.log(JSON.stringify(ClassOptions[i]));
    }

    return (
        <>
            aaa
        </>
    )
}

export default ClassOptionsSetup