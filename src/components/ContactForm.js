import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    input: {
        marginRight: "60px",
      },
      message: {
        marginTop: "20px"
      },
      submitButtonWrapper: {
        display: "flex",
        justifyContent: "flex-end"
      },
      submitButton: {
        display: "flex",
        alignSelf: "flex-end",
        border: "1px solid grey",
        marginTop: "15px",
        backgroundColor: "white",
        color: "#3C3C3C",
        textTransform: "none",
        padding: "10px 30px",
        borderRadius: "0px",
        letterSpacing: "1.3px",
        fontSize: "1em",
    },

    }
    ))

const ContactForm = () => {
    const classes = useStyles();
    return ( 
        <form className={classes.form} noValidate autoComplete="off" >
                <div>
                  <div className={classes.inputs}>
                  <TextField
                    id="standard-textarea"
                    color="secondary"
                    label="Your name"
                    placeholder="Your name"
                    multiline
                    className={classes.input}
                    // value={name}
                    // onChange={handleChangeName}
                  />
                  
                  <TextField
                    id="standard-textarea"
                    color="secondary"
                    label="Your email"
                    placeholder="Your email"
                    multiline
                    // value={email}
                    // onChange={handleChangeEmail}
               
                  />
                  </div>
                  <div className={classes.message}>
                  <TextField
                    id="standard-multiline-static"
                    color="secondary"
                    label="Your message"
                    multiline
                    rows={5}
                    fullWidth
                    // value={message}
                    // onChange={handleChangeMessage}
                  />
                  </div>

                  <div className={classes.submitButtonWrapper}>
                  <Button className={classes.submitButton} type="submit" variant="contained">Send</Button>
                  </div>     

                </div>
          </form>
     );
}
 
export default ContactForm;