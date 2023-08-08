import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '../../Components/ProtectedRoute';
import { AuthContextProvider } from '../../Context/AuthContext';
import { PetContextProvider } from '../../Context/PetContext';
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
              <PetContextProvider>
                <ProtectedRoute>
                  <MyPets />
                </ProtectedRoute>
              </PetContextProvider>
            } 
          />
          <Route 
            path="/my-logs" 
            element={
              <PetContextProvider>
                <ProtectedRoute>
                  <MyLogs />
                </ProtectedRoute>
              </PetContextProvider>
            } 
          />
          <Route 
            path="/my-logs/add"
            element={
              <PetContextProvider>
                <ProtectedRoute>
                  <Log />
                </ProtectedRoute>
              </PetContextProvider>
            } 
          />
          <Route 
            path="/my-graphs" 
            element={
              <PetContextProvider>
                <ProtectedRoute>
                  <MyGraphs />
                </ProtectedRoute>
              </PetContextProvider>
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