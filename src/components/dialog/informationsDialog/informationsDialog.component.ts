/*
COMMENTED OUT: This entire component's functionality has been merged into PoliciesComponent.
 The email form, consent handling, and submission logic are now part of the unified
 Welcome/Policies dialog (policiesDialog).

 Keeping this file for reference purposes.
 */

/* import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
 import { UntypedFormBuilder, UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
 import { HttpClient, HttpErrorResponse } from '@angular/common/http';
 import { environment } from 'environments/environment';
 import { DialogData } from '../baseDialogService.abstract';
 import { MAT_DIALOG_DATA } from '@angular/material/dialog';
 import { ConfirmationDataIn } from '../confirmationDialog/confirmationDialog.component';
 import { InformationsService } from 'services/informationsService.service';
 import { BehaviorSubject } from 'rxjs';
 import { TourService } from 'services/tour.service';

 @Component({
   selector: 'app-informations-dialog',
   templateUrl: './informationsDialog.component.html',
   styleUrls: ['./informationsDialog.component.scss']
 })
 export class InformationsDialogComponent implements OnInit, OnDestroy {
   public readonly defaultAlert = 'This field is required';

   public show: 'loader' | 'form' | 'error' = 'loader';

   public noShowAgain = false;
   public formGroup: UntypedFormGroup;
   public feedback: null | Record<string, unknown> = null;
   public errors: Array<string> = [];
   public tourActive = new BehaviorSubject<string>('');

   // Setting this to true will overide environment url and token
   private readonly LOCAL_TESTING = false;

   private readonly SUBMIT_FORM_ID = 'data_portal_informations';

   // Live credentials obtained during build
   private readonly EPOS_SITE_API_URL = (this.LOCAL_TESTING)
     ? 'https://some-web-form/submit'
     : environment.eposSiteApiRestUrl;

   private readonly EPOS_SITE_API_REST_KEY = (this.LOCAL_TESTING)
     ? 'some-api-key'
     : environment.eposSiteApiRestKey;

   constructor(
     @Inject(MAT_DIALOG_DATA) public data: DialogData<ConfirmationDataIn, boolean>,
     private readonly formBuilder: UntypedFormBuilder,
     private readonly http: HttpClient,
     private readonly informationsService: InformationsService,
     private readonly tourService: TourService,
   ) { }

   get firstName(): UntypedFormControl {
     return this.formGroup.get('firstName') as UntypedFormControl;
   }

   get email(): UntypedFormControl {
     return this.formGroup.get('email') as UntypedFormControl;
   }
   get consent(): UntypedFormControl {
     return this.formGroup.get('consent') as UntypedFormControl;
   }

   public ngOnInit(): void {
     this.createForm();
     this.show = 'form';
     this.checkIfTourEnabled();
   }

   public ngOnDestroy(): void {
     if (this.noShowAgain) {
       this.informationsService.setInfoCheck(true);
     }
   }

   public getErrorEmail(): string {
     return this.email.hasError('required') ? this.defaultAlert :
       (this.email.hasError('email') ? 'Not a valid e-mail address' : '');
   }

   public onSubmit(post: Record<string, string>): Promise<void> {
     this.errors = [];

     return this.http.post(this.EPOS_SITE_API_URL,
       {
         webform_id: this.SUBMIT_FORM_ID,
         first_name: `${post.firstName}` === 'null' ? null : `${post.firstName}`,
         email: `${post.email}`,
         consent: `${post.consent}` === 'true' ? 1 : null,
       }, {
       headers: {
         'api-key': this.EPOS_SITE_API_REST_KEY
       }
     }).toPromise()
       .catch((err: HttpErrorResponse) => {
         if (err.status === 400) {
           if (err.error !== null) {
             if (err.error.error.first_name !== undefined) {
               this.errors.push(`${err.error.error.first_name}`);
             }
             if (err.error.error.email !== undefined) {
               this.errors.push(`${err.error.error.email}`);
             }
             if (err.error.error.consent !== undefined) {
               this.errors.push(`${err.error.error.consent}`);
             }
           }
         }
       })
       .then((res: Record<string, unknown>) => {
         this.feedback = res !== undefined ? res : null;
         if (this.feedback) {
           setTimeout(() => {
             this.confirm();
           }, 3000);
         }
       });
   }

   public confirm(): void {
     this.data.dataOut = true;
     if (this.noShowAgain) {
       this.informationsService.setInfoCheck(true);
     }
     this.data.close();
   }

   public handleTourStart(event: Event): void {
     this.tourService.startEposFiltersTour(event);
   }

   private createForm() {
     this.formGroup = this.formBuilder.group({
       firstName: [null, Validators.required],
       email: [null, [Validators.required, Validators.email]],
       consent: [false, Validators.required]
     });
   }

   private checkIfTourEnabled(): void {
     if (this.informationsService.tourIsActive === 'true') {
       this.tourActive.next('true');
     } else if (this.informationsService.tourIsActive === 'false') {
       this.tourActive.next('false');
     }
   }
 }*/
