$(function(){

    chrome.storage.sync.get(['total'],function(budget){
        $('#total').text(budget.total);
    });

    $('#spendAmount').click(function(){
        chrome.storage.sync.get(['total'],function(budget){
            var amount = $('#amount').val();
                newTotal = amount;
            $("ol").append(`<li>${newTotal}</li>`);
            $('#amount').val('');

        });
    });
});
