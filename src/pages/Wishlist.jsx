import React, {useState} from 'react'
import Wish from '../components/Wish'
import { AddWishButton } from '../components/AddWishButton'
import { AddWishModal } from '../components/AddWishModal'
// import {
//   createSmartappDebugger,
//   createAssistant,
// } from "@salutejs/client";


// const initializeAssistant = (getState/*: any*/) => {
//   if (process.env.NODE_ENV === "development") {
//     return createSmartappDebugger({
//       token: process.env.REACT_APP_TOKEN ?? "",
//       initPhrase: `Запусти ${process.env.REACT_APP_SMARTAPP}`,
//       getState,
//     });
//   }
//   return createAssistant({ getState });
// };

export default class WishList extends React.Component {
  constructor (props){
    super(props);
    
    this.state = {
      wishes: []
    }

    // this.assistant = initializeAssistant(() => this.getStateForAssistant() );
    // this.assistant.on("data", (event/*: any*/) => {
    //   console.log(`assistant.on(data)`, event);
    //   const { action } = event
    //   this.dispatchAssistantAction(action);
    // });
    // this.assistant.on("start", (event) => {
    //   console.log(`assistant.on(start)`, event);
    // });

  }

  // getStateForAssistant () {
  //   console.log('getStateForAssistant: this.state:', this.state)
  //   const state = {
  //     item_selector: {
  //       items: this.state.notes.map(
  //         ({ id, title }, index) => ({
  //           number: index + 1,
  //           id,
  //           title,
  //         })
  //       ),
  //     },
  //   };
  //   console.log('getStateForAssistant: state:', state)
  //   return state;
  // }

  // dispatchAssistantAction (action) {
  //   console.log('dispatchAssistantAction', action);
  //   if (action) {
  //     switch (action.type) {
  //       case 'add_note':
  //         return this.add_note(action);

  //       case 'done_note':
  //         return this.done_note(action);

  //       case 'delete_note':
  //         return this.delete_note(action);

  //       default:
  //         throw new Error();
  //     }
  //   }
  // }

  onAddChild = (state) => {
    this.setState({
      wishes: [...this.state.wishes, state]
    });
  }

  onRemoveChild = (state) => {
    console.log(state)
    this.setState({
      wishes: this.state.wishes.filter(elem => elem.name !== state)
    })
  }

  render() {
    const chA = [];

    for (var i = 0; i < this.state.wishes.length; i += 1) {
      chA.push(<Wish 
        key={i} 
        id = {i}
        importance={this.state.wishes[i].importance} 
        name={this.state.wishes[i].name} 
        price={this.state.wishes[i].price} 
        category={this.state.wishes[i].category}
        additional_info={this.state.wishes[i].additional_info}
        onRemove = {this.onRemoveChild}/>);
    };
    
    return (
      <ParentComponent onAdd={this.onAddChild}>
        {chA}
      </ParentComponent>
    );
  }
} 

export const ParentComponent = props => {
  const [modalActive, setModalActive] = useState(false);
  return(
  <div>
    <section className='buttonContainer'>
      <AddWishButton setActive={setModalActive}/>
    </section>
    <section className="container">
      {props.children}
    </section>
    <AddWishModal active={modalActive} setActive={setModalActive} onAdd={props.onAdd}/>
  </div>)
};
