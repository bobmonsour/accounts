Template.home.events({
  'click #signin': function () {
    Router.go('signin');
  },
  'click #logout': function () {
    Meteor.logout();
    console
  }

});

Template.home.helpers({
  nameOfCurrentUser: function () {
    return Meteor.user().emails[0].address;
  }

});