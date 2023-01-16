import React, { useEffect, useState } from 'react'
import axios from '../api/Api'
import TableList from '../components/dashboard/TableList';

function ListTableData() {
    const [datas, setDatas] = useState(null)
    const [fetchStatus, setFetchStatus] = useState(false);


    const getData = () => {
        axios.get('/users')
            .then((res) => {
                console.log(res)
                setDatas(res.data)
                setFetchStatus(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getData()
    }, [fetchStatus])

    return (
        <>
            <div className="w-full overflow-x-scroll">
                <TableList data={datas} />
            </div>
        </>
    )
}

export default ListTableData
