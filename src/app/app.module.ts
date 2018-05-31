import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { ContactService } from 'services/contacts.service';
import { NewContactComponent } from './new-contact/new-contact.component';
import { NouveauContactComponent } from './nouveau-contact/nouveau-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { FamilleListComponent } from './facturation/familles/famille-list/famille-list.component';
import { ArticleListComponent } from './facturation/articles/article-list/article-list.component';
import { AboutFacturationComponent } from './facturation/about-facturation/about-facturation.component';
import { FacturationService } from 'services/facturation.service';
import { ArticleFormComponent } from './facturation/articles/article-form/article-form.component';
import { UserComponent } from './user/user.component';
import { UserService } from 'services/user.service';
import { FamillesService } from 'services/familles.service';
import { FamilleFormComponent } from './facturation/familles/famille-form/famille-form.component';
import { BlueColorsDirective } from './directive/blue-colors.directive';
import { HighlightDirective } from './directive/highlight.directive';
import { DemoComponent } from './demo/demo.component';
import { SqrtPipe } from './pipe/sqrt.pipe';


const appRoutes:Routes = [
 {path: 'about',component: AboutComponent},
 {path: 'contacts', component: ContactsComponent},
 {path: 'new-contact',component: NewContactComponent},
 {path: 'editContact/:id',component: EditContactComponent},
 {path: 'familles', component:FamilleListComponent},
 {path: 'new-family',component: FamilleFormComponent},
 {path: 'edit-family/:id',component: FamilleFormComponent},
 {path: 'articles', component:ArticleListComponent},
 {path: 'article-new', component:ArticleFormComponent},
 {path: 'users', component:UserComponent},
 {path: 'demo', component:DemoComponent},
 {path: '',  redirectTo:'/about',pathMatch:'full'}
]



@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    NewContactComponent,
    NouveauContactComponent,
    EditContactComponent,
    FamilleListComponent,
    ArticleListComponent,
    AboutFacturationComponent,
    ArticleFormComponent,
    UserComponent,
    FamilleFormComponent,
    BlueColorsDirective,
    HighlightDirective,
    DemoComponent,
    SqrtPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,RouterModule.forRoot(appRoutes),
  
  ],
  providers: [ContactService,FacturationService,FamillesService,UserService],
  bootstrap: [AppComponent]

})
export class AppModule { }
