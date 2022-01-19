const jwt = require('jsonwebtoken');
const { KEY } = require('../config/env');
const { sendFriendRequest, approveFriendRequest, rejectFriendRequest, getRecievedFriendRequests, getSentFriendRequests, getAllFriends, removeFriend } = require('../services/friendService');

exports.isFriend = async (req, res) => {

}



exports.SendFrienRequest = async (req, res) => {
    try {
        const recieverId = req.params.id;
        const senderId = jwt.verify(req.cookies.isLoggedIn, KEY);
        const data = await sendFriendRequest(senderId._id, recieverId);
        if (data) {
            res.send({ sucess: true, message: 'Sucessfully send' });
        }
        else {
            res.send({ sucess: false, message: 'Some error Occured' });
        }
    }
    catch (err) {
        res.send({ sucess: false, message: err.message });
    }
}


exports.ApproveFriendRequest = async (req, res) => {
    const senderId = req.params.id;
    const recieverId = jwt.verify(req.cookies.isLoggedIn, KEY);
    const data = await approveFriendRequest(senderId, recieverId._id);
    if (data) {
        res.send({ sucess: true, message: 'Added to Friend List' });
    }
    else {
        res.send({ sucess: false, message: 'Some error Occured' });
    }
}

exports.RejectFriendRequest = async (req, res) => {
    const senderId = req.params.id;
    const recieverId = jwt.verify(req.cookies.isLoggedIn, KEY);
    const data = await rejectFriendRequest(senderId, recieverId._id);
    if (data) {
        res.send({ sucess: true, message: 'Rejected' });
    }
    else {
        res.send({ sucess: false, message: 'Some error Occured' });
    }
}

exports.GetRecievedFriendRequests = async (req, res) => {
    var id = jwt.verify(req.cookies.isLoggedIn, KEY);
    id = id._id;
    const data = await getRecievedFriendRequests(id);
    if (data) {
        res.send({ sucess: true, data: data });
    }
    else {
        res.send({ sucess: false, message: 'Some error Occured' });
    }
}

exports.GetSentFriendRequest = async (req, res) => {
    var id = jwt.verify(req.cookies.isLoggedIn, KEY);
    id = id._id;
    const data = await getSentFriendRequests(id);
    if (data) {
        res.send({ sucess: true, data: data });
    }
    else {
        res.send({ sucess: false, message: 'Some error Occured' });
    }
}

exports.GetAllFriends = async (req, res) => {
    var id = jwt.verify(req.cookies.isLoggedIn, KEY);
    id = id._id;
    const data = getAllFriends(id);
    if (data) {
        res.send({ sucess: true, data: data });
    }
    else {
        res.send({ sucess: false, message: 'Some error Occured' });
    }
}

exports.RemoveFriend = async (req, res) => {
    const senderId = req.params.id;
    const recieverId = jwt.verify(req.cookies.isLoggedIn, KEY);
    const data = await removeFriend(senderId, recieverId._id);
    if (data) {
        res.send({ sucess: true, message: 'Removed from Friend List' });
    }
    else {
        res.send({ sucess: false, message: 'Some error Occured' });
    }

}