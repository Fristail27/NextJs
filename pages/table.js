import React from "react";
import {Table} from 'antd';
import 'antd/dist/antd.css'
import MainLayout from "../components/MainLayout";
import {useRouter} from "next/router";

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
    }
];

const dataMapper = (users) => {
    return users.map( user => {
        return {
            name: user.name,
            username: user.username,
            key: user.id,
            phone: user.phone
        }
    })
}

export default function TablePage({user, setIsLoading, isLoading, jsonContext}) {

    const [page, setPage] = React.useState(1)
    const [data, setData] = React.useState(user)

    const router = useRouter()
    console.log(router)

    const onChangePage = async (obj) => {
        setPage(obj.current)
        setIsLoading(true)
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${obj.current}`)
            const user = await response.json()
            setData(user)
            setIsLoading(false)

        } catch (e) {
            console.log(e)
            setIsLoading(false)
        }

    }

    React.useEffect(() => {
        setIsLoading(false)
    }, [])

    return (
        <MainLayout isLoading={isLoading} setIsLoading={setIsLoading}>
            <Table bordered columns={columns} dataSource={dataMapper([data])} pagination={{pageSize: 1, total: 10, page: page}} onChange={onChangePage} />
            {isLoading ? <h1>Is loading</h1> : null}
            <button onClick={()=>setIsLoading (!isLoading)}>123</button>
        </MainLayout>
    )
}

export async function getServerSideProps(context) {
    const response =  await fetch('https://jsonplaceholder.typicode.com/users/1')
    const user = await response.json()
    return {
        props: {user},
    }
}




