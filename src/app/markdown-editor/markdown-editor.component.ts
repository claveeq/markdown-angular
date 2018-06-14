import { Component, OnInit, ViewChild } from '@angular/core';
import { TdTextEditorComponent } from '@covalent/text-editor';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.css']
})
export class MarkdownEditorComponent {
  @ViewChild('textEditor') private _textEditor: TdTextEditorComponent;

  textEditor: TdTextEditorComponent;
  options: any = {
    showIcons: [
              'bold',
              'italic',
              'strikethrough',
              'heading',
              'heading-smaller',
              'heading-bigger',
              'heading-1',
              'heading-2',
              'heading-3',
              'code',
              'quote',
              'unordered-list',
              'ordered-list',
              'clean-block',
              'link',
              'image',
              'table',
              'horizontal-rule',
              'preview',
              'side-by-side',
              'fullscreen',
              'guide'],
  };

  constructor() {

  }

  saveToMd() {

    console.log(this._textEditor.value);
  }
}
