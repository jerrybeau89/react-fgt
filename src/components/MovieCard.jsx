import React, { useState } from "react";
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
import { Link } from "react-router-dom";

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

function MovieCard({ movieInfo }) {
  const [expanded, setExpanded] = useState([]);

  const handleExpandClick = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  if (!movieInfo) {
    return <div> Please Search for a Movie to Display</div>;
  }
  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {movieInfo.map((movie, index) => (
        <Card className="movieCard" key={index}>
          <CardHeader title={movie.title} />
          <CardMedia
            component="img"
            height="194"
            image={movie.poster}
            alt={movie.title}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              <span>Popularity: {movie.popularity}</span>
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <Link
              to={`/MoviePage?id=${index}`}
              state={{ movieInfo: movie }}
              size="small"
            >
              More
            </Link>
            <ExpandMore
              expand={expanded[index]}
              onClick={() => handleExpandClick(index)}
              aria-expanded={expanded[index]}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                <span>{movie.overview}</span>
                <br />
                <br />
                <span>Genres: {movie.genres.join(", ")}</span>
                <br />
                <br />
                <span>Released: {movie.release_date}</span>
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </Grid>
  );
}

export default MovieCard;
