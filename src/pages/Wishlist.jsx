import React, {useState} from 'react'
import Wish from '../components/Wish'
import { AddWishButton } from '../components/AddWishButton'
import { AddWishModal } from '../components/AddWishModal'
import {
  createSmartappDebugger,
  createAssistant,
} from "@salutejs/client";


const initializeAssistant = (getState/*: any*/) => {
  if (process.env.NODE_ENV === "development") {
    return createSmartappDebugger({
      token: process.env.REACT_APP_TOKEN ?? "",
      initPhrase: `Запусти ${process.env.REACT_APP_SMARTAPP}`,
      getState,
    });
  }
  return createAssistant({ getState });
};

export default class WishList extends React.Component {
  constructor (props){
    super(props);
    
    this.state = {
      wishes: []
    }

    this.wishobj = {importance: 'important', name: '', price: '', category: '', additional_info: ''}

    this.assistant = initializeAssistant(() => this.getStateForAssistant() );
    this.assistant.on("data", (event/*: any*/) => {
      //console.log(`assistant.on(data)`, event);
      const { action } = event
      this.dispatchAssistantAction(action);
    });
    this.assistant.on("start", (event) => {
      //console.log(`assistant.on(start)`, event);
    });

  }

  getStateForAssistant () {
    //console.log('getStateForAssistant: this.state:', this.state)
    const state = {
      item_selector: {
        items: this.state.wishes.map(
          ({ id, title }, index) => ({
            number: index + 1,
            id,
            title,
          })
        ),
      },
    };
    //console.log('getStateForAssistant: state:', state)
    return state;
  }

  dispatchAssistantAction (action) {
    //console.log('dispatchAssistantAction', action);
    if (action) {
      switch (action.type) {
        case 'name':
          this.wishobj.name = action.note
          break
        case 'importance':
          //this.wishobj({priority: action.note})
          break
        case 'price':
          this.wishobj.price = action.note
          break
        case 'category':
          this.wishobj.category = action.note
          break
        case 'additional':
          this.wishobj.additional_info = action.note
          this.setState({
            wishes: [...this.state.wishes, this.wishobj]
          });
          break
      }
    }
  }

  onAddChild = (state) => {
    this.setState({
      wishes: [...this.state.wishes, state]
    });
  }

  onRemoveChild = (state) => {
    this.setState({
      wishes: this.state.wishes.filter(elem => elem.name !== state)
    })
  }

  render() {
    
          

    const chA = [];

    for (var i = 0; i < this.state.wishes.length; i += 1) {
      chA.push(<Wish 
        key={Math.random().toString(36).substring(7)} 
        id = {Math.random().toString(36).substring(7)}
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
