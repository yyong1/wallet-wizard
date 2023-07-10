var utils = {
    parseJwt: function(token){
        if (token) {
            var base64Url = token.split(".")[1];
            var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
            var jsonPayload = decodeURIComponent(
                atob(base64)
                    .split("")
                    .map(function (c) {
                        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
                    })
                    .join("")
            );
            return JSON.parse(jsonPayload);
        } else {
            return null;
        }
    },
    getCurrentUserId: function(){
        var token = localStorage.getItem("jwt_token");
        console.log("token in log - ", token);
        var user = utils.parseJwt(token);
        console.log(" user - ", user);
        return parseInt(user[0].UserID || user.UserID);
    },
};