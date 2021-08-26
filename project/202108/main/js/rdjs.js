var rdCtx = $('#rdCanvas');
var ctx;
var isRedoing = false;
var h = [];
var tool = 1;
var rect, circle,ellipse ,triangle, isDown, origX, origY;
var strokeSize = $('#rd__width').val();
var strokeColor =$('#rdBtnStroke').val();
var fillColor = $('#rdBtnPaint').val();
$(function(){
    rdInit();
})
function changeTool(){
    switch(tool){
        case 0:
           selectMode();
           objectSelectable(true);
        break;
        case 1:
            drawingMode();
            objectSelectable(false);
        break;
        case 2:
            shapeMode();
            objectSelectable(false);
        break;
        case 3:
            shapeMode();
            objectSelectable(false);
        break;
        case 4:
            shapeMode();
            objectSelectable(false);
        break;
        case 5:
            shapeMode();
            objectSelectable(false);
        break;
    }
}
function drawingMode(){
    ctx.isDrawingMode = true;
            ctx.selection= false;
            ctx.freeDrawingBrush.width = strokeSize;
            ctx.freeDrawingBrush.color = strokeColor;
            
}
function selectMode(){
    ctx.isDrawingMode = false;
    ctx.selection= true;
    ctx.off('mouse:down');
    ctx.off('mouse:move');
    ctx.off('mouse:up');
    ctx.forEachObject(function(o){ o.setCoords() })
    ctx.on("selection:updated",function(items){
        if(items.selected.length>1){
            // console.log('multi selected');
        }else{
            // console.log('obj selected');

        }
        for(var i=0;i<items.selected.length;i++){
            // console.log(items.selected[i].fill);
            // console.log(items.selected[i].strokeWidth);
            // console.log(items.selected[i].stroke);
        }
    })
    ctx.on("selection:created",function(items){
        if(items.selected.length>1){
            // console.log('multi selected');
        }else{
            // console.log('obj selected');
        }
        for(var i=0;i<items.selected.length;i++){
            // console.log(items.selected[i].fill);
            // console.log(items.selected[i].strokeWidth);
            // console.log(items.selected[i].stroke);
        }
    })
}

function objectSelectable(val) {
        ctx.forEachObject(function(obj) {
            obj.selectable = val;
        })
        ctx.renderAll();
}

