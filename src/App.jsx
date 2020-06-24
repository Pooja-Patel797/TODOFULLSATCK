import React, { Component } from 'react';
import Header from './components/Header';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';
import { Provider } from './context'


class App extends Component {


  constructor(props) {
    super(props);
   
    this.state = {
      todos: [
      ]
      ,

      taskName: "",
      isEdited: false,
      id: 0
      ,
//fetching all the data
      getAll: () => {
        fetch('http://localhost:3000/todos')
          .then(response => response.json())
          .then(response => this.setState({ todos: response.data }))
          .catch(err => console.error(err))
        console.log(" i havent change" + this.state.todos)
      },

      handleChange: e => {
        console.log("inside handlechange" + e.target.value);
        this.setState({
          taskName: e.target.value,

        });
      },

  //Adding or updating todo in the database
      handleSubmit: e => {
        console.log("inside handlesubmit");
        const taskName = this.state.taskName;
        const isEdited = this.state.isEdited;
        if (isEdited === false) {
          let api = 'http://localhost:3000/todos/add?taskName=' + taskName + "&isEdited=" + isEdited
          console.log(api);

          fetch(api)
            .then(response => console.log(response))
            .then(this.state.getAll())
            .catch(err => console.error(err))

        }

        else {
          console.log("inside update")
          fetch('http://localhost:3000/todos/update?id=' + this.state.id + "&taskName=" + taskName)
            .then(response => console.log(response))
            .then(this.state.getAll())
            .catch(err => console.error(err))
        }


      },

    //deleting todo item from database
      onDelete: (val, e) => {
        e.preventDefault()
        console.log("inside delete")
        fetch('http://localhost:3000/todos/delete?id=' + val)
          .then(response => console.log(response))
          .then(this.state.getAll())
          .catch(err => console.error(err))
      },



      onEdit: (todo, e) => {
        this.setState({
          taskName: todo.taskName,
          isEdited: true,
          id: todo.id
        })


      }






    }
    console.log(this.state.getAll());


  }


  render() {
    return (
      <Provider value={this.state}>
        <div className="container-fluid">
          <div className="row ">
            <div className="col-4 mt-4 mx-auto text-center bg-secondary">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="col-4 mt-3 mx-auto text-center bg-secondary">
              <ToDoInput />
            </div>
          </div>

          <div className="row ">
            <div className="col-4 mt-1 mx-auto text-center bg-secondary">

              <ToDoList />
            </div>
          </div>


        </div>
      </Provider >
    );
  }
}
export default App;

