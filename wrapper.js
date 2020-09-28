const GitRepoInfo = require('git-repo-info')
const IsGitDirty = require('is-git-dirty');

// lmao

const wrap = function(path = undefined) {
  return {
    ...GitRepoInfo(path),
    dirty: IsGitDirty(path)
  }
}

module.exports = wrap
module.exports.getShaDirty = function(path = undefined) {
  const {abbreviatedSha, dirty} = wrap(path)
  if (!abbreviatedSha) return null;
  return abbreviatedSha + (dirty ? '-dirty' : '')
}