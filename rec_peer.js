$(document).ready(function() {

    var APIKEY = "e16bc721-d566-47ea-9de8-4a92bc8248c6";
    var peer_id = 'teacher';
    var peer = new Peer(peer_id, {key: APIKEY});
    
    peer.on('open', function(id) {
        console.log(id);
    });
    
    peer.on('error', function(err) {
        console.log(err);
    });
    
    peer.on('connection', function(conn) {
        console.log('connection ok');
        conn.on('open', function() {
            console.log('data connection ok');
        });
            // メッセージを受信
        conn.on('data', function(data) {
            console.log('Received', data);
            
        });
    });
    
    peer.on('close', function() {
    });
    
    $('#button').click(function(){
        console.log($('#button').val());
    });
});