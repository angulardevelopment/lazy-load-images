import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideComponent } from './slide/slide.component';
import { LibComponent } from './lib/lib.component';
import { DeferLoadModule } from '@trademe/ng-defer-load';
import { ClickdropComponent } from './clickdrop/clickdrop.component';
import { PanelComponent } from './panel/panel.component';
import { ScopesComponent } from './scopes/scopes.component';
import { CarouselComponent } from './basic/basic.component';
import { CloudinaryComponent } from './cloudinary/cloudinary.component';
import { FileUploadModule } from 'ng2-file-upload';
import { HttpClientModule } from '@angular/common/http';
import { Cloudinary } from 'cloudinary-core';
import {  CloudinaryModule } from '@cloudinary/angular-5.x';

const cloudConfig = {
  cloud_name: 'sdcssd', upload_preset: 'fsfasd'
};

const cloudinaryLib = {
  Cloudinary: Cloudinary
};
@NgModule({
  declarations: [
    AppComponent,
    SlideComponent,
    LibComponent,
    ClickdropComponent,
    PanelComponent,
    ScopesComponent,
    CarouselComponent,
    CloudinaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeferLoadModule,

    FileUploadModule,
    HttpClientModule,
    CloudinaryModule.forRoot(cloudinaryLib, cloudConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
