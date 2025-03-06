import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FactsComponent } from '../../../app/profile/facts/facts.component';
import { FaqComponent } from '../../../app/home/faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from '../../../app/not-found/not-found.component';

import { BlogService } from './blog.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HeroComponent } from '../../../app/hero/hero.component';
import { BoxesTrainingComponent } from '../../../app/trainings/boxes-training/boxes-training.component';
import { TestimonialComponent } from '../../../app/testimonial/testimonial.component';
import { SingleTrainingComponent } from '../../../app/trainings/single-training/single-training.component';
import { SpacerComponent } from './spacer/spacer.component';
import { WeWorkComponent } from '../../../app/trainings/we-work/we-work.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    BoxesTrainingComponent,
    TestimonialComponent,
    SingleTrainingComponent,
    SpacerComponent,
    WeWorkComponent,
    NewsletterComponent,
    FactsComponent,
    FaqComponent,
    NotFoundComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    NgxSpinnerModule,
  ],
  providers: [
    BlogService,
    TranslateService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
