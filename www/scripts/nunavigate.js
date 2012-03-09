/* List Editing Function */
function editList(btn, id){
    var aBtn = $("#"+btn);
    var aBtnTxt  = $('.ui-btn-text', aBtn);
    if(aBtnTxt.html() == 'Edit'){
        var li = $("#"+id).find('li');
        li.removeClass('list-item-deleting');
        li.addClass('list-item-editing');
        aBtnTxt.html('Done');
        li.each(function() {
            var item = $(this);
            
            //console.log($(this).attr('class'));
            if($(this).attr('class').indexOf('list-recent-starred') >= 0){
                item.find('.lst-icon-recent').one('click',function(){unStarItem(item);});
            }
            else {
                item.find('.lst-icon-recent').one('click',function(){starItem(item);})  ;  
            }
            
        });
    }
    else {
        doneEditingList(btn, id);
    }
    return false;
}

function starItem(item) {
    item.addClass('list-recent-starred');
    item.find('.lst-icon-recent').one('click',function(){unStarItem(item);});
    return false;
}

function unStarItem(item) {
    item.removeClass('list-recent-starred');
    item.find('.lst-icon-recent').one('click',function(){starItem(item);});
}

function doneEditingList(btn, id){
    var aBtn = $("#"+btn);
    var aBtnTxt  = $('.ui-btn-text', aBtn);
    aBtnTxt.html('Edit');
    $("#"+id).find('li').removeClass('list-item-deleting');
    $("#"+id).find('li').removeClass('list-item-editing');
    return false;
}

function toggleDeleteBtn(item){
    if($(item).css('background-image').indexOf('minus_v.png') >= 0){
        var aBtn = $(item).parents('.ui-page').find('.ui-btn-right')    
        var aBtnTxt  = $('.ui-btn-text', aBtn);
        //console.log(aBtnTxt);
        if(aBtnTxt.html() != 'Done'){
            $(item).parents('li').removeClass('list-item-editing');    
        }
        else {
            $(item).parents('li').addClass('list-item-editing');
        }
        $(item).parents('li').removeClass('list-item-deleting');
          
    }
    else {
        $(item).parents('li').addClass('list-item-deleting');
        $(item).parents('li').removeClass('list-item-editing');    
    }
    return false;
}

function toggleDeleteBtnSwipe(item) {
    
    if($(item).find('.lst-item-deleting-btn').css('background-image').indexOf('minus_v.png') >= 0){
        var aBtn = $(item).parents('.ui-page').find('.ui-btn-right')    
        var aBtnTxt  = $('.ui-btn-text', aBtn);
        if(aBtnTxt.html() != 'Done'){
            $(item).removeClass('list-item-editing');
        }
        else {
            $(item).addClass('list-item-editing');
        }
        $(item).removeClass('list-item-deleting');
    }
    else {
        $(item).addClass('list-item-deleting');
        $(item).removeClass('list-item-editing');    
    }
    return false;
}

function deleteItem(item){
    $(item).parents('li').remove();
}

function bindItemDeletingHandler() {
    $('.list li').on('swipe', function () {toggleDeleteBtnSwipe(this)});
    $('.lst-item-deleting-btn').on('click',function () {toggleDeleteBtn(this)});
    $('.lst-item-delete-btn').on('click',function () {deleteItem(this)});
    return false;
}
/* end list editing functions */