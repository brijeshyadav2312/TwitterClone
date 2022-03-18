function myFunction() {
    var y = document.getElementById("chat_box2")
    var x = document.getElementById("chat_b");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "block"
    }
  }

  function myFunction1() {
    var y = document.getElementById("chat_b");
    var x = document.getElementById("chat_box2");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }