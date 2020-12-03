import { createRouter, createWebHistory } from "vue-router";
import homeRouter from "./modules/home";
import ycyRouter from "./modules/ycy";
import cyhRouter from "./modules/cyh";

const routes = [
  homeRouter,
  ycyRouter,
  cyhRouter
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
