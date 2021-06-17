# mjml-in-storybook

Probably a bad idea. But, to get started:

```
yarn install
yarn start
```

And hopefully you see a Storybook instance load up at http://localhost:6006

## Interesting bits

- The MJML service lives in `bin/mjml-server.ts`
- Email templates live in `src/email-templates`
- Some interesting components live in `src/lib`

## To Do / Future exercises

* This currently only works for a live Storybook instance running in local dev.

  `yarn build-storybook` produces a static build that still expects to query a running MJML service from the client-side. Need to figure out how to statically capture all those API calls at storybook build time. That, or build the MJML statically.

* The use of Typescript for enforcing correctness of template variables is not well-implemented throughout the stack

* Using template literal strings rather than EJS. Leaving that as a future exercise.

* Some path weirdness since this is create-react-app based and everything useful has to live under `src/` without further monkeypatching that I didn't feel like doing for a proof of concept.
