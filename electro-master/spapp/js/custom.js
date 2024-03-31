$(document).ready(function() {
  console.log("Hello from main index file bitch!")

  $("main#spapp > section").height($(document).height() - 60);


  var app = $.spapp({
    defaultView  : "",
    templateDir  : "./pages/",
    pageNotFound : "#blank"
  });
  
  app.route({
    view : "home",
    load : "home.html",
    onCreate: function() {  },
    onReady: function() {  }
  });

  app.route({
    view : "blank",
    load : "blank.html",
    onCreate: function() {  },
    onReady: function() {  }
  });

  app.route({
    view : "checkout",
    load : "checkout.html",
    onCreate: function() {  },
    onReady: function() {  }
  });

  app.route({
    view : "product",
    load : "product.html",
    onCreate: function() {  },
    onReady: function() {  }
  });

  app.route({
    view : "store",
    load : "store.html",
    onCreate: function() {  },
    onReady: function() {  }
  });

  app.route({
    view : "login",
    load : "login.html",
    onCreate: function() {  },
    onReady: function() {  }
  });


  app.run();
});