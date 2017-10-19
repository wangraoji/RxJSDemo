import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: 'home',
      loadChildren: './components/homePage/home.module#HomeModule',
    },
    {
      path: 'message',
      loadChildren: './components/messagePage/message.module#MessageModule',
    },
    {
      path: 'page3',
      loadChildren: './components/page3/page3.module#Page3Module',
    },
    {
      path: 'page4',
      loadChildren: './components/page4/page4.module#Page4Module',
    },
  ];
  