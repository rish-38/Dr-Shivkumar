function showResult() {
  var name = document.getElementById('name').value;
  var message = document.querySelector('.error');
  if (typeof test() == 'string') {
    message.innerHTML = "<span style='color:red;'>" + test() + "</span>";
  }
  else {
    redirect();
  }
}

function test() {

  let risk = 0;
  var age = document.getElementById('age').value;
  var exercise = document.getElementById('exercise').value;
  var stress = document.getElementById('stressed').value;
  var smoke = document.getElementById('smoke').value;
  var diabete = document.getElementById('diabetes').value;
  var bloodpressure = document.getElementById('bloodpressure').value;

  // if age and bloodpressure value is not entered
  if (!age.trim() || !bloodpressure.trim()) {
    return "Please fill out all fields.";
  }

  // conversting age into integor
  // var age = parseInt(age);
  // if statement for age 
  if (isNaN(age)) {
    return 'Age must be entered as numeric value.'
  }
  else {
    if (age > 45) {
      risk += 2;
    }
    else if (age > 30 && age < 45) {
      risk += 1;
    }
    else if (age <= 26) {
      return "It's uncommon in under 20s, but consult a doctor if symptoms appear.";

    }
  }


  // if statement for exercise
  if (exercise === 'No') {
    risk += 2;
  }
  else if (exercise === 'sometimes') {
    risk += 1;
  }

  // if statement for stress 
  if (stress === 'Yes') {
    risk += 2;
  }
  if (smoke === "Yes") {
    risk += 2;
  }
  else if (smoke === "sometimes") {
    risk += 1;
  }

  if (diabete === "Yes") {
    risk += 2;
  }
  if (isNaN(bloodpressure)) {
    return 'blood pressure must be entered as numeric value.'
  }
  else {
    if (bloodpressure > 240) {
      risk += 2;
    }
    else if (bloodpressure > 200 && bloodpressure < 240) {
      risk += 1;
    }
    else if (bloodpressure <= 120) {
      return "Systolic pressure under 120 is unusual. Recheck your value.";

    }
  }
  return risk;
}

function redirect(risk) {
  risk = test();

  if (risk >= 7) {
     window.location.href = 'high-risk.html';
  } else if (risk > 4) {
    window.location.href = 'low-risk.html';
  } else if(risk<=4){
    window.location.href = 'no-risk.html';
  }
}