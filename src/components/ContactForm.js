import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField} from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
    form: {
      margin: "10px",
      [theme.breakpoints.up('sm')] : {
        margin: "0"
     },
    },
    inputs: {
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.up('sm')] : {
        flexDirection: "row",
     },
    },
    inputName: {
        marginRight: "0",
        [theme.breakpoints.up('sm')] : {
          marginRight: "60px",
       },
      },
      message: {
        marginTop: "20px",
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

    alerts: {
      marginTop: "10px",
    }

    }
    ))

const ContactForm = () => {
    const classes = useStyles();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [unValidName,setUnValidName]=useState(false);
    const [unValidEmail,setUnValidEmail]=useState(false);
    const [unValidMess,setUnValidMess]=useState(false);
    const [success,setSuccess]=useState(false);

    const handleChangeName = (e) => {
      setName(e.target.value)
    };
    const handleChangeEmail = (e) => {
      setEmail(e.target.value)
    };
    const handleChangeMessage = (e) => {
      setMessage(e.target.value)
    };

    
    useEffect(() => {
      setName("");
      setEmail("");
      setMessage("")
    }, [success]);

    const onSubmit = (event) => {
      
      event.preventDefault()
      setUnValidName(false);
      setUnValidEmail(false);
      setUnValidMess(false);

      let inquiry = {
        name : "",
        email : "",
        message: "",
      };


      function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase()) && email.length > 0;
  
    }

   
    function validateName(name) {
      return (!(name.indexOf(' ') >= 0)) && name.length > 0;
  }

      function validateMessage(message) {
        return message.length >= 10;
      }

if(validateName(name)){
  inquiry.name=name
} else {
  setUnValidName(true)
  setSuccess(false)
} 

if(validateEmail(email)){
  inquiry.email=email
} else {
  setUnValidEmail(true)
  setSuccess(false)
}
if(validateMessage(message)){
  inquiry.message=message
} else {
  setUnValidMess(true)
  setSuccess(false)
}

if(validateEmail(email) && validateName(name) && validateMessage(message)){
  setSuccess(true);
}


    }

    return ( 
        <form className={classes.form} noValidate autoComplete="off" onSubmit={onSubmit}>
                <div>
                  <div className={classes.inputs}>
                  <TextField
                    id="standard-textarea"
                    color="secondary"
                    label="Your name"
                    placeholder="Your name"
                    multiline
                    className={classes.inputName}
                    value={name}
                    onChange={handleChangeName}
                  />
                  
                  <TextField
                    id="standard-textarea"
                    color="secondary"
                    label="Your email"
                    placeholder="Your email"
                    multiline
                    value={email}
                    onChange={handleChangeEmail}
               
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
                    value={message}
                    onChange={handleChangeMessage}
                  />
                  </div>

                  <div className={classes.submitButtonWrapper}>
                  <Button className={classes.submitButton} type="submit" variant="contained">Send</Button>
                  </div> 

              <div className={classes.alerts}>
                      {unValidName && <Alert className={classes.alertMessage} severity="error">Name should be one word</Alert>}
                      {unValidEmail && <Alert className={classes.alertMessage} severity="error">Email is incorrect</Alert>}
                      {unValidMess && <Alert className={classes.alertMessage} severity="error">Message is to short</Alert>}                    
                      { success && <Alert className={classes.alertMessage} severity="success">Your message is sent!</Alert>}
        
                </div>    

                </div>
          </form>
     );
}
 
export default ContactForm;