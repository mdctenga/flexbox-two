Meteor.startup(function() {
  // Check if notes exist. If not, create initial note.
  if(Notescollection.find().fetch().length === 0){
    NotesCollection.insert({
      title: "First Note",
      message: "Don't forget to delete me meow",
      show: true,
      added: Date.now()
    });
  }
});