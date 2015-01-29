jsPlumb.ready(function() {
    var common = {
        connector: ["Straight"],
        anchor: ["Bottom", "Top"],
        endpoint:""
    };

    jsPlumb.connect({
        source:"item_left",
        target:"item_right",
        paintStyle:{ strokeStyle:"#efefef", lineWidth:3 },
        endpointStyle:{ fillStyle:"#efefef", outlineColor:"#efefef" },
        overlays:[ 
            ["Arrow" , { width:12, length:12, location:1 }]
        ]
    }, common);

});


jsPlumb.ready(function() {
    var common_dos = {
        connector: ["Straight"],
        anchor: ["Bottom", "Top"],
        endpoint:""
    };

    jsPlumb.connect({
        source:"item_arriba",
        target:"item_abajo",
        paintStyle:{ strokeStyle:"red", lineWidth:3 },
        endpointStyle:{ fillStyle:"#efefef", outlineColor:"#efefef" },
        overlays:[ 
            ["Arrow" , { width:12, length:12, location:1 }]
        ]
    }, common_dos);

});