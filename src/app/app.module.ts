import { MarkdownService } from './markdown.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CovalentTextEditorModule } from '@covalent/text-editor';

import { AppComponent } from './app.component';
import { MarkdownEditorComponent } from './markdown-editor/markdown-editor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MarkdownEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CovalentTextEditorModule
  ],
  providers: [ MarkdownService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
