// @flow

import core from '@actions/core';
import github from '@actions/github';

try {
  const token = core.getInput('github-token');
  const client = new github.GitHub(token);
  const payload = github.context.payload;

  core.Info(payload.title);

} catch (err) {
  core.setFailed(err.message);
}
