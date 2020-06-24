import React,{Component}from 'react'
import {Consumer} from '../context'



  class ToDoItem extends Component {
    
    
    // state={
    //     todos:[],
       
    //     todo:{
    //         taskName:'',
    //         isEdited:''
    //     }
    // }
    
//   componentDidMount() {
//     this.props.getAll()
//   }

   
    render(){
        return(
            <Consumer>{todo=>{
              // console.log(value)
              return(
                todo.todos.map((item,id) => (
                   
                        <li  key={item.id} className="list-group-item text-capi00talize d-flex justify-content-between my-2">
                                    <h6 className="text-body ">{item.taskName}</h6> 
                                      <div className="todo-icon">
                                               <span className="mx-2 text-success"  

                                                onClick={todo.onEdit.bind(this,item)}
                                               > <i className="fas fa-pen"></i> </span>

                                                <span className="mx-2 text-danger" 
                                                
                                                 onClick={todo.onDelete.bind(this, item.id)}

                                                ><i className="fas fa-trash"></i> </span>
                                    </div>
                                </li> 
                )
                )
                
                )
                
                
                }
            
    }
           </Consumer>
                 )
                  
                
        }        
}
export default ToDoItem;