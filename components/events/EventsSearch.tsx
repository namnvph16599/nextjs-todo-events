import { useRef } from "react";
import ButtonExplore from "../ui/Button"
import classes from './events-search.module.css';
const EventsSearch = (props: any) => {
    const yearInputRef = useRef<any>(null);
    const monthInputRef = useRef<any>(null);


    const handleSubmit = (event: any) => {
        event.preventDefault();
        const yearValue = yearInputRef.current.value;
        const mothnsValue = monthInputRef.current.value;
        props.onSearch(yearValue, mothnsValue)
    }

    return (
        <form action="" className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year">Year</label>
                    <select id="year" ref={yearInputRef}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="moths">Moths</label>
                    <select id="moths" ref={monthInputRef}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                </div>
            </div>
            <ButtonExplore>Find</ButtonExplore>
        </form>
    )
}

export default EventsSearch