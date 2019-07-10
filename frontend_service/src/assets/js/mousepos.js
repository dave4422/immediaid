
function position() {
  var x = evt.pageX - $('#element').offset().left;
  var y = evt.pageY - $('#element').offset().top;
  return [x,y];
}
