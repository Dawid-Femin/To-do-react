import React , { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './createTask.css';

const CreateTask = ({modal, toggle, save}) => {
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

    const handleSave = () => {
        let taskObj = {}
        taskObj["Name"] = taskName;
        taskObj["Description"] = description;
        save(taskObj);
    }

    return ( 
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
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
                <Button onClick={handleSave}>Create</Button>{' '}
                <Button onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
     );
}

export default CreateTask;