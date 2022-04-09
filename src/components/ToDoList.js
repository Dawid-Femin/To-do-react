import React, {useEffect, useState} from 'react';
import './ToDoList.css';
import CreateTask from '../modals/createTask';
import Card from './Card';

const ToDoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);
    
    const toggle = () => {
     setModal(!modal);
    }

    useEffect(() => {
        let arr = localStorage.getItem('taskList');
        let obj = JSON.parse(arr)
        if(arr) {
            setTaskList(obj)
        }
    },[]);

    const deleteTask = (index) => {
        let tempList = taskList;
        tempList.splice(index, 1);
        localStorage.setItem('taskList', JSON.stringify(tempList));
        setModal(false);
        setTaskList(taskList);
        window.location.reload();
    }

    const udpateListArray = (obj,index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem('taskList', JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const saveTask = (taskObj) => {
        const tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem('taskList', JSON.stringify(tempList))
        setModal(false)
        setTaskList(tempList)
    }

    return (
        <div className='wrapper'> 
            <div className='header'>
                <h3>To do List</h3>
                <button onClick={() => setModal(true)}>Create Task</button>
            </div>
            <div className="tasks">
                
                {taskList.map((obj, index)=> <Card taskObj={obj} index={index} deleteTask={deleteTask} udpateListArray={udpateListArray} />)}
            </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTask}/>
        </div>
     );
}
 
export default ToDoList;