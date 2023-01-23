import axios from '../../../axios'
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert'
// import Modal from '../Modal'
import './Slots.css'
function Slots(props) {

    const [slot, setSlot] = useState([])
    const [slotId, setSlotId] = useState('')
    const [approved, setApproved] = useState([])
    const [regId, setRegID] = useState('')
    const [progress, setProgress] = useState('')


    //const [refresh, setRefresh] = useState('now')
    useEffect(() => {

        axios.get('admin/getSlots').then((response) => {

            if (response.data.slots !== "") {
                setSlot(response.data.slots)
            }
        })
    }, [progress])

    useEffect(() => {
        //alert("ok")
        setProgress('  Loading Companies...')
        axios.get('admin/getApprovedCompanies').then((response) => {
            console.log(response.data.ApprovedComp);
            if (response.data.ApprovedComp !== "") {
                setApproved(response.data.ApprovedComp)
            } else {
                setApproved({})
            }

        })
        setProgress('')
    }, [progress])

    const handleSlot = (id, act) => {
        swal({
            title: "Are you sure?",
            text: "",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    let data = { id, act, slotId }
                    axios.post('admin/setBookingStatus', data).then((response) => {
                        if (response.data.status) {

                            setProgress("Refreshing")
                            swal("Booked", {
                                timer: 1000,
                                buttons: false,
                                icon: "success",
                            }).then(
                                function () { },
                                // handling the promise rejection
                                function (dismiss) {
                                    if (dismiss === 'timer') {
                                        //console.log('I was closed by the timer')
                                    }
                                }
                            )

                        }


                    })
                }
            })

    }

    return (
        <div>
            <div className='container'>

                <div className='row ms-5 '>
                    <h2 className=' ms-4'>Booking Slot  </h2>
                    <p className='text-primary ms-4'>{progress}</p>
                    {
                        slot.map((obj) => {
                            return (

                                obj.status !== 'Booked' ?
                                    <button className='slotSize' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {
                                        setSlotId(obj._id)
                                    }}></button>
                                    :
                                    <button className='bookedSlot'></button>
                            )
                        })
                    }

                </div>
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
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => {
                                handleSlot(regId, "Booked")
                                //setRefresh(" Wait...")

                            }}>Book Slot</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slots
