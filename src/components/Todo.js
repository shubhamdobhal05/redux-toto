import React, { useState } from "react";
import {useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";

const Todo = () => {

    const [data, setData] = useState("");
    const list = useSelector((state) => state.todoReducer.list)
    const dispatch = useDispatch();
    return (
        <>
            <div>
                <div>
                    <figure>
                        <figcaption>Add Your Items</figcaption>
                    </figure>
                    <div>
                        <input type = "text" placeholder = "Add Items..." value = {data} onChange = {(event) => setData(event.target.value)}></input>
                        <button onClick = {() => dispatch(addTodo(data),setData(""))}>Add Task</button>
                    </div>

                    <div>
                        {
                            list.map((elem) => {
                                return (
                                    <div key = {elem.id}>
                                <p >{elem.data} <button onClick = {() => dispatch(deleteTodo(elem.id))}>Delete</button></p>
                                
                            </div>
                                )
                            
                            })
                        }
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;