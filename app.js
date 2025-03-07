import React from 'react';

const Volunteer = () => {
  React.useEffect(() => {
    console.log('Page loaded');
  }, []);

  return (
    <div>
      <h1>Hello, Volunteer!</h1>
    </div>
  );
};

export default Volunteer;
