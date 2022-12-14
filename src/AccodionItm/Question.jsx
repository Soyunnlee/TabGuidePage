import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Question({ children }) {
    return (
        <div>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>      
                {children}
            </AccordionSummary>          
        </div>
    );
}

export default Question;

