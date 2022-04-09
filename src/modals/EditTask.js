import React , { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './createTask.css';

const EditTask = ({modal, toggle, updateTask, taskObj}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        if(name === 'taskName') {
            setTaskName(value);
        } else if(name === 'description') {
            setDescription(value);
        }
    }

    useEffect(() => {
        setTaskName(taskObj.Name);
        setDescription(taskObj.Description);
    },[])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['Description'] = description
        updateTask(tempObj)
    }

    return ( 
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
                <form>
                    <div>
                        <label htmlFor="taskname">Task name</label>
                        <input id="taskname" type="text" value={taskName} name='taskName' onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="taskdescription">Task description</label>
                        <textarea rows="5" value={description} name='description' onChange={handleChange}></textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button onClick={handleUpdate}>Update</Button>{' '}
                <Button onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
     );
}

export default EditTask;