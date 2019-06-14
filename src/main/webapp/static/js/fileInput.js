//初始化文件使用器
//需要在jsp中，
// head 引入
//      <link href="<%=path%>/assets/css/fileinput.css" rel="stylesheet" type="text/css">

//jsp 中 指定位置添加   <input id="importExcelFile" type="file" data-preview-file-type="xlsx">

//在底部script中引入
//     <script src="<%=path%>/assets/js/fileinput.js"></script>
//     <script src="<%=path%>/assets/js/zh.js"></script>
//     <script src="<%=path%>/js/FileInput.js"></script>
var uploadExtraData="";
var MFileInput={
    init:function (fileInputId, uploadUrl,returnFunction) {
        var control = $('#' + fileInputId);
        control.fileinput({
            language: 'zh', //设置语言
            uploadUrl: uploadUrl, //上传的地址 (该方法需返回JSON字符串)
            allowedFileExtensions: ['png','jpg','jpeg','PNG','JPEG','JPG'],//接收的文件后缀
            uploadAsync:true,//是否异步上传
            showPreview:true,
            showUpload: true, //是否显示上传按钮
            showCaption: true,//是否显示标题
            maxFileCount: 1,//最大上传数量
            allowedPreviewTypes: ['png','jpg','jpeg','PNG','JPEG','JPG'],
            dropZoneEnabled: false,
            textEncoding:'UTF-8',
            dropZoneTitleClass:'file-drop-zone-title',
            autoReplace:true,
            browseClass: "btn btn-info" ,//按钮样式
            //previewFileIcon: "<i class='glyphicon glyphicon-king'></i>",
            uploadExtraData: function(previewId, index){
                return uploadExtraData;
            }
        }).on('filebatchselected', function (event, data, id, index) {
            $(this).fileinput("upload");
        }).on("fileuploaded", returnFunction)
    }
};

//设置额外参数
function setUploadExtraData(extraData) {
    this.uploadExtraData=extraData;
}