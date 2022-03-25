import React from "react";

const Datatable = () => {
  return (
    <div>
      <p>
        Here it is a list of available users from various departments as below:
      </p>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Users Data</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mahesh Singh</td>
                  <td>Accountant</td>
                  <td>Rajkot</td>
                  <td>34</td>
                  <td>2011/04/25</td>
                  <td>&#8377;34,000</td>
                </tr>
                <tr>
                  <td>Raghu Chauhan</td>
                  <td>Sales Representative</td>
                  <td>Junagarh</td>
                  <td>28</td>
                  <td>2011/07/25</td>
                  <td>&#8377;24,000</td>
                </tr>
                <tr>
                  <td>Asha Gohel</td>
                  <td>Junior Advisor</td>
                  <td>Jamnagar</td>
                  <td>24</td>
                  <td>2009/01/12</td>
                  <td>&#8377;14,000</td>
                </tr>
                <tr>
                  <td>Kevin Makwana</td>
                  <td>Senior Officer</td>
                  <td>Morbi</td>
                  <td>38</td>
                  <td>2012/03/29</td>
                  <td>&#8377;32,000</td>
                </tr>
                <tr>
                  <td>Riddhi Solanki</td>
                  <td>HR</td>
                  <td>Rajkot</td>
                  <td>26</td>
                  <td>2008/11/28</td>
                  <td>&#8377;21,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datatable;
