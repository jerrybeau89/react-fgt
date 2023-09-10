import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";
import { useLocation } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function MoviePage({ movieInfo }) {
  const location = useLocation();
  const movieData = location.state?.movieInfo;
  const [expanded, setExpanded] = React.useState(false);

 
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (!movieData) {
    return <div> Please Search for a Movie to Display</div>;
  }
  return (

    <Grid
      container
      justifyContent="center"
      columnGap={0}
      sx={{padding: "1vh", margin: "0vh"}}
      
    >
      <Card className="moviePage">
        <CardHeader title={movieData.title} />
        <CardMedia
          component="img"
          height="194"
          image={movieData.poster}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {/* {movie.rating} */}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Card className="moviePage">
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This will be some data for the movie
            {/* {movie.rating} */}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default MoviePage;