function shapeMode(){
    ctx.isDrawingMode = false;
    ctx.selection= false;
    
    ctx.on('mouse:down', function(o){
        isDown = true;
        var pointer = ctx.getPointer(o.e);
        origX = pointer.x;
        origY = pointer.y;
        if( tool==0){

        }
        else if(tool==1){

        }
        else if(tool==2){
            rect = new fabric.Rect({
                left: origX,
                top: origY,
                width: 0,
                height:0,
                fill: fillColor,
                stroke: strokeColor,
                strokeWidth:strokeSize,
            });
            ctx.add(rect);
        }
        else if(tool==3){

            circle = new fabric.Circle({
                left: origX,
                top: origY,
                originX: 'left',
                originY: 'top',
                radius: pointer.x-origX,
                angle: 0,
                fill: fillColor,
                stroke:strokeColor,
                strokeWidth:strokeSize,
            });
            ctx.add(circle);
        }
        else if(tool==4){
            ellipse = new fabric.Ellipse({
                left: origX,
                top: origY,
                originX: 'left',
                originY: 'top',
                rx: pointer.x-origX,
                ry: pointer.y-origY,
                angle: 0,
                fill: fillColor,
                stroke:strokeColor,
                strokeWidth:strokeSize,
            })
            ctx.add(ellipse);
        }
        else if(tool==5){
            triangle = new fabric.Triangle({ 
                left: origX,
                top: origY,
                width: 0,
                height:0,
                fill: fillColor,
                stroke: strokeColor,
                strokeWidth:strokeSize,
            }); 
            ctx.add(triangle);
        }
    });
    ctx.on('mouse:move', function(o){
        if (!isDown) return;

        var pointer = ctx.getPointer(o.e);
        var radius = Math.max(Math.abs(origY - pointer.y),Math.abs(origX - pointer.x))/2;
    

        if(tool==2){
            rect.set({
                width: Math.abs(origX - pointer.x),
                height: Math.abs(origY - pointer.y)
            })
            if(origX>pointer.x){
                rect.set({originX: 'right' });
            } else {
                rect.set({originX: 'left' });
            }
            if(origY>pointer.y){
                rect.set({originY: 'bottom'  });
            } else {
                rect.set({originY: 'top'  });
            }          
        }else if(tool==3){
            if (radius > circle.strokeWidth) {
                radius -= circle.strokeWidth/2;
            }
            circle.set({ radius: radius});
            if(origX>pointer.x){
                circle.set({originX: 'right' });
            } else {
                circle.set({originX: 'left' });
            }
            if(origY>pointer.y){
                circle.set({originY: 'bottom'  });
            } else {
                circle.set({originY: 'top'  });
            }
                
        }
        else if(tool==4){
            var rx = Math.abs(origX - pointer.x)/2;
            var ry = Math.abs(origY - pointer.y)/2;
            if (rx > ellipse.strokeWidth) {
                rx -= ellipse.strokeWidth/2
            }
            if (ry > ellipse.strokeWidth) {
                ry -= ellipse.strokeWidth/2
            }
            ellipse.set({ rx: rx, ry: ry});
            if(origX>pointer.x){
                ellipse.set({originX: 'right' });
            } else {
                ellipse.set({originX: 'left' });
            }
            if(origY>pointer.y){
                ellipse.set({originY: 'bottom'  });
            } else {
                ellipse.set({originY: 'top'  });
            }

        }
        else if(tool==5){
            triangle.set({
                width: Math.abs(origX - pointer.x),
                height: Math.abs(origY - pointer.y)
            })
            if(origX>pointer.x){
                triangle.set({originX: 'right' });
            } else {
                triangle.set({originX: 'left' });
            }
            if(origY>pointer.y){
                triangle.set({originY: 'bottom'  });
            } else {
                triangle.set({originY: 'top'  });
            }          
        }
        ctx.renderAll();
    });
    ctx.on('mouse:up', function(o){
      isDown = false;
    });
}
function rdInit(){
    ctx = new fabric.Canvas('rdCanvas');

    ctx.setDimensions({width: '100%', height: '100%'}, {cssOnly: true});
    $( "#rd__width" ).selectmenu({
        change: function( event, data ) {
           strokeSize = parseInt(data.item.value,10);
           if(ctx.getActiveObject()){
            if(ctx.getActiveObject()._objects){
                    for(var i =0 ; i < ctx.getActiveObject()._objects.length;i++){
                     ctx.getActiveObject()._objects[i].set({strokeWidth: strokeSize})
                    }
            }
            else{
                ctx.getActiveObject().set({strokeWidth: strokeSize})
            }
            ctx.renderAll(); 
           }else{
            if(ctx.isDrawingMode == true){
                drawingMode();
            }
        }
          }
    });
    
    $( "#rd__shapes" ).selectmenu({
        change: function( event, data ) {
           tool = parseInt(data.item.value, 10);
           changeTool();
          }
    });
    $(".rd__colors").minicolors({
        opacity: true,
        format: 'rgb'
    })
    drawingMode();
    ctx.setOverlayImage('img/logos.png', ctx.renderAll.bind(ctx));

    $('#rdBtnStroke').change(function(){
        strokeColor =$('#rdBtnStroke').val(); 
        if(ctx.getActiveObject()){
            if(ctx.getActiveObject()._objects){
                    for(var i =0 ; i < ctx.getActiveObject()._objects.length;i++){
                     ctx.getActiveObject()._objects[i].set({stroke: strokeColor})
                    }
            }
            else{
                ctx.getActiveObject().set({stroke: strokeColor})
            }
            ctx.renderAll(); 
           }else{
               if(ctx.isDrawingMode == true){
                   drawingMode();
               }
           }
    })

    $('#rdBtnPaint').change(function(){
        fillColor =$('#rdBtnPaint').val(); 
        if(ctx.getActiveObject()){
            if(ctx.getActiveObject()._objects){
                    for(var i =0 ; i < ctx.getActiveObject()._objects.length;i++){
                        if(ctx.getActiveObject()._objects[i].fill !== null){
                            ctx.getActiveObject()._objects[i].set({fill: fillColor})
                        }
                    }
            }
            else{
                if( ctx.getActiveObject().fill !== null){
                ctx.getActiveObject().set({fill: fillColor})}
            }
            ctx.renderAll(); 
           }
    })

    $('#rdBtnUndo').click(function(){
        ctx.undo(function(){
            resetToolStates();
        })
    })

    $('#rdBtnRedo').click(function(){
        ctx.redo(function(){
            resetToolStates();
        })
    })
}
function resetToolStates(){
    console.log(tool);
    changeTool();
}