const homeRouter = {
  path: '/',
  component: () => import('@/views/home/Home'),
  name: 'Home',
  meta: {
    title: 'home'
  }
}

export default homeRouter