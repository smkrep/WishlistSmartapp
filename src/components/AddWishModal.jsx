import React from 'react'
import "../AddWishModal.css"

function clearInput() {
  let inputs = document.getElementsByClassName("textInput")
  document.getElementById("additional-info").value = ""
  document.getElementById("importance").value = "important"
  for (let i = 0; i < inputs.length; i += 1){
    inputs[i].value = ""
  }
}

export const AddWishModal = ({active, setActive}) => {

  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <div className='modal__content' onClick={e => e.stopPropagation()}>
          <button className="closeModal" onClick={() => {setActive(false);clearInput()}}>×</button>
            <form>

                <select className="selector" id="importance" name="importance">
                    <option value="important">Важно</option>
                    <option value="medium">Средней важности</option>
                    <option value="not-important">Неважно</option>
                </select>
                <input className="textInput" type="text" id="name" name="name" placeholder="Введите название" required minlength="1" maxlength="32" />
                <input className="textInput" type="number" id="price" name="price" placeholder="Введите цену" required min="1"/>
                <input className="textInput" type="text" id="category" name="category" placeholder="Введите категорию" requiredminlength="1" maxlength="32"/>
                <textarea className="textArea" id="additional-info" name="additional-info"></textarea>
                <button className="buttonSubmit" type="submit">Добавить</button>

            </form>
        </div>
    </div>
  )
}
