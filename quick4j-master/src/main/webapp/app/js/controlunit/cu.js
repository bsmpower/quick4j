$(function () {
    function test() {
        $.ajax({
            type:"POST",
            dataType:"html",
            async:false,
            url:"rest/controlunit/test",
            success:function (data) {
                console.log(data);
                $('#listAll').html(data);
            }
        });
    }
});

// $('#btn-dashboard').click(function() {
//     var url = "rest/controlunit/test";
//     $.get(url, function(data) {
//         $('#listAll').html(data);
//     });
// });