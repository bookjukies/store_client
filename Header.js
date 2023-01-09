import {CartIcon} from "./Icons.js"


const Header =() =>{

    return (
        <header className="w-full bg-sky-500 align-middle flex justify-between px-10 mb-2">
            <h1 className="inline text-2xl">FOH RSA</h1>
            <button className="place-self-end"><CartIcon /></button>
        </header>
    );
  }
  
  export default Header;