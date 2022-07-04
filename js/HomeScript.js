window.addEventListener('DOMContentLoaded',(event)=>{
    createInnerHtmlUC4();
});

const createInnerHtmlUC4=()=>{
    const headerHtml="<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                      "<th>Salary</th><th>Start Date</th><th>Action</th>"
    const innerHtml= `${headerHtml}
    
    <tr>
        <td><img class="profile" alt="" 
            src="../assets/image1.jpg"
        </td>
    <td>Roshni Adatrao</td>
    <td>Female</td>
    <td><div class='dept-label'>HR</div>
        <div class='dept-label'>Finance</div></td>
    <td>3000000</td>
    <td>1 April 2022</td>
    <td>
      <img name ="1" onclick="remove(this)" alt="delete" src="../assets/Delete.png, width ="20%"">
      <img name ="1" alt="edit" onclick="update(this)"
           src="../assets/edit.png, width="20%">
    </td>
    </tr>
    `;
    document.querySelector('#table-display').innerHTML=innerHtml;
}

window.addEventListener('DOMContentLoaded',(event)=>{
    createInnerHtmlUC5();
});

const createInnerHtmlUC5=()=>{
    const headerHtml="<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                      "<th>Salary</th><th>Start Date</th><th>Action</th>"
    let innerHtml= `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
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

const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Roshni Adatrao',
            _gender: 'Female',
            _department: [
                'HR',
                'Finance'
            ],
            _salary:'25000',
            _startDate:'1 April 2022',
            _note:'',
            _id: new Date().getTime(),
            _profilePic:'../assets/image1.jpg'
        },
        {
            _name: 'Mahesh Kulkarni',
            _gender: 'Male',
            _department: [
                'Sales'
            ],
            _salary:'40000',
            _startDate:'25 May 2021',
            _note:'',
            _id: new Date().getTime(),
            _profilePic:'../assets/image2.jpg'
        }
    ];
    return empPayrollListLocal;
}


