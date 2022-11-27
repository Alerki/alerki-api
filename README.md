# Alerki project

Requirements to run:

- Node.js v16
- Package manager Yarn
- Docker

## Run in development mode

1. At the root of the project run the following:

   ```sh
   yarn install
   ```

2. Run docker:

   ```sh
   yarn start:docker
   ```

3. Go to the [api](./api) directory:

   ```sh
   cd api
   ```

4. Run API in development mode:

   ```sh
   yarn start:dev
   ```

## Run tests for API

1. At the root of the project run the following:

   ```sh
   yarn install
   ```

2. Run docker:

   ```sh
   yarn start:docker
   ```

3. Go to the [api](./api) directory:

   ```sh
   cd api
   ```

4. Run testing for API:

   ```sh
   yarn test:e2e
   ```
