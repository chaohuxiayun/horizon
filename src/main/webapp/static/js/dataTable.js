var _keywords ;
function InitTable(dataTableId,url,columns) {
    $("#" + dataTableId).DataTable({
        "sScrollX": "100%",   //表格的宽度
        "sScrollXInner": "100%",   //表格的内容宽度
        "bScrollCollapse": true,  //当显示的数据不足以支撑表格的默认的高度时，依然显示纵向的滚动条。(默认是false)
        "searching": false,
        "bLengthChange": true,
        "bFilter": false,
        "bSort": false,
        "bInfo": true,
        "bPaginate":true,
        "iDisplayLength": 10,
        "aLengthMenu": [[15,25,50],["15","25" ,"50"]],
        "PaginationType": "full_numbers",
        "deferRender": true,
        "bJQueryUI": true,
        "aoColumns": columns, //每一列具体显示什么
        "destroy": true,
        "bProcessing": true, // 是否显示取数据时的那个等待提示
        "bServerSide": true,//这个用来指明是通过服务端来取数据
        "sAjaxSource": url,//这个是请求的地址，Rest API or JSP的action
        "fnServerData": retrieveData, // 获取数据的处理函数
        "oLanguage": {
            "sProcessing": "正在加载中......",
            "sLengthMenu": "每页显示 _MENU_ 条记录",
            "sZeroRecords": "对不起，查询不到相关数据！",
            "sEmptyTable": "表中无数据存在！",
            "sInfo": "当前显示 _START_ 到 _END_ 条，共 _TOTAL_ 条记录",
            "sInfoFiltered": "系统中共为 _MAX_ 条记录",
            "sSearch": "搜索:",
            "searchPlaceholder": "关键字搜索",
            "oPaginate": {
                "sFirst": "首页",
                "sPrevious": "上一页",
                "sNext": "下一页",
                "sLast": "末页"
            },
            "oAria": {
                "sSortAscending": ": 以升序排列此列",
                "sSortDescending": ": 以降序排列此列"
            }
        }
    });

}
function retrieveData(postUrl, pageData, fnCallback) {
    var postData = {
        "attrs": pageData,
        "entity": _keywords
    };
    $.ajax({
        contentType: "application/json",
        type: 'POST',
        url: postUrl,//这个就是请求地址对应sAjaxSource
        data: JSON.stringify(postData),//这个是把datatable的一些基本数据传给后台,比如起始位置,每页显示的行数
        dataType: 'json',
        async: false,//是否为异步
        success: function (result) {
            fnCallback(result);//把返回的数据传给这个方法就可以了,datatable会自动绑定数据的
        },
        error: function (data, type, err) {
            console.log(data);
            console.log("dataTable加载失败");
        }
    });
}
function InitNoSelectTable(dataTableId,url,columns) {
    $("#" + dataTableId).DataTable({
        "sScrollX": "100%",   //表格的宽度
        "sScrollXInner": "100%",   //表格的内容宽度
        "bScrollCollapse": true,  //当显示的数据不足以支撑表格的默认的高度时，依然显示纵向的滚动条。(默认是false)
        "searching": false,
        "bLengthChange": false,
        "bFilter": false,
        "bSort": false,
        "bInfo": true,
        "bPaginate":true,
        "iDisplayLength": 10,
        "aLengthMenu": [10,15,20],
        "PaginationType": "full_numbers",
        "deferRender": true,
        "bJQueryUI": true,
        "aoColumns": columns, //每一列具体显示什么
        "destroy": true,
        "bProcessing": true, // 是否显示取数据时的那个等待提示
        "bServerSide": true,//这个用来指明是通过服务端来取数据
        "sAjaxSource": url,//这个是请求的地址，Rest API or JSP的action
        "fnServerData": retrieveData, // 获取数据的处理函数
        "oLanguage": {
            "sProcessing": "正在加载中......",
            "sLengthMenu": "每页显示 _MENU_ 条记录",
            "sZeroRecords": "对不起，查询不到相关数据！",
            "sEmptyTable": "表中无数据存在！",
            "sInfo": "当前显示 _START_ 到 _END_ 条，共 _TOTAL_ 条记录",
            "sInfoFiltered": "系统中共为 _MAX_ 条记录",
            "sSearch": "搜索:",
            "searchPlaceholder": "关键字搜索",
            "oPaginate": {
                "sFirst": "首页",
                "sPrevious": "上一页",
                "sNext": "下一页",
                "sLast": "末页"
            },
            "oAria": {
                "sSortAscending": ": 以升序排列此列",
                "sSortDescending": ": 以降序排列此列"
            }
        }
    });

}

function InitSetPageTable(dataTableId,url,columns,length) {
    $("#" + dataTableId).DataTable({
        "sScrollX": "100%",   //表格的宽度
        "sScrollXInner": "100%",   //表格的内容宽度
        "bScrollCollapse": true,  //当显示的数据不足以支撑表格的默认的高度时，依然显示纵向的滚动条。(默认是false)
        "searching": false,
        "bLengthChange": false,
        "bFilter": false,
        "bSort": false,
        "bInfo": true,
        "bPaginate":true,
        "iDisplayLength": length,
        "aLengthMenu": [10,15,20],
        "PaginationType": "full_numbers",
        "deferRender": true,
        "bJQueryUI": true,
        "aoColumns": columns, //每一列具体显示什么
        "destroy": true,
        "bProcessing": true, // 是否显示取数据时的那个等待提示
        "bServerSide": true,//这个用来指明是通过服务端来取数据
        "sAjaxSource": url,//这个是请求的地址，Rest API or JSP的action
        "fnServerData": retrieveData, // 获取数据的处理函数
        "oLanguage": {
            "sProcessing": "正在加载中......",
            "sLengthMenu": "每页显示 _MENU_ 条记录",
            "sZeroRecords": "对不起，查询不到相关数据！",
            "sEmptyTable": "表中无数据存在！",
            "sInfo": "当前显示 _START_ 到 _END_ 条，共 _TOTAL_ 条记录",
            "sInfoFiltered": "系统中共为 _MAX_ 条记录",
            "sSearch": "搜索:",
            "searchPlaceholder": "关键字搜索",
            "oPaginate": {
                "sFirst": "首页",
                "sPrevious": "上一页",
                "sNext": "下一页",
                "sLast": "末页"
            },
            "oAria": {
                "sSortAscending": ": 以升序排列此列",
                "sSortDescending": ": 以降序排列此列"
            }
        }
    });

}
