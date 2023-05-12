import React from 'react'
import "../AddWishModal.css"

export const AddWishModal = ({active, setActive}) => {

  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <div className='modal__content' onClick={e => e.stopPropagation()}>
          <button className="closeModal" onClick={() => setActive(false)}>×</button>
            <form>

                <select className="selector" id="importance" name="importance">
                    <option value="important">Важно</option>
                    <option value="medium">Средней важности</option>
                    <option value="not-important">Неважно</option>
                </select>
                <input className="textInput" type="text" id="name" name="name" placeholder="Введите название" />
                <input className="textInput" type="text" id="price" name="price" placeholder="Введите цену" />
                <input className="textInput" type="text" id="category" name="category" placeholder="Введите категорию" />
                <textarea className="textArea" id="additional-info" name="additional-info"></textarea>
                <button className="buttonSubmit" type="submit">Добавить</button>

            </form>
        </div>
    </div>
  )
}
