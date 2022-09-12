## How to setup your application

Make sure you follow the steps here :
https://reactnative.dev/docs/environment-setup


## How to build and run the application

## To Run for android 

```javascript

yarn install && yarn androidDebug

```


## To Build for android 

```
yarn install && yarn androidDebug
```


## Backend Configuration

Backend is built using nest js framework , please follow how to get started guide from here

```
https://docs.nestjs.com/first-steps
```

```
https://docs.nestjs.com/first-steps

```

## Please make sure , you have the right database configuration

We are using postgres for the Database , if you want to run it on your local , please follow this guide

```
https://hevodata.com/learn/docker-postgresql/
```

```
Update typeorm.config.ts as per your database credentials
```


```
yarn to install dependancies 

yarn start:dev to run the application on your local

```



## APIs


## Get Dish Code And Message from Como

```



curl --location --request POST 'https://como.gitspark.com/scan/add-scan-data' \
--header 'accept: */*' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name" : "Muneer",
    "code" : 2,
    "deviceId"  : "458484848848"
}'


{
    "code": 2,
    "message": {
        "time": 637985980929276800,
        "message": "I would like to order a Ramen please, thanks, {{Full Name}}",
        "dish": "Ramen",
        "phoneNumber": "+155522"
    },
    "userName": "Muneer",
    "deviceId": "458484848848",
    "id": "2374ab9c-303d-4661-a19a-2800d9b51999"
}



```
## Get Scans By A Name


```

curl --location --request GET 'https://como.gitspark.com/scan/scans/Muneer'

[
    {
        "id": "e7f09502-eb9c-4f95-89a8-bc31fc06d611",
        "code": 1,
        "message": {
            "time": 637986084913880400,
            "message": "I would like to order a Pizza please, thanks, {{Full Name}}",
            "dish": "Pizza",
            "phoneNumber": "+155511"
        },
        "deviceId": null,
        "userName": "Muneer"
    }
]

```


## Get All Scans

```
curl --location --request GET 'https://como.gitspark.com/scan'

[
    {
        "id": "e7f09502-eb9c-4f95-89a8-bc31fc06d611",
        "code": 1,
        "message": {
            "time": 637986084913880400,
            "message": "I would like to order a Pizza please, thanks, {{Full Name}}",
            "dish": "Pizza",
            "phoneNumber": "+155511"
        },
        "deviceId": null,
        "userName": "Muneer"
    }
]
```