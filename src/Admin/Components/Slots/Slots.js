import axios from '../../../axios'
import React, { useEffect, useState } from 'react'
import './Slots.css'
function Slots() {
    const [approved, setApproved] = useState([])
    const [regId, setRegID] = useState('')
    const [slot, setSlot] = useState([])
    const [slotId, setSlotId] = useState('')
    useEffect(() => {
        axios.get('getApprovedCompanies').then((response) => {

            if (response.data.ApprovedComp !== "") {
                setApproved(response.data.ApprovedComp)
            }
        })
    }, [])

    useEffect(() => {

        axios.get('getSlots').then((response) => {

            if (response.data.slots !== "") {
                setSlot(response.data.slots)
            }
            

        })
    }, [])

    const handleSlot = (id, act) => {
        let data = { id, act ,slotId}
        axios.post('setBookingStatus', data).then((response) => {
            if (response.data.status) {
                alert("Booking successfully")
            }
        })
    }

    return (
        <div>
            <div className='container'>

                <div className='row ms-5 '>
                    <h2 className=' ms-4'>Booking Slot</h2>
                    {                        
                        slot.map((obj) => {
                            return (
                                
                               obj.status !== 'Booked'?
                                <button className='slotSize' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {
                                    setSlotId(obj._id)
                                }}></button>  
                                : 
                                <button className='bookedSlot'></button>
                            
                             )
                        })
                    }   

                </div>
                    

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <select onChange={(e) => { setRegID(e.target.value) }} class="form-select" aria-label="Default select example">
                                    <option selected disabled hidden></option>
                                    {
                                        approved.map((obj) => {
                                            return (
                                                <option value={obj._id}>{obj.companyName}</option>

                                            )
                                        })
                                    }

                                </select>


                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onClick={() => {
                                    handleSlot(regId, "Booked")
                                }}>Book slot</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Slots
