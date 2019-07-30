import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EntriesRoutingModule } from './entries-routing.module';
import { EntryListComponent } from '../entries/entry-list/entry-list.component';
import { EntryFormComponent } from '../entries/entry-form/entry-form.component';

import { CalendarModule } from 'primeng/calendar';
import { IMaskModule } from 'angular-imask';

@NgModule({
  declarations: [EntryListComponent, EntryFormComponent],
  imports: [
    CalendarModule,
    CommonModule,
    EntriesRoutingModule,
    IMaskModule,
    ReactiveFormsModule
  ]
})
export class EntriesModule { }
