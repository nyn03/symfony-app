**Api for server listing**
----
* **URL**

  https://servers-list-demo.herokuapp.com/api?location=1&hdd=2&ram=2,4,8,12&storage=250,500&page=1

* **Method:**
  
    `GET`
 
*  **URL Params**

   **Optional:**
   <_All parameters are alphanumeric_>
   `location=1`
   `hdd=2`
   `ram=2,4,8,12`
   `storage=250,500`

* **Success Response:**
  
    **Code:** `200` 
    **Content:** 
    ```
    {
       "status":200,
       "data":[
          {
             "id":155,
             "server_name":"Dell R210-IIIntel G530",
             "ram_name":"4GBDDR3",
             "hdd_name":"2x500GBSATA2",
             "location_name":"AmsterdamAMS-01",
             "price":"€35.99"
          },
          {
             "id":525,
             "server_name":"Dell R210-IIIntel G530",
             "ram_name":"4GBDDR3",
             "hdd_name":"2x500GBSATA2",
             "location_name":"AmsterdamAMS-01",
             "price":"€60.99"
          }
       ]
    }
    ```
 
* **Error Response:**
   **Code:** `400` BAD REQUEST 
    **Content:** `{ message : "Invalid parameters" }`

* ### Thanks.
