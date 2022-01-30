import React, { useState } from 'react'

function Input() {
    const [name, setName] = useState("");
    const [mobileNumber, setMobileNumber] = useState(0);
    const [gender, setGender] = useState("")


    const handleChange = () => {

        const pattern_mobile = new RegExp(/^[7-9]\d{9}$/)
        const pattern_name = new RegExp(/^[a-z A-Z]{2,8}$/)
        const mob_success = pattern_mobile.test(parseInt(mobileNumber))
        const name_sucess = pattern_name.test(name)

        if (name_sucess && mob_success)
            alert("Login Success")

        else {
            if (mob_success === false && name_sucess === true)
                alert("please enter proper mobile Number")
            else if (mob_success === true && name_sucess === false)
                alert("please enter proper name")
            else
                alert("all details given doesnt satisfy the criteria")

        }
    }

    return (
        <div>

            <input type="text" value={name} onChange={event => setName(event.target.value)} />
            <input type="number" value={mobileNumber} onChange={event => setMobileNumber(event.target.value)} />
            <select value={gender} onChange={event => event.target.value}>
                <option value="female">Female</option>
                <option value="male">Male</option>
            </select>
            <button onClick={handleChange} >Submit</button>

        </div >
    )
}

export default Input
