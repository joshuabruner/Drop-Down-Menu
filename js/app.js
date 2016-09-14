//Problem: Looks stupid in smaller browser widths and devices
//Solution: hide the text lengths and swap with appropriate navigations

//create a select and append to #menu
var $select = $("<select></select>");
$("#menu").append($select);

//cycle over menu links
$("#menu a").each(function () {
  var $anchor = $(this);
    //create an option
  var $option = $("<option></option>");
  
  //deal with selected options depending on current page
  if ($anchor.parent().hasClass("selected")) {
    $option.prop("selected", true);
  }
  
 
  //option's value is the href
  $option.val($anchor.attr("href"));
    //options text is the text of link
  $option.text($anchor.text());
    //append option to select
  $select.append($option);
});

//bind change listener to the selected
$select.change(function () {
  //go to select's location
  window.location = $select.val();
});


