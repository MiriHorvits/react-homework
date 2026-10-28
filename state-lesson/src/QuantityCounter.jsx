import { useState } from 'react'
import './QuantityCounter.css'

function QuantityCounter() {
  const [quantity, setQuantity] = useState(1)
  const price = 25

  function handleDecrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  function handleIncrement() {
    setQuantity(quantity + 1)
  }

  return (
    <div className="quantity-card">
      <h2 className="quantity-card__title">סט כוסות</h2>
      <p className="quantity-card__price">מחיר ליחידה: {price} ₪</p>

      <div className="quantity-controls">
        <button
          className="quantity-btn"
          onClick={handleDecrement}
          disabled={quantity <= 1}
          aria-label="הקטנת כמות"
        >
          −
        </button>

        <span className="quantity-controls__value">{quantity}</span>

        <button
          className="quantity-btn"
          onClick={handleIncrement}
          aria-label="הגדלת כמות"
        >
          +
        </button>
      </div>

      <p className="quantity-card__total">
        <span>סה״כ</span>
        <strong>{quantity * price} ₪</strong>
      </p>
    </div>
  )
}

export default QuantityCounter
