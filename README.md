# friend-service
Setup:
$ git clone https://github.com/yadav-Keshav/friend-service.git
$ cd friend-service
$ npm install


Start:

$ npm run dev
# or
$ npm start


Urls:                                                                       Method
http://localhost:4000/friendservice/friend-request/<user_id>                 PUT
http://localhost:4000/friendservice/approve-friend-request/<user_id>         PUT
http://localhost:4000/friendservice/reject-friend-request/<user_id>          PUT
http://localhost:4000/friendservice/get-recieved-friend-requests             GET
http://localhost:4000/friendservice/get-sent-friend-requests                 GET
http://localhost:4000/friendservice/get-all-friends                          GET
http://localhost:4000/friendservice/remove-friend                            PUT
