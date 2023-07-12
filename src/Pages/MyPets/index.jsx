import { Link } from 'react-router-dom';
import { HomeLayout } from '../../Components/HomeLayout';
import { Pet } from '../../Components/Pet';

function MyPets() {
  return (
    <HomeLayout>
      <div className="flex flex-col items-center mr-10 ml-10 h-auto pb-10 pt-3">
        <p className="font-medium text-xl">Mis Mascotas</p>
        <p className="font-light text-medium mt-10 mb-10 text-center ml-10 mr-10">Ingresa a tus mascotas para poder crear sus registros.</p>
        <Link 
          to="/my-pets/add"
        >
          <button
            type="button"
            className="mr-3 inline-block rounded bg-black px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white rounded-xl">
            Añadir nueva
          </button>
        </Link>
        <div className="grid grid-cols-3 gap-x-4 gap-y-20 mt-10">
          <Pet 
            avatar="#" 
            name="Tsuki"
            species="Felino" 
          />
          <Pet 
            avatar="#" 
            name="Woody"
            species="Canino" 
          />
          <Pet 
            avatar="#" 
            name="Gatinchi"
            species="Felino" 
          />
                    <Pet 
            avatar="#" 
            name="Gatuno"
            species="Felino" 
          />
                    <Pet 
            avatar="#" 
            name="Gatunciti"
            species="Felino" 
          />
        </div>
      </div>
    </HomeLayout>
  )
}

export { MyPets };