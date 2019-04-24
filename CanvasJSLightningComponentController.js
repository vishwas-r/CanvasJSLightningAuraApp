({
    renderChart : function(component, event, helper) {        
        new CanvasJS.Chart(component.find("chartContainer").getElement(), {
            title: {
                text: "CanvasJS Chart - Salesforce Lightning App"
            },
            data: [{
                type: "column",
                dataPoints: [
                    { label: "apple",  y: 10  },
                    { label: "orange", y: 15  },
                    { label: "banana", y: 25  },
                    { label: "mango",  y: 30  },
                    { label: "grape",  y: 28  }
                ]
            }]
        }).render();
    }
})
