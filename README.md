# Client Onboarding Form (Next.js + React Hook Form + Zod)

A simple, accessible client onboarding form built with Next.js (App Router), React Hook Form, and Zod. The form validates user input, displays inline errors, and submits data to an external API endpoint.

## Features

- **Validation**: All fields validated with Zod, integrated with React Hook Form.
- **UX**: Inline error messages, keyboard accessible, visible focus states, disables submit while submitting, persists values on validation errors.
- **Submission**: POSTs JSON to an external API endpoint (configurable via environment variable).
- **Success/Error Handling**: Shows a summary on success, readable error on failure.
- **Styling**: Uses Tailwind CSS for simple, responsive design.

## Setup

1. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

2. **Configure the API endpoint**:

   Create a `.env.local` file in the project root:

   ```
   NEXT_PUBLIC_ONBOARD_URL=https://example.com/api/onboard
   ```

   Replace the URL with your actual endpoint if needed.

3. **Run the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open the app**:

   Visit [http://localhost:3000](http://localhost:3000) in your browser.

## How Validation Works

- The form uses [React Hook Form](https://react-hook-form.com/) for state management.
- [Zod](https://zod.dev/) defines the schema and validation rules.
- [@hookform/resolvers/zod](https://react-hook-form.com/docs/useform/#resolver) connects Zod to React Hook Form.
- Inline error messages are shown under each field.

## API Submission

- On submit, the form sends a POST request to `NEXT_PUBLIC_ONBOARD_URL` with the validated data as JSON.
- Headers: `Content-Type: application/json`
- Example request body:

  ```json
  {
    "fullName": "Ada Lovelace",
    "email": "ada@example.com",
    "companyName": "Analytical Engines Ltd",
    "services": ["UI/UX", "Web Dev"],
    "budget": 50000,
    "projectStartDate": "2025-09-01",
    "acceptTerms": true
  }
  ```

- On 2xx response, a success message with a summary is shown.
- On error, a readable error message is displayed at the top.

## Accessibility & UX

- All inputs have associated labels.
- Inline error messages for each field.
- Services are rendered as checkboxes (multi-select).
- Date input uses the native date picker.
- Keyboard navigable and visible focus states.

## Assumptions

- The external API endpoint accepts the fields as described above.
- No file uploads are required.
- The form does not redirect on success.

## Bonus

- The code is structured for easy extension (e.g., pre-filling from query params, adding unit tests for the Zod schema).

## File Structure

- `src/components/ClientOnboardingForm.tsx` — The main form component.
- `src/lib/types.ts` — Zod schema and types.
- `src/app/page.tsx` — Page entry point, renders the form.