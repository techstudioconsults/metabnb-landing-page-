import React from 'react';

const GeneralLoading = ({ text }) => {
  return (
    <div>
      <div>
        <div>
          <img width="150" height="150" alt="logo" src={``} />
        </div>
        {text && (
          <div>
            <h1>{text}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneralLoading;
