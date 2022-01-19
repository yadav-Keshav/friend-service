const userModel = require('../model/user.model');

exports.sendFriendRequest = async (senderId, recieverId) => {
    const data = await userModel.updateOne({ _id: recieverId }, { $push: { recieved_friend_Request: senderId } });
    await userModel.updateOne({ _id: senderId }, { $push: { sent_friend_Request: recieverId } });
    return data;
}

exports.approveFriendRequest = async (senderId, recieverId) => {
    const data = await userModel.updateOne({ _id: senderId }, { $push: { friend: recieverId } });
    await userModel.updateOne({ _id: senderId }, { $pull: { sent_friend_Request: recieverId } });
    await userModel.updateOne({ _id: recieverId }, { $push: { friend: senderId } });
    await userModel.updateOne({ _id: recieverId }, { $pull: { recieved_friend_Request: senderId } });
    return data;
}

exports.rejectFriendRequest = async (senderId, recieverId) => {
    const data = await userModel.updateOne({ _id: senderId }, { $pull: { sent_friend_Request: recieverId } });
    await userModel.updateOne({ _id: recieverId }, { $pull: { recieved_friend_Request: senderId } });
    return data;
}

exports.getSentFriendRequests = async (id) => {
    const {sent_friend_Request}=await userModel.find({ _id: id });
    return sent_friend_Request;
}


exports.getRecievedFriendRequests = async (id) => {
     
    const {recieved_friend_Request}=await userModel.find({ _id: id });
    return recieved_friend_Request;
}

exports.getAllFriends = async (id) => {
    const { friend } = await userModel.find({ _id: id });
    return friend;
}

exports.removeFriend = async (senderId, recieverId) => {
    const data = await userModel.updateOne({ _id: senderId }, { $pull: { friend: recieverId } });
    await userModel.updateOne({ _id: recieverId }, { $pull: { friend: senderId } });
}