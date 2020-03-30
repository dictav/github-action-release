// @flow

import { info, setFailed } from '@actions/core';
import { context } from '@actions/github';

try {
  // const token = core.getInput('github-token');
  // const client = new github.GitHub(token);

  for (const key in context) {
    const val = context[key];
    info(`${key}: ${JSON.stringify(val)}`);
  }

  const payload = context.payload;

  info(payload.title);
} catch (err) {
  setFailed(err.message);
}
