const configPath = {
  domain: `${window.location.protocol}//${document.location.host}`,
  requestUrl: () => {
    switch (process.env.NODE_ENV) {
      case 'development':
        return `${configPath.domain}/dev/api`
      case 'debug':
        return `${configPath.domain}/debug/api`
      default:
        return `${configPath.domain}/pro/api`
    }
  },
}

export default configPath
