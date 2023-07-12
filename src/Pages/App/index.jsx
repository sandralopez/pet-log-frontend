import { Route, Routes } from 'react-router-dom';
import { Landing } from '../Landing';
import { MyAccount } from '../MyAccount';
import { MyGraphs } from '../MyGraphs';
import { MyTags } from '../MyTags';
import { Tag } from '../Tag';
import { MyLogs } from '../MyLogs';
import { Log } from '../Log';
import { SignIn } from '../SignIn';
import { MyPets } from '../MyPets';
import { Pet } from '../Pet';
import { SignUp } from '../SignUp';
import { Home } from '../Home';
import { About } from '../About';

function App() {
	return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/my-pets" element={<MyPets />} />
        <Route path="/my-logs" element={<MyLogs />} />
        <Route path="/my-logs/add" element={<Log />} />
        <Route path="/my-graphs" element={<MyGraphs />} />
        <Route path="/my-pets/add" element={<Pet />} />
        <Route path="/my-tags" element={<MyTags />} />
        <Route path="/my-tags/add" element={<Tag />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
	)
}

export { App };