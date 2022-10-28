import {useState} from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';


//Every React function can accept props, props is an object
//onClick={deleteHandler}
//onClick={deleteHandler()} This code will execute immediately
function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false) //useState always returns array with two elements
    //[current state snapshot, function that allows you to change state value]
    //the function containing the state object will be re-evaluated and refreshed

    function deleteHandler(){
        setModalIsOpen(true)
    }

    function closeModalHandler(){
        setModalIsOpen(false)
    }

    return (
        <div>
            <div className='card'>
                <h2>{props.text}</h2>
                    <div className='actions'>
                    <button className='btn' onClick={deleteHandler}>Delete</button>
                    </div>
                
                
            </div>
            { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
            { modalIsOpen && <Backdrop onClick={closeModalHandler} />}
        </div>
    )
}


//{ modalIsOpen && <Backdrop onClick={closeModalHandler} />} Pass a pointer to this function as a value for this prop

//Equivalent Statements
//{ modalIsOpen ? <Modal /> : null}
//{ modalIsOpen && <Modal />}    If modalIsOpen is true and <Modal /> is true then display. Aka components are always true

export default Todo;