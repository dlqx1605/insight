import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import Overview from './Overview';
import Detailed from './Detailed';
import Recommendations from './Recommendations';


function Analytics() {
  return (
    <Stack 
    direction="column"
    spacing={2}>
        <Overview/>
        <Detailed/>
        <Recommendations/>
        <Box/>
    </Stack>
  );
}

export default Analytics;