var student = {
  name :'',
  type:'student'
};

document.addEventListener("DOMContentLoader", contentLoader);

function contentLoader(event){
  alert('contentLoader');
  document.getElementById('name').addEventListener("keyup", keyUp);
}

function keyUp(event){
  alert('keyup');
  calculateNumericOutput();
}

function calculateNumericOutput(){
  student.name = document.getElementById('name').value;
  var totalNameValue = 0;
  for(var i=0; i<student.name.length; i++){
    totalNameValue+=student.name.charCodeAt(i);
  }
  var output = "Total numeric value of person's name is: " + totalNameValue;
  document.getElementById('output').innerText = output;
}
