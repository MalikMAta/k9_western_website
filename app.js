function _(id) {
  return document.getElementById(id);
}

function submitForm() {
  _("myBtn").disabled = true;
  _("status").innerHTML = "Please wait ...";
  FormData.append("name", _("name").value);
  FormData.append("email", _("email").value);
  FormData.append("message", _("message").value);
  FormData.append("phone", _("phone").value);

  // create ajax call
  var ajax = new XMLHttpRequest();
  ajax.open("POST", "action.php");
  ajax.onreadystatechange = function() {
    if (ajax.readyState == 4 && ajax.status == 200) {
      (_("my_form").innerHTML = "<h2>Thanks" + _("name")),
        value + "Your message has been sent </h2>";
    } else {
      _("status").innerHTML = ajax.responseText;
      _("status").disabled = false;
    }
  };
  ajax.send(FormData);
}
