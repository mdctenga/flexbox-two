// Make it so client can find notes collection
Meteor.subscribe("notes", function(){
  return NotesCollection.find();
});