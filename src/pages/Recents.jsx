import React from 'react'

function Recents({searchList, getMovie}) {
    
  return (
    <div >
      {searchList.map((item, index) => (
        <button
          key={index}
          onClick={() => getMovie(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default Recents