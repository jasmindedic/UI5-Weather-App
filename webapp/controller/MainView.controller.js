sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
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
