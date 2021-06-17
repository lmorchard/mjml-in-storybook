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

## To Do

This currently only works for a live Storybook instance.

A static Storybook build (i.e. with `yarn build-storybook`) produces a build that still expects to query a running MJML service. Need to figure out how to statically capture all those API calls at storybook build time.

Also, I'm just using template literal strings so far rather than EJS. Leaving that as a future exercise.

Oh yeah, and there's some path weirdness since this is create-react-app based and everything useful has to live under `src/` without further monkeypatching that I didn't feel like doing for a proof of concept.