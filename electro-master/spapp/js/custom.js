$(document).ready(function() {
  console.log("Hello from main index file flowers!")

  var app = $.spapp({
    defaultView  : "#",
    templateDir  : "./pages/",
    pageNotFound : "blank"
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
    load : "product.html"
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