import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red, green } from "@mui/material/colors";


const theme = createTheme({
  palette: {
    primary: red,
    secondary: green,
  },
});
function SearchMovie() {

  

  return (
    <div className="search">
      {/* <Stack spacing={2} sx={{ width: 300 }}> */}
      {/* <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => ( */}
      <TextField
      className="searchBar"
        // {...params}
        label="Movie Search..."
        autoFocus={true}
        margin="normal"
        type="search"
        theme={theme}
        // sx={{backgroundColor: "white", borderRadius: "15px"}}
        // InputProps={{
        //   ...params.InputProps,
        //   type: "search",
        // }}
      />
      {/* )}
      /> */}
      {/* </Stack> */}
    </div>
  );
}

export default SearchMovie;
