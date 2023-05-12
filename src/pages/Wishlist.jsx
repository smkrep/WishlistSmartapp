import React, {useState} from 'react'
import { Wish } from '../components/Wish'
import { AddWishButton } from '../components/AddWishButton'
import { AddWishModal } from '../components/AddWishModal'

export const Wishlist = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
  <div>
    <section className='buttonContainer'>
      <AddWishButton setActive={setModalActive}/>
    </section>
    <section className="container">
      <Wish />
      <Wish />
      <Wish />
      <Wish />
      <Wish />
      <Wish />
      <Wish />
      <Wish />
      <Wish />
    </section>
    <AddWishModal active={modalActive} setActive={setModalActive}/>
  </div>
  )
}
