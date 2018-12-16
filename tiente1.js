function doitien(){

    var amount = document.getElementById('amount').value;
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;

    if (from == 'VND' && to=='USD') {
        var area = amount / 23000;
        alert ("Số tiền quy đổi là: " + area);
    }
    else {
        if (from =='USD' && to =='VND') {
            var area = amount * 23000;
            alert ("Số tiền quy đổi là: " + area);
        }
        else {
            if (from == 'VND' && to == 'VND') {
                var area = amount;
                alert (area);
            }
            else {
                    var area = amount;
                    alert (area);
            }

        }
    }
}