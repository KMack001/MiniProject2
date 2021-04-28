

function calculations(){

  var lastTotal = document.getElementById("finalTotal").value;
  if (parseInt(lastTotal) > 0) {
    document.getElementById('value1').value = lastTotal;
  }

 $("#value1").hide();
 $("#value2").hide();
 $("#finalTotal").show(); //show
  var value1 = document.getElementById('value1').value;
  var value2 = document.getElementById('value2').value;
  var operand = document.getElementById('operand').value;

  var total1 = eval(parseInt(value1) + operand + parseInt(value2));
  document.getElementById(operand).style.backgroundColor = '';

  document.getElementById("finalTotal").value = total1;

  document.getElementById('value1').value = '';
  document.getElementById('value2').value = '';
  document.getElementById('operand').value = '';
  document.getElementById('currentElement').value = 'value1';
}


function operand(operand){
  document.getElementById('-').style.backgroundColor = '';
  document.getElementById('+').style.backgroundColor = '';
  document.getElementById('*').style.backgroundColor = '';
  document.getElementById('/').style.backgroundColor = '';
 $("#value1").hide();
 $("#finalTotal").hide();
 $("#value2").show(); // show


 document.getElementById("operand").value = operand;
 document.getElementById(operand).style.backgroundColor = 'green';
 document.getElementById('currentElement').value = 'value2';
}


function clearFunction(){

  currentElement = document.getElementById('currentElement').value;
  if (currentElement == 'value1') {
    document.getElementById('finalTotal').value = '';
    document.getElementById('value2').value = '';
    document.getElementById('value1').value = '';
    return;
  }
 $("#value1").hide();
 $("#value2").hide();
 $("#finalTotal").hide();
  document.getElementById('finalTotal').value = '';
  document.getElementById(currentElement).value = '';
   $("#" + currentElement + "").show(); //show
}

function cancelFunction(){
  document.getElementById('-').style.backgroundColor = '';
  document.getElementById('+').style.backgroundColor = '';
  document.getElementById('*').style.backgroundColor = '';
  document.getElementById('/').style.backgroundColor = '';
 $("#value1").show(); //show
 $("#value2").hide();
 $("#finalTotal").hide();
  var operand = document.getElementById('operand').value;
    document.getElementById('currentElement').value = 'value1';
    document.getElementById('value2').value = '';
    document.getElementById('value1').value = '';
    document.getElementById('operand').value = '';
    document.getElementById("finalTotal").value = '';
}

function numberClick(input1, value1){
  $("#value1").hide();
  $("#value2").hide();
  $("#finalTotal").hide();
    var currentElement = document.getElementById('currentElement').value;
    var oldValue = document.getElementById(currentElement).value;
    var newValue = oldValue + '' + value1;

    var lastTotal = document.getElementById("finalTotal").value;
    if (parseInt(lastTotal) > 0) {
      document.getElementById('value1').value = lastTotal;
    }
    if (currentElement != 'value2') {
      document.getElementById("value2").value = '';
    }

    document.getElementById("finalTotal").value = '';
    document.getElementById(currentElement).value = newValue;
     $("#" + currentElement + "").show(); //show
}
