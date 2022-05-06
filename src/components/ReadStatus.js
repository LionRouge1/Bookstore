import React from 'react';

const ReadStatus = () => (
  <div className="status_container">
    <div className="ptg_container">
      <div className="cercle" />
      <div className="cleInfo">
        <h2>0%</h2>
        <p>Completed</p>
      </div>
    </div>
    <div className="chapter">
      <p>CURRENT CHAPTER</p>
      <h2>Introduction</h2>
      <button type="button">UPDATE PROGRESS</button>
    </div>
  </div>
);

export default ReadStatus;
