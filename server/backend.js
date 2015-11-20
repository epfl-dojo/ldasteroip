Meteor.startup(function () {
    // code to run on server at startup

    var ldapContext = Meteor.npmRequire('epfl-ldap')();
     var getSyncUserBySciper = Meteor.wrapAsync(ldapContext.users.getUserBySciper);
     var result = getSyncUserBySciper('133134');
    //var result = {};

    console.log(result);

    UserList.insert(result);
});

Meteor.methods({
   getUserBySciper: function(sciper){
       var ldapContext = Meteor.npmRequire('epfl-ldap')();
       var getSyncUserBySciper = Meteor.wrapAsync(ldapContext.users.getUserBySciper);
       var result = getSyncUserBySciper(sciper);
       //insert result in db
       return result;
   },
    getCurrentTime: function (stuff) {
        console.log(stuff);
        console.log('on server, getCurrentTime called');
        return new Date();
    }
});

Meteor.publish("UserList", function () {


        return UserList.find();

});