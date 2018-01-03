import {
  OnInit,
  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
declare var tinymce: any;


@Component({
  selector: 'text-editer',
  templateUrl: './editer.component.html',
  styleUrls: ['./editer.component.css']
})
export class EditerComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() elementId: String;
  @Input() ngModelOptions = new EventEmitter<any>();
  @Output() onEditorKeyup = new EventEmitter<any>();

  editor;

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'paste', 'table', 'lists'],
      skin_url: 'assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        });
      },
    });
  }
  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

}
