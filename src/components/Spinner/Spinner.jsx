import React from "react";

export default function Spinner(props) {
  let spinner = <span className="sr-only">Loading...</span>;

  if (props.show) {
    spinner = (
      <div className="spinner-border text-info" role="status" id="spinner">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  return spinner;
}
