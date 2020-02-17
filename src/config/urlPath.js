const urlPath = {
  domain: `${window.location.protocol}//${document.location.host}`,
}

switch (process.env.NODE_ENV) {
  case 'development':
    urlPath.req = 'http://www.xxx.com/dev/api'
    break
  case 'debug':
    urlPath.req = 'http://www.xxx.com/debug/api'
    break
  default:
    urlPath.req = 'http://www.xxx.com/pro/api'
    break
}

export default urlPath
