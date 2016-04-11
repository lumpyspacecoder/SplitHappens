


import { Accounts } from 'meteor/accounts-base';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';



if (Meteor.isClient) {
  Template.dashboard.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
  });
  Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var emailVar = event.target.registerEmail.value;
        var passwordVar = event.target.registerPassword.value;
        Accounts.createUser({
            email: emailVar,
            password: passwordVar
        });
        console.log("form submitted")
        // Router.go("dashboard");
        // 'submit form': function(event){
        //     event.preventDefault();
        //     var emailVar = event.target.loginEmail.value;
        //     var passwordVar = event.target.loginPassword.value;
        //     Meteor.loginWithPassword(emailVar, passwordVar);
        // }
    }
  });
  Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var emailVar = event.target.loginEmail.value;
        var passwordVar = event.target.loginPassword.value;
        Meteor.loginWithPassword(emailVar, passwordVar)

        console.log("form submitted");
        // Router.go("dashboard");
        // 'submit form': function(event){
        //     event.preventDefault();
        //     var emailVar = event.target.loginEmail.value;
        //     var passwordVar = event.target.loginPassword.value;
        //     Meteor.loginWithPassword(emailVar, passwordVar);
        // }
    }
  });
  Template.buttons.onRendered(function () {
      $(document).foundation('dropdown', 'reflow');
  });



  Template.buttons.onDestroyed(function () {
      $(document).foundation('dropdown', 'off');
  });


  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY',
  });
  Template.orbit.onRendered(function () {
      $(document).foundation('rbit-caption', 'reflow');
  });




}
