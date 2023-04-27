import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function LogNewForm() {
  const navigate = useNavigate
  const [log, setLog] = useState({
    name: "",
    url: "",
    category: "",
    isFavorite: false,
    description: "",
  });

  const handleTextChange = (event) => {
    setLog
({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog
({ ...log, isFavorite: !log.isFavorite });
  };

  const addLog = (newLog) => {
    axios
    .post(`${API}/logs`, newLog)
    .then(() => {
      navigate('/logs')
    }).catch((e) => console.error("catch", e))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addLog()
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={log.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Website"
          required
        />
        <label htmlFor="url">URL:</label>
        <input
          id="url"
          type="text"
          pattern="http[s]*://.+"
          required
          value={log.url}
          placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          name="category"
          value={log.category}
          placeholder="educational, inspirational, ..."
          onChange={handleTextChange}
        />
        <label htmlFor="isFavorite">Favorite:</label>
        <input
          id="isFavorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.isFavorite}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={log.description}
          onChange={handleTextChange}
          placeholder="Describe why you logged this site"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default LogNewForm;
