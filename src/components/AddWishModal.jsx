import React from 'react'
import "../AddWishModal.css"



class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {importance: 'important', name: '', price: '', category: '', additional_info: ''};
    this.onAdd = props.onAdd
    this.setActive = props.setActive
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    this.onAdd(this.state)
    this.clearInput()
    event.preventDefault();
  }
 
  clearInput() {
    this.setState({importance: 'important', name: '', price: '', category: '', additional_info: ''});
    let inputs = document.getElementsByClassName("textInput")
    document.getElementById("additional-info").value = ""
    document.getElementById("importance").value = "important"
    for (let i = 0; i < inputs.length; i += 1){
      inputs[i].value = ""
    }
  }

  render() {
    return (
      <>
      <button className="closeModal" onClick={() => {this.setActive(false); this.clearInput()}}>×</button>
      <form onSubmit={this.handleSubmit}>

        <select className="selector" value={this.state.importance} onChange={this.handleChange} id="importance" name="importance">
            <option value="important">Важно</option>
            <option value="medium">Средней важности</option>
            <option value="not-important">Неважно</option>
        </select>
        <input className="textInput" value={this.state.name} onChange={this.handleChange} type="text" id="name" name="name" placeholder="Введите название" required minLength="1" maxLength="32" />
        <input className="textInput" value={this.state.price} onChange={this.handleChange} type="number" id="price" name="price" placeholder="Введите цену" required min="1"/>
        <input className="textInput" value={this.state.category} onChange={this.handleChange} type="text" id="category" name="category" placeholder="Введите категорию" required minLength="1" maxLength="32"/>
        <textarea className="textArea" value={this.state.additional_info} onChange={this.handleChange} id="additional-info" name="additional_info"></textarea>
        <button className="buttonSubmit" type="submit">Добавить</button>

    </form>
    </>
    );
  }
}

export const AddWishModal = ({active, setActive, onAdd}) => {

  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <div className='modal__content' onClick={e => e.stopPropagation()}>
            <AddForm onAdd={onAdd} setActive={setActive} />
        </div>
    </div>
  )
}
