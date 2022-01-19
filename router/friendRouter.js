const express = require('express');
const { SendFrienRequest, ApproveFriendRequest, RejectFriendRequest, GetRecievedFriendRequests,GetSentFriendRequest, GetAllFriends, RemoveFriend } = require('../controller/friendController');
const isAuthorized = require('../middleware/isAuthorized');

const friendRouter = express.Router();

friendRouter.put("/friend-request/:id", isAuthorized, SendFrienRequest);
friendRouter.put("/approve-friend-request/:id", isAuthorized,ApproveFriendRequest);
friendRouter.put("/reject-friend-request/:id", isAuthorized,RejectFriendRequest);
friendRouter.get("/get-friend-requests", isAuthorized,GetRecievedFriendRequests);
friendRouter.get("/get-sent-friend-requests", isAuthorized,GetSentFriendRequest);
friendRouter.get("/get-all-friends", isAuthorized,GetAllFriends);
friendRouter.put("/remove-friend", isAuthorized,RemoveFriend);

module.exports = friendRouter;