import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GoogleOAuthProvider } from "@react-oauth/google";

const client_id = "1049517322408-41atae9l72sgjm8pkb0jt1t0b4tkf3tf.apps.googleusercontent.com"

createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId={client_id}>
    <App />
  </GoogleOAuthProvider>,
)
