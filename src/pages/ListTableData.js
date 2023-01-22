import React, { useEffect, useState } from 'react'
import axios from '../api/Api'
import TableList from '../components/dashboard/TableList';
import Button from '../elements/Button';
import Card from '../elements/Card';

function ListTableData() {
    const [datas, setDatas] = useState(null)
    const [fetchStatus, setFetchStatus] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [seletcedData, setSelectedData] = useState();


    const getData = () => {
        axios.get('/users')
            .then((res) => {
                setDatas(res.data)
                setFetchStatus(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const getAllData = (data) => {
        setSelectedData(data);
        setOpenModal(true);
    }

    useEffect(() => {
        getData()
    }, [fetchStatus])

    return (
        <>
            <div className="w-full overflow-x-scroll">
                <TableList data={datas} getAllData={getAllData} />
                {
                    openModal && (
                    <div className='fixed z-[999] pt-[250px] w-full h-full overflow-auto bg-opacity-30 bg-slate-600 left-0 top-0'>
                        <Card>
                            <Card.Title>
                                {seletcedData.name}
                            </Card.Title>
                            <Card.Body>
                                <p> Username : {seletcedData.username}</p>
                                <p> email : {seletcedData.email}</p>
                                <p> phone : {seletcedData.phone}</p>
                            </Card.Body>
                            <Card.Footer>
                                <Button
                                    color='red'
                                    onClick={() => {
                                        setOpenModal(false);
                                    }}
                                >Back</Button>
                            </Card.Footer>
                        </Card>
                    </div>
                )}
            </div>
        </>
    )
}

export default ListTableData
