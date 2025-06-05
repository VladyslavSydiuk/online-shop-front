import {Routes} from '@angular/router';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {SearchPageComponent} from "./pages/search-page/search-page.component";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {AuthGuard} from "./core/guard/auth.guard";

export const routes: Routes = [

  {
    path: 'main', component: MainPageComponent,
    canActivateChild: [AuthGuard],
    children:
      [{path: 'search', component: SearchPageComponent},
        {path: '', redirectTo: 'search', pathMatch: 'full'}
      ]
  },
  {path: 'login', component: LoginPageComponent}


];
