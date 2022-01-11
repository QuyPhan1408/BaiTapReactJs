import React, { useState } from "react";
import InputBox from "../Input/input";
import './index.css';

function FormDatTiec() {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [address, setAddress] = useState('');
    const [typeEvent, setTypeEvent] = useState('');
    const handleChangName = (event) =>{
        setName(event.target.value);
    }
    const handleChangnQuantity = (event) =>{
        setQuantity(event.target.value);
    }
    const handleChangPhone= (event) =>{
        setPhone(event.target.value);
    }
    const handleChangDate = (event) =>{
        setDate(event.target.value);
    }
    const handleChangAddress = (event) =>{
        setAddress(event.target.value);
    }
    const handleChangTypeEvent = (event) =>{
        setTypeEvent(event.target.value);
    }

    const submitForm = (event) =>{
        event.preventDefault();
        alert(`Ho ten: ${name}, 
            Khach: ${quantity},
            Ngay to chuc: ${date},
            SDT:${phone},
            Dia chi:${address},
            Loai sk: ${typeEvent}`)
        }

        return (
            <div className='form'>
                <h1>Liên hệ đặt tiệc</h1>
                <p>Kế thừa tinh hoa của Golden Gate Restaurant chúng tôi cung cấp giải pháp dịch vụ tiệc tại gia đạt chuẩn chất lượng nhà hàng giúp khách hàng</p>
                <div className='infomation'>
                    <div>
                        <label>Họ và tên</label>
                        <InputBox
                            type='text'
                            handleChange={(event)=>handleChangName(event)}
                        />
                    </div>
                    <div>
                        <label>Số lượng khách</label>

                        <InputBox
                            type='number'
                            handleChange={(event)=>handleChangnQuantity(event)}
                        />
                    </div>
                    <div>
                        <label>Số điện thoại</label>

                        <InputBox
                            type='text'
                            handleChange={(event)=>handleChangPhone(event)}
                        />
                    </div>
                    <div>
                        <label>Ngày tổ chức sự kiện</label>

                        <InputBox
                            type='date'
                            handleChange={(event)=>handleChangDate(event)}
                        />                                  
                    </div>
                    <div>
                        <label>Địa chỉ</label>

                        <InputBox
                            handleChange={(event)=>handleChangAddress(event)}
                        />
                    </div>
                    <div>
                        <label>Loại sự kiện</label>

                        <InputBox
                            type='text'
                            handleChange={(event)=>handleChangTypeEvent(event)}
                        />
                    </div>
                
                
               
             
            </div>
            <input type='checkbox'/>Nhận tư vấn trọn gói sự kiện(MC, ánh sáng, sân khấu)<br/>
            <button type='submit' onClick={(e)=>submitForm(e)}>Gửi thông tin ngay</button>
            
        </div>

        );            
}
export default FormDatTiec