import React from 'react';
import "../styles/fonts.scss";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import Project from './Project';
import ImageInterior1 from '../images/interior-design-1.jpg';
import ImageInterior2 from '../images/interior-design-2.jpg';
import ImageInterior3 from '../images/interior-design-3.jpg';
import ImageInterior4 from '../images/interior-design-4.jpg';
import ImageInterior5 from '../images/interior-design-5.jpg';
import ImageInterior6 from '../images/interior-design-6.jpg';

const useStyles = makeStyles((theme) => ({
    sectionTitle: {
        fontSize: "3em",
        margin: "60px 0"
    },
    root: {
        marginBottom: "20px",
        display: 'flex',
        justifyContent: "space-between",
        flexWrap: 'wrap',
      },
      paperCard: {
      marginBottom: "60px",
      marginRight: "0px",
      marginLeft: "0px",
      borderRadius: "0px",
      }
    }
    ))

const Projects = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.projectsSection}>
            <h2 className={classes.sectionTitle}>Our projects</h2>
            <Container >
            
        <div className={classes.root} id="projects">
            
      
            <Paper elevation={3} className={classes.paperCard} square>
          <Project
          component="img"
          image={ImageInterior1}
          alt="Interior-design-1"
          title="Interior design 1"
          name="Interior design 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
          />
      </Paper>

      <Paper elevation={3} className={classes.paperCard}>
          <Project
          component="img"
          image={ImageInterior2}
          alt="Interior-design-2"
          title="Interior design 2"
          name="Interior design 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
          />
      </Paper>

      <Paper elevation={3} className={classes.paperCard}>
          <Project
          component="img"
          image={ImageInterior3}
          alt="Interior-design-3"
          title="Interior design 3"
          name="Interior design 3"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
          />
      </Paper>

      <Paper elevation={3} className={classes.paperCard}>
          <Project
          component="img"
          image={ImageInterior4}
          alt="Interior-design-4"
          title="Interior design 4"
          name="Interior design 4"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
          />
      </Paper>
           
      <Paper elevation={3} className={classes.paperCard}>
          <Project
          component="img"
          image={ImageInterior5}
          alt="Interior-design-5"
          title="Interior design 5"
          name="Interior design 5"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
          />
      </Paper>

      <Paper elevation={3} className={classes.paperCard}>
          <Project
          component="img"
          image={ImageInterior6}
          alt="Interior-design-6"
          title="Interior design 6"
          name="Interior design 6"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
          />
      </Paper>

        </div>
        </Container>
        </div>
        
     );
}
 
export default Projects;