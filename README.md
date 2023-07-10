# IMAGE-PROCESS

The project is used to resize and send image to client, the resized image will be stored at assets/thumb

## Installation

To install the project, run the following command: 
``
   npm install
``

## Format

To run prettier:
``
    npm run prettier
``

To run eslint:
``
    npm run lint
``

## Usage

To start the server in development:
``
    npm run start
``

To start the server in production:

``
    node dist/index.js
``    

The server will be running on `http://localhost:3000`.

## API Documentation

The following API endpoints are available:

- `http://localhost:3000/api/image-processing/resize?filename=encenadaport&width=300&height=160` - get resized image (must have filename, width and height as the query params)

## Testing

To run the tests, run the following command:
``
    npm run test
``
