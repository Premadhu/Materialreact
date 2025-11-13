import Box from '@mui/material/Box'
// import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid'
function Sample(){
    return(
        <>
            {/* <h2>Sample output</h2> */}
            {/* <Container sx={{bgcolor:'skyblue'}} maxWidth='sm'>
                <Box sx={{border: '2px solid black', py:3 , borderRadius : 2, bgcolor: 'brown', width:'30vh'}}>
                    <h2 sx={{bgcolor:'white'}}>This is box.</h2> 
                </Box>
            </Container> */}
           {/* <Box sx={{ flexGrow: 20 }}> */}
      <Grid container direction="row" minHeight={100}>
        <Grid size={{xs: 6 ,sm: 6,md:3}} sx={{bgcolor:'red'}} display="flex" justifyContent={'space-between'} alignItems={'center'}>
          <Item>size=8</Item>
        </Grid>
        <Grid size={{xs: 6,sm: 6,md: 3 }} sx={{bgcolor:'green'}} display="flex" justifyContent={'space-between'} alignItems={'center'}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={{xs: 6,sm: 6,md: 3 }} sx={{bgcolor:'red'}} display="flex" justifyContent={'space-between'} alignItems={'center'}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={{xs: 6,sm: 6 ,md: 3}} sx={{bgcolor:'green'}} display="flex" justifyContent={'space-between'} alignItems={'center'}>
          <Item>size=8</Item>
        </Grid>
      </Grid>
    {/* </Box> */}
        </>


    );
}
export default Sample