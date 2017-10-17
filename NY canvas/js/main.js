//(function($) {
    window.onload = function() {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');

        var details   = ['face','body','tail','toys', 'accessories'];
        var headImg   = ["angry-bulldog-face", "angry-dog", "basset-hound-dog-head", "belt-and-buckle", 
                        "border-collie-dog-head", "border-collie-head", "bulldog-head", "chewing-bone-for-dog",
                        "chihua", "doberman-dog-head","face"]
        var bodyImg   = ["chihBody"];
        var tailImg   = ["chihTail"];
        var toysImg   = ["tennis-ball"];
        var accessImg = ["animal-paw-print","bone", "collar", "pile-of-dung", "prize-badge-with-paw-print"];
        
        var activeElements = {
                face        : { elem : "", coord1: 0, coord2 : 0 },
                body        : { elem : "", coord1 : 20, coord2 : 100},
                tail        : { elem : "", coord1 : 60, coord2 : 110},
                toys        : { elem : "", coord1 : 150, coord2 : 150},
                accessories : { elem : "", coord1 : 150, coord2 : 0}
            // "face" : "",
            // "body" : "",           
            // "tail" : "",            
            // "toys" : "",           
            // "accessories" : ""          
        };
    

        // appending images
        function addingImages(partOfDog, images) {
            console.log("render: " + partOfDog);
            for( var j = 0; j < details.length; j++ ) {
                if(details[j] === partOfDog ) {
                    for(var i = 0; i < images.length; i++) {
                        var imageBlock = '<div class="imageBlock"><img src="../images/' + details[j] + '/' + images[i] + '.svg" id="' + images[i] + '" class="part_' + details[j] + '"></div>';
                            $("."+ details[j] +".details").append(imageBlock);
                    }
                }
            }
        }
        

        addingImages("face", headImg);
        addingImages("body", bodyImg);
        addingImages("tail", tailImg);
        addingImages("toys", toysImg);
        addingImages("accessories", accessImg);

        $('.imageBlock').ready(function() {
            renderDogs();
        })
        
        $(".option").on('click', function() {
            
            var currentChildId = $(this).find('div').attr('id');
            
            $(".option").fadeOut(500);
            $(".details").hide();
            $("." + currentChildId + ".details").delay(650).fadeIn(500);
 
        });
        
        
        function drawingCanvas(event,part, coord1, coord2) {
            clear_canvas(coord1, coord2);
            $("." + part +" .imageBlock > img").removeClass('active');
            $(event.target).addClass('active');
            
            console.log(event.target.id);
            
            activeElements[part].elem = $(event.target).attr('id');
            console.log(activeElements);
            fill_canvas(document.getElementById(activeElements[part]), coord1, coord2);
            localStorage.setItem( 'activeElems', JSON.stringify(activeElements) );                
            
            $('.remove').on('click',function() {
                clear_canvas(coord1, coord2);
            });
        }    
        $(".face .imageBlock > img").on('click', function(event) { drawingCanvas(event, "face", 0, 0) } );
        $(".body .imageBlock > img").on('click', function(event) { drawingCanvas(event, "body", 20, 100) } );
        $(".tail .imageBlock > img").on('click', function(event) { drawingCanvas(event, "tail", 60, 110) } );
        $(".toys .imageBlock > img").on('click', function(event) { drawingCanvas(event, "toys", 150, 150) } );
        $(".accessories .imageBlock > img").on('click', function(event) { drawingCanvas(event, "accessories", 150, 0) } );
        
            
            $(".prev").on('click', function() {
            $(".details").fadeOut(300);
            $(".option").delay(500).fadeIn(1000);
            //$(".details div").hide();           
        });

        // canvas
        // var dataURL = canvas.toDataURL('image/jpeg', 1.0);
        // console.log(dataURL);
         
        function fill_canvas(img, x, y) {
            console.log(img);
            ctx.drawImage(img, 0, 0, img.naturalHeight, img.naturalWidth, x, y, 100, 100);               
        }
        function clear_canvas(x, y) {
            ctx.clearRect(x, y, 100, 100);               
        }

        function renderDogs() {

            try {
                var obj = JSON.parse(localStorage.getItem('activeElems'));
                console.log(obj);
                
                for( var key in obj ) {
                    console.log(obj[key]);
                    if(obj[key]) {
                        fill_canvas(document.getElementById(obj[key]), 0, 0); 
                    }
                    
                }
            } catch (err) {
                console.log("Cannot read local storage");
            }   
        }
        
    };
//})(jQuery);
