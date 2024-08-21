import React from "react";
import '../App.css';

const ListItem = ({ icon, artist, name, data, selectedSong, setSelectedSong }) => {
    const isSelected = selectedSong.name === name;

    return (
        <div className={`list_item ${isSelected ? 'selected' : ''}`} onClick={() => setSelectedSong(data)}>
            <img src={`https://cms.samespace.com/assets/${icon}`} alt={name} width={48} height={48} />
            <div>
                <div className="song_name">{name}</div>
                <div className="artist_name">{artist}</div>
            </div>
        </div>
    );
};

export default ListItem;
