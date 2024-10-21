function addStudent() { 
    var rollno = document.sample.rollno.value;  
    var name = document.sample.name.value;      
    
    var tr = document.createElement('tr');      
    var td1 = tr.appendChild(document.createElement('td'));  
    var td2 = tr.appendChild(document.createElement('td'));  
    var td3 = tr.appendChild(document.createElement('td')); 
    var td4 = tr.appendChild(document.createElement('td')); 
    
    td1.innerHTML = rollno;
    td2.innerHTML = name;
    td3.innerHTML = '<input type="button" name="del" value="Delete" onclick="delStudent(this);" class="btn btn-danger">';
    td4.innerHTML = '<input type="button" name="up" value="Update" onclick="UpStud(this);" class="btn btn-primary">';
    document.getElementById("tbl").appendChild(tr);
}

function UpStud(stud) {
    var s = stud.parentNode.parentNode;  
    
    var existingRollNo = s.cells[0].innerText;
    var existingName = s.cells[1].innerText;

    var tr = document.createElement('tr');    

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));

    td1.innerHTML = '<input type="number" name="rollno1" value="' + existingRollNo + '">';
    td2.innerHTML = '<input type="text" name="name1" value="' + existingName + '">';
    td3.innerHTML = '<input type="button" name="del" value="Delete" onclick="delStudent(this);" class="btn btn-danger">';
    td4.innerHTML = '<input type="button" name="up" value="Update" onclick="addUpStud(this);" class="btn btn-primary">';

    document.getElementById("tbl").replaceChild(tr, s);
}

function addUpStud(stud) {

    var rollno = stud.parentNode.parentNode.cells[0].children[0].value; 
    var name = stud.parentNode.parentNode.cells[1].children[0].value; 
    var s = stud.parentNode.parentNode; 


    var tr = document.createElement('tr');    

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));


    td1.innerHTML = rollno; 
    td2.innerHTML = name; 
    td3.innerHTML = '<input type="button" name="del" value="Delete" onclick="delStudent(this);" class="btn btn-danger">';
    td4.innerHTML = '<input type="button" name="up" value="Update" onclick="UpStud(this);" class="btn btn-primary">';


    document.getElementById("tbl").replaceChild(tr, s);
}



function delStudent(stud) {
    var s = stud.parentNode.parentNode;
    s.parentNode.removeChild(s);
}
