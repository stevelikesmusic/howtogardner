---
applyTo: '**'
---

## Newsletter Signup Integration Progress

- [x] Install and confirm `react-hook-form` dependency
- [x] Refactor `newsletter-signup` to use `react-hook-form`
- [x] Integrate MailerLite API for new subscribers
- [x] Add loading, success, and error states to the form
- [x] Update UI for error and loading feedback
- [x] Migrate to custom API route using MailerLite SDK
- [ ] Review and test integration in production

### Dependencies

- `react-hook-form` (already present)
- `@mailerlite/mailerlite-nodejs` (for server-side MailerLite integration)

### Notes

- Uses `process.env.MAILER_LITE_API_KEY` for API authentication (server-side only)
- Submits to `/api/newsletter-signup` API route, which uses the MailerLite SDK
- Handles and displays API errors to the user
