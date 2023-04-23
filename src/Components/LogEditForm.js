import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function LogEditForm() {
  let { index } = useParams();

  const [Log, setLog] = useState({
    name: "",
    url: "",
    category: "",
    description: "",
    isFavorite: false,
  });

  const handleTextChange = (event) => {
    setLog({ ...Log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...Log, isFavorite: !Log.isFavorite });
  };

  useEffect(() => {}, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={Log.name}
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
          value={Log.url}
          placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          name="category"
          value={Log.category}
          placeholder="educational, inspirational, ..."
          onChange={handleTextChange}
        />
        <label htmlFor="isFavorite">Favorite:</label>
        <input
          id="isFavorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={Log.isFavorite}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={Log.description}
          onChange={handleTextChange}
          placeholder="Describe why you Loged this site"
        />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/Logs/${index}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default LogEditForm;
