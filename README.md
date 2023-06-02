# Souls API

Welcome to the Souls API! This API provides access to a database of items from the Dark Souls game series. You can retrieve information about various in-game items, such as their names, descriptions, availability, and more.

## Documentation

For detailed documentation and usage examples, please refer to the [Souls API Documentation](https://thomas23.stoplight.io/docs/souls-api/sh57nbfqnkt6p-souls-api). It provides comprehensive information on available endpoints, request/response formats, and example usage.

## Getting Started

To get started using the Souls API, follow these steps:

1. Clone the repository to your local machine: `git clone https://github.com/ThomasLincoln/Souls_API.git`
2. Install the necessary dependencies: `npm install`
3. Start the API server in development mode: `npm run dev`
4. The API will be accessible at `http://localhost:3000`.

## Available Endpoints

The following endpoints are available in the API:

- `/items` (GET): Retrieve a list of all items.
- `/items/{id}` (GET): Retrieve information about an item by its ID.
- `/items/{name}` (GET): Retrieve information about an item by its name.
- `/items/{type}` (GET): Retrieve a list of items by their type.

Please note that `{id}`, `{name}`, and `{type}` should be replaced with the corresponding values when making requests to the API.

## Future Tasks:

- [ ] Separate item data into a single JSON file.
- [ ] Add weapons to the API.
- [ ] Add armors to the API.
- [ ] Add bosses to the API.
- [ ] Add enemies to the API.
- [ ] Add NPCs (non-playable characters) to the API.
- [ ] Add rings to the API.


## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to submit a pull request or open an issue in the GitHub repository.
