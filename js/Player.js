class Player{
    constructor(){
    }
        getCount(){
            var playerCountRef=database.ref("playerCount")
            playerCountRef.on("value",function(data){
                playerCount=data.val()
            })
        }
        updateCount(count){
            if(playerCount<=4){
            database.ref("/").update({
                playerCount:count
            })
        }
        }
        update(name){
            var playerIndex="player"+playerCount
            if(playerCount<=4){
            database.ref(playerIndex).set({
                name:name
            })
        }
        }
    }
