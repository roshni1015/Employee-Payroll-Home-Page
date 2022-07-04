let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');

});

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ?
                        JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

const createInnerHtml=()=>{
    if (empPayrollList.length == 0) return;
    const headerHtml="<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                      "<th>Salary</th><th>Start Date</th><th>Action</th>"
    let innerHtml= `${headerHtml}`;
    for (const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
        <tr>
          <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td>
          <td>${empPayrollData._name}</td>
          <td>${empPayrollData._gender}</td>
          <td><div class='dept-label'>${empPayrollData._department}</div></td>
          <td>${empPayrollData._salary}</td>
          <td>${empPayrollData._startDate}</td>
          <td>
            <img  name ="${empPayrollData._id}" onclick="remove(this)" 
                alt="delete" src="../assets/Delete.png, width ="20%"">
            <img  name ="${empPayrollData._id}" onclick="update(this)"
                alt="edit" src="../assets/edit.png, width="20%">
          </td>
        </tr>
      `;
    }
      document.querySelector('#table-display').innerHTML=innerHtml;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'> ${dept}</div>`
    }
    return deptHtml;
}







