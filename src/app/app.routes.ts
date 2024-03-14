import { Routes } from '@angular/router'
import { LoginComponent } from './routes/login/login.component'
import { HomeComponent } from './routes/home/home.component'
import { SingupComponent } from './routes/singup/singup.component'
import { Page404Component } from './routes/page404/page404.component'
import { DashboardComponent } from './routes/dashboard/dashboard.component'

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'singup', component: SingupComponent },
  { path: 'dashboard', component: DashboardComponent},

  { path: "**", component: Page404Component },
]
