import AccordionDetails from '@mui/material/AccordionDetails';


function Answer({children}) {
    return (
        <div>
            <AccordionDetails sx={{  pl: 4 ,bgcolor: 'rgb(246, 247, 249)'}}>
                {children}
            </AccordionDetails>
        </div>
    );
}
// py: 3.5, 

export default Answer;