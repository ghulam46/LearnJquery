// memastikan file sudah di load dengan sempurna
$(document).ready(function() {
    // =======SELECTION=======
    // $('h1').css('color', 'red');
    // $('#box1').css('color', 'blue');
    // $('.boxes').css('color', 'blue');
             
    // $('.boxes:first').css('color', 'red');
    // $('.boxes:last').css('color', 'green');

    // // :eq(2) adalah pseudo-selektor yang memilih elemen di indeks ke-2 dalam kumpulan elemen yang dipilih
    // $('.boxes:eq(2)').css('color', 'red');


    // =======EVENT=======
    $('h1').click(function(){
        // $('h1').css({
        //     'color': 'blue',
        //     'fontSize' : '30px',
        //     'backgroundColor' : 'grey',
        //     'width' : '200px'
        // });

        // addClass() untuk menambahkan class di tag html dari script css
        // $('h1').addClass('change');  

        // removeClass() untuk menghapus class di tag html
        // $('h1').removeClass('change');  

        // toggleClass() gabungan dari menambahkan dan menghapus class di tag html
        $('h1').toggleClass('change');  
    });

    $('h1').mouseenter(function(){
        $('h1').css('color', 'yellow');
    });

    $('h1').mouseleave(function(){
        $('h1').css('color', 'green');
    });

    $('.boxes').mouseenter(function(){
        // fungsi this sebagai merujuk kepada element yg di pilih(mouseenter)
        $(this).css('color', 'yellow');
    });


    // =======GET & SET NILAI=======
    $('form').submit(function() {
        let tulisan = $('#inputText').val();
        $('h1').text(tulisan);

        // handle sifat
        event.preventDefault();
    });


    // =======MENAMBAH & MENGHAPUS=======
    // APPEND PREPEND | AFTER BEFORE

    // append() untuk menambahkan element di dalam element boxes-wrap pada baris akhir
    $('#boxes-wrap').append('<div>ini append</div>');
    // prepend() untuk menambahkan element di dalam element boxes-wrap pada baris awal
    $('#boxes-wrap').prepend('<div>ini prepend</div>');

    // after() untuk menambahkan element di luar element boxes-wrap pada baris akhir 
    $('#boxes-wrap').after('<div>ini after</div>');
    // before() untuk menambahkan element di luar element boxes-wrap pada baris awal 
    $('#boxes-wrap').before('<div>ini before</div>');

    // REMOVE & EMPTY
    // remove() untuk menghapus semua isi element beserta tag htmlnya
    // $('#boxes-wrap').remove();
    // empty() untuk menghapus isi element saja
    // $('#boxes-wrap').empty();


    // =======DIMENSI=======
    // width() & height untuk mendapatkan nilai lebar&tinggi dari suatu element
    // let boxValue = $('#boxes-wrap').height();

    // innerWidth() & innerHeight() untuk mendapatkan lebar/tinggi bagian dalam (nilai width/height + padding)
    // let boxValue = $('#boxes-wrap').innerHeight();

    // outerWidth() & outerHeight() untuk mendapatkan lebar/tinggi bagian luar (nilai width/height + padding + border)
    // (true) -> + nilai margin 
    // let boxValue = $('#boxes-wrap').outerHeight(true);
    let boxValue = $('#boxes-wrap').height(140).width(120).outerHeight(true);
    $('#box-wrap-value').text(boxValue);


    // animasi.html js
    // hide - show - toggle
    // $('#btn1').click(function() {
    //     $('#box1').show();
    // });
    
    // $('#btn2').click(function() {
    //     $('#box1').hide();
    // });

    // $('#btn3').click(function() {
    //     $('#box1').toggle();
    // });

    // fadeIn - fadeOut - fadeTo(time, opacity), fadeToggle
    // $('#btn1').click(function() {
    //     $('#box1').fadeIn(1000);
    // });
    
    // $('#btn2').click(function() {
    //     $('#box1').fadeOut(1000);
    // });

    // $('#btn3').click(function() {
    //     $('#box1').fadeToggle();
    // });

    // $('#btn3').click(function() {
    //     $('#box1').fadeTo(1000, 0.5);
    // });

    // slideUp - slideDown - slideToggle
    // stop, callback, chaining
    $('#btn1').click(function() {
        $('#box1').slideDown(1000, munculAlert); // callback function
    });

    function munculAlert() {
        alert('selesai');
    }
    
    $('#btn2').click(function() {
        $('#box1').slideUp(1000).fadeIn(2000).fadeTo(2000, 0.5);
    });

    $('#btn3').click(function() {
        $('#box1').slideToggle();
    });

    $('#btn4').click(function() {
        $('#box1').stop();
    });

});