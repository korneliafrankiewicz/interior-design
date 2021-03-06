import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 400,
      [theme.breakpoints.up('lg')] : {
        maxWidth: 345
    },
  },
  
  btn: {
    borderRadius: "0",
  }
  
    
  }));

const Project = ({component, image, alt, title, name, description}) => {
    const classes = useStyles();
    return ( 
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.cardImg}
          component={component}
          image={image}
          alt={alt}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {name}
            </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

         <Button className={classes.btn} variant="outlined" color="primary">More...</Button>
     

      </CardActions>
    </Card>
     );
}
 
export default Project;