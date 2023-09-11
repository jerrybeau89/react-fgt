import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Grid } from "@mui/material";
import { useLocation } from "react-router-dom";


function MoviePage({ movieInfo }) {
  const location = useLocation();
  const movieData = location.state?.movieInfo;

  if (!movieData) {
    return <div> Please Search for a Movie to Display</div>;
  }
  return (
    <Grid
      container
      justifyContent="center"
      columnGap={0}
      sx={{ padding: "1vh", margin: "0vh" }}
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
            <span>{movieData.overview}</span>
            <br />
            <br />
            <span>Genres: {movieData.genres.join(", ")}</span>
            <br />
            <br />
            <span>Popularity: {movieData.popularity}</span>
            <br />
            <br />
            <span>Released: {movieData.release_date}</span>
            {/* {movie.rating} */}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default MoviePage;
