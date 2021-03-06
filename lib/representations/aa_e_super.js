// Generated by CoffeeScript 1.11.1

/*
 *
 * Representation Interface class.
 *
 * Written by Bryce Summers on 10.23.2017
 *
 * Specifies the capabilities of all visual representations.
 */

(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BSS.Representation = (function(superClass) {
    extend(Representation, superClass);

    function Representation() {}

    return Representation;

  })(THREE.Object3D);

}).call(this);
