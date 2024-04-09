"use client";
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';

const UserCommentList = (props) => {

    const router=useRouter();
    
    const handleDelete = async (id) => {

        const options = {method:'DELETE',body:JSON.stringify({id:parseInt(id)})}
        const res = await (await fetch("/api/comments/manage",options)).json();

        if(res.status == "success"){
            toast.success("Request Completed!");
            router.refresh();
        }
        else {
            toast.error("Invalid Request!")
        }

    }

  return (
    <div className="container mt-3">
        <div className="row">
            <div className="col-12">
                <div className="card py-2">
                    <ul className="list-group list-group-flush">
                        {
                            props.x.data.map((item) => {
                                return(
                                    <li className="list-group-item">
                                        <h6 className="text-dark">
                                            <i className="bi bi-newspaper"></i> {item.news_list.title}
                                        </h6>
                                        <p className="text-secondary">{item.descriptions}</p>
                                        <button onClick={()=>handleDelete(item.id)} className="btn btn-danger btn-sm px-2">Remove</button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserCommentList