import { PluginWithOptions } from 'markdown-it'

const scriptInjector: PluginWithOptions = (md) => {
  const defaultFence = md.renderer.rules.fence!
  // Collect script blocks
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    if (token.info.trim() === 'js' && token.content.includes('// @inject')) {
      if (!env.scriptBlocks) env.scriptBlocks = []
      env.scriptBlocks.push(token.content.trim()) // Send to env.
      return "" // Don't render in place
    }
    return defaultFence(tokens, idx, options, env, self)
  }

  // Wrap final render with script injection
  const originalRender = md.render.bind(md)
  md.render = (src, env = {}) => {
    const rendered = originalRender(src, env)
    if (env.scriptBlocks?.length) {
      const combined = env.scriptBlocks.join('\n\n')
      return `<script setup>\n${combined}\n</script>\n\n${rendered}`
    }
    return rendered
  }
}

export default scriptInjector