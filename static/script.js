function openNav() {
  document.getElementById("sidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}

$(document).ready(function(){
  $('form input').change(function () {
    $('form p').text(this.files.length + " file(s) selected");
  });
});