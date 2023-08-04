import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '../../Components/ProtectedRoute';
import { AuthContextProvider } from '../../Context/AuthContext';
import { Landing } from '../Landing';
import { MyAccount } from '../MyAccount';
import { MyGraphs } from '../MyGraphs';
import { MyTags } from '../MyTags';
import { MyLogs } from '../MyLogs';
import { Log } from '../Log';
import { SignIn } from '../SignIn';
import { MyPets } from '../MyPets';
import { SignUp } from '../SignUp';
import { Home } from '../Home';
import { About } from '../About';

function App() {
	return (
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route 
            path="/my-account" 
            element={
              <ProtectedRoute>
                <MyAccount />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/my-pets" 
            element={
              <ProtectedRoute>
                <MyPets />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/my-logs" 
            element={
              <ProtectedRoute>
                <MyLogs />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/my-logs/add"
            element={
              <ProtectedRoute>
                <Log />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/my-graphs" 
            element={
              <ProtectedRoute>
                <MyGraphs />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/my-tags" 
            element={
              <ProtectedRoute>
                <MyTags />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/home" 
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } 
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </AuthContextProvider>
	)
}

export { App };