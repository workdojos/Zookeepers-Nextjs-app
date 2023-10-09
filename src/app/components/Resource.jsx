import React from 'react';


function Resource({ resource }) {
  const resourceId = resource.id;
  return (
    <div className="col-md-4">
      <div className="card homeCards mb-4">
        <div className="card-header d-flex flex-column position-relative justify-content-center">
          <h4 className="fw-bold">{employee.fields.Name}</h4>
          {employee.fields.Title}
        </div>
        <div className="card-body">
          <div className="d-flex flex-column justify-content-center">
            <span>
              <i className="bi bi-phone-fill me-2"></i>
              {employee.fields.Phone}
            </span>
            <span>
              <i className="bi bi-envelope-fill me-2"></i>
              {employee.fields.Email}
            </span>
          </div>
          <p className="card-text">Started: {employee.fields.Started}</p>
        </div>
      </div>
    </div>
  );
}

export default Resource;