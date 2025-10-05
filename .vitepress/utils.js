import { existsSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

// Deep merge function to handle nested objects
export function deepMerge(target, source) {
  const output = { ...target }

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          output[key] = source[key]
        } else {
          output[key] = deepMerge(target[key], source[key])
        }
      } else {
        output[key] = source[key]
      }
    })
  }

  return output
}

export function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item)
}

/**
 * Load configuration overrides from config.js if it exists
 * @param {string} importMetaUrl - import.meta.url from the calling module
 * @returns {Promise<object>} The configuration overrides or an empty object
 */
export async function loadConfigOverrides(importMetaUrl) {
  const __dirname = dirname(fileURLToPath(importMetaUrl))
  const configPath = join(__dirname, '../config.js')

  if (existsSync(configPath)) {
    return (await import(configPath)).default
  }

  return {}
}
