angular.module("TestforFun").run(["$templateCache", function($templateCache) {$templateCache.put("app/exampleRoute/exampleRoute.html","<div class=\"container\">\n  <div class=\"alert alert-success\" role=\"alert\">Automatically Generated for: exampleRoute.</div>\n</div>\n");
$templateCache.put("app/main/footer.html","<footer class=\"footer\">\n    <p style=\"text-align: center;\" class=\"container\">Built with\n    <a href=\"https://github.com/kosz/generator-angular-webapp\">\n	晋城市文昌西街1669号  邮编：048000</a> |\n    <a href=\"https://github.com/kosz/generator-angular-webapp/issues?state=open\">Issues</a> |||\n    <a href=\"http://localhost:4000/\" title=\"Make sure \'gulp ngdocs-serve\' is running\">ngDocs</a>\n    </p>\n</footer>\n");
$templateCache.put("app/main/header.html","<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"/\">TestforFun</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li ng-class=\"{ \'active\': isActive(\'/\') }\"><a href=\"/\">Home<span class=\"sr-only\">(current)</span></a></li>\n        <li ng-class=\"{ \'active\': isActive(\'/exampleRoute\') }\"><a href=\"/exampleRoute\">Example</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"\">Login</a></li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n");
$templateCache.put("app/main/main.html","<div class=\"container\">\n  <div class=\"jumbotron\">\n    <h2>晋城银行 欢迎您!</h2>\n    <div class=\"\">\n   <!--  <img width=\"600\" height=\"250\" alt=\"\" src=\"../../../.tmp/img/show_fck_image.png\"> \n\n -->\n    <video controls autoplay>\n      <source src=\"movie.mp4\" type=\"video/mp4\">\n      <source src=\"movie.ogg\" type=\"video/ogg\">\n    </video> \n    </div>\n  </div>\n</div>\n");}]);