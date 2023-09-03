import * as React from "react";
import { Box } from "@mui/material";
import { BottomNavigation } from "@mui/material";
import { BottomNavigationAction } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FeaturedVideoIcon from "@mui/icons-material/FeaturedVideo";;

function Footer() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className="footer">
      <BottomNavigation
        className="footerBottomNav"
        sx={{backgroundColor: "lightCoral"}}
        showLabels
        value={value}
        onChange={(event, newValue) => handleChange(event, newValue)}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Featured" icon={<FeaturedVideoIcon />} />
      </BottomNavigation>
    </Box>
  );
}

export default Footer;
