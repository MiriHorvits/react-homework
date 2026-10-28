import './App.css'
import QuantityCounter from './QuantityCounter'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>עגלת קניות</h1>
        <p className="app-subtitle">שלב 6 — תרגול מודרך</p>
      </header>

      <main className="app-content">
        <QuantityCounter />
      </main>
    </div>
  )
}

export default App
