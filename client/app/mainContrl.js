(function () {
    "use strict";

angular.module("ZADRUGA.controllers", [])
.controller("homeCtrl", ["$scope", "$rootScope", "appConfig",
                     function ($scope, $rootScope, appConfig) {
                   
        $scope.titleHome = "HOME";


}])
.controller("menuCtrl", ["$scope", "$rootScope", "appConfig",
                     function ($scope, $rootScope, appConfig) {
     

 this.index = 0;
    this.eventIndex = 0;

    this.setIndex = function (val) {
        this.index = val;
       // console.log("called")
    }

    this.getIndex = function () {
        return (this.index);
    }

    this.setEventIndex = function (val) {
        this.eventIndex = val;
    }
    this.getEventIndex = function () {
        return (this.eventIndex);
    }

}])
.controller("vlasnikCtrl", ["$scope", "$rootScope","$resource", function ($scope, $rootScope, $resource) {

    var Vlasnik = $resource('/api/vlasnik');
  
    Vlasnik.query(function (results) {
        $scope.vlasnik = results;
      //  debugger;
      //  $scope.Ime = results.Ime;
    }); 
    $scope.vlasnik =[]; 
  
    $scope.createVlasnik = function () {
        var vlasres = new Vlasnik();

        vlasres.Ime = $scope.Ime;
        vlasres.Adresa = $scope.Adresa;
        vlasres.Mesto=$scope.Mesto;
        vlasres.PttReon =$scope.PttReon  ; 
        vlasres.PttPak  =$scope.PttPak ;
        vlasres.Direktor = $scope.Direktor;
        vlasres.KomRukovac =$scope.KomRukovac;
        vlasres.Blagajnik =$scope.Blagajnik;
        vlasres.Pib =$scope.Pib;
        vlasres.MatBroj = $scope.MatBroj;
        vlasres.SifDelat =$scope.SifDelat;
        vlasres.PdvBroj=$scope.PdvBroj;
        vlasres.Sud =$scope.Sud;
        vlasres.UplRacPorJed=$scope.UplRacPorJed;
        vlasres.NazPorJed= $scope.NazPorJed;
       
       
        vlasres.$save(function (result) {
       

        // $scope.meetupName = '';
        // $scope.ptt='';


        });
    } 
    
        $scope.title = "Vlasnik";
       

        $scope.InitApp = function () {



        };


        $scope.InitApp();


}])
.controller("posaoCtrl", ["$scope", "$rootScope","$resource", function ($scope, $rootScope, $resource) {

    var Posao = $resource('/api/posao');
  
    Posao.query(function (results) {
        $scope.posao = results;
      //  debugger;
      //  $scope.Ime = results.Ime;
    }); 
    $scope.posao =[]; 

    $scope.Sprema = ['Nekvalifikovan', 'Polukvalifikovan', 'Kvalifikovan','Srednja Strucna Sprema','VKV','Visa skola','Fakultet','Magistar','Doktor Nauka'];
    $scope.SelectSprema = '';
  
    $scope.createPosao = function () {
        $scope.loginLoading = true;

        var posres = new Posao();

        posres.Naziv = $scope.Naziv;
        posres.StepenSS = $scope.SelectSprema;
        posres.Skola=$scope.Skola;
        posres.Sifra =$scope.Sifra  ; 
        posres.Sifra1  =$scope.Sifra1 ;
        posres.Opis = $scope.Opis;
            
       
        posres.$save(function (result) {

            //debugger;
            if(result.errors){
                //alert("Error Error");
                $scope.ShowError(result.errors);
            }else{
            $scope.posao.push(result); 

            $scope.Naziv='';
            $scope.SelectSprema = ''
            $scope.Skola='';
            $scope.Sifra=''  ; 
            $scope.Sifra1='' ;
            $scope.Opis='';
           
            }
            $scope.loginLoading = false;

        });
    } 
    
    $scope.title = "Poslovi";

    $scope.ShowError = function(terror){
        debugger;
        if(terror){
            if(terror.StepenSS){
                alert("Greska " + terror.StepenSS.message);
            }


        }

    }
       



}])

.controller("helpCtrl", ["$scope", "$rootScope", function ($scope, $rootScope) {

        $scope.titleHelp = "HELP";
        $scope.titleContact = "CONTACT";

        $scope.InitApp = function () {



        };


        $scope.InitApp();


}])
  
})();