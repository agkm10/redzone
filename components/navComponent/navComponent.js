angular.module('redzoneApp').component('navComponent', {
      templateUrl: "./components/navComponent/navComponent.html",
      bindings: {
        menuItems: "="
    },
     controller: function(){
       this.hideMobileMenu = function() {
         this.myVar = !this.myVar;
         console.log(this.myVar)
         console.log("clicked")
       }
     },
     controllerAs: '$ctrl'
})
