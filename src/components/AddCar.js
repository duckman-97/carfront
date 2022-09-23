import React, {useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/AccordionActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


function AddCar(props){
    const [open,setOpen] =useState(false);
    const [car,setCar] = useState({
        brand:'',
        model:'',
        color:'',
        year:'',
        price:'',
    }
    );

    const handleClickOpen = ()=>{
        setOpen(true);

    }

    const handleClose = ()=>{
        setOpen(false);
    };

    const handleSave = () => {
        props.addCar(car);
        handleClose();
        }

    const handleChange = (event)=>{
        setCar({...car ,[event.target.name]: event.target.value});
    
    }


    return(
        <div>
            <button onClick={handleClickOpen}>New Car</button>
            <Dialog open={open} onClose = {handleClose}>
            <DialogTitle>New Car</DialogTitle>
            <DialogContent>
                <input placeholder = "Brand" name = "brand"
                value = {car.brand} onChange = {handleChange}/><br/>

                <input placeholder = "Model" name = "model"
                value = {car.model} onChange = {handleChange}/><br/>

                <input placeholder = "Color" name = "color"
                value = {car.car} onChange = {handleChange}/><br/>

                <input placeholder = "year" name = "year"
                value = {car.year} onChange = {handleChange}/><br/>

                <input placeholder = "Price" name = "price"
                value = {car.price} onChange = {handleChange}/><br/>


                </DialogContent>
                <DialogActions>
                    <button onClick={handleClose}>Cancel</button>
                    <button onClick={handleSave}>save</button>
                  
                </DialogActions>

            </Dialog>

        </div>
    )
}

export default AddCar;