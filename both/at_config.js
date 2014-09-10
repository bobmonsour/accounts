// Overall configuration parameters

AccountsTemplates.configure({
    // Behaviour
    confirmPassword: true,
    enablePasswordChange: false,
    forbidClientAccountCreation: false,
    overrideLoginErrors: false,
    sendVerificationEmail: false,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: false,
    showLabels: false,
    showPlaceholders: true,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: false,
    positiveValidation: false,
    positiveFeedback: false

    // Privacy Policy and Terms of Use
    // privacyUrl: 'privacy',
    // termsUrl: 'terms-of-use',

    // Redirects
    // homeRoutePath: '/',
    // redirectTimeout: 4000,
});

// Configure ROUTES

AccountsTemplates.configureRoute('signIn', {
  name: 'signin',
  path: '/signin',
  template: 'signin',
  redirect: '/signedin'
});

AccountsTemplates.configureRoute('signUp', {
  name: 'signUp',
  path: '/signup',
  template: 'signup',
  redirect: '/new_account'
});


// Configure FIELDS

AccountsTemplates.addField({
    _id: "username",
    type: "text",
    required: true,
    placeholder: "Name"
});

AccountsTemplates.removeField('email');
AccountsTemplates.addField({
    _id: 'email',
    type: 'email',
    required: true,
    placeholder: "Email Address",
    re: /.+@(.+){2,}\.(.+){2,}/,
    errStr: 'Invalid email'
});

AccountsTemplates.addField({
    _id: 'username_and_email',
    type: 'text',
    placeholder: "Name or Email",
    required: true,
    errStr: "bad login"
});

AccountsTemplates.removeField('password');
AccountsTemplates.addField({
    _id: 'password',
    type: 'password',
    required: true,
    minLength: 6,
    placeholder: {
      signUp: 'Password (at least 6 characters)',
      signIn: 'Password'
    }
});

AccountsTemplates.addField({
    _id: 'password_again',
    type: 'password',
    required: true,
    minLength: 6,
    placeholder: {
      signUp: 'Confirm Password'
    }
});

// Init the system

AccountsTemplates.init();
