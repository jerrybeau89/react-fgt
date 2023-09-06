import * as React from "react";
import { Box } from "@mui/material";
import { BottomNavigation } from "@mui/material";
import { BottomNavigationAction } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FeaturedVideoIcon from "@mui/icons-material/FeaturedVideo";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

function Footer() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
  }, []);

  return (
    <Box className="footer" sx={{ pb: 7 }}>
      <Paper sx={{ position: "fixed", bottom: 0 }} elevation={3} ref={ref}>
        <BottomNavigation
          className="footerBottomNav"
          sx={{ backgroundColor: "lightCoral" }}
          showLabels
          value={value}
          onChange={(event, newValue) => handleChange(event, newValue)}
        >
          <BottomNavigationAction
            label="Recents"
            component={Link}
            to="/Recents"
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction
            label="Featured"
            icon={<FeaturedVideoIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

export default Footer;
