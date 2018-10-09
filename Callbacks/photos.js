//Not executable code
//Using code found at: https://callbackhell.com
//Flow : downloadPhoto will be called first (actual downloading done here)
//        -> one complete - if error : Throw error in console log
//                        - All good : Download complete message thrown to User
downloadPhoto('http://coolcats.com/cat.gif',handlePhoto);
handlePhoto = function(err,photo){
    if(err){
        console.log('Download error');
    }else {
        console.log('Download complete',photo);
    }
};