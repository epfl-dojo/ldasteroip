Meteor.subscribe("UserList");
Session.setDefault('counter', 0);

Template.hello.helpers({
  counter: function () {
    return Session.get('counter');
  },
  users: function () {
    return UserList.find();
  }
});

Template.hello.events({
  'click button': function () {
    // increment the counter when button is clicked
    Session.set('counter', Session.get('counter') + 1);
    var sciper = document.getElementById("sciper").value;

    Meteor.call('getUserBySciper', sciper, function(err, response) {
      if(err) {
        alert('ERROR: ' + err);
      } else {
        // do nothing
      }
    });
  }
});

Template.container.helpers({
  users: function () {
    return UserList.find();
  }
});

Template.container.events({
  'click button': function () {
    var sciper = document.getElementById("sciper").value;

    Meteor.call('getUserBySciper', sciper, function(err, response) {
      if(err) {
        alert('ERROR: ' + err);
      } else {
        // do nothing
      }
    });
  }
});