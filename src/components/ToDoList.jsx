import React, { Component } from 'react'
import ToDoItem from "./ToDoItem";


export default class ToDoList extends Component {

    render() {


        return (

            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">Your List</h3>
                <ToDoItem />
                <button className="btn btn-danger  mt-5" >clear list </button>
            </ul>
        )


    }
}





