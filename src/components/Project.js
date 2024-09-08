import React from "react";

import "./Project.css";

export default function Project(items) {
  return (
    <div className="container my-5 project-component" id="projects">
      <div className="row">
        <div className="col-12">
          <div className="fw-bold fs-4 text-center mb-3">
            {items.item.sections[2].title}
          </div>
        </div>
        {items.item.sections[2].items.map((perview) => (
          <div className="col d-flex justify-content-center" key={perview.id}>
            <div className="custom-card p-2">
              <h4> {perview.title}</h4>
              <p>
                using:
                <br /> {perview.intro}
              </p>
              <a href={perview.perview}>Preview</a>
              {perview.video && <a href={perview.video}>video</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
