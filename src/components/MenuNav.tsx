import logo from '../assets/appProject3.png';
import { Link, Route, HashRouter as Router, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Demo } from './Demo';
import { Support } from './Support';
import { FooterPage } from './FooterPage';


export const MenuNav: React.FC = () => {
    return (
        <>
                <Router>
                    <header className='shadow mb-2 px-4 '>
                        <div className='relative mx-auto flex max-w-screen-lg flex-col py-4 sm:flex-row sm:items-center sm:justify-between'>
                            <a className='text-2xl flex items-center font-black' href="/">
                                <span className='mr-2 text-3xl text-blue-600'><img className='w-1/2 rounded-full' src={logo} alt="" /></span>
                            </a>
                            <label className="absolute right-0 mt-1 cursor-pointer text-xl sm:hidden" htmlFor="navbar-open">
                                <span className="sr-only">Toggle Navigation</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="currentColor" d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" /></svg>
                            </label>
                            <input className="peer hidden" type="checkbox" id="navbar-open" />
                            <nav aria-label="Header Navigation" className="peer-checked:block hidden pl-2 py-6 sm:block sm:py-0 ">
                                <ul className='flex flex-col gap-y-4 sm:flex-row sm:gap-x-8 '>
                                    <li className="border-b-2  hover:border-b-indigo-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-xl"><Link className='no-underline text-orange-500' to='/'>Home</Link></li>
                                    <li className="border-b-2  hover:border-b-indigo-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-xl"><Link className='no-underline text-orange-500' to='/home/demo'>Demo</Link></li>
                                    <li className="border-b-2  hover:border-b-indigo-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-xl"><Link className='no-underline text-orange-500' to="/home/support">Support</Link></li>
                                </ul>

                            </nav>

                        </div>
                    </header>
                    <Routes>
                        <Route path='/' element={<Home></Home>}></Route>
                        <Route path='/home/demo' element={<Demo></Demo>}></Route>
                        <Route path='/home/support' element={<Support></Support>}></Route>
                    </Routes>

                    <FooterPage></FooterPage>
                </Router>

        
        </>
    )
}


