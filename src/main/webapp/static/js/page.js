/**
 * 跳转到某一页
 */
function pageTo(index) {
    if ($("#currentPage").val() != index) {
        $("#currentPage").val(index);
        $("#page-form").submit();
    }
}

/**
 * 上一页
 */
function previousPage() {
    var currentPage = $("#currentPage").val();
    if (currentPage > 1) {
        $("#currentPage").val(--currentPage);
        $("#page-form").submit();
    }

}

/**
 * 下一页
 */
function nextPage() {
    var currentPage = $("#currentPage").val();
    if (currentPage < $("#totalPage").val()) {
        $("#currentPage").val(++currentPage);
        $("#page-form").submit();
    }
}

/**
 * 设置每页显示条数,设置完成后需要将当前页设置成第一页
 */
function setPageSize(size) {

    var pageSize = $("#pageSize").val();
    if (pageSize != size) {
        $("#pageSize").val(size);
        $("#currentPage").val(1);
        $("#page-form").submit();
    }
}


/**
 * 全选，或者全不选
 */
function allCheck(obj) {
    $('[name=selectList]:checkbox').prop('checked', obj.checked);
}


//扩展Date的format方法
Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
};

/**
 *转换日期对象为日期字符串
 * @param date 日期对象
 * @param isFull 是否为完整的日期数据,
 *               为true时, 格式如"2000-03-05 01:05:04"
 *               为false时, 格式如 "2000-03-05"
 * @return 符合要求的日期字符串
 */
function getSmpFormatDate(date, isFull) {
    var pattern = "";
    if (isFull == true || isFull == undefined) {
        pattern = "yyyy-MM-dd hh:mm:ss";
    } else {
        pattern = "yyyy-MM-dd";
    }
    return getFormatDate(date, pattern);
}

/**
 *转换当前日期对象为日期字符串
 * @param date 日期对象
 * @param isFull 是否为完整的日期数据,
 *               为true时, 格式如"2000-03-05 01:05:04"
 *               为false时, 格式如 "2000-03-05"
 * @return 符合要求的日期字符串
 */

function getSmpFormatNowDate(isFull) {
    return getSmpFormatDate(new Date(), isFull);
}

/**
 *转换long值为日期字符串
 * @param l long值
 * @param isFull 是否为完整的日期数据,
 *               为true时, 格式如"2000-03-05 01:05:04"
 *               为false时, 格式如 "2000-03-05"
 * @return 符合要求的日期字符串
 */

function getSmpFormatDateByLong(l, isFull) {
    return getSmpFormatDate(new Date(l), isFull);
}

/**
 *转换long值为日期字符串
 * @param l long值
 * @param pattern 格式字符串,例如：yyyy-MM-dd hh:mm:ss
 * @return 符合要求的日期字符串
 */

function getFormatDateByLong(l, pattern) {
    return getFormatDate(new Date(l), pattern);
}

/**
 *转换日期对象为日期字符串
 * @param l long值
 * @param pattern 格式字符串,例如：yyyy-MM-dd hh:mm:ss
 * @return 符合要求的日期字符串
 */
function getFormatDate(date, pattern) {
    if (date == undefined) {
        date = new Date();
    }
    if (pattern == undefined) {
        pattern = "yyyy-MM-dd hh:mm:ss";
    }
    return date.format(pattern);
}

/**
 * 表单验证
 * @formId : 需要验证表单的id
 */
function verificationForm(formId) {
    var inputs = $("#" + formId + " .isEmpty");
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        var value = input.value;
        if (value == null || value == '') {
            try {
                var tagName = input.attributes['tag-name'].nodeValue;
                alert("请填写" + tagName);
                input.focus();
                return false;
            } catch (e) {
                alert("请填写完整！");
                return false;
            }
        }
    }
    return true;
}

/**
 * 正整数
 */
function judgePlusInteger(formId) {
    var inputs = $("#" + formId + " .isPlusInteger");
    var r = /^\+?[1-9][0-9]*$/;
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        var value = input.value;
        if (!r.test(value)) {
            try {
                var tagName = input.attributes['tag-name'].nodeValue;
                alert(tagName + "必须是正整数！");
                input.focus();
                return false;
            } catch (e) {
                alert("请注意，某些值只能填写正整数！");
                return false;
            }
        }
    }
    return true;
}

