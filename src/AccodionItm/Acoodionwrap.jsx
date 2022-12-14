import Accordion from '@mui/material/Accordion';

function Acoodionwrap({ children }) {
    const AccordionStyle = {
        '&:before': {
            backgroundColor: 'transparent !important',
        },
      };
    return (
        <div>
            <Accordion  square disableGutters sx={{ boxShadow: 0, AccordionStyle }}>
                {children}
            </Accordion>
        </div>
    );
}

export default Acoodionwrap;