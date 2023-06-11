$(document).ready(function () {

  $("main#spapp > section").height($(document).height() - 60);

  var app = $.spapp({
    pageNotFound: 'error_404'
  }); // initialize

  // define routes
  app.route({
    view: 'home',
    load: 'home.html'
  });

  app.route({
    view: 'expenses',
    load: 'expenses.html'
  });

  app.route({
    view: 'income',
    load: 'income.html'
  });

  app.route({
    view: 'categories',
    load: 'categories.html'
  });

  app.route({
    view: 'accounts',
    load: 'accounts.html'
  });

  // run app
  app.run();

});