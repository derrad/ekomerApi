(function () {
    "use strict";
      
    angular.module("ZADRUGA", ["ngResource","ZADRUGA.controllers","ui.router","angular-ladda"])
        .constant("appConfig", {
            PREFIXAPP: 'zad-app.',
            TEST_WORK: false   // ako je true tada se prikazuje i prva strana i ako niste ulogovani
        })
        .config(function ($stateProvider, $urlRouterProvider,$locationProvider,laddaProvider) {
        
            // .state("app.DeliveryNotes", {
            //    url: "/DeliveryNotes",
            //    templateUrl: "app/templates/view-delivery-notes.html",
            //     controller: "DeliveryNotesCtrl",
            //     params: {
            //        magNaziv: null,
            //        magsel: null,
            //        CustomerSelect: null,
            //        CustomerName: null,
            //        ShipToSelect : null,
            //        ShipToName : null
            //    }
            //    })
           
           $stateProvider
            .state("help", {
               url: "/help",
               templateUrl: "app/view/view-help.html",
               controller: "helpCtrl"
           })
            .state("contact", {
              url: "/contact",
              templateUrl: "app/view/view-contact.html",
              controller: "helpCtrl"
          })
          .state("vlasnik", {
              url: "/vlasnik",
              templateUrl: "app/view/opcije/view-vlasnik.html",
              controller: "vlasnikCtrl"
          })
          .state("posao", {
              url: "/posao",
              templateUrl: "app/view/sifarnik/view-posao.html",
              controller: "posaoCtrl"
          })
            .state("/", {
              url: "/",
              templateUrl: "app/view/view-home.html",
              controller: "homeCtrl"
          });
         
            $urlRouterProvider.otherwise("/");

            // $locationProvider.html5Mode({
            //                     enabled: true,
            //                     requireBase: false
            //                     });
            // $locationProvider.hashPrefix('!');
            laddaProvider.setOption({ /* optional */
                style: 'expand-left',
                spinnerSize: 25,
                spinnerColor: '#FF0000'
            });
           
        });



})();