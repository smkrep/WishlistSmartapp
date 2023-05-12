import React, {useState} from 'react'
import Wish from '../components/Wish'
import { AddWishButton } from '../components/AddWishButton'
import { AddWishModal } from '../components/AddWishModal'


export default class WishList extends React.Component {
  constructor (props){
    super(props);
    
    this.state = {
      wishes: [{importance: 'important', name: 'asd', price: '13', category: 'aa', additional_info: 'a'}]
    }
  }

  onAddChild = (state) => {
    this.setState({
      // wishes: this.state.wishes.push(state)
      wishes: [...this.state.wishes, state]
    });
    console.log("из AddChild")
    console.log(this.state.wishes)
  }

  render() {
    const chA = [];
    const { wishes } = this.state

    console.log("Тут что то не то")
    console.log(wishes)

    for (var i = 0; i < this.state.wishes.length; i += 1) {
      chA.push(<Wish 
        key={i} 
        importance={this.state.wishes[i].importance} 
        name={this.state.wishes[i].name} 
        price={this.state.wishes[i].price} 
        category={this.state.wishes[i].category}
        additional_info={this.state.wishes[i].additional_info} />);
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
  console.log(props)
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

/* {props.wishes.map(wish => <Wish key={Math.random()} 
        importance={wish.importance}
        name={wish.name} 
        price={wish.price} 
        category={wish.category}
        additional_info={wish.additional_info} />)} */