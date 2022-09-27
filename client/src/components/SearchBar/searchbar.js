import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../../redux/actions/actions";
import './searchbar.css'

const Searchbar = ({ setMinPageNumber, setMaxPageNumber, setActualPage}) => {
    const dispatch = useDispatch();
    const [nameInput, setNameInput] = useState("")

    const handleChange = (e) => setNameInput(e.target.value);
    
    const handleSearch = (e) => {
        e.preventDefault();
        if (!nameInput) {
            alert("enter a valid name")
        } else {
            dispatch(getByName(nameInput.trim()))
            setActualPage(1)
            setMinPageNumber(0)
            setMaxPageNumber(5)
            setNameInput("")
        }
    }

    return (
        <div className="searchbar-container">
            <input className="searchbar-input" type="text" placeholder="Search Dog..." onChange={(e) => handleChange(e)}></input>
            <button className="searchbar-button" type="submit"  onClick={ (e) => handleSearch(e) }>Search</button>
        </div>
    )
}

export default Searchbar;