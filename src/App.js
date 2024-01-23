import HorizontalLinearStepper from "./components/HorizontalLinearStepper";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function App() {
  return (
    <Container>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} style={{padding:"30px 30px 30px 30px"}} >
        <HorizontalLinearStepper />
        </Box>
       </Container> 
  );
}

export default App;
