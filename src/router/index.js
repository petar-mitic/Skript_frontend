import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Car from '../views/Car.vue'
import CarReservation from "@/views/CarReservation";
import Motor from '../views/Motor.vue'
import MotorReservation from "@/views/MotorReservation";
import Truck from '../views/Truck.vue'
import TruckReservation from "@/views/TruckReservation";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/car',
    name: 'Car',
    component: Car
  },
  {
    path: '/carReservation',
    name: 'CarReservation',
    component: CarReservation,
    props: true
  },
  {
    path: '/motor',
    name: 'Motor',
    component: Motor
  },
  {
    path: '/motorReservation',
    name: 'MotorReservation',
    component: MotorReservation,
    props: true
  },
  {
    path: '/truck',
    name: 'Truck',
    component: Truck
  },
  {
    path: '/truckReservation',
    name: 'TruckReservation',
    component: TruckReservation,
    props: true
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
