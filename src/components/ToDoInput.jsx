import React, { Component } from 'react'
import { Consumer } from '../context';



export default class ToDoInput extends Component {

     render() {
          return (


               <Consumer >{todo => (
                    <div className="card card-body  my-3 ">
                         {console.log("Hiii from todoinput tag")}


                         <form >
                              <div className="input-group">
                                   <div className="input-group-prepend">
                                        <div className="input-group-text bg-primary text-white">
                                             <i className="fas fa-book"> </i>
                                        </div>
                                   </div>
                                   <input type="text"
                                        className="form-control"
                                        placeholder="Add todo list"
                                        value={todo.isEdited ? todo.taskName : JSON.stringify()}
                                        onChange={todo.handleChange}
                                   />

                                   <button
                                        className={todo.isEdited ? "btn btn-success ml-1" : "btn btn-primary ml-1"}
                                        type="submit"
                                        onClick={todo.handleSubmit}
                                   >


                                        {todo.isEdited ? "Edit" : "Add"}


                                   </button>

                              </div>

                         </form>
                         {console.log("in end")}
                    </div>
               )
               }
               </Consumer>
          )
     }
}

