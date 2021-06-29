import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import "../styles/fonts.scss";
import  {questions} from "./FAQList";
const useStyles = makeStyles((theme) => ({
    FAQSection: {
     
    },
    sectionTitle: {
        fontSize: "3em",
        margin: "60px 0",
        fontFamily: "Calligraffitti"
    },
    FAQTitle: {
       marginBottom: "10px",
    },
    liElement: {
        marginBottom: "40px",
        lineHeight: "1.6",
    }
    }
    ))

const FAQComponent = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.FAQSection} id="faq">
            <Container>
            <h3 className={classes.sectionTitle}>Frequently Asked Questions</h3>
            <ul className={classes.ulList} >{questions.map((question, index) => {
               return <li key={index}>
               <div className={classes.liElements}>
                   <div className={classes.liElement}>
                    <Typography variant="h5" className={classes.FAQTitle}>
                    <p >{question.title}</p>
                    </Typography>
                    <p className={classes.liElementDesc}>{question.description}</p>
                   </div>
                 
               </div>
               </li>
            })}</ul>
            </Container>



        </div>
     );
}
 
export default FAQComponent;