import { createRoot } from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Router from './routes/route';
createRoot(document.getElementById('root')).render(
  <Router />
)
