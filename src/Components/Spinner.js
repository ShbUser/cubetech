import React from 'react'

function Spinner() {
    return (
        <div>
            {/* <div class="spinner-grow spinnerTop " role="status">
                
            </div> */}

            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            <span class="visually-hidden">Loading...</span>
        </div>
    )
}

export default Spinner
