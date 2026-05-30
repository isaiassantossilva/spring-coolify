import { useCallback, useEffect, useState } from 'react'
import { fetchHello } from './api'
import './App.css'

type Status = 'idle' | 'loading' | 'success' | 'error'

function App() {
  const [message, setMessage] = useState<string>('')
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string>('')

  const load = useCallback(async () => {
    setStatus('loading')
    setError('')
    try {
      const text = await fetchHello()
      setMessage(text)
      setStatus('success')
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
      setStatus('error')
    }
  }, [])

  useEffect(() => {
    void load()
  }, [load])

  return (
    <main className="app">
      <h1>Coolify Frontend</h1>
      <p className="subtitle">Vite + React + TypeScript talking to Spring Boot</p>

      <section className="card">
        <h2>
          <code>GET /hello</code>
        </h2>

        {status === 'loading' && <p className="muted">Loading…</p>}

        {status === 'success' && (
          <p className="result" data-status="success">
            {message}
          </p>
        )}

        {status === 'error' && (
          <p className="result" data-status="error">
            {error}
          </p>
        )}

        <button onClick={() => void load()} disabled={status === 'loading'}>
          {status === 'loading' ? 'Fetching…' : 'Refetch'}
        </button>
      </section>
    </main>
  )
}

export default App
