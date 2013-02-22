define(
    ['dojo/dom','dojo/domReady!'],
    function(dom){
      return {
        change: function(){
          var x = dom.byId('greeting');
          x.innerHTML = 'Hello World';
        }
      };
    });
