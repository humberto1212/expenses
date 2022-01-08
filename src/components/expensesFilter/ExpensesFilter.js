import React from 'react'
//Import select MUI
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//Import CSS
import "./expenceFilter.css"

function ExpensesFilter(props) {
    //States
    const [year, setYear] = React.useState('');
    //Handle event Dates
    const handleChange = (event) => {
      setYear(event.target.value);
      props.onSelectedDate(event.target.value)
    };

    

    return (
        <div className="expenseFilter-flex">
            <p>Filter by Year</p>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">Year</InputLabel>
                <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={year}
                label="year"
                onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={2020}>2020</MenuItem>
                    <MenuItem value={2021}>2021</MenuItem>
                    <MenuItem value={2022}>2022</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default ExpensesFilter