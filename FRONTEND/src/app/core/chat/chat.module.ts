import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';//
import { StreamChatModule, StreamAutocompleteTextareaModule } from 'stream-chat-angular';//



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forRoot(),//
    StreamAutocompleteTextareaModule, //
    StreamChatModule//
  ]
})
export class ChatModule { }
