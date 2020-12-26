import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Home = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);


    const loadUsers = async (res, req) => {
        const result = await axios.get("http://localhost:3003/user");
        setUser(result.data)
    };



    return (
        <div className="home">
            <h3 className="text-center my-5 p-3 shadow">Mern Curd</h3>
            <table className="table  border shadow w-50 m-auto">
                <thead className="bg-dark text-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        <th colSpan="3" className="text-center" scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((data, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{data.name}</td>
                                <td>{data.username}</td>
                                <td>{data.email}</td>
                                <td> <Link className="btn btn-primary">View</Link></td>
                                <td> <Link className="btn btn-dark text-light">Edit</Link></td>
                                <td> <Link className="btn btn-danger">Delete</Link></td>
                                
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home
