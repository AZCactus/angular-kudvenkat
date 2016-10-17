angular.module('myModel').factory('stringService', function() {
  return {
    toCamelCase : function(input) {
      var output = "";
      if(!!input) {
        output = input.toLowerCase()
                      .replace( /\s+(\S)/g,
                                function(x){
                                    return x.replace(/\s/g, '').toUpperCase()
                                }
                      );
      }

      return output;
    }
  }
});