function judgePlusDouble(formId) {
    var inputs = $("#" + formId + " .isPlusDouble");
    var r = /^\d+(\.\d+)?$/;
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        var value = input.value;
        if (!r.test(value)) {
            try {
                var tagName = input.attributes['tag-name'].nodeValue;
                alert(tagName + "请填写规范！");
                input.focus();
                return false;
            } catch (e) {
                alert("请注意，某些值只能填写正整数！");
                return false;
            }
        }
    }
    return true;
}

/**
 * 下拉框的加载
 * @param selectId : 下拉框的id
 * @param url : 访问的url
 * @param postData : 数据
 * @param valueName : value对应的字段
 * @param textName : text对应的字段
 * @param selectedId : 需要选中的id
 * @param firstOption : 第一个option要显示的内容
 */
function selectLoad(selectId, url, postData, valueName, textName,selectedId,firstOption) {

    var optionShow = '';
    if(!isEmpty(firstOption)) {
        optionShow = firstOption;
    }
    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        url: url,
        dataType: 'json',
        data: postData,
        success: function (data) {
            $("#" + selectId).empty();
            $("#" + selectId).append("<option value=''>"+optionShow+"</option>");
            for (var i = 0; i < data.length; i++) {
                var obj = data[i];
                var str = "<option value='" + obj[valueName] + "'>" + obj[textName] + "</option>";
                $("#" + selectId).append(str);
            }
            if(selectedId != 0){
                $("#" + selectId).val(selectedId);
            }
        },
        error: function (e) {
            console.log(e);
            console.log("获取下拉框数据失败！");
        }
    });
}

/**
 * 初始化时间选择器
 * @param id
 * @param format
 */
function timePicker(id, format) {
    $("#" + id).jeDate({
        format: format,
        isTime: true,
        minDate: new Date()
    });
}


function isEmpty(obj){
    if(obj == null || typeof(obj) == 'undefined' || obj == ''){
        return true;
    }
    return false;
}

// 去除bootstrap -dataTable中的警告信息,,该文件理论上必须在dataTable之后引用
try{
    $.fn.dataTable.ext.errMode = 'none';
}catch (e) {
    console.log(e);
}

function delObject(confirmFunction,title){
    var t = "是否确定删除？";
    if(!isEmpty(title)) {
        t = title;
    }
    jeBox.alert(t, {
        icon: 4,
        closeBtn: false,
        maskClose: false,
        button: [
            {
                name: '确定',
                callback: function (index) {
                    jeBox.close(index);
                    confirmFunction();
                }
            },{
                name:"取消",
                callback: function (index) {
                    jeBox.close(index);
                }
            }
        ]

    });
}

function alertMessage(data,loading){
        var icon = 2;
        if(data.code != '1'){
            icon = 6;
        }
        jeBox.alert(data.message, {
            icon: icon,
            closeBtn: false,
            maskClose: false,
            button: [
                {
                    name: '确定',
                    callback: function (index) {
                        jeBox.close(index);
                        if(typeof (loading) == 'function') {
                            loading();
                        }
                    }
                }
            ]

        });
}
function alertSimple(message,i){
    var icon = 1;
    if(!isEmpty(i)){
        icon = i;
    }
    jeBox.alert(message, {
        icon: icon,
        closeBtn: false,
        maskClose: false,
        offset: ["300px", "auto"],  // 坐标轴,坐标写死，避免页面过长时，提示框在当前页面之外
        button: [
            {
                name: '确定',
                callback: function (index) {
                    jeBox.close(index);
                }
            }
        ]

    });
}


function alertSimple_swal(message){
    swal({
            title: message,
            showCancelButton: false,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: '确定！',
            closeOnConfirm: true,
            closeOnCancel: true
        }
    );
}

function alertMessage_swal(message,loading,showCancelButton){
    swal({
        title: message,
        showCancelButton: showCancelButton,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: '确定！',
        cancelButtonText: '取消！',
        closeOnConfirm: false,
        closeOnCancel: true
    }, function (isConfirm) {
        if(isConfirm && typeof (loading) == 'function') {
            loading();
            swal.close();
        }
    });
}

function delObject_swal(confirmFunction, title) {
    var t = "是否确定删除？";
    if (!isEmpty(title)) {
        t = title;
    }
    swal({
            title: t,
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: '确定！',
            cancelButtonText: '取消！',
            closeOnConfirm: false,
            closeOnCancel: true
        },function (isConfirm) {
            if (isConfirm) {
                if (typeof (confirmFunction) == 'function') {
                    confirmFunction();
                }
            }
        }
    )
}

