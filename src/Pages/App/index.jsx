import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '../../Components/ProtectedRoute';
import { PetContextProvider } from '../../Context/PetContext';
import { TagContextProvider } from '../../Context/TagContext';
import { ModalContextProvider } from '../../Context/ModalContext';
import { Landing } from '../Landing';
import { MyAccount } from '../MyAccount';
import { MyGraphs } from '../MyGraphs';
import { MyTags } from '../MyTags';
import { MyLogs } from '../MyLogs';
import { MyReminders } from '../MyReminders';
import { Contact } from '../Contact';
import { SignIn } from '../SignIn';
import { MyPets } from '../MyPets';
import { SignUp } from '../SignUp';
import { Home } from '../Home';
import { About } from '../About';

function App() {
	return (
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
              <ModalContextProvider>
                <ProtectedRoute>
                  <MyPets />
                </ProtectedRoute>
              </ModalContextProvider>
            </PetContextProvider>
          } 
        />
        <Route 
          path="/my-logs" 
          element={
            <PetContextProvider>
              <TagContextProvider>
                <ProtectedRoute>
                  <MyLogs />
                </ProtectedRoute>
              </TagContextProvider>
            </PetContextProvider>
          } 
        />
        <Route 
          path="/my-graphs" 
          element={
            <PetContextProvider>
              <TagContextProvider>
                <ProtectedRoute>
                  <MyGraphs />
                </ProtectedRoute>
              </TagContextProvider>
            </PetContextProvider>
          } 
        />
        <Route 
          path="/my-tags" 
          element={
            <TagContextProvider>
              <ModalContextProvider>
                <ProtectedRoute>
                  <MyTags />
                </ProtectedRoute>
              </ModalContextProvider>
            </TagContextProvider>
          } 
        />
        <Route 
          path="/my-reminders" 
          element={
            <PetContextProvider>
              <ModalContextProvider>
                <ProtectedRoute>
                  <MyReminders />
                </ProtectedRoute>
              </ModalContextProvider>
            </PetContextProvider>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <ProtectedRoute>
              <Contact />
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
	)
}

export { App };