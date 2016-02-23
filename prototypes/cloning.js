var _ = require('underscore'),
switchProto = {
  isOn: function isOn() {
    return this.state;
  },

  toggle: function toggle() {
    this.state = !this.state;
    return this;
  },

  meta: {
    name: 'Light switch'
  },

  state: false
},
switch1 = _.extend({}, switchProto),
switch2 = _.extend({}, switchProto);

test('Prototype clones.', function() {
  // Each object has its own copy of the prototype properties and can edit it
  // without affecting the other object.
  switch1.isOn.isShared = true;
  ok(!switch2.isShared, 'Methods are copied for each instance, not shared.');

  // Toggling one object does not affect the other object
  ok(switch1.toggle.isOn(), '.toggle() works.');
  ok(!switch2.isOn(), 'instance safe.');

  // Changing an existing object on the prototype will alter the prototype!
  switch2.meta.name = 'Breaker switch';
  equal(switch1.meta.name, 'Breaker switch',
    'Object and array mutations are shared.'
  );
  
  // Replacing a property from the prototype will not alter the prototype.
  switch2.meta = {name: 'Power switch'};
  equal(switch1.meta.name, 'Breaker switch',
    'Property replacement is instance-specific.'
  );

});
