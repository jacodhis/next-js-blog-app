'use client'

import { useState } from "react"
import styles from "./addBlog.module.css"


export default  function AddBlog(){

    const initialFormData ={
        title:"",
        description:""
    }
    const [blogFormData,setBlogFormData] = useState(initialFormData)


    console.log(blogFormData)

    return <div >
    <h1>Add Blog</h1>
    <form className={styles.main}>
       <div className={styles.inputDiv}>
         <label>Name</label><br/>
        <input type="text" value={blogFormData.title}
         className={styles.input}
         onChange={(e)=>setBlogFormData({...blogFormData,title:e.target.value})}/>
       </div>
       <div  className={styles.inputDiv}>
         <label>Description</label><br/>
        <textarea type="text" value={blogFormData.description}
         className={styles.input}
         onChange={(e)=> setBlogFormData({...blogFormData,description:e.target.value})}/>
       </div>
       <div  className={styles.inputDiv}>
        
        <button type="submit"  className={styles.input}>Add Blog</button>
       </div>
    </form>
    </div>
}