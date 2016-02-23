// Create a prototype
var switchProto = {
  isOn: function isOn() {
    return this.state;
  },

  toggle: function toggle() {
    this.state = !this.state;
    return this;
  },

  meta {
    name: 'Light switch'
  },

  state: false
},
// Set prototype as delegate for the newly created objects.
switch1 = Object.create(switchProto), 
switch2 = Object.create(switchProto);

test('Object.create', function() {
  // Note that changing the property on one object 
  ok(switch1.toggle.isOn(),
    '.toggle() works'
  );

  ok(!switch2.isOn(),
    'instance safe.'
  );

  // Note that changing an existing object (or array) property on the prototype
  // will alter the prototype!
  switch2.meta.name = 'Breaker switch';
  equal(switch1.meta.name, 'Breaker switch',
    'Object and array mutations are shared.'
  );

  // But... Replacing an object (or array) property on the prototype will not
  // alter the prototype
  switch2.meta = {name: 'Power switch'}
  equal(switch1.meta.name, 'Breaker switch',
    'Property replacement is instance-specific.'
  );

});