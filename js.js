/*
* @Author: yaoyulong
* @Date:   2016-07-28 09:18:50
* @Last Modified by:   yaoyulong
* @Last Modified time: 2016-07-28 09:35:24
*/

function tab(){
    
}


$('.input').length > 0 || (function(){
    $('.input').each(function(){
        var place = $(this).attr('place');
        $(this).val(place);
        $(this).bind('focus' , function(){
            if ($(this).val() == place) {
                $(this).val('').css({ color: '#333' });
            }
        }).bind('blur', function() {
            if ($(this).val() == place || $(this).val('')) {
                $(this).val(place).css({ color: '#ccc' });
            }
        });
    })
})();

define(['jquery'], function ($) {
    var TxtInput = {
        IsBlank : function(attr,color1,color2){
            $.each($("input[type='text']"), function(index, val) {
                var txtAttr = $(this).attr(attr);
                if($(this).val() == '' || $(this).val() == txtAttr){
                    $(this).val(txtAttr).css('color',color1);
                }else{
                    $(this).css('color',color2);
                }
                $(this).on('blur',function(){
                    $(this).val()=='' || $(this).val()==txtAttr ? $(this).val(txtAttr).css('color',color1) : $(this).css('color',color2);
                }).on('focus',function(){
                    $(this).val()=='' || $(this).val()==txtAttr ? $(this).val('').css('color',color2) : $(this).css('color',color2);
                });
            });
            $.each($('textarea'), function(index, val) {
                var txtAttr = $(this).attr(attr);
                if($(this).val() == '' || $(this).val() == txtAttr){
                    $(this).val(txtAttr).css('color',color1);
                }else{
                    $(this).css('color',color2);
                }
                $(this).on('blur',function(){
                    $(this).val()=='' || $(this).val()==txtAttr ? $(this).val(txtAttr).css('color',color1) : $(this).css('color',color2);
                }).on('focus',function(){
                    $(this).val()=='' || $(this).val()==txtAttr ? $(this).val('').css('color',color2) : $(this).css('color',color2);
                });
            });
        },
        /**
         * 纯数字验证
         * @param  {[type]} inputObj [description]
         * @return {[type]}          [description]
         */
        numberValidate : function(inputObj){
            inputObj.on('keyup', function(event) {
                var c=$(this), reg = /[^\d]/g;
                if(/[^\d]/.test(c.val())){//替换非数字字符
                    var temp_amount=c.val().replace(reg,'');
                    $(this).val(temp_amount);
                }
            });
        },
        /**
         * 纯手机号验证
         * @param  {[type]} inputObj [description]
         * @return {[type]}          [description]
         */
        mobileValidate : function(inputObj){
            inputObj.on('keyup', function(event) {
                var c=$(this), reg = /\D|^0/g;
                if(/\D|^0/.test(c.val())){//替换非数字字符
                    var temp_amount=c.val().replace(reg,'');
                    $(this).val(temp_amount);
                }
            });
        },
        /**
         * 数字+字母验证
         * @param  {[type]} numObj [description]
         * @return {[type]}          [description]
         */
        numberOrLetterValidate : function(numObj){
            numObj.on('keyup', function(event) {
                var c=$(this), reg = /[^A-Za-z0-9]/g;
                if(/[^A-Za-z0-9]/.test(c.val())){//替换非数字字符
                    var temp_amount=c.val().replace(reg,'');
                    $(this).val(temp_amount);
                }
            });
        },
        /**
         * 非汉字验证
         * @param  {[type]} inputObj [description]
         * @return {[type]}          [description]
         */
        notCheneseValidate : function(inputObj){
            inputObj.on('keyup', function(event) {
                var c=$(this), reg = /[\u4E00-\u9FA5]/g;
                if(/[\u4e00-\u9fa5]/.test(c.val())){
                    var temp_amount=c.val().replace(reg,'');
                    $(this).val(temp_amount);
                }
            });
        }
    };
        
    return TxtInput;
});
