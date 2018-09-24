import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeaturesComponent } from './features/features.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ReviewComponent } from './review/review.component';
import { CommentComponent } from './comment/comment.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailsComponent,
    DashboardComponent,
    FeaturesComponent,
    TestimonialComponent,
    FeedbackComponent,
    ReviewComponent,
    CommentComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
