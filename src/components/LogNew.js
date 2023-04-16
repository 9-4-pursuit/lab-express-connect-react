// import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

import { useNavigate } from "react-router-dom"

export default function LogNew() {
    const navigate = useNavigate();
    return (
        <div className="LogNew">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    value={bookmark.name}
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
                    value={bookmark.url}
                    placeholder="http://"
                    onChange={handleTextChange}
                />
                <label htmlFor="category">Category:</label>
                <input
                    id="category"
                    type="text"
                    name="category"
                    value={bookmark.category}
                    placeholder="educational, inspirational, ..."
                    onChange={handleTextChange}
                />
                <label htmlFor="isFavorite">Favorite:</label>
                <input
                    id="isFavorite"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={bookmark.isFavorite}
                />
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={bookmark.description}
                    onChange={handleTextChange}
                    placeholder="Describe why you bookmarked this site"
                />
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}