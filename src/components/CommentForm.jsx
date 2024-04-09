"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const CommentForm = (props) => {

    const router = useRouter()

    const [submit,setSubmit]=useState(false)

    const [comment,setComment] = useState('');
    const handleComment = (e) => {
        setComment(e.target.value);
    }

    const handleSubmit = async (e)=>{

        e.preventDefault();

        if (comment == ''){
            toast.error("Descriptions Required!")
        }
        else {
            setSubmit(true);

            const options={method:'POST', body:JSON.stringify({postID:parseInt(props.postID),descriptions:comment})}
            let res=await (await fetch("/api/comments/manage",options)).json();

            setSubmit(false);

            setComment("");

            if(res.status==="success"){
                toast.success("Request Completed");
                router.refresh();
            }
            else {
                router.replace("/user/login")
            }

        }

    }

  return (
    <div className="container">
        <div className="row">
            <div className="col-12 p-4">
                <h5 className="mb-3">Write Yours</h5>
                <textarea value={comment} rows={6} onChange={handleComment} className="form-control mb-2"/>
                {
                   !submit &&
                   <button onClick={handleSubmit} className="btn btn-danger mt-3">Submit</button>
                }

                {
                    submit &&
                   <button disabled={true}  className="btn btn-danger mt-3"><div className="spinner-border spinner-border-sm" role="status"></div> Processing...</button>
                }
            </div>
        </div>
    </div>
  )
}

export default CommentForm