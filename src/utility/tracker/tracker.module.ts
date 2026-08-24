import { ModuleWithProviders, NgModule } from '@angular/core';
import { Tracker } from './tracker.service';

@NgModule({
  declarations: [
  ],
  imports: [],
  providers: [
    Tracker
  ]
})

export class TrackerModule {
  static forRoot(): ModuleWithProviders<TrackerModule> {
    return {
      ngModule: TrackerModule,
    };
  }
}
