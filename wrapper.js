const GitRepoInfo = require('git-repo-info')
const IsGitDirty = require('is-git-dirty');

// lmao

module.exports = function(path = undefined) {
  return {
    ...GitRepoInfo(path),
    dirty: IsGitDirty(path)
  }
}