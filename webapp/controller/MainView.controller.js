sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Fragment) {
        "use strict";

        return Controller.extend("Zweatherapp.weatherapp.controller.MainView", {
            onInit: function () {
                let weatherData = new JSONModel("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=rain&hourly=rain&daily=apparent_temperature_max&timezone=auto");
                this.getView().setModel(weatherData, "weatherModel");

                const url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=rain&hourly=rain&daily=apparent_temperature_max&timezone=auto";

                /* Test */
                this.test(url);
                /* Test */
            }, 

            // Function to load fragment based on radioBtn selection
            onSelect: function(event){
                let selectedItem = event;
                let selectedItemId = selectedItem.getParameters().id;

                let testId = this.getRadioBtnTemp("temperatureBtn").getId();
                console.log(testId);

                if (selectedItemId == testId) {
                    this.loadFragment({
                        name: "Zweatherapp.weatherapp.view.temperature"
                    }).then(function(myFragment) {
                        /* let tempFragment = this.byId("fragmentTest"); */
                        const tempFragment = this.byId("fragmentTest");
                        tempFragment.removeAllItems(); 
                        tempFragment.addItem(myFragment);
                    }.bind(this));

                    console.log("Test runs well!");
                };
            },

            getRadioBtnTemp: function(id) {
                let temperature = this.getView().byId(id);
                return temperature;
            },

            /* Test */
            test: function(url){
                fetch(url)
                .then((response) => response.json())
                .then(data => {
                    console.log("Api data:")
                    console.log(data);
                })
            },
            /* Test */

        });
    });
