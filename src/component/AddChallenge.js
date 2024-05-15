import axios from "axios";
import { useState } from "react";

function AddChallenge({onChallengeAdded}){
    const [name, setName] = useState("");
    const [month, setMonth] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/challenges',{name,month, description})
            setName("");
            setMonth("");
            setDescription("");
            onChallengeAdded();
        } catch (error) {
            console.error("Error adding challenges: ", error);
        }
    };

    return(
        <div className="card my-5">
            <div className="card-header">Add New Challenge</div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" 
                        className="form-control"
                        placeholder="e.g., Name"
                        id="name" value={name} onChange={(e) => setName(e.target.value)} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="month" className="form-label">Number</label>
                        <input type="text" 
                        className="form-control"
                        placeholder="e.g., Number"
                        id="month" value={month} onChange={(e) => setMonth(e.target.value)} required/>
                    </div>
                    <div className="mb-3">
                        <label 
                        className="form-label"
                        htmlFor="description">Address</label>
                        <textarea 
                        className="form-control"
                        placeholder="Loacl Address"
                        id="description" value={description} onChange={(e) => setDescription(e.target.value)} required/>
                    </div>
                    <button 
                    className="btn btn-primary"
                    type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default AddChallenge;