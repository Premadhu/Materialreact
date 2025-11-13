import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import profileimg from './assets/profile.png'
function Profilelayout(){
    return(
        <>
        {/* <h2>hellowoeld</h2> */}
        <Box>
            <Grid sx={{height:'350px',width:'500px' , p:'0'}}>
                <Grid container size={{xs:3}} sx={{py:'8px', px:'10px' , bgcolor:'#67696bff' , borderTopRightRadius:'5px',  borderTopLeftRadius:'5px'}} display="flex" justifyContent={'space-between'} alignItems={'center'}>
                    <Grid>
                        <ArrowBackIcon sx={{fontSize:'15px', color:"#ffffff" , fontWeight:'bold' , pr:'10px'}} />
                        <ArrowForwardIcon sx={{fontSize:'15px', color:"#ffffff" , fontWeight:'bold' , pr:'10px'}} />
                        <ReplayIcon sx={{fontSize:'15px', color:"#ffffff" , fontWeight:'bold' , pr:'10px'}} />
                    </Grid>
                    <Grid>
                        <CloseIcon sx={{fontSize:'15px', color:"#ffffff" , fontWeight:'bold'}} />
                    </Grid>
                </Grid>
                <Grid sx={{border:'2px solid black',p:'10px', bgcolor:'#bcf5ffff'}}>
                    <Grid sx={{border:'2px solid black' ,p:'10px', bgcolor:'#35d5f1ff'}}>
                        <Grid container sx={{border:'2px solid black' ,p:'10px', bgcolor:'#e9f1f3ff'}}>
                            <Grid>
                                <img src={profileimg} alt="" sx={{borderRadius: "100px"}}/>
                                <h3>Profile Name</h3>
                            </Grid>
                            <Grid></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
        </>
    );
}
export default Profilelayout