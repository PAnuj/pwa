# pwa

## A sample pwa application with gcm notification enabled using firebase as hosting service.  


## Curl for the gcm notification. It takes two parameter server-key and device-token.

curl -X POST -H "Authorization: key=AAAApr1z5ZM:APA91bFI20mCWQEo9KqJQI-MG4lYxKZK6OXFx6Nkl71YOsEk5q6wg3iGFwdLtgj14zylSnbHLy4-kczpyfaElY2JCOYxI0OzJNTzrD4rQfpUYEQHMDXe_LFriwAsHb-rltUPhlDm9ZGq" -H "Content-Type: application/json" -d '{
  "notification": {
    "title": "Hello World PWA",
    "body": "Hi",
  },
  "to": "eitEAE0ACsw:APA91bHvD6MvpT0Qtb0cG-hYPhBFXTkZkw1JuRk03_Afgh_08lztuSor15lTBt6lLOFi2IdHLU3iqhTLbFxRaJDi8KQlDPKmZgRFW1a7QZxAZu02JkwsEFLbFTj32pTsosXv_U2NSRXH"
}' "https://fcm.googleapis.com/fcm/send"