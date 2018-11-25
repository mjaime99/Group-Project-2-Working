//**  RESTAURANT SELECT **//
//____________________________________________________________//

//MEXICAN
$('#mexican').on('click', function () {
  var mexicanSelect = "<h4 style='font-weight:bold;'>Fiesta Mexicana</h4>"
  var query = "<h5>Would you like to add an appetizer? (30% SeatYourself Discount!)</h5>"
  var radioButtonMex = "<div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='option1' checked><label class='form-check-label' for='exampleRadios1'>Tortilla Chips w/ Salsa</label></div>"
  var noThankYou = "<div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='option1'><label class='form-check-label' for='exampleRadios1'>No, thank you.</label></div>"
  $(mexicanSelect).appendTo('#mexican-appetizer');
  $(query).appendTo('#mexican-appetizer');
  $(radioButtonMex).appendTo('#mexican-appetizer');
  $(noThankYou).appendTo('#mexican-appetizer');
});

//ITALIAN
$('#italian').on('click', function () {
  var italianSelect = "<h4 style='font-weight:bold;'>Ristorante Italiano</h4>"
  var query = "<h5>Would you like to add an appetizer? (30% SeatYourself Discount!)</h5>"
  var radioButtonItl = "<div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='option1' checked><label class='form-check-label' for='exampleRadios1'>Bruschetta</label></div>"
  var noThankYou = "<div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='option1'><label class='form-check-label' for='exampleRadios1'>No, thank you.</label></div>"
  $(italianSelect).appendTo('#italian-appetizer');
  $(query).appendTo('#italian-appetizer');
  $(radioButtonItl).appendTo('#italian-appetizer');
  $(noThankYou).appendTo('#italian-appetizer');
});

//AMERICAN
$('#american').on('click', function () {
  var americanSelect = "<h4 style='font-weight:bold;'>Burgers 'N' Bases</h4>"
  var query = "<h5>Would you like to add an appetizer? (30% SeatYourself Discount!)</h5>"
  var radioButtonAmr = "<div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='option1' checked><label class='form-check-label' for='exampleRadios1'>Caesar Salad Spears</label></div>"
  var noThankYou = "<div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='option1'><label class='form-check-label' for='exampleRadios1'>No, thank you.</label></div>"
  $(americanSelect).appendTo('#american-appetizer');
  $(query).appendTo('#american-appetizer');
  $(radioButtonAmr).appendTo('#american-appetizer');
  $(noThankYou).appendTo('#american-appetizer');
});

//CHINESE
$('#chinese').on('click', function () {
  var chineseSelect = "<h4 style='font-weight:bold;'>China Happy Food</h4>"
  var query = "<h5>Would you like to add an appetizer? (30% SeatYourself Discount!)</h5>"
  var radioButtonChi = "<div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='option1' checked><label class='form-check-label' for='exampleRadios1'>Pan-Fried Vegetable Dumplings</label></div>"
  var noThankYou = "<div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='option1'><label class='form-check-label' for='exampleRadios1'>No, thank you.</label></div>"
  $(chineseSelect).appendTo('#chinese-appetizer');
  $(query).appendTo('#chinese-appetizer');
  $(radioButtonChi).appendTo('#chinese-appetizer');
  $(noThankYou).appendTo('#chinese-appetizer');
});

//BREWERY
$('#brewery').on('click', function () {
  var brewerySelect = "<h4 style='font-weight:bold;'>Brew-U</h4>"
  var query = "<h5>Would you like to add an appetizer? (30% SeatYourself Discount!)</h5>"
  var radioButtonBrew = "<div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='option1' checked><label class='form-check-label' for='exampleRadios1'>Brown Ale Caramel Corn with Pretzels & Pecans</label></div>"
  var noThankYou = "<div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='option1'><label class='form-check-label' for='exampleRadios1'>No, thank you.</label></div>"
  $(brewerySelect).appendTo('#brewery-appetizer');
  $(query).appendTo('#brewery-appetizer');
  $(radioButtonBrew).appendTo('#brewery-appetizer');
  $(noThankYou).appendTo('#brewery-appetizer');
});

//**  TIME SELECT **//
//____________________________________________________________//

//5:30 PM
$('#time-530').on('click', function () {
  var timeSelect = "<h4 style='font-weight:bold;'>5:30 PM</h4>"
  $(timeSelect).appendTo('#530');
});

//6:00 PM
$('#time-600').on('click', function () {
  var timeSelect = "<h4 style='font-weight:bold;'>6:00 PM</h4>"
  $(timeSelect).appendTo('#600');
});

//6:30 PM
$('#time-630').on('click', function () {
  var timeSelect = "<h4 style='font-weight:bold;'>6:30 PM</h4>"
  $(timeSelect).appendTo('#630');
});

//7:00 PM
$('#time-700').on('click', function () {
  var timeSelect = "<h4 style='font-weight:bold;'>7:00 PM</h4>"
  $(timeSelect).appendTo('#700');
});

//7:30 PM
$('#time-730').on('click', function () {
  var timeSelect = "<h4 style='font-weight:bold;'>7:30 PM</h4>"
  $(timeSelect).appendTo('#730');
});

//8:00 PM
$('#time-800').on('click', function () {
  var timeSelect = "<h4 style='font-weight:bold;'>8:00 PM</h4>"
  $(timeSelect).appendTo('#800');
});


//**  PARTY SIZE SELECT **//
//____________________________________________________________//

//TWO
$('#party-two').on('click', function () {
  var partySizeSelect = "<h4 style='font-weight:bold;'>Two</h4>"
  $(partySizeSelect).appendTo('#two-top');
});

//FOUR
$('#party-four').on('click', function () {
  var partySizeSelect = "<h4 style='font-weight:bold;'>Four</h4>"
  $(partySizeSelect).appendTo('#four-top');
});

//SIX
$('#party-six').on('click', function () {
  var partySizeSelect = "<h4 style='font-weight:bold;'>Six</h4>"
  $(partySizeSelect).appendTo('#six-top');
});

//EIGHT
$('#party-eight').on('click', function () {
  var partySizeSelect = "<h4 style='font-weight:bold;'>Eight</h4>"
  $(partySizeSelect).appendTo('#eight-top');
});

//** CHECK AVAILABILITY CLICK **//
//____________________________________________________________//

$('#check-avail').on('click', function () {
  window.location.replace('../public/confirm.html');
});