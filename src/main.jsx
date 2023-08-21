import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import { App } from './Pages/App';
import { AuthContextProvider } from './Context/AuthContext';
import { AxiosPrivateInterceptor } from './Components/AxiosPrivateInterceptor';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <AxiosPrivateInterceptor />
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>,
)