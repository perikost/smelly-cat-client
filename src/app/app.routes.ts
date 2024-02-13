import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AdoptComponent } from './adopt/adopt.component';
import { StoriesComponent } from './stories/stories.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
    { 
        path: '',
        component: ContactComponent
    },
    {
        path: 'adopt',
        component: AdoptComponent
    },
    {
        path: 'stories',
        component: StoriesComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    }
];
