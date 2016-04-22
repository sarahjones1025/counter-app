var t;
var outputnumber = 0;
var start       = document.getElementById( "start_button" );
var restart     = document.getElementById( "restart_button" );
var reset       = document.getElementById( "reset_button" );
var inputfield  = document.getElementById( 'input' );
var outputfield = document.getElementById( 'output' );

var highlight1  = document.getElementById( "highlight1");
var highlight2  = document.getElementById( "highlight2");

console.log( highlight1, highlight2 );

function start_counter(){

    outputfield.value = outputnumber;
    outputnumber++;
    
    if( outputnumber <= inputfield.value ){

        t = setTimeout( "start_counter()", 1000 );
    }

    if( outputfield.value === "0" ){
        highlight1.style.display="none";
        highlight2.style.display="none";
    }

    else if ( outputfield.value % 3 === 0 && outputfield.value % 5 === 0 ) {
        highlight1.style.display="block";
        highlight2.style.display="block";
    }    

    else if ( outputfield.value % 3 === 0 ) { 
        highlight1.style.display="block";
        highlight2.style.display="none";
    }

    else if ( outputfield.value % 5 === 0 ) {
        highlight1.style.display="none";
        highlight2.style.display="block";
    }

    else {
        highlight1.style.display="none";
        highlight2.style.display="none";
    }
}


function stop_counter(){
    
    clearTimeout( t );
    outputnumber      = 0;
    outputfield.value = "";
    highlight1.style.display="none";
    highlight2.style.display="none"; 
}

start.addEventListener( "click", function( e ){

    e.preventDefault();
    start_counter();
} );

restart.addEventListener( "click", function( e ){

    e.preventDefault();
    stop_counter();
    start_counter();
} );

reset.addEventListener( "click", function( e ){
    stop_counter();

} );







