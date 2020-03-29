// @flow

import { info, setFailed } from '@actions/core';
import { context } from '@actions/github';

try {
  // const token = core.getInput('github-token');
  // const client = new github.GitHub(token);
  const payload = context.payload;

  info(payload.title);
} catch (err) {
  setFailed(err.message);
}
