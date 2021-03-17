import App from './App.vue'

const appInfo = {
  name: 'Hello world',
  id: 'hello-world',
  icon: 'folder'
}

const routes = [
  {
    path: '',
    name: 'hello',
    components: {
      app: App
    }
  }
]

const navItems = [
  {
    name: 'Hello world',
    iconMaterial: appInfo.icon,
    route: {
      name: 'hello',
      path: `/${appInfo.id}` // Extension ID will be soon added here automatically
    }
  }
]

export default {
  appInfo,
  routes,
  navItems
}