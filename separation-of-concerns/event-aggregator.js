var _ = require('underscore');
var Backbone = require('backbone');

var app = {
  bus: _.extend({}. Backbone.Events)
}

// Log invites
app.bus.on('invite', function handle(inviteData) {
  console.log(inviteData);
});

// Trigger invite event
app.bus.trigger('invite', {
  user: 'userId',
  friend: 'friend.email@example.com'
});