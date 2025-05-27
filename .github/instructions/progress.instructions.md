---
applyTo: '**'
---

## Newsletter Signup Integration Progress

- [x] Install and confirm `react-hook-form` dependency
- [x] Refactor `newsletter-signup` to use `react-hook-form`
- [x] Integrate MailerLite API for new subscribers
- [x] Add loading, success, and error states to the form
- [x] Update UI for error and loading feedback
- [ ] Review and test integration in production

### Dependencies

- `react-hook-form` (already present)

### Notes

- Uses `process.env.NEXT_PUBLIC_MAILER_LITE_API_KEY` for API authentication
- Submits directly to MailerLite API v2 `/subscribers` endpoint
- Handles and displays API errors to the user
