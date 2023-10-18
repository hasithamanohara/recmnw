import { IconButton } from "@mui/material";
import React from "react";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CategoryOutlined from "@mui/icons-material/CategoryOutlined";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-3/10 p-5 bg-green-200 flex items-center justify-between z-[100] drop-shadow-header_shadow">
      <div>
        <IconButton>
          <HomeTwoToneIcon
            sx={{
              color: "purple",
            }}
          />
        </IconButton>
        <IconButton>
          <CategoryOutlined sx={{ color: "purple" }} />
        </IconButton>
        <IconButton>
          <Person2OutlinedIcon sx={{ color: "purple" }} />
        </IconButton>
      </div>
    </footer>
  );
};

export default Footer;
