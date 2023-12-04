import { createRouter, createWebHistory } from 'vue-router';
import PostsPage from '@/Pages/Posts';
import UserPage from '@/Pages/User';
import PhotosPage from '@/Pages/Photos';
import UserSPage from '@/Pages/Users';

const routes = [
  {
    path: '/',
    component: PostsPage,
  },
  {
    path: '/user/:userId',
    name: 'user',
    component: UserPage
  },
  {
    path: '/photos/:albumId',
    name: 'photos',
    component: PhotosPage
  },
  {
    path: '/Users',
    component: UserSPage,
  },
  
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
