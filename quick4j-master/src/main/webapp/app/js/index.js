$(function() {
    App.init();

    var Index = (function() {
        var me = {};

        // 处理一级菜单点击
        me.handleMenuClick = function() {
            $('#page-sidebar-menu > li').click(function(e) {
                var menu = $('#page-sidebar-menu');
                var li = menu.find('li.active').removeClass('active');

                // 添加选中 打开的样式
                // $(this).addClass('active');
            });
        };

        // 处理子菜单点击
        me.handleSubMenuClick = function() {
            $('#page-sidebar-menu li a').click(function(e) {
                e.preventDefault();
                var url = this.href;
                if (url != null && url != 'javascript:;') {
                    $.get(url, function(data) {
                        $('#main-content').html(data);
                    });
                }
            });
        };

        me.init = function() {
            me.handleMenuClick();
            me.handleSubMenuClick();
        };

        return me;
    })();

    Index.init();

    $('#btn-dashboard').trigger("click");

    createTransto();
    function createTransto() {
        $('#conutrylevel').click(function (e) {
            var pagetitle = $('#docparent').text();
            var subpagetitle = $('#conutrylevel').text();

            $('#first').text(pagetitle);
            $('#second').text(subpagetitle);

            $.ajax({
                type:"POST",
                dataType:"html",
                async:false,
                url:"rest/controlunit/test",
                success:function (data) {
                    console.log(data);
                    $('#showList').html(data);
                }
            });
        })
        $('#provincelevel').click(function(e){
            var pagetitle = $('#docparent').text();
            var subpagetitle = $('#provincelevel').text();

            $('#first').text(pagetitle);
            $('#second').text(subpagetitle);
        })
        $('#citylevel').click(function (e) {
            var pagetitle = $('#docparent').text();
            var subpagetitle = $('#pcitylevel').text();

            $('#first').text(pagetitle);
            $('#second').text(subpagetitle);
        })
        $('#pwkdr').click(function(e){
            var pagetitle = $('#pwkparent').text();
            var subpagetitle = $('#pwkdr').text();

            $('#first').text(pagetitle);
            $('#second').text(subpagetitle);
        })
        $('#pwklr').click(function(e){
            var pagetitle = $('#pwkparent').text();
            var subpagetitle = $('#pwklr').text();

            $('#first').text(pagetitle);
            $('#second').text(subpagetitle);
        })
        $('#pwkwh').click(function(e){
            var pagetitle = $('#pwkparent').text();
            var subpagetitle = $('#pwkwh').text();

            $('#first').text(pagetitle);
            $('#second').text(subpagetitle);
        })
        $('#companydr').click(function(e){
            var pagetitle = $('#companyparent').text();
            var subpagetitle = $('#companydr').text();

            $('#first').text(pagetitle);
            $('#second').text(subpagetitle);
        })
        $('#companylr').click(function(e){
            var pagetitle = $('#companyparent').text();
            var subpagetitle = $('#companylr').text();

            $('#first').text(pagetitle);
            $('#second').text(subpagetitle);
        })
        $('#companywh').click(function (e) {
            var pagetitle = $('#companyparent').text();
            var subpagetitle = $('#companywh').text();

            $('#first').text(pagetitle);
            $('#second').text(subpagetitle);
        })
        $('#pfkdr').click(function (e) {
            var pagetitle = $('#pfkparent').text();
            var subpagetitle = $('#pfkdr').text();

            $('#first').text(pagetitle);
            $('#second').text(subpagetitle);
        })
        $('#pfklr').click(function (e) {
            var pagetitle = $('#pfkparent').text();
            var subpagetitle = $('#pfklr').text();

            $('#first').text(pagetitle);
            $('#second').text(subpagetitle);
        })
        $('#pfkxhk').click(function(e){
            var pagetitle = $('#pfkparent').text();
            var subpagetitle = $('#pfkxhk').text();

            $('#first').text(pagetitle);
            $('#second').text(subpagetitle);
        })
        $('#pfkwh').click(function (e) {
            var pagetitle = $('#pfkparent').text();
            var subpagetitle = $('#pfkwh').text();

            $('#first').text(pagetitle);
            $('#second').text(subpagetitle);
        })
        $('#pfkyt').click(function (e) {
            var pagetitle = $('#pfkparent').text();
            var subpagetitle = $('#pfkyt').text();

            $('#first').text(pagetitle);
            $('#second').text(subpagetitle);
        })
        $('#pfkgkmt').click(function (e) {
            var pagetitle = $('#pfkparent').text();
            var subpagetitle = $('#pfkgkmt').text();

            $('#first').text(pagetitle);
            $('#second').text(subpagetitle);
        })
        $('#pfkhdml').click(function (e) {
            var pagetitle = $('#pfkparent').text();
            var subpagetitle = $('#pfkhdml').text();

            $('#first').text(pagetitle);
            $('#second').text(subpagetitle);
        })
    }
});