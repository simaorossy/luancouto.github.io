var bind = Function.prototype.bind,
    $append = bind.call(Element.prototype.appendChild, document.querySelector("output")),
    $new = bind.call(Document.prototype.createElement, document),
    $text = bind.call(Document.prototype.createTextNode, document),
    $rnd = function() { return (Math.random() * 30 + 0)|0; }, 
    $promise = function(thenFn) {
      var args, promise, wait, slice=Array.prototype.slice, isResolved = false;
      var promise = {
        wait: function(ms) {
          wait = ms;
          return promise;
        },
        then: function() {
          args = slice.call(arguments);
          return promise = $promise(thenFn);
        },
        resolve: function() {
          isResolved = true;
          if(args) {
            var next = Function.prototype.bind.apply(thenFn, [undefined].concat(args).concat([promise]));
            wait ? setTimeout(next, wait) : next();
          }

        }
      };
      return promise;
    };

var process = function(target, chars, promise) {
  var first = chars[0], rest = chars.slice(1);
  if(!first) {
    promise.resolve();
    return;
  }
  target.appendChild(first);
  setTimeout(process.bind(undefined, target, rest, promise), $rnd());
}

var type = function(text, promise) {
  var chars = text.split("").map($text);
  promise = promise || $promise(type);
  $append($new("br"));
  process($append($new("q")), chars, promise);
  return promise;
};

type("Loading...")
.wait(500)
.then(".")
.wait(500)
.then(".")
.then("Name: Luan Couto")
.wait(500)
.then("Occupation: Software Engineer")
.wait(500)
.then("Current location: Melbourne - Australia")
.then(" ")
.wait(500)
.then("I have been working as a Software Engineer (desktop, web and mobile) since 2009 in a variety of areas such as e-commerce, government solutions, automation and digital banking.")
.then(" ")
.then("I am an experienced Android Developer interested in software architecture, design patterns, best practices, OOP and automated tests. I value high quality code and always try to produce code that's easy to understand, maintain and extend.")
/*.then("I am passionate about software engineering, problem solving oriented, a strong self-learner, an early-adopter and always excited about new frameworks/languages/tools to solve problems.")*/

.then(" ")
.then("Android skills:")
.then("Android Studio, Java, Kotlin, Gradle, Firebase, Material Design, Espresso, Picasso, Butter Knife, OkHttp.")
.then(" ")

.then("Contact")

.then("_______________________________________________")
.then("LinkedIn: (linkedin.com/in/luancouto)")
.wait(500)

.then(" ")
.then("GitHub: (github.com/luancouto)")
.wait(500)

.then(" ")
.then("Email: (me[at]luancouto.com)")
.then("_______________________________________________")
.then(" ")
.then("Thank you!")

