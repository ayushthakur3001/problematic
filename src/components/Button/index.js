import { Button } from "@mui/material"
const Btn = ({ handleClick }) => {
    return (
        <Button onClick={handleClick} className='timer-btn' variant='contained' color='primary'  > Next </Button>
    )
}

export default Btn
