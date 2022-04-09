import React , { useState } from "react";
import './Card.css';
import EditTask from "../modals/EditTask";

const Card = ({taskObj, index, deleteTask, udpateListArray}) => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        udpateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    return ( 
        <div className="card">
            <p>{taskObj.Name}</p>
            <p>{taskObj.Description}</p>
            <i class="fa-solid fa-trash" onClick={handleDelete}></i>
            <i class="fa-solid fa-pen" onClick={() => setModal(true)}></i>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj}/>
        </div>
     );
}
 
export default Card;