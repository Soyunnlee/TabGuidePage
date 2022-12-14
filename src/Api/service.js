import { useState ,useEffect } from 'react';
import axios from 'axios'
import { ApiResponse } from './ApiResponse'

const router = process.env.REACT_APP_OPS_SERVER


export function NoticeList() {
    const [data, setData] = useState('');
    console.log(router)
    axios.get(`${router}/notice/all/1`)
        .then(res => setData(res.data))
        .catch(error => console.log(error))
    
    return ApiResponse(data)
}


export default NoticeList;