Router.map(function() {
  this.route('home', {
    path: '/',
    template: 'home'
  });

  this.route('signedin', {
    path: '/signedin',
    template: 'signedin',
  });

  this.route('new_account', {
    path: '/new_account',
    template: 'new_account',
  });

  this.route('errorpage', {
    path: '/errorpage',
    template: 'errorpage',
  });
});