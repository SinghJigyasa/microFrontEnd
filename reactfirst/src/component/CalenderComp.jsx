import DateRangePicker from "react-bootstrap-daterangepicker";
import 'bootstrap-daterangepicker/daterangepicker.css';
const DatePickerExample=()=>{
    let date= new Date();
    let pre=new Date(date.getTime());

    return(
        <div>
            <h1>Date Picker Example</h1>
            <DateRangePicker
                 dateFormat="DD-MM-YYYY"
                initialSettings={date-1}>
               <input type="text" className="form-control" />  
            </DateRangePicker>
        
        </div>
    )
}
export default DatePickerExample;   