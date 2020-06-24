import React from 'react'



// // const reducer=(prevState,action)

const Context=React.createContext();
export  const Consumer=Context.Consumer;
export const Provider=Context.Provider;


//  export default class Provider extends Component {
//     state={
//         todos:[],
//         todo:{
//             taskName:'',
//             isEdited:''
//         }
//     }

// constructor(props){
//     super(props);
//     console.log("constructor");
    
//     fetch('http://localhost:3000/todos')
//         .then(response=>response.json())
//         .then( response => this.setState({todos:response.data}))
//         .catch(err =>console.error(err))
//         console.log("value"+this.state.todos);
//    }


   
   


    
// //   getTodos= _ =>{
// //     fetch('http://localhost:3000/todos')
// //     .then(response=>response.json())
// //     .then( response => this.setState({todos:response.data}))
// //      .catch(err =>console.error(err))
// //  }

//   render(){
//   //  this.getTodos();
//     return(
//         <Context.Provider value={this.state.todos}>
//            { console.log(this.state.todos)}
//             {this.props.children}
//         </Context.Provider>
//     )
// }

// }
//  export const Consumer=Context.Consumer