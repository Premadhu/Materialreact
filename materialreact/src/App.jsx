import './App.css'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Sample from './Sample'
import Profilelayout from './Profilelayout';
function App() {

  return (
    <>
      {/* <h1>Hello world!</h1> */}
      {/* <Stack spacing={2} direction="row">
      <Button>Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button href="Sample.jsx" variant='contained' color='secondary'>Link</Button>
      </Stack>
      <IconButton><DeleteIcon /></IconButton> */}
      {/* <Sample/> */}
      <Profilelayout/>
    </>
  )
}

export default App
