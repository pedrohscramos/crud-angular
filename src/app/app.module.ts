import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaCreateComponent } from './components/pessoa-create/pessoa-create.component';
import { PessoaDetailsComponent } from './components/pessoa-details/pessoa-details.component';
import { PessoaListComponent } from './components/pessoa-list/pessoa-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoaCreateComponent,
    PessoaDetailsComponent,
    PessoaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
