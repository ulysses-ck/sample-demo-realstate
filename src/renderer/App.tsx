import './App.css';
import 'tailwindcss/tailwind.css';
import Separator from './components/Separator';
import {
  femaleRandomUser,
  realStateBrand,
  realStateLogo,
  roomDefault,
} from './Images';

export default function App() {
  return (
    <div className="w-full h-screen flex">
      <div className="shadow flex fixed flex-col w-12 h-full content-between justify-between text-center">
        <div className="flex flex-col">
          <div className="w-10 h-10 self-center m-1">
            <img src={realStateLogo} alt="brand" />
          </div>
          <hr className="w-9/12 self-center" />
          <div className="buttons mt-2 flex flex-col">
            <button type="button" className="text-gray-700 my-4">
              <i className="fa-solid fa-chart-column fa-xl" />
            </button>
            <button type="button" className="text-gray-700 my-4">
              <i className="fa-solid fa-people-group fa-xl" />
            </button>
            <button type="button" className="text-gray-700 fa-xl">
              <i className="fa-solid fa-key my-4" />
            </button>
            <button type="button" className="text-gray-700 fa-xl">
              <i className="fa-sharp fa-solid fa-dollar-sign" />
            </button>
          </div>
        </div>
        <div className="bottom">
          <p className="text-[12px] rounded-sm bg-gray-200 text-gray-600 text-center m-1">
            Release 2.0.0
          </p>
          <div className="flex flex-col">
            <button type="button" className="text-xl text-[#4e81b8] m-2">
              <i className="fa-solid fa-chalkboard-user" />
            </button>
            <button type="button" className="text-xl text-gray-700 m-2">
              <i className="fa-solid fa-angles-right" />
            </button>
          </div>
        </div>
      </div>
      <div className="dashboard ml-14 w-full">
        <div className="panel-user flex p-2 justify-between">
          <div className="flex">
            <div className="w-12 h-12">
              <img className="w-full" src={realStateBrand} alt="" />
            </div>
            <div className="flex flex-col">
              <p className="text-[24px]">
                <span className="text-indigo-700">Real</span> Estate
              </p>
              <p className="text-sm">Capital Partners</p>
            </div>
          </div>
          <Separator />
          <div className="search border-gray-400 border rounded-sm flex bg-white">
            <button
              type="button"
              className="bg-gray-100 rounded-l-sm text-sm  border-r-2 px-2"
            >
              <span className="p-1">Propiedades</span>
              <i className="fa-solid fa-chevron-down" />
            </button>
            <input
              className="border-none focus:outline-none focus:border-none px-4"
              type="text"
              placeholder="Buscar por direccion..."
              name="search"
              id="search"
            />
            <button type="button" className="bg-white px-4">
              <i className="fa-solid fa-magnifying-glass" />
            </button>
          </div>
          <Separator />
          <button type="button" className="bg-gray-200 p-2">
            <i className="fa-solid fa-plus pr-2" />
            <span>Nuevo</span>
          </button>
          <Separator />
          <div className="w-24">
            <p className="text-sm font-semibold">Cambio</p>
            <div className="flex justify-between">
              <p>USD</p>
              <p>$150,00</p>
            </div>
          </div>
          <Separator />
          <div className="w-24">
            <p className="text-sm font-semibold">Sucursal</p>
            <p>Casa Central</p>
          </div>
          <Separator />
          <div className="flex cursor-pointer">
            <div className="flex flex-col">
              <p>Marketing. Usuario</p>
              <p className="text-sm font-semibold">Administración</p>
            </div>
            <div className=" user flex align-middle content-center justify-center items-center">
              <div className="w-12 h-12 mx-2">
                <img
                  className="w-full rounded-full"
                  src={femaleRandomUser}
                  alt=""
                />
              </div>
              <span className="text-sm">
                <i className="fa-solid fa-chevron-down" />
              </span>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-between m-3">
          <div className=".props">
            <i className="fa-solid fa-chevron-right fa-2x text-[#d7b04a] mx-2" />
            <div className="inline text-2xl">Propiedades</div>
            <button type="button">
              <i className="fa-solid fa-circle-info fa-sm text-[#d7b04a] mx-2" />
            </button>
          </div>
          <div className="flex">
            <button type="button" className="bg-[#d7b04a] p-2 mx-2">
              <i className="fa-solid fa-plus pr-2" />
              <span>Nuevo</span>
            </button>
            <button type="button" className="bg-gray-200 py-2 px-4 mx-2">
              <i className="fa-sharp fa-solid fa-ellipsis-vertical fa-xl" />
            </button>
            <div className="flex">
              <label
                htmlFor="list"
                className="border border-gray-300 py-2 px-4 cursor-pointer "
              >
                <input type="radio" name="view" id="list" className="hidden" />
                <i className="fa-solid fa-list-ul fa-lg " />
              </label>

              <label
                htmlFor="chart"
                className="border border-gray-300 py-2 px-4 cursor-pointer "
              >
                <input type="radio" name="view" id="chart" className="hidden" />
                <i className="fa-solid fa-chart-column fa-lg" />
              </label>
            </div>
            <button type="button" className="text-xl text-[#4e81b8] m-2">
              <i className="fa-solid fa-chalkboard-user" />
            </button>
          </div>
        </div>
        <div className="flex justify-between flex-row m-2">
          <div>
            <i className="fa-solid fa-magnifying-glass fa-sm mx-2" />
            BÚSQUEDA
          </div>
          <div className="flex">
            <div className="text-[#7c96bb]">
              <i className="fa-solid fa-eraser fa-sm" />
              Limpiar
            </div>
            <Separator />
            <div className="text-[#7c96bb]">
              <i className="fa-solid fa-angles-left fa-sm" />
              Búsqueda Avanzada
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="p-4 border-b-4 border-b-[#d0b87a]">
          <div className="mx-2 inline">
            <p className="inline">Código:</p>{' '}
            <input
              type="text"
              name="code"
              id=""
              placeholder="Código"
              className="inline border-2 p-2 focus:outline-blue-800"
            />
          </div>
          <div className="mx-2 inline">
            <p className="inline">Dirección:</p>{' '}
            <input
              type="text"
              name="code"
              id=""
              placeholder="Dirección"
              className="inline border-2 p-2 focus:outline-blue-800"
            />
          </div>
          <div className="mx-2 inline">
            <p className="inline">Propietario:</p>{' '}
            <input
              type="text"
              name="code"
              id=""
              placeholder="Código"
              className="inline border-2 p-2 focus:outline-blue-800"
            />
          </div>
          <div className="mx-2 inline">
            <p className="inline">Tipo:</p>{' '}
            <label className="select" htmlFor="slct">
              <i
                className="fa-solid fa-chevron-down sprites "
                id="select-arrow-down"
              />
              <select
                id="slct"
                required
                className="border-2 focus:outline-blue-800"
              >
                <option value="" disabled defaultValue="true">
                  Select option
                </option>
                <option value="#">One</option>
                <option value="#">Two</option>
                <option value="#">Three</option>
                <option value="#">Four</option>
                <option value="#">Five</option>
                <option value="#">Six</option>
                <option value="#">Seven</option>
              </select>
            </label>
          </div>
        </div>
        <div className="m-4 border">
          <div className="flex justify-start">
            <button
              type="button"
              className="border-b-4 border-b-[#d0b87a] py-4 px-6 mr-4"
            >
              En cartera{' '}
              <span className="w-full rounded-3xl px-4 py-[4px] bg-[#d8b049] text-white">
                66
              </span>
            </button>
            <button
              type="button"
              className="border-b-4 border-b-[#d0b87a] py-4 px-6 mr-4"
            >
              Gestión de alquiler{' '}
              <span className="w-full rounded-3xl px-4 py-[4px] bg-[#d8b049] text-white">
                32
              </span>
            </button>
            <button
              type="button"
              className="border-b-4 border-b-[#d0b87a] py-4 px-6 mr-4"
            >
              Gestión de venta{' '}
              <span className="w-full rounded-3xl px-4 py-[4px] bg-[#d8b049] text-white">
                32
              </span>
            </button>
            <button
              type="button"
              className="border-b-4 border-b-[#d0b87a] py-4 px-6 mr-4"
            >
              Todas{' '}
              <span className="w-full rounded-3xl px-4 py-[4px] bg-[#d8b049] text-white">
                32
              </span>
            </button>
          </div>
          <div className="grid grid-cols-9 gap-0">
            <div className="bg-[#808080] text-white p-2">
              <input type="checkbox" name="all" id="all" />
            </div>
            <div className="bg-[#808080] text-white p-2">
              <p className="inline">Tipo/Código</p>
              <i className="fa-solid fa-sort pl-2" />
            </div>
            <div className="bg-[#808080] text-white p-2">
              <p className="inline">Dirección</p>
            </div>
            <div className="bg-[#808080] text-white p-2">
              <p className="inline">Propietario</p>
            </div>
            <div className="bg-[#808080] text-white p-2">
              <p className="inline">Estados</p>
            </div>
            <div className="bg-[#808080] text-white p-2">
              <p className="inline">Ambientes</p>
              <i className="fa-solid fa-sort pl-2" />
            </div>
            <div className="bg-[#808080] text-white p-2">
              <p className="inline">Creación</p>
              <i className="fa-solid fa-sort pl-2" />
            </div>
            <div className="bg-[#808080] text-white p-2">
              <p className="inline">Alquiler</p>
            </div>
            <div className="bg-[#808080] text-white p-2">
              <p className="inline">Venta</p>
            </div>
            <div className="text-white px-2 py-4 flex">
              <input type="checkbox" name="all" id="all" className="inline" />
              <div className="w-14 self-center ml-4">
                <img src={roomDefault} alt="brand" />
              </div>
            </div>
            <div className="text-[#8c3b79] px-2 py-4">
              <div className="flex">
                <i className="fa-solid fa-building" />
                <p className="inline">Departamento</p>
              </div>
              <p className="text-black text-sm">Cód: 69</p>
            </div>
            <div className="text-[#7799b7] px-2 py-4">
              <p className="inline">Rodriguez 1132 3 A</p>

              <p className="text-black text-sm">Rosario</p>
            </div>
            <div className="text-[#92a9c8] px-2 py-4">
              <p className="inline">Arco, Teresa</p>
            </div>
            <div className=" py-4 place-self-center">
              <span className="bg-[#66aab5] p-2 rounded-md text-white">
                Alquilada
              </span>
            </div>
            <div className="px-2 py-4">
              <p className="text-base">1 Dorm.</p>
              <p className="break-keep text-sm">2 Amb. / 1 Baño</p>
            </div>
            <div className="px-2 py-4">
              <p className="text-base">15 febrero 2022</p>
              <p className="break-keep text-sm">Marketing. Usuario</p>
            </div>
            <div className="px-2 py-4">
              <p className="text-base">&#36; 28.000,00</p>
            </div>
            <div className="py-4 relative">
              <p className="text-xs bg-[#f6f6f8] border p-[2px] h-auto inline-block m-[4px]">
                No corresponde
              </p>

              <div className="inline-flex absolute right-0 p-2">
                <button type="button" className="bg-[#e0e1e5] p-1">
                  <i className="fa-solid fa-eye" />
                </button>
                <button type="button" className="bg-[#e0e1e5] p-1">
                  <i className="fa-solid fa-pen-to-square" />
                </button>
              </div>
            </div>
            <div className="text-white px-2 py-4 flex">
              <input type="checkbox" name="all" id="all" className="inline" />
              <div className="w-14 self-center ml-4">
                <img src={roomDefault} alt="brand" />
              </div>
            </div>
            <div className="text-[#8c3b79] px-2 py-4">
              <div className="flex">
                <i className="fa-solid fa-building" />
                <p className="inline">PH</p>
              </div>
              <p className="text-black text-sm">Cód: 68</p>
            </div>
            <div className="text-[#7799b7] px-2 py-4">
              <p className="inline">América 100</p>

              <p className="text-black text-sm">Victoria</p>
            </div>
            <div className="text-[#92a9c8] px-2 py-4">
              <p className="inline">Legui, Guillermo</p>
            </div>
            <div className=" py-4 place-self-center">
              <span className="bg-[#57a95c] p-2 rounded-md text-white">
                En venta
              </span>
            </div>
            <div className="px-2 py-4" />
            <div className="px-2 py-4">
              <p className="text-base">21 septiembre 2022</p>
              <p className="break-keep text-sm">Marketing. Usuario</p>
            </div>
            <div className="px-2 py-4">
              <p className="text-xs bg-[#f6f6f8] border p-[2px] h-auto inline-block m-[4px]">
                No corresponde
              </p>
            </div>
            <div className="py-4 relative">
              <div className="mr-16">
                <p className="text-base">&#36; 6.500.000,00</p>
                <p className="text-xs">Desde el 21 septiembre 2021</p>
              </div>
              <div className="inline-flex absolute right-0 p-2">
                <button type="button" className="bg-[#e0e1e5] p-1">
                  <i className="fa-solid fa-eye" />
                </button>
                <button type="button" className="bg-[#e0e1e5] p-1">
                  <i className="fa-solid fa-pen-to-square" />
                </button>
              </div>
            </div>
            <div className="text-white px-2 py-4 flex">
              <input type="checkbox" name="all" id="all" className="inline" />
              <div className="w-14 self-center ml-4">
                <img src={roomDefault} alt="brand" />
              </div>
            </div>
            <div className="text-[#8c3b79] px-2 py-4">
              <div className="flex">
                <i className="fa-solid fa-building" />
                <p className="inline">PH</p>
              </div>
              <p className="text-black text-sm">Cód: 68</p>
            </div>
            <div className="text-[#7799b7] px-2 py-4">
              <p className="inline">América 100</p>

              <p className="text-black text-sm">Victoria</p>
            </div>
            <div className="text-[#92a9c8] px-2 py-4">
              <p className="inline">Legui, Guillermo</p>
            </div>
            <div className=" py-4 place-self-center">
              <span className="bg-[#57a95c] p-2 rounded-md text-white">
                En venta
              </span>
            </div>
            <div className="px-2 py-4" />
            <div className="px-2 py-4">
              <p className="text-base">21 septiembre 2022</p>
              <p className="break-keep text-sm">Marketing. Usuario</p>
            </div>
            <div className="px-2 py-4">
              <p className="text-xs bg-[#f6f6f8] border p-[2px] h-auto inline-block m-[4px]">
                No corresponde
              </p>
            </div>
            <div className="py-4 relative">
              <div className="mr-16">
                <p className="text-base">&#36; 6.500.000,00</p>
                <p className="text-xs">Desde el 21 septiembre 2021</p>
              </div>
              <div className="inline-flex absolute right-0 p-2">
                <button type="button" className="bg-[#e0e1e5] p-1">
                  <i className="fa-solid fa-eye" />
                </button>
                <button type="button" className="bg-[#e0e1e5] p-1">
                  <i className="fa-solid fa-pen-to-square" />
                </button>
              </div>
            </div>{' '}
          </div>
        </div>
      </div>
    </div>
  );
}
