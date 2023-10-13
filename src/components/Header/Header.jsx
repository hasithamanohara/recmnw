import React from "react";
import menu from "../../asset/images/menu.svg";
import search from "../../asset/images/search.svg";
import shopping_cart from "../../asset/images/shopping_cart.svg";

const Header = () => {
  return (
    <div>
      <header className="fixed top-0 left-0 w-full h-3/10 p-5 bg-green-200 flex items-center justify-between z-[100] drop-shadow-header_shadow">
        {/* Header left */}
        <div className="flex space-x-2 items-center">
          <img
            src={menu}
            alt="Menu"
            className="w-8 h-8 object-contain cursor-pointer"
          />
          <h1 className="text-2xl font-semibold">Ceylara</h1>

          <div className="items-center pl-1 bg-slate-50 outline-none rounded-lg flex">
            <div>
            <input
              type="text"
              placeholder="Search"
              className="font-semibold outline-none rounded-lg bg-slate-100 w-96 h-8"
            />
            </div>
            <div> 
              <img
                src={search}
                alt="Search"
                className="w-8 h-8 object-contain cursor-pointer pr-2"
              />
            </div>
          </div>

        </div>
        {/* Header left */}
        <img
          src={shopping_cart}
          alt="cart"
          className="w-6 h-6 object-contain cursor-pointer"
        />
      </header>
    </div>
  );
};

export default Header;
