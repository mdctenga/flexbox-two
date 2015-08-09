// Make it so client can find notes collection
Meteor.publish("notes", function(){
  return NotesCollection.find();
});