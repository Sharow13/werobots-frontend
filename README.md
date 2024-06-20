# Application Flow

Based on the recommendation:

`Next APP` -> `Next API` -> `Backend` -> `In Memory Database`

## How To Run

1. Checkout this repo and cd into.

2. Install dependencies with:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

---

> Make sure that you have the backend running otherwise the app won't work.
> The backend is available at my [we:robots-backend repo]().

There are timeouts implemented to showcase the pending logic of the `useFormStatus` hook.

The app is available at [http://localhost:3001](http://localhost:3001).

### Possible future improvements

- To prevent checking on strings based on the return message from the API we can introduce objects with custom properties like `isSuccess` and `isError` and other useful fields.
- Using a random salt for hashing the passwords for improved security.
