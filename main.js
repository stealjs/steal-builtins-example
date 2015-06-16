var EventEmitter = require("events").EventEmitter;

var ee = new EventEmitter();

ee.on("foo", function(e){
  console.log("Got:", e);
});

ee.emit("foo", "bar");

