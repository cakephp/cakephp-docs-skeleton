/**
* Markdown-it plugin for replacing version placeholders
*
* Replaces |phpversion| and |minphpversion| with static PHP version requirements.
*/

/**
* Create a version replacer plugin
* @param {Object} md - markdown-it instance
* @param {Object} options - plugin options
* @returns {void}
*/
export function versionReplacer(md, _options = {}) {
  // Store original render method
  const originalRender = md.render.bind(md)

  md.render = function(src, env = {}) {
    src = src
      .replace(/\|phpversion\|/g, `**8.4**`)
      .replace(/\|minphpversion\|/g, `*8.1*`)

    return originalRender(src, env)
  }
}

export default versionReplacer
