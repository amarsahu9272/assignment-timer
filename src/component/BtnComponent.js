import React from "react";

function BtnComponent(props) {
  return (
    <div>
      {props.status === 0 ? (
        <button className="swBtn swBtnG" onClick={props.start}>
          start
        </button>
      ) : (
        ""
      )}

      {props.status === 1 ? (
        <div>
          <button className="swBtn swBtnG" onClick={props.stop}>
            stop
          </button>
          <button className="swBtn swBtnG" onClick={props.reset}>
            reset
          </button>
        </div>
      ) : (
        ""
      )}

      {props.status === 2 ? (
        <div>
          <button className="swBtn swBtnG" onClick={props.resume}>
            Resume
          </button>
          <button className="swBtn swBtnG" onClick={props.reset}>
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default BtnComponent;
