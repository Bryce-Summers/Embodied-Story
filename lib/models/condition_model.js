// Generated by CoffeeScript 1.11.1

/*
    Written by Bryce Summers on Mar.29.2018

    Conditional models allow either accept or reject a given object model depending
    this conditional model's prediated test configuration.
 */

(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BSS.Condition_Model = (function(superClass) {
    extend(Condition_Model, superClass);


    /*
    @EQ = "="
    @LE = "<="
    @GE = ">="
    @LT = "<"
    @GT = ">"
    @NE = "!="
    
    @VAR = 0 # Key is a name of variable to be looked up in the object.
    @CONSTANT = 1 # key is a constant used for being compared to.
     */

    function Condition_Model() {
      this._conditions = [];
      this._paths = [];
    }

    Condition_Model.prototype.associateCondition = function(key, val, path_element) {
      this._conditions.push(key);
      return this._paths.push(val);
    };

    Condition_Model.prototype.getDestination = function(agent) {
      var i, j, key, ref;
      for (i = j = 0, ref = this._conditions.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        key = this._conditions[i];
        if (key(agent)) {
          return this._paths[i];
        }
      }
      throw new Error("No valid conditional path found.");
      return null;
    };


    /*
    buildModel: () ->
    
    evaluateObject: (obj) ->
    
        if @type1 == BSS.Condition_Model.VAR
            val1 = obj.lookup(@key1)
        else # Constant.
            val1 = @key1
    
        if @type2 == BSS.Condition_Model.VAR
            val2 = obj.lookupKey(@key2)
        else # Constant.
            val2 = @key2
    
        switch @operator
            when BSS.Condition_Model.EQ then return val1 == val2
            when BSS.Condition_Model.LE then return val1 <= val2
            when BSS.Condition_Model.GE then return val1 >= val2
            when BSS.Condition_Model.LT then return val1 <  val2
            when BSS.Condition_Model.GT then return val1 >  val2
            when BSS.Condition_Model.NE then return val1 != val2
            else console.log("Conditional: " + @operator + " is not defined.")
     */

    return Condition_Model;

  })(BSS.Model);

}).call(this);
