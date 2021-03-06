// Generated by CoffeeScript 1.11.1

/*
Written by Bryce Summers on Mar.21.2018
Has the camera follow an agent.
 */

(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  EX.Keyboard_ControlPlayer = (function(superClass) {
    extend(Keyboard_ControlPlayer, superClass);

    function Keyboard_ControlPlayer(scene, camera) {
      this.scene = scene;
      this.camera = camera;
      this.up_pressed = false;
      this.left_pressed = false;
      this.right_pressed = false;
      this.down_pressed = false;
    }

    Keyboard_ControlPlayer.prototype.key_down = function(event) {
      var agent, agent_model;
      console.log(event.key);
      if (!this.up_pressed && event.key === "ArrowUp") {
        agent = this.scene.getFocusAgent();
        agent_model = agent.getModel();
        agent_model.setKey("psychology", "up");
      }
      if (!this.left_pressed && event.key === "ArrowLeft") {
        agent = this.scene.getFocusAgent();
        agent_model = agent.getModel();
        agent_model.setKey("psychology", "left");
      }
      if (!this.right_pressed && event.key === "ArrowRight") {
        agent = this.scene.getFocusAgent();
        agent_model = agent.getModel();
        agent_model.setKey("psychology", "right");
      }
      if (!this.down_pressed && event.key === "ArrowDown") {
        agent = this.scene.getFocusAgent();
        agent_model = agent.getModel();
        return agent_model.setKey("psychology", "down");
      }
    };

    Keyboard_ControlPlayer.prototype.key_up = function(event) {
      var up_pressed;
      if (event.key === "ArrowUp") {
        return up_pressed = false;
      }
    };

    Keyboard_ControlPlayer.prototype.time = function(dt) {};

    Keyboard_ControlPlayer.prototype.isIdle = function() {
      return true;
    };

    Keyboard_ControlPlayer.prototype.finish = function() {};

    return Keyboard_ControlPlayer;

  })(EX.I_Tool_Controller);

}).call(this);
