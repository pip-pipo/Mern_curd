import React , {useState} from 'react'

const AddUser = () => {
    const [user ,setUser]= useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });
    const {name,username,email,phone,website} = user
    const onInputChange =(e)=>{
        console.log(e.target.value)
    }
    return (
        <div>
            <form className="my-5 w-50 m-auto shadow border p-3 bg-dark text-light">
                <h1>Add user</h1>
                <input type="text" value={name} onChange={e => onInputChange(e)}   className="form-control my-2" placeholder="Enter First name" aria-label="Enter First name" />
                <input type="text" value={username} onChange={e => onInputChange(e)}  className="form-control my-2" placeholder="Enter You Username" aria-label="Enter You Username" />
                <input type="text" value={email} onChange={e => onInputChange(e)}  className="form-control my-2" placeholder="Enter Your E-main Address" aria-label="Enter Your E-main Address" />
                <input type="text" value={phone} onChange={e => onInputChange(e)}  className="form-control my-2" placeholder="Enter Your Phone Nubmer" aria-label="Enter Your Phone Nubmer" />
                <input type="text" value={website}  onChange={e => onInputChange(e)} className="form-control my-2" placeholder="Enter Your Website Name" aria-label="Enter Your Website Name" />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AddUser
