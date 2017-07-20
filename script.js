/*
Function to create new terminology.
*/
function createTerm(i) {
  var new_term = document.createElement("div");
  new_term.className = "term";
  new_term.id = "t" + i; //'t' + int i
  new_term.innerHTML = '<input type="text" placeholder="Type a term here"/>';
  return new_term;
}

/*
Function to create new definitions.
*/
function createDefintion(i) {
  var new_def = document.createElement("div");
  new_def.classname = "def lock";
  new_def.id = "d" + i; //'d' + int i
  new_def.innerHTML =
    '<textarea rows="18" cols="50" placeholder="Type the definition here"></textarea>';
  return new_def;
}

/*
Function to create a new notecard,
containing a term and defintion
*/
function createNoteCard(i) {
  i = i - 1;
  var new_card = document.createElement("div");
  new_card.className = "notecard lock";
  new_card.id = "n" + i; //'n' + int i
  new_card.appendChild(createTerm(i));
  new_card.appendChild(createDefintion(i));
  new_card.insertAdjacentHTML(
    "beforeend",
    '<input type="submit" class="done" value="Done"/>'
  );
  return new_card;
}

function tooLargeCard() {
  var new_card = document.createElement("div");
  new_card.className = "notecard";
  new_card.insertAdjacentHTML(
    "beforeend",
    "<h1>413 ERROR: Request Too Large.</h1><h2>Reduce card number & try again.</h2>"
  );
  return new_card;
}

/*
Event listener for generating the amount of cards
that the user specifies with text field.
*/
$("#c-no").bind("keyup mouseup", function() {
  var n = $(this).val();
  $("div").remove(".notecard");
  if (n < 1001) {
    for (var i = 0; i < n; i++) {
      $("body").append(createNoteCard(i));
    }
  } else {
    $("body").append(tooLargeCard());
  }
});

/*
Allows agent to save cards after generation as a safety measure.
ToFigureOut: How to make this automatic
when the user starts editing...
*/
$(".lock").bind("click", function() {
  $("#c-no").prop("readonly", true);
  $("#c-no").css("background-color", "#bdc3c7");
  $(".save").css("visibility", "collapse");
  $(".edit").css("visibility", "visible");
});

/*

*/
$("#edit-c-no").click(function() {
  $("#c-no").prop("readonly", false);
  $("#c-no").css("background-color", "white");
  $(".edit").css("visibility", "collapse");
  $(".save").css("visibility", "visible");
  alert(
    "Careful! Entering a new value will delete your old cards. Click Save now to prevent losing your work."
  );
});

/* @ToDo:
=============================
Figure out a way to allow user to
set terms and defintions on these
cards.
BRAINSTORM:
Three options of content inside
div containers:
/1/ Front (term only) click -> 2
/2/ Back (def only) click -> 1
/3/ Split (term + def) (no change)
============================= */

/* @ToDo:
=============================
Function to take in a serialized
dictionary data structure,
and convert all elements into
notecards.
Could be data from Python, or Java.
============================= */

/* ============================
EXTERNAL RESOURCE DOCS :
[1] Dynamically creating div containers
// https://stackoverflow.com/questions/14094697/javascript-how-to-create-new-div-dynamically-change-it-move-it-modify-it-in
[2] Pulling input values from HTML input tag
//
https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript
=============================== */
