Meteor.startup(function () {
    // code to run on server at startup
});

Meteor.methods({
   getUserBySciper: function(sciper){
       var ldapContext = Meteor.npmRequire('epfl-ldap');
       var getSyncUserBySciper = Meteor.wrapAsync(ldapContext.users.getUserBySciper);
       var result = getSyncUserBySciper(sciper);
       //insert result in db
       return result;
   }
});