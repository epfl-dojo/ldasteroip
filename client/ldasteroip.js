Meteor.subscribe("UserList");
Session.setDefault('counter', 0);

Template.hello.helpers({
  counter: function () {
    return Session.get('counter');
  },
  users: function () {
    return Session.get('userList');
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
        var newUserList = Session.get('userList');
        if (newUserList === undefined) {
          newUserList = [];
        }
        newUserList.push(response);
        Session.set('userList', newUserList);
        document.getElementById("response").innerHTML = JSON.stringify(response);
      }
    });
  }
});

