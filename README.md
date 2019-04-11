# URL Shortener
A simple URL shortener.

## Launching:

#### Development Preconditions
- [node](https://nodejs.org/en/download/) installed
- [mongo](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x-tarball/) installed

##### Getting started
- `npm install`
- `npm start`
- `mongod` - run in another console tab
- open [http://localhost:3000](http://localhost:3000) in your browser

## Testing

#### Unit testing

##### Unit tests single run
- `npm run test` - to run all unit tests


## Tech Stak

- javascript
- jest
- node
- express
- mongo


## Approach
The idea was to make a post request to an API end point sending the url inputed by the user. I would store a url model with the original url, the shortened url, the date it was created (in case I want it to expire and open more space for future shortened url's), etc, after verifying if the original url was already shortened (in this case I would send the same shortened url to the user).

Hence, I've created a simple node/express server to make the static files and the REST API available. The API was developed with two end points, one to generate the shortened url and other to redirect the shortened url to the original one.

As the data we need to store is simple and doesn't relate with any other information, I believe we don't need a traditional relational database management system, thats why I choosed MongoDB. Also, Mongo is designed for lightweight exchanges between browser and server, and works really well with Node. Mongoose makes it easier to deal with Models, and made development easier and faster. I know other databases (NoSQL) could work for this scenario, like Cassandra, but I don't have any expertise with it.

About the algoritm to solve the problem of having an unique and short key for each given url, I didn't considered that url might be encoded, which means that in some cases we would have "identical" urls, some would be encoded others not. We would have to develop a mechanism to cover this scenario. Another point, first thing on my mind was using hashes, after some research I found a few pitfalls, such as using MD5 which would generate a big string. I could get the first 6 characters, but then I would end up having possibly duplicated strings. We could develop a Bijection function in order to have a one-to-one correspondence between shortened urls and original urls. I also found a solution using Fisher–Yates shuffle algorithm to increase the number of unique ids that could be generated from a hash. Finally I've found Instagram uses a time based logic to generate unique ids to enable url shares.

I didn't implemented any cache system, but would be good to serve the url's frequently accessed. We could consider Redis or a Has Map. Also, users could create private url's if we implemented authentication.

The conclusion is that I've used a lib called shortid which takes care of the heavy and tricky logics and even considers the cluster scenario for scalability.