import { FirebaseModule } from './core/modules/shared/firebase.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environment/environment';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadImageComponent } from './features/modules/shared/upload-image/upload-image.component';
import { FormsModule } from '@angular/forms';
import { ViewImageComponent } from './features/modules/shared/view-image/view-image.component';

@NgModule({
  declarations: [AppComponent, UploadImageComponent, ViewImageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirebaseModule,
    MatDialogModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000',
    }),
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
