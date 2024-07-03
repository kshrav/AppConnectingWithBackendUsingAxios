import React, {useEffect, useState} from "react";
import axios from 'axios'
import "./FetchData.css"

function FetchData(){
    const [posts, setPosts]= useState([])
    
    useEffect(()=>{
        axios
        .get('http://localhost:8083/students')
        .then(res=>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])
    return (
        <div class="div">
            <h1 id="h1id">Student Details</h1>
            {posts.map((post) =>
                 <li class="licls" key={post.studentRollNo}>
                    <strong>Student Name: <span class="spancls">{post.studentName}</span></strong>
                    <div class="divcls">
                        <p class="pcls">Roll Number: <span class="spancls">{post.studentRollNo}</span></p>
                        <p class="pcls">Age: <span class="spancls">{post.studentAge}</span></p>
                        <p class="pcls">Marks: </p>
                        <ul>
                            <div>
                             {post.studentMarks.map((mark) => 
                                <li key={post.studentMarks}>
                                    <span class="spancls">{mark}</span>
                                </li>)}
                            </div>
                        </ul>

                    </div>
                </li>
            )}
            
        </div>
    )

}

export default FetchData
