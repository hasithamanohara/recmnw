import React from "react";
import ListIcon from "@mui/icons-material/List";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";

const Header = () => {
  return (
    <div>
      <header className="fixed top-0 left-0 w-full h-3/10 p-5 bg-green-200 flex items-center justify-between z-[100] drop-shadow-header_shadow">
        {/* Header left */}
        <div className="flex space-x-2 items-center">
          <IconButton>
            <ListIcon
              sx={{
                color: "purple",
              }}
            />
          </IconButton>
          <h1 className="text-2xl font-semibold">Ceylara</h1>

          <div className="items-center pl-1 bg-slate-50 outline-none rounded-lg flex">
            <div>
              <input
                type="text"
                placeholder="Search"
                className="font-semibold outline-none rounded-lg bg-slate-50 w-64 h-6"
              />
            </div>
            <div>
              <IconButton>
                <SearchIcon className="text-gray-400 cursor-pointer" />
              </IconButton>
            </div>
          </div>
        </div>
        {/* Header left */}
        <IconButton>
          <ShoppingCartIcon
            sx={{
              color: "purple",
            }}
          />
        </IconButton>
      </header>
    </div>
  );
};

export default Header;
