import React from 'react';

const Container = (props) => {
  const { title = null } = props;

  return (
    <div className="hero m-4">
      <div className="hero-body">
        <div className="row">
          <div className="col-12 uppercase">
            <h2 className="title">{title}</h2>
          </div>
          <div className="col-12">
            <div className="content">
              <div className="row">{props.children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
