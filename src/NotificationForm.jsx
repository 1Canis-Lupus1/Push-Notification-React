import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import SendIcon from '@material-ui/icons/Send';

//Adding CSS Styling
const classes = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    rightIcon: {
      marginLeft: theme.spacing(1),
    },
    root: {
      flexGrow: 1,
    },
    card: {
      maxWidth: 345,
    },
  }));

const NotificationForm = (props) => {
    return (
      //Displays the entire card
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>

            <Card className={classes.card}>
                  <div style={{border:"2px dotted black"}}>

                <CardActionArea>
                  {/* Image Dispaly */}
                    <CardMedia
                      component="img"
                      alt="custom image"
                      height="20%"
                      image="https://lever-client-logos.s3.amazonaws.com/793e0394-0d86-47ec-9c75-007f532519aa-1548811288450.png"
                      title="OneSignal"
                    />

                    {/* Input Teaxt Field */}
                    <CardContent style={{margin:"15px 250px",border:"3px solid grey"}}>
                        <Typography gutterBottom variant="h3" component="h1">Web Push with <strong><a href="https://onesignal.com/">One-Signal</a></strong></Typography>
                        <Typography variant="subtitle1" color="textSecondary" component="p" >
                            <TextField
                                required
                                id="title"
                                label="Enter a Title"
                                margin="normal"
                                onChange={props.titleChange}
                            />
                            <br />
                            <TextField
                                required
                                id="message"
                                label="Enter a Message"
                                margin="normal"
                                onChange={props.subtitleChange}
                            />
                        </Typography>
                    </CardContent>
          
                </CardActionArea>

                {/* Button  */}
                <CardActions>
                    <Button onClick={props.click} variant="contained" color="default" className={classes.button} style={{margin:"10px 250px",border:"5px solid cyan"}}>
                        Send Notification&nbsp;&nbsp;
                        <SendIcon className={classes.rightIcon} />
                </Button>
                </CardActions>
                </div>
            </Card>
        </div >
    );
}

export default NotificationForm;